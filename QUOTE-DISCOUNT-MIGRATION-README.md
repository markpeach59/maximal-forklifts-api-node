# Quote Discount Migration Script

This script migrates old quotes (created before August 11, 2025) from the legacy discount format (`offerprice` and `saving` fields) to the new discount structure (`hasDiscount`, `discountedPrice`, `discountAmount`, `discountPercentage`).

## Overview

The script identifies quotes that:
- Were created before August 11, 2025
- Have both `offerprice` and `saving` fields (legacy format)
- Need to be migrated to the new discount structure

## Usage

### Test Mode (Safe - Default)
Preview what changes will be made without modifying the database:

```bash
cd samuknode
node migrateQuoteDiscounts.js
```

or explicitly:

```bash
node migrateQuoteDiscounts.js --test
```

### Live Mode (Actual Updates)
Perform the actual database migration:

```bash
node migrateQuoteDiscounts.js --live
```

### Help
Display usage information:

```bash
node migrateQuoteDiscounts.js --help
```

## What the Script Does

For each qualifying quote, the script:

1. **Sets `hasDiscount: true`**
2. **Sets `discountedPrice`** to the value of `offerprice`
3. **Sets `discountAmount`** to the value of `saving`
4. **Calculates `discountPercentage`** as `(saving / (baseprice + markup)) * 100`
5. **Leaves original fields intact** (`offerprice` and `saving` remain for reference)

## Migration Logic

```javascript
// For each quote:
const basePriceWithMarkup = (baseprice || 0) + (markup || 0);
const discountPercentage = basePriceWithMarkup > 0 ? (saving / basePriceWithMarkup) * 100 : 0;

// Updates applied:
{
  hasDiscount: true,
  discountedPrice: offerprice,
  discountAmount: saving,
  discountPercentage: Math.round(discountPercentage * 100) / 100
}
```

## Safety Features

- **Test mode by default** - prevents accidental data modification
- **Detailed preview** showing exactly what will be changed
- **Confirmation prompt** in live mode before making changes
- **Progress tracking** during updates
- **Error handling** for individual quote update failures
- **Color-coded output** for easy reading

## Example Output

### Test Mode
```
🔍 RUNNING IN TEST MODE - No changes will be made to the database

Looking for quotes created before: 2025-08-11T00:00:00.000Z

Found 15 quotes that need discount migration

Quote ID: 507f1f77bcf86cd799439011
  Created: 2025-07-15T10:30:00.000Z
  Model: Toyota 8FBE15
  Current values:
    Base Price: £12,500.00
    Markup: £1,500.00
    Price (base + markup): £14,000.00
    Offer Price: £13,300.00
    Saving: £700.00
  Would set:
    hasDiscount: true
    discountedPrice: £13,300.00
    discountAmount: £700.00
    discountPercentage: 5.00%

=== SUMMARY ===
Total quotes processed: 15

🔍 TEST MODE COMPLETE - No changes were made to the database
To actually perform the migration, run: node migrateQuoteDiscounts.js --live
```

### Live Mode
```
⚠️  RUNNING IN LIVE MODE - Database will be modified!

[... same preview output ...]

⚠️  Are you sure you want to update 15 quotes? (y/N): y

🚀 Starting database updates...
Updated: 15/15 quotes

✅ MIGRATION COMPLETE - Successfully updated 15 quotes
```

## Prerequisites

1. **MongoDB running** (local or configured connection)
2. **Node.js dependencies installed** (`npm install` in samuknode directory)
3. **JWT private key set** (required for the application to start)

## Recommended Workflow

1. **Always run test mode first** to preview changes
2. **Review the output carefully** to ensure calculations are correct
3. **Backup your database** before running live mode (optional but recommended)
4. **Run live mode** only after confirming the test output looks correct

## Troubleshooting

- **Connection errors**: Ensure MongoDB is running and accessible
- **No quotes found**: Check if quotes exist with the required fields and date criteria
- **Permission errors**: Ensure the database user has write permissions (for live mode)
- **JWT errors**: Set the `jwtMaximGB` environment variable

## Database Impact

- **Read operations**: Queries the quotes collection for matching documents
- **Write operations** (live mode only): Updates matching quotes with new discount fields
- **No data loss**: Original `offerprice` and `saving` fields are preserved
