const mongoose = require("mongoose");

// Import models
const { Dealer } = require("./models/dealer");
const { User } = require("./models/user");
const { Quote } = require("./models/quote");

// Migration configuration
const LOCAL_DB_URI = "mongodb://localhost/samuk";
const ATLAS_DB_URI = process.env.MONGO_URI;

// ID mapping storage
const dealerIdMap = new Map(); // oldId -> newId
const userIdMap = new Map();   // oldId -> newId

// Statistics tracking
const stats = {
  dealers: { read: 0, written: 0, errors: 0 },
  users: { read: 0, written: 0, errors: 0 },
  quotes: { read: 0, written: 0, errors: 0 }
};

async function createConnections() {
  console.log("🔌 Creating database connections...");
  
  if (!ATLAS_DB_URI) {
    throw new Error("MONGO_URI environment variable is required for Atlas connection");
  }

  // Create separate connections
  const localConn = mongoose.createConnection(LOCAL_DB_URI);
  const atlasConn = mongoose.createConnection(ATLAS_DB_URI);

  // Wait for connections
  await Promise.all([
    new Promise((resolve, reject) => {
      localConn.on('connected', () => {
        console.log("✅ Connected to local MongoDB");
        resolve();
      });
      localConn.on('error', reject);
    }),
    new Promise((resolve, reject) => {
      atlasConn.on('connected', () => {
        console.log("✅ Connected to MongoDB Atlas");
        resolve();
      });
      atlasConn.on('error', reject);
    })
  ]);

  return { localConn, atlasConn };
}

function createModels(localConn, atlasConn) {
  // Local models (for reading)
  const LocalDealer = localConn.model("Dealers", Dealer.schema);
  const LocalUser = localConn.model("Users", User.schema);
  const LocalQuote = localConn.model("Quotes", Quote.schema);

  // Atlas models (for writing)
  const AtlasDealer = atlasConn.model("Dealers", Dealer.schema);
  const AtlasUser = atlasConn.model("Users", User.schema);
  const AtlasQuote = atlasConn.model("Quotes", Quote.schema);

  return {
    local: { LocalDealer, LocalUser, LocalQuote },
    atlas: { AtlasDealer, AtlasUser, AtlasQuote }
  };
}

async function migrateDealers(LocalDealer, AtlasDealer) {
  console.log("\n📦 Phase 1: Migrating Dealers...");
  
  try {
    // Read all dealers from local
    const localDealers = await LocalDealer.find({});
    stats.dealers.read = localDealers.length;
    console.log(`   Found ${localDealers.length} dealers in local database`);

    // Clear existing dealers in Atlas (optional - remove if you want to append)
    await AtlasDealer.deleteMany({});
    console.log("   Cleared existing dealers in Atlas");

    // Migrate each dealer
    for (const dealer of localDealers) {
      try {
        const oldId = dealer._id;
        
        // Create new dealer without the _id (let MongoDB generate new one)
        const dealerData = {
          dealername: dealer.dealername,
          dealerregion: dealer.dealerregion,
          dealerlogo: dealer.dealerlogo,
          isRestricted: dealer.isRestricted
        };

        const newDealer = new AtlasDealer(dealerData);
        await newDealer.save();
        
        // Store mapping
        dealerIdMap.set(oldId.toString(), newDealer._id);
        stats.dealers.written++;
        
        console.log(`   ✅ Migrated dealer: ${dealer.dealername} (${oldId} -> ${newDealer._id})`);
      } catch (error) {
        stats.dealers.errors++;
        console.error(`   ❌ Error migrating dealer ${dealer.dealername}:`, error.message);
      }
    }

    console.log(`   📊 Dealers: ${stats.dealers.written}/${stats.dealers.read} migrated, ${stats.dealers.errors} errors`);
  } catch (error) {
    console.error("❌ Fatal error in dealer migration:", error);
    throw error;
  }
}

