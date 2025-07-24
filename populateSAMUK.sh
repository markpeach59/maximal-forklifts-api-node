#!/bin/bash
echo "Populating SAMUK Database with all forklift types in order..."

echo "1. Seeding Electric Series..."
node seedSAMUKElectricSeriesWithClear.js

echo "2. Seeding Diesel Series..."
node seedSAMUKFDTADieselWithClear.js

echo "3. Seeding LPG Series..."
node seedSAMUKFLTALPGWithClear.js

echo "4. Seeding Rough Terrain Series..."
node seedSAMUKRoughWithClear.js

echo "5. Seeding Reach Series..."
node seedSAMUKReachWithClear.js

echo "✅ SAMUK Database population completed successfully!"
