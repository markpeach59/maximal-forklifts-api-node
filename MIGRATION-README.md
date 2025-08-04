# SAMUK Database Migration Script

This script migrates data from a local MongoDB instance to MongoDB Atlas, handling ObjectId relationships properly.

## What it does

The migration script:
1. **Connects to two databases simultaneously:**
   - Local MongoDB: `mongodb://localhost/samuk` (source)
   - MongoDB Atlas: via `MONGO_URI` environment variable (destination)

2. **Migrates three collections in order:**
   - `dealers` → `users` → `quotes`

3. **Handles ObjectId mapping:**
   - All documents get **new ObjectIds** in Atlas
   - Relationships are preserved by mapping old IDs to new IDs
   - `users.dealerId` references are updated to new dealer IDs
   - `quotes.userid` references are updated to new user IDs

## Prerequisites

1. **Local MongoDB running** with samuk database containing data
2. **MongoDB Atlas cluster** set up and accessible
3. **MONGO_URI environment variable** with Atlas connection string

## Usage

### Basic Migration
```bash
# Set your Atlas connection string
export MONGO_URI="mongodb+srv://username:password@cluster.mongodb.net/samuk?retryWrites=true&w=majority"

# Run the migration
node migrate.js
```

### Example Output
```
🚀 Starting SAMUK Database Migration
📍 Local:  mongodb://localhost/samuk
📍 Atlas:  mongodb+srv://***:***@cluster.mongodb.net/samuk
============================================================
🔌 Creating database connections...
✅ Connected to local MongoDB
✅ Connected to MongoDB Atlas

📦 Phase 1: Migrating Dealers...
   Found 5 dealers in local database
   Cleared existing dealers in Atlas
   ✅ Migrated dealer: ABC Motors (507f1f77bcf86cd799439011 -> 65a1b2c3d4e5f6789abcdef0)
   ✅ Migrated dealer: XYZ Trucks (507f1f77bcf86cd799439012 -> 65a1b2c3d4e5f6789abcdef1)
   📊 Dealers: 5/5 migrated, 0 errors

👥 Phase 2: Migrating Users...
   Found 12 users in local database
   Cleared existing users in Atlas
   ✅ Migrated user: John Smith (507f1f77bcf86cd799439013 -> 65a1b2c3d4e5f6789abcdef2)
      Dealer mapping: 507f1f77bcf86cd799439011 -> 65a1b2c3d4e5f6789abcdef0
   📊 Users: 12/12 migrated, 0 errors

💰 Phase 3: Migrating Quotes...
   Found 45 quotes in local database
   Cleared existing quotes in Atlas
   ✅ Migrated quote: FB16S-MJZ (507f1f77bcf86cd799439014 -> 65a1b2c3d4e5f6789abcdef3)
      User mapping: 507f1f77bcf86cd799439013 -> 65a1b2c3d4e5f6789abcdef2
   📊 Quotes: 45/45 migrated, 0 errors

🔍 Validating migration...
   Atlas document counts:
   - Dealers: 5
   - Users: 12
   - Quotes: 45
   ✅ All relationships are valid!

📋 Migration Summary:
==================================================
Dealers: 5/5 migrated (0 errors)
Users:   12/12 migrated (0 errors)
Quotes:  45/45 migrated (0 errors)
==================================================
🎉 Migration completed successfully! 62 documents migrated.
```

## Important Notes

### ⚠️ Data Replacement
- **The script clears existing data in Atlas** before migration
- If you want to append instead of replace, comment out the `deleteMany({})` lines

### 🔄 ObjectId Behavior
- **Old ObjectIds are NOT preserved** - all documents get new IDs in Atlas
- **Relationships are maintained** through ID mapping
- Original local database remains unchanged

### 🔍 Validation
The script validates:
- Document counts match expected numbers
- No orphaned references (users without valid dealers, quotes without valid users)
- All relationships are properly mapped

### 🛡️ Error Handling
- Individual document errors don't stop the migration
- Detailed error reporting for troubleshooting
- Connection cleanup on success or failure
- Warnings for missing relationship mappings

## Troubleshooting

### Connection Issues
```bash
# Check local MongoDB is running
mongosh mongodb://localhost/samuk

# Test Atlas connection
mongosh "mongodb+srv://username:password@cluster.mongodb.net/samuk"
```

### Environment Variable Issues
```bash
# Check MONGO_URI is set
echo $MONGO_URI

# Set it if missing
export MONGO_URI="your-atlas-connection-string"
```

### Partial Migration Recovery
If migration fails partway through:
1. The script clears Atlas data at the start of each phase
2. Simply re-run the script - it will start fresh
3. Check the error messages for specific issues

## Advanced Usage

### Dry Run Mode
To see what would be migrated without actually doing it, you can modify the script to add a `--dry-run` flag or comment out the `save()` operations.

### Selective Migration
To migrate only specific collections, comment out the unwanted phases in the `migrate()` function.

### Custom Database Names
Modify the `LOCAL_DB_URI` constant if your local database has a different name.

## Security Notes

- Never commit Atlas connection strings to version control
- Use environment variables for sensitive credentials
- Consider using MongoDB Atlas IP whitelisting
- Rotate credentials after migration if needed
