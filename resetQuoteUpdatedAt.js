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

function formatDate(date) {
  return new Date(date).toISOString();
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

async function resetQuoteUpdatedAt() {
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

    // Find all quotes
    colorLog('blue', '\nLooking for all quotes in the database...');
    const allQuotes = await Quote.find({});
    
    colorLog('cyan', `\nFound ${allQuotes.length} quotes to process`);

    if (allQuotes.length === 0) {
      colorLog('green', 'No quotes found in the database. Exiting.');
      mongoose.disconnect();
      return;
    }

    // Process each quote
    let processedCount = 0;
    let quotesNeedingUpdate = 0;
    const updates = [];

    for (const quote of allQuotes) {
      const createdAt = quote.createdAt;
      const updatedAt = quote.updatedAt;
      
      // Check if updatedAt is different from createdAt
      const needsUpdate = !updatedAt || updatedAt.getTime() !== createdAt.getTime();
      
      if (needsUpdate) {
        quotesNeedingUpdate++;
        
        const updateData = {
          updatedAt: createdAt
        };

        updates.push({
          quoteId: quote._id,
          updateData: updateData
        });

        // Log the details for first 10 quotes, then summarize
        if (quotesNeedingUpdate <= 10) {
          console.log(`\n${colors.bright}Quote ID: ${quote._id}${colors.reset}`);
          console.log(`  Model: ${quote.model || 'N/A'}`);
          console.log(`  Current createdAt: ${formatDate(createdAt)}`);
          console.log(`  Current updatedAt: ${updatedAt ? formatDate(updatedAt) : 'null'}`);
          
          if (isTestMode) {
            colorLog('yellow', '  Would set:');
          } else {
            colorLog('green', '  Will set:');
          }
          console.log(`    updatedAt: ${formatDate(createdAt)} (same as createdAt)`);
        } else if (quotesNeedingUpdate === 11) {
          colorLog('cyan', '\n... (showing first 10 quotes, continuing to process remaining quotes)');
        }
      }

      processedCount++;
      
      // Show progress for large datasets
      if (processedCount % 100 === 0) {
        process.stdout.write(`\rProcessed: ${processedCount}/${allQuotes.length} quotes`);
      }
    }

    if (processedCount >= 100) {
      console.log(''); // New line after progress indicator
    }

    // Summary
    console.log(`\n${colors.bright}=== SUMMARY ===${colors.reset}`);
    colorLog('cyan', `Total quotes examined: ${processedCount}`);
    colorLog('magenta', `Quotes needing updatedAt reset: ${quotesNeedingUpdate}`);
    colorLog('green', `Quotes already correct: ${processedCount - quotesNeedingUpdate}`);

    if (quotesNeedingUpdate === 0) {
      colorLog('green', '\n✅ All quotes already have updatedAt matching createdAt. No changes needed.');
      mongoose.disconnect();
      return;
    }

    if (isTestMode) {
      colorLog('yellow', '\n🔍 TEST MODE COMPLETE - No changes were made to the database');
      colorLog('blue', 'To actually perform the updates, run: node resetQuoteUpdatedAt.js --live');
    } else {
      // Confirm before making changes
      const confirmed = await confirmAction(`\n⚠️  Are you sure you want to update ${quotesNeedingUpdate} quotes?`);
      
      if (!confirmed) {
        colorLog('yellow', 'Update cancelled by user.');
        mongoose.disconnect();
        return;
      }

      // Perform the actual updates using direct MongoDB operations to bypass Mongoose timestamps
      colorLog('green', '\n🚀 Starting database updates...');
      let updatedCount = 0;

      for (const update of updates) {
        try {
          // Use direct MongoDB update to bypass Mongoose's automatic updatedAt setting
          await Quote.collection.updateOne(
            { _id: update.quoteId },
            { $set: { updatedAt: update.updateData.updatedAt } }
          );
          updatedCount++;
          
          // Show progress
          if (updatedCount % 10 === 0 || updatedCount === updates.length) {
            process.stdout.write(`\rUpdated: ${updatedCount}/${updates.length} quotes`);
          }
        } catch (error) {
          colorLog('red', `\nError updating quote ${update.quoteId}: ${error.message}`);
        }
      }

      console.log(''); // New line after progress indicator
      colorLog('green', `\n✅ UPDATE COMPLETE - Successfully updated ${updatedCount} quotes`);
      colorLog('blue', 'All quotes now have updatedAt matching their createdAt timestamp.');
    }

  } catch (error) {
    colorLog('red', `❌ Error during update: ${error.message}`);
    console.error(error);
  } finally {
    mongoose.disconnect();
    colorLog('blue', '\n🔌 Disconnected from MongoDB');
  }
}

// Display usage information
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
${colors.bright}Quote UpdatedAt Reset Script${colors.reset}

This script sets all quotes' updatedAt field to match their createdAt field.

${colors.bright}Usage:${colors.reset}
  node resetQuoteUpdatedAt.js           # Test mode (default, safe)
  node resetQuoteUpdatedAt.js --test    # Test mode (preview only)
  node resetQuoteUpdatedAt.js --live    # Live mode (actual updates)
  node resetQuoteUpdatedAt.js --help    # Show this help

${colors.bright}What it does:${colors.reset}
- Finds all quotes in the database
- Identifies quotes where updatedAt differs from createdAt
- Sets updatedAt to match createdAt for consistency
- Shows detailed preview of changes in test mode

${colors.bright}Why use this:${colors.reset}
- Ensures consistent timestamps for quotes that haven't been modified
- Useful for data cleanup and consistency
- Helps with sorting and filtering by modification date

${colors.yellow}Always run in test mode first to preview changes!${colors.reset}
`);
  process.exit(0);
}

// Run the update
colorLog('bright', '🔄 Starting Quote UpdatedAt Reset...');
resetQuoteUpdatedAt();