async function migrateUsers(LocalUser, AtlasUser) {
  console.log("\n👥 Phase 2: Migrating Users...");
  
  try {
    // Read all users from local
    const localUsers = await LocalUser.find({});
    stats.users.read = localUsers.length;
    console.log(`   Found ${localUsers.length} users in local database`);

    // Clear existing users in Atlas (optional)
    await AtlasUser.deleteMany({});
    console.log("   Cleared existing users in Atlas");

    // Migrate each user
    for (const user of localUsers) {
      try {
        const oldId = user._id;
        const oldDealerId = user.dealerId;
        
        // Map dealer ID
        const newDealerId = dealerIdMap.get(oldDealerId?.toString());
        if (oldDealerId && !newDealerId) {
          console.warn(`   ⚠️  Warning: No mapping found for dealerId ${oldDealerId} for user ${user.name}`);
        }

        // Create new user without the _id
        const userData = {
          name: user.name,
          email: user.email,
          password: user.password,
          dealerId: newDealerId || null,
          isAdmin: user.isAdmin,
          isMaximGB: user.isMaximGB
        };

        const newUser = new AtlasUser(userData);
        await newUser.save();
        
        // Store mapping
        userIdMap.set(oldId.toString(), newUser._id);
        stats.users.written++;
        
        console.log(`   ✅ Migrated user: ${user.name} (${oldId} -> ${newUser._id})`);
        if (newDealerId) {
          console.log(`      Dealer mapping: ${oldDealerId} -> ${newDealerId}`);
        }
      } catch (error) {
        stats.users.errors++;
        console.error(`   ❌ Error migrating user ${user.name}:`, error.message);
      }
    }

    console.log(`   📊 Users: ${stats.users.written}/${stats.users.read} migrated, ${stats.users.errors} errors`);
  } catch (error) {
    console.error("❌ Fatal error in user migration:", error);
    throw error;
  }
}

async function migrateQuotes(LocalQuote, AtlasQuote) {
  console.log("\n💰 Phase 3: Migrating Quotes...");
  
  try {
    // Read all quotes from local
    const localQuotes = await LocalQuote.find({});
    stats.quotes.read = localQuotes.length;
    console.log(`   Found ${localQuotes.length} quotes in local database`);

    // Clear existing quotes in Atlas (optional)
    await AtlasQuote.deleteMany({});
    console.log("   Cleared existing quotes in Atlas");

    // Migrate each quote
    for (const quote of localQuotes) {
      try {
        const oldId = quote._id;
        const oldUserId = quote.userid;
        
        // Map user ID
        const newUserId = userIdMap.get(oldUserId?.toString());
        if (oldUserId && !newUserId) {
          console.warn(`   ⚠️  Warning: No mapping found for userid ${oldUserId} for quote ${oldId}`);
        }

        // Create new quote without the _id
        const quoteData = {
          userid: newUserId || null,
          model: quote.model,
          powertrain: quote.powertrain,
          capacity: quote.capacity,
          engtype: quote.engtype,
          baseprice: quote.baseprice,
          imgname: quote.imgname,
          markup: quote.markup,
          price: quote.price,
          hasDiscount: quote.hasDiscount,
          discountedPrice: quote.discountedPrice,
          discountPercentage: quote.discountPercentage,
          discountAmount: quote.discountAmount,
          confirmedorder: quote.confirmedorder,
          stocknumber: quote.stocknumber,
          ponumber: quote.ponumber,
          masttype: quote.masttype,
          mastsize: quote.mastsize,
          closedheight: quote.closedheight,
          freeliftheight: quote.freeliftheight,
          valve: quote.valve,
          forks: quote.forks,
          sideshift: quote.sideshift,
          forkpositioner: quote.forkpositioner,
          tyre: quote.tyre,
          controller: quote.controller,
          pincode: quote.pincode,
          liftybutton: quote.liftybutton,
          roller: quote.roller,
          displaywithcamera: quote.displaywithcamera,
          safetybluespot: quote.safetybluespot,
          halolight: quote.halolight,
          precleaner: quote.precleaner,
          upsweptexhaust: quote.upsweptexhaust,
          heavydutyairfilter: quote.heavydutyairfilter,
          seat: quote.seat,
          cabin: quote.cabin,
          coldstoreprot: quote.coldstoreprot,
          aircon: quote.aircon,
          heater: quote.heater,
          reargrab: quote.reargrab,
          sideleverhydraulic: quote.sideleverhydraulic,
          battery: quote.battery,
          charger: quote.charger,
          spare: quote.spare,
          sideextractionbattery: quote.sideextractionbattery,
          armguard: quote.armguard,
          platform: quote.platform,
          loadbackrest: quote.loadbackrest,
          steering: quote.steering,
          fork2d: quote.fork2d,
          bfs: quote.bfs,
          manualtrolley: quote.manualtrolley,
          blinkey: quote.blinkey,
          order: quote.order,
          specsheet: quote.specsheet,
          createdAt: quote.createdAt,
          updatedAt: quote.updatedAt
        };

        const newQuote = new AtlasQuote(quoteData);
        await newQuote.save();
        
        stats.quotes.written++;
        
        console.log(`   ✅ Migrated quote: ${quote.model} (${oldId} -> ${newQuote._id})`);
        if (newUserId) {
          console.log(`      User mapping: ${oldUserId} -> ${newUserId}`);
        }
      } catch (error) {
        stats.quotes.errors++;
        console.error(`   ❌ Error migrating quote ${quote._id}:`, error.message);
      }
    }

    console.log(`   📊 Quotes: ${stats.quotes.written}/${stats.quotes.read} migrated, ${stats.quotes.errors} errors`);
  } catch (error) {
    console.error("❌ Fatal error in quote migration:", error);
    throw error;
  }
}

