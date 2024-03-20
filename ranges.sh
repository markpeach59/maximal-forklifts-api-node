#!/bin/bash
echo "Populating"
node seedRanges.js
node seedRangesMore.js
node seedRangesWarehouse.js
node seedRestrictedRange.js
