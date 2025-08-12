const mongoose = require("mongoose");
const config = require("config");
const readline = require("readline");

const { Quote } = require("./models/quote");

// Parse command line arguments
const args = process.argv.slice(2);
const isLiveMode = args.includes('--live');
const isTestMode = !isLiveMode; // Default to test mode for safety

// Console colors for better visibility
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function colorLog(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function formatCurrency(amount) {
  return `£${Number(amount).toFixed(2)}`;
}

function formatPercentage(percentage) {
  return `${parseFloat(Number(percentage).toFixed(2))}%`;
}

async function confirmAction(message) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(`${message} (y/N): `, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes');
    });
  });
}

async function migrateQuoteDiscounts() {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.get("db"));
    colorLog('green', `✓ Connected to MongoDB: ${config.get("db")}`);

    // Display mode
    if (isTestMode) {
      colorLog('yellow', '\n🔍 RUNNING IN TEST MODE - No changes will be made to the database');
    } else {
      colorLog('red', '\n⚠️  RUNNING IN LIVE MODE - Database will be modified!');
    }

    // Define the cutoff date (August 11th, 2025)
    const cutoffDate = new Date('2025-08-11T00:00:00.000Z');
    colorLog('blue', `\nLooking for quotes created before: ${cutoffDate.toISOString()}`);

    // Find quotes that meet our criteria - Int32 is stored as "int" type in MongoDB
    const query = {
      createdAt: { $lt: cutoffDate },
      offerprice: { $exists: true, $ne: null },
      saving: { $exists: true, $ne: null }
    };

    const quotesToUpdate = await Quote.find(query);
    
    colorLog('cyan', `\nFound ${quotesToUpdate.length} quotes that need discount migration`);

    if (quotesToUpdate.length === 0) {
      colorLog('green', 'No quotes found that need migration. Exiting.');
      mongoose.disconnect();
      return;
    }

    // Process each quote
    let processedCount = 0;
    let quotesWithMarkup = 0;
    const updates = [];

    for (const quote of quotesToUpdate) {
      // Get the raw object to access fields not in the schema
      const quoteObj = quote.toObject ? quote.toObject() : quote;
      
      // Access offerprice and saving from the raw object
      const offerPrice = quoteObj.offerprice;
      const savingAmount = quoteObj.saving;
      
      console.log(`\nProcessing Quote ${quote._id}:`);
      console.log(`  offerprice: ${offerPrice} (type: ${typeof offerPrice})`);
      console.log(`  saving: ${savingAmount} (type: ${typeof savingAmount})`);
      
      // Only process quotes that have offerprice (indicating a discount was applied)
      if (offerPrice == null || offerPrice === undefined) {
        colorLog('yellow', `Skipping quote ${quote._id} - no valid offerprice found (value: ${offerPrice})`);
        continue;
      }

      // Markup might not be present, and when it is, it's Int32
      const markup = quote.markup || 0;
      if (markup > 0) {
        quotesWithMarkup++;
        colorLog('cyan', `  *** Quote has markup: ${formatCurrency(markup)} ***`);
      }
      
      const totalPrice = quote.price || 0;
      const priceWithoutMarkup = totalPrice - markup; // Remove markup from price for percentage calculation
      const discountPercentage = priceWithoutMarkup > 0 ? (savingAmount / priceWithoutMarkup) : 0; // Store as decimal (0.15 not 15)

      const updateData = {
        hasDiscount: true,
        discountedPrice: parseInt(offerPrice), // Ensure Int32 type
        discountAmount: parseInt(savingAmount || 0), // Ensure Int32 type
        discountPercentage: parseFloat(discountPercentage.toFixed(4)) // Store as decimal, ensure Double type
      };

      updates.push({
        quoteId: quote._id,
        updateData: updateData
      });

      // Log the details
      console.log(`\n${colors.bright}Quote ID: ${quote._id}${colors.reset}`);
      console.log(`  Created: ${quote.createdAt}`);
      console.log(`  Model: ${quote.model || 'N/A'}`);
      console.log(`  Current values:`);
      console.log(`    Base Price: ${formatCurrency(quote.baseprice || 0)}`);
      console.log(`    Price (base + options): ${formatCurrency(quote.price || 0)}`);
      console.log(`    Markup: ${markup > 0 ? formatCurrency(markup) : 'None'}`);
      console.log(`    Total Price (stored price): ${formatCurrency(totalPrice)}`);
      if (markup > 0) {
        console.log(`    Price without markup: ${formatCurrency(priceWithoutMarkup)}`);
        console.log(`    (Discount % calculated against price without markup)`);
      }
      console.log(`    Offer Price: ${formatCurrency(offerPrice)}`);
      console.log(`    Saving: ${formatCurrency(savingAmount)}`);
      
      if (isTestMode) {
        colorLog('yellow', '  Would set:');
      } else {
        colorLog('green', '  Will set:');
      }
      console.log(`    hasDiscount: ${updateData.hasDiscount}`);
      console.log(`    discountedPrice: ${formatCurrency(updateData.discountedPrice)}`);
      console.log(`    discountAmount: ${formatCurrency(updateData.discountAmount)}`);
      console.log(`    discountPercentage: ${formatPercentage(updateData.discountPercentage)}`);

      processedCount++;
    }

    // Summary
    console.log(`\n${colors.bright}=== SUMMARY ===${colors.reset}`);
    colorLog('cyan', `Total quotes processed: ${processedCount}`);
    colorLog('magenta', `Quotes with markup: ${quotesWithMarkup}`);

    if (isTestMode) {
      colorLog('yellow', '\n🔍 TEST MODE COMPLETE - No changes were made to the database');
      colorLog('blue', 'To actually perform the migration, run: node migrateQuoteDiscounts.js --live');
    } else {
      // Confirm before making changes
      const confirmed = await confirmAction(`\n⚠️  Are you sure you want to update ${processedCount} quotes?`);
      
      if (!confirmed) {
        colorLog('yellow', 'Migration cancelled by user.');
        mongoose.disconnect();
        return;
      }

      // Perform the actual updates using direct MongoDB operations to preserve updatedAt timestamps
      colorLog('green', '\n🚀 Starting database updates...');
      let updatedCount = 0;

      for (const update of updates) {
        try {
          // Use direct MongoDB update to avoid changing updatedAt timestamp
          await Quote.collection.updateOne(
            { _id: update.quoteId },
            { $set: update.updateData }
          );
          updatedCount++;
          process.stdout.write(`\rUpdated: ${updatedCount}/${processedCount} quotes`);
        } catch (error) {
          colorLog('red', `\nError updating quote ${update.quoteId}: ${error.message}`);
        }
      }

      console.log(''); // New line after progress indicator
      colorLog('green', `\n✅ MIGRATION COMPLETE - Successfully updated ${updatedCount} quotes`);
    }

  } catch (error) {
    colorLog('red', `❌ Error during migration: ${error.message}`);
    console.error(error);
  } finally {
    mongoose.disconnect();
    colorLog('blue', '\n🔌 Disconnected from MongoDB');
  }
}

// Display usage information
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
${colors.bright}Quote Discount Migration Script${colors.reset}

This script migrates old quotes (before Aug 11, 2025) to use the new discount structure.

${colors.bright}Usage:${colors.reset}
  node migrateQuoteDiscounts.js           # Test mode (default, safe)
  node migrateQuoteDiscounts.js --test    # Test mode (preview only)
  node migrateQuoteDiscounts.js --live    # Live mode (actual updates)
  node migrateQuoteDiscounts.js --help    # Show this help

${colors.bright}What it does:${colors.reset}
- Finds quotes created before August 11, 2025 with 'offerprice' and 'saving' fields
- Sets hasDiscount: true
- Sets discountedPrice to the offerprice value
- Sets discountAmount to the saving value  
- Calculates discountPercentage based on (saving / (baseprice + markup)) * 100
- Leaves original offerprice and saving fields intact

${colors.yellow}Always run in test mode first to preview changes!${colors.reset}
`);
  process.exit(0);
}

// Run the migration
colorLog('bright', '🔄 Starting Quote Discount Migration...');
migrateQuoteDiscounts();