async function validateMigration(models) {
  console.log("\n🔍 Validating migration...");
  
  try {
    const atlasStats = {
      dealers: await models.atlas.AtlasDealer.countDocuments(),
      users: await models.atlas.AtlasUser.countDocuments(),
      quotes: await models.atlas.AtlasQuote.countDocuments()
    };

    console.log("   Atlas document counts:");
    console.log(`   - Dealers: ${atlasStats.dealers}`);
    console.log(`   - Users: ${atlasStats.users}`);
    console.log(`   - Quotes: ${atlasStats.quotes}`);

    // Check for orphaned references
    const usersWithInvalidDealers = await models.atlas.AtlasUser.countDocuments({
      dealerId: { $ne: null },
      dealerId: { $nin: await models.atlas.AtlasDealer.distinct('_id') }
    });

    const quotesWithInvalidUsers = await models.atlas.AtlasQuote.countDocuments({
      userid: { $ne: null },
      userid: { $nin: await models.atlas.AtlasUser.distinct('_id') }
    });

    if (usersWithInvalidDealers > 0) {
      console.warn(`   ⚠️  Warning: ${usersWithInvalidDealers} users have invalid dealer references`);
    }

    if (quotesWithInvalidUsers > 0) {
      console.warn(`   ⚠️  Warning: ${quotesWithInvalidUsers} quotes have invalid user references`);
    }

    if (usersWithInvalidDealers === 0 && quotesWithInvalidUsers === 0) {
      console.log("   ✅ All relationships are valid!");
    }

  } catch (error) {
    console.error("❌ Error during validation:", error);
  }
}

function printSummary() {
  console.log("\n📋 Migration Summary:");
  console.log("=".repeat(50));
  console.log(`Dealers: ${stats.dealers.written}/${stats.dealers.read} migrated (${stats.dealers.errors} errors)`);
  console.log(`Users:   ${stats.users.written}/${stats.users.read} migrated (${stats.users.errors} errors)`);
  console.log(`Quotes:  ${stats.quotes.written}/${stats.quotes.read} migrated (${stats.quotes.errors} errors)`);
  console.log("=".repeat(50));
  
  const totalErrors = stats.dealers.errors + stats.users.errors + stats.quotes.errors;
  const totalMigrated = stats.dealers.written + stats.users.written + stats.quotes.written;
  
  if (totalErrors === 0) {
    console.log(`🎉 Migration completed successfully! ${totalMigrated} documents migrated.`);
  } else {
    console.log(`⚠️  Migration completed with ${totalErrors} errors. ${totalMigrated} documents migrated.`);
  }
}

async function migrate() {
  console.log("🚀 Starting SAMUK Database Migration");
  console.log(`📍 Local:  ${LOCAL_DB_URI}`);
  console.log(`📍 Atlas:  ${ATLAS_DB_URI?.replace(/\/\/.*:.*@/, '//***:***@')}`);
  console.log("=".repeat(60));

  let localConn, atlasConn;

  try {
    // Create connections
    ({ localConn, atlasConn } = await createConnections());

    // Create models
    const models = createModels(localConn, atlasConn);

    // Execute migration phases
    await migrateDealers(models.local.LocalDealer, models.atlas.AtlasDealer);
    await migrateUsers(models.local.LocalUser, models.atlas.AtlasUser);
    await migrateQuotes(models.local.LocalQuote, models.atlas.AtlasQuote);

    // Validate migration
    await validateMigration(models);

    // Print summary
    printSummary();

  } catch (error) {
    console.error("\n💥 Migration failed:", error.message);
    process.exit(1);
  } finally {
    // Close connections
    if (localConn) {
      await localConn.close();
      console.log("🔌 Closed local database connection");
    }
    if (atlasConn) {
      await atlasConn.close();
      console.log("🔌 Closed Atlas database connection");
    }
  }
}

// Run migration if called directly
if (require.main === module) {
  migrate().catch(error => {
    console.error("💥 Unhandled error:", error);
    process.exit(1);
  });
}

module.exports = { migrate };
