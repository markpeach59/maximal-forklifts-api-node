#!/bin/bash
echo "Populating"

node seedSAMUKMSeries.js
node seedSAMUKASeries.js
node seedSAMUKFDTADieselSeries.js
node seedSAMUKFLTALPGSeries.js
node seedSAMUKRough.js