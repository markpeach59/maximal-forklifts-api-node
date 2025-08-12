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
  return `${Number(percentage).toFixed(2)}%`;
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
    const updates = [];

    for (const quote of quotesToUpdate) {
      // Only process quotes that have offerprice (indicating a discount was applied)
      // Handle both regular numbers and Int32 values from MongoDB
      if (quote.offerprice == null || quote.offerprice === undefined) {
        colorLog('yellow', `Skipping quote ${quote._id} - no valid offerprice found`);
        continue;
      }

      const basePriceWithMarkup = (quote.baseprice || 0) + (quote.markup || 0);
      const discountPercentage = basePriceWithMarkup > 0 ? (quote.saving / basePriceWithMarkup) * 100 : 0;

      const updateData = {
        hasDiscount: true,
        discountedPrice: parseInt(quote.offerprice), // Ensure Int32 type
        discountAmount: parseInt(quote.saving || 0), // Ensure Int32 type
        discountPercentage: parseFloat(discountPercentage.toFixed(2)) // Ensure Double type
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
      console.log(`    Markup: ${formatCurrency(quote.markup || 0)}`);
      console.log(`    Price (base + markup): ${formatCurrency(basePriceWithMarkup)}`);
      console.log(`    Offer Price: ${formatCurrency(quote.offerprice)}`);
      console.log(`    Saving: ${formatCurrency(quote.saving)}`);
      
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

      // Perform the actual updates
      colorLog('green', '\n🚀 Starting database updates...');
      let updatedCount = 0;

      for (const update of updates) {
        try {
          await Quote.findByIdAndUpdate(update.quoteId, update.updateData);
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
