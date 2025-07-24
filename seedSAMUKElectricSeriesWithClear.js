const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");
const { Forklift } = require("./models/forklift");

// M Series Electric Data (8 models total)
const allElectricData = [
  // M Series Lead Acid Electric Data (4 models)
  {
    model: "FB16S-MHJZ",
    capacity: 1600,
    engType: "Lead Acid Electric",
    basePrice: 9119,
    imgName: "FB16S.jpg",
    modeldescription:[{description:"M Series"}, {description:"3 Wheel, Rear Wheel Drive"}],
    loadcenter:500,
    defaulttyre:"Solid",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, price: 0 },
          { mastlength: 3300, closedheight: 2125, price: 120 },
          { mastlength: 3500, closedheight: 2245, price: 210 },
          { mastlength: 4000, closedheight: 2525, price: 352},
          { mastlength: 4500, closedheight: 2775, price: 510}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, freeliftheight: 1450, price: 460 },
          { mastlength: 3500, closedheight: 2215, freeliftheight: 1600, price: 576 },
          { mastlength: 4000, closedheight: 2225, freeliftheight: 1750, price: 678 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 1975, freeliftheight: 1425, price: 851 },
          { mastlength: 4500, closedheight: 2025, freeliftheight: 1475, price: 950 },
          { mastlength: 4800, closedheight: 2150, freeliftheight: 1575, price: 1120 },
          { mastlength: 5000, closedheight: 2225, freeliftheight: 1675, price: 1220 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1840, price: 1472 },
          { mastlength: 6000, closedheight: 2575, freeliftheight: 2025, price: 1730 },
          { mastlength: 6500, closedheight: 2790, freeliftheight: 2205, price: 1910 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 30 },
      { forklength: 1200, price: 70 },
      { forklength: 1370, price: 148 },
      { forklength: 1500, price: 179 },
      { forklength: 1670, price: 210 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 420 },
      { sideshifttype: "Integral", price: 430 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1510 }
    ],
    tyres: [{ tyretype: "Non-Marking S/E Tyres", price: 360 }],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "No",
    defaultcharger: "No",
    batteries: [
      {
        batterytype: "48V 400A/H Chinese",
        price: 1344
      },
      {
        batterytype: "48V 400 A/H UK Supply 5yr Warranty",
        price: 2950
      }
    ],
    chargers: [
      {
        chargertype: "1 Phase 12 Hour 48V 60",
        price: 538
      },
      {
        chargertype: "1 Phase 8 Hour 48V 80",
        price: 562
      },
      {
        chargertype: "3 Phase 12 Hour 48V 60",
        price: 480
      },
      {
        chargertype: "3 Phase 8 Hour 48V 80",
        price: 488
      }
    ],
    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    bfs: [{ bfstype: "", price: 216 }],
    trolley: [{ trolleytype: "", price: 95 }],
    blinkey: [{ blinkeytype: "", price: 30}],
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
  },
  {
    model: "FB16S-MJZ",
    capacity: 1600,
    engType: "Lead Acid Electric",
    basePrice: 10554,
    imgName: "FB16S.jpg",
    modeldescription:[{description:"M Series"}, {description:"3 Wheel, Front Wheel Drive"}],
    loadcenter:500,
    defaulttyre:"Solid",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, price: 0 },
          { mastlength: 3300, closedheight: 2125, price: 120 },
          { mastlength: 3500, closedheight: 2245, price: 210 },
          { mastlength: 4000, closedheight: 2525, price: 352},
          { mastlength: 4500, closedheight: 2775, price: 510}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, freeliftheight: 1450, price: 460 },
          { mastlength: 3500, closedheight: 2215, freeliftheight: 1600, price: 576 },
          { mastlength: 4000, closedheight: 2225, freeliftheight: 1750, price: 678 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 1975, freeliftheight: 1425, price: 851 },
          { mastlength: 4500, closedheight: 2025, freeliftheight: 1475, price: 950 },
          { mastlength: 4800, closedheight: 2150, freeliftheight: 1575, price: 1120 },
          { mastlength: 5000, closedheight: 2225, freeliftheight: 1675, price: 1220 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1840, price: 1472 },
          { mastlength: 6000, closedheight: 2575, freeliftheight: 2025, price: 1730 },
          { mastlength: 6500, closedheight: 2790, freeliftheight: 2205, price: 1910 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 30 },
      { forklength: 1200, price: 70 },
      { forklength: 1370, price: 148 },
      { forklength: 1500, price: 179 },
      { forklength: 1670, price: 210 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 420 },
      { sideshifttype: "Integral", price: 430 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1510 }
    ],
    tyres: [{ tyretype: "Non-Marking S/E Tyres", price: 360 }],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "No",
    defaultcharger: "No",
    batteries: [
      {
        batterytype: "48V 500A/H Chinese",
        price: 1344
      },
      {
        batterytype: "48V 500 A/H UK Supply 5yr Warranty",
        price: 3036
      }
    ],
    chargers: [
      {
        chargertype: "1 Phase 12 Hour 48V 80",
        price: 488
      },
      {
        chargertype: "1 Phase 8 Hour 48V 100",
        price: 595
      },
      {
        chargertype: "3 Phase 12 Hour 48V 80",
        price: 462
      },
      {
        chargertype: "3 Phase 8 Hour 48V 100",
        price: 490
      }
    ],
    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    bfs: [{ bfstype: "", price: 216 }],
    trolley: [{ trolleytype: "", price: 95 }],
    blinkey: [{ blinkeytype: "", price: 30}],
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
  },
  {
    model: "FB18S-MJZ",
    capacity: 1750,
    engType: "Lead Acid Electric",
    basePrice: 10750,
    imgName: "FB16S.jpg",
    modeldescription:[{description:"M Series"}, {description:"3 Wheel, Front Wheel Drive"}],
    loadcenter:500,
    defaulttyre:"Solid",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, price: 0 },
          { mastlength: 3300, closedheight: 2125, price: 120 },
          { mastlength: 3500, closedheight: 2245, price: 210 },
          { mastlength: 4000, closedheight: 2525, price: 352},
          { mastlength: 4500, closedheight: 2775, price: 510}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, freeliftheight: 1450, price: 460 },
          { mastlength: 3500, closedheight: 2215, freeliftheight: 1600, price: 576 },
          { mastlength: 4000, closedheight: 2225, freeliftheight: 1750, price: 678 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 1975, freeliftheight: 1425, price: 851 },
          { mastlength: 4500, closedheight: 2025, freeliftheight: 1475, price: 950 },
          { mastlength: 4800, closedheight: 2150, freeliftheight: 1575, price: 1120 },
          { mastlength: 5000, closedheight: 2225, freeliftheight: 1675, price: 1220 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1840, price: 1472 },
          { mastlength: 6000, closedheight: 2575, freeliftheight: 2025, price: 1730 },
          { mastlength: 6500, closedheight: 2790, freeliftheight: 2205, price: 1910 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 30 },
      { forklength: 1200, price: 70 },
      { forklength: 1370, price: 148 },
      { forklength: 1500, price: 179 },
      { forklength: 1670, price: 210 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 420 },
      { sideshifttype: "Integral", price: 430 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1510 }
    ],
    tyres: [{ tyretype: "Non-Marking S/E Tyres", price: 360 }],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "No",
    defaultcharger: "No",
    batteries: [
      {
        batterytype: "48V 500A/H Chinese",
        price: 1344
      },
      {
        batterytype: "48V 500 A/H UK Supply 5yr Warranty",
        price: 3036
      }
    ],
    chargers: [
      {
        chargertype: "1 Phase 12 Hour 48V 80",
        price: 488
      },
      {
        chargertype: "1 Phase 8 Hour 48V 100",
        price: 595
      },
      {
        chargertype: "3 Phase 12 Hour 48V 80",
        price: 462
      },
      {
        chargertype: "3 Phase 8 Hour 48V 100",
        price: 490
      }
    ],
    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    bfs: [{ bfstype: "", price: 216 }],
    trolley: [{ trolleytype: "", price: 95 }],
    blinkey: [{ blinkeytype: "", price: 30}],
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
  },
  {
    model: "FB20S-MJZ",
    capacity: 2000,
    engType: "Lead Acid Electric",
    basePrice: 11200,
    imgName: "FB16S.jpg",
    modeldescription:[{description:"M Series"}, {description:"3 Wheel, Front Wheel Drive"}],
    loadcenter:500,
    defaulttyre:"Solid",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, price: 0 },
          { mastlength: 3300, closedheight: 2125, price: 120 },
          { mastlength: 3500, closedheight: 2245, price: 210 },
          { mastlength: 4000, closedheight: 2525, price: 352},
          { mastlength: 4500, closedheight: 2775, price: 510}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, freeliftheight: 1450, price: 460 },
          { mastlength: 3500, closedheight: 2215, freeliftheight: 1600, price: 576 },
          { mastlength: 4000, closedheight: 2225, freeliftheight: 1750, price: 678 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 1975, freeliftheight: 1425, price: 851 },
          { mastlength: 4500, closedheight: 2025, freeliftheight: 1475, price: 950 },
          { mastlength: 4800, closedheight: 2150, freeliftheight: 1575, price: 1120 },
          { mastlength: 5000, closedheight: 2225, freeliftheight: 1675, price: 1220 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1840, price: 1472 },
          { mastlength: 6000, closedheight: 2575, freeliftheight: 2025, price: 1730 },
          { mastlength: 6500, closedheight: 2790, freeliftheight: 2205, price: 1910 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 30 },
      { forklength: 1200, price: 70 },
      { forklength: 1370, price: 148 },
      { forklength: 1500, price: 179 },
      { forklength: 1670, price: 210 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 420 },
      { sideshifttype: "Integral", price: 430 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1510 }
    ],
    tyres: [{ tyretype: "Non-Marking S/E Tyres", price: 360 }],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "No",
    defaultcharger: "No",
    batteries: [
      {
        batterytype: "48V 620A/H Chinese",
        price: 1839
      },
      {
        batterytype: "48V 620 A/H UK Supply 5yr Warranty",
        price: 3826
      }
    ],
    chargers: [
      {
        chargertype: "1 Phase 12 Hour 48V 100",
        price: 595
      },
      {
        chargertype: "1 Phase 8 Hour 48V 120",
        price: 661
      },
      {
        chargertype: "3 Phase 12 Hour 48V 100",
        price: 490
      },
      {
        chargertype: "3 Phase 8 Hour 48V 120",
        price: 517
      }
    ],
    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    bfs: [{ bfstype: "", price: 216 }],
    trolley: [{ trolleytype: "", price: 95 }],
    blinkey: [{ blinkeytype: "", price: 30}],
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
  },
  // M Series Lithium Electric Data (4 models)
  {
    model: "FB16S-LR",
    capacity: 1600,
    engType: "Electric",
    basePrice: 13900,
    imgName: "M-SERIES-LITHIUM-Rear-drive-3-wheel-1.6T.jpg",
    modeldescription:[{description:"M Series"}, {description:"3 Wheel, Rear Wheel Drive"},{description:"Lithium Powered"}],
    loadcenter:500,
    defaulttyre:"Solid",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, price: 0 },
          { mastlength: 3300, closedheight: 2125, price: 120 },
          { mastlength: 3500, closedheight: 2245, price: 210 },
          { mastlength: 4000, closedheight: 2525, price: 352},
          { mastlength: 4500, closedheight: 2775, price: 510}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, freeliftheight: 1450, price: 460 },
          { mastlength: 3500, closedheight: 2215, freeliftheight: 1600, price: 576 },
          { mastlength: 4000, closedheight: 2225, freeliftheight: 1750, price: 678 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 1975, freeliftheight: 1425, price: 851 },
          { mastlength: 4500, closedheight: 2025, freeliftheight: 1475, price: 950 },
          { mastlength: 4800, closedheight: 2150, freeliftheight: 1575, price: 1120 },
          { mastlength: 5000, closedheight: 2225, freeliftheight: 1675, price: 1220 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1840, price: 1472 },
          { mastlength: 6000, closedheight: 2575, freeliftheight: 2025, price: 1730 },
          { mastlength: 6500, closedheight: 2790, freeliftheight: 2205, price: 1910 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 30 },
      { forklength: 1200, price: 70 },
      { forklength: 1370, price: 148 },
      { forklength: 1500, price: 179 },
      { forklength: 1670, price: 210 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 420 },
      { sideshifttype: "Integral", price: 430 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1510 }
    ],
    tyres: [{ tyretype: "Non-Marking S/E Tyres", price: 360 }],
    seatrequired: 'true',
    seat: [
        { seattype: "Standard", price: 192 },
        { seattype: "Full Comfort Suspension", price: 298 },
        { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "48V 350 A/H",
    defaultcharger: "Fast",
    batteries: [
      {
        batterytype: "48V 350 A/H",
        price: 0
      },
      {
        batterytype: "48V 450 A/H",
        price: 700
      }
    ],
    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
  },
  {
    model: "FB16S-LF",
    capacity: 1600,
    engType: "Electric",
    basePrice: 14980,
    imgName: "M-SERIES-LITHIUM-3-wheel-1.6-2.0T.png",
    modeldescription:[{description:"M Series"}, {description:"3 Wheel, Front Wheel Drive"},{description:"Lithium Powered"}],
    loadcenter:500,
    defaulttyre:"Solid",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, price: 0 },
          { mastlength: 3300, closedheight: 2125, price: 120 },
          { mastlength: 3500, closedheight: 2245, price: 210 },
          { mastlength: 4000, closedheight: 2525, price: 352},
          { mastlength: 4500, closedheight: 2775, price: 510}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, freeliftheight: 1450, price: 460 },
          { mastlength: 3500, closedheight: 2215, freeliftheight: 1600, price: 576 },
          { mastlength: 4000, closedheight: 2225, freeliftheight: 1750, price: 678 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 1975, freeliftheight: 1425, price: 851 },
          { mastlength: 4500, closedheight: 2025, freeliftheight: 1475, price: 950 },
          { mastlength: 4800, closedheight: 2150, freeliftheight: 1575, price: 1120 },
          { mastlength: 5000, closedheight: 2225, freeliftheight: 1675, price: 1220 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1840, price: 1472 },
          { mastlength: 6000, closedheight: 2575, freeliftheight: 2025, price: 1730 },
          { mastlength: 6500, closedheight: 2790, freeliftheight: 2205, price: 1910 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 30 },
      { forklength: 1200, price: 70 },
      { forklength: 1370, price: 148 },
      { forklength: 1500, price: 179 },
      { forklength: 1670, price: 210 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 420 },
      { sideshifttype: "Integral", price: 430 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1510 }
    ],
    tyres: [{ tyretype: "Non-Marking S/E Tyres", price: 360 }],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "48V 450 A/H",
    defaultcharger: "Fast",
    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
  },
  {
    model: "FB18S-LF",
    capacity: 1750,
    engType: "Electric",
    basePrice: 15400,
    imgName: "M-SERIES-LITHIUM-3-wheel-1.6-2.0T.png",
    modeldescription:[{description:"M Series"}, {description:"3 Wheel, Front Wheel Drive"}],
    loadcenter:500,
    defaulttyre:"Solid",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, price: 0 },
          { mastlength: 3300, closedheight: 2125, price: 120 },
          { mastlength: 3500, closedheight: 2245, price: 210 },
          { mastlength: 4000, closedheight: 2525, price: 352},
          { mastlength: 4500, closedheight: 2775, price: 510}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, freeliftheight: 1450, price: 460 },
          { mastlength: 3500, closedheight: 2215, freeliftheight: 1600, price: 576 },
          { mastlength: 4000, closedheight: 2225, freeliftheight: 1750, price: 678 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 1975, freeliftheight: 1425, price: 851 },
          { mastlength: 4500, closedheight: 2025, freeliftheight: 1475, price: 950 },
          { mastlength: 4800, closedheight: 2150, freeliftheight: 1575, price: 1120 },
          { mastlength: 5000, closedheight: 2225, freeliftheight: 1675, price: 1220 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1840, price: 1472 },
          { mastlength: 6000, closedheight: 2575, freeliftheight: 2025, price: 1730 },
          { mastlength: 6500, closedheight: 2790, freeliftheight: 2205, price: 1910 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 30 },
      { forklength: 1200, price: 70 },
      { forklength: 1370, price: 148 },
      { forklength: 1500, price: 179 },
      { forklength: 1670, price: 210 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 420 },
      { sideshifttype: "Integral", price: 430 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1510 }
    ],
    tyres: [{ tyretype: "Non-Marking S/E Tyres", price: 360 }],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "48V 450 A/H",
    defaultcharger: "Fast",
    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
  },
  {
    model: "FB20S-LF",
    capacity: 2000,
    engType: "Electric",
    basePrice: 16100,
    imgName: "M-SERIES-LITHIUM-3-wheel-1.6-2.0T.png",
    modeldescription:[{description:"M Series"}, {description:"3 Wheel, Front Wheel Drive"}, {description:"Lithium Powered"}],
    loadcenter:500,
    defaulttyre:"Solid",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, price: 0 },
          { mastlength: 3300, closedheight: 2125, price: 120 },
          { mastlength: 3500, closedheight: 2245, price: 210 },
          { mastlength: 4000, closedheight: 2525, price: 352},
          { mastlength: 4500, closedheight: 2775, price: 510}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1975, freeliftheight: 1450, price: 460 },
          { mastlength: 3500, closedheight: 2215, freeliftheight: 1600, price: 576 },
          { mastlength: 4000, closedheight: 2225, freeliftheight: 1750, price: 678 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 1975, freeliftheight: 1425, price: 851 },
          { mastlength: 4500, closedheight: 2025, freeliftheight: 1475, price: 950 },
          { mastlength: 4800, closedheight: 2150, freeliftheight: 1575, price: 1120 },
          { mastlength: 5000, closedheight: 2225, freeliftheight: 1675, price: 1220 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1840, price: 1472 },
          { mastlength: 6000, closedheight: 2575, freeliftheight: 2025, price: 1730 },
          { mastlength: 6500, closedheight: 2790, freeliftheight: 2205, price: 1910 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 30 },
      { forklength: 1200, price: 70 },
      { forklength: 1370, price: 148 },
      { forklength: 1500, price: 179 },
      { forklength: 1670, price: 210 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 420 },
      { sideshifttype: "Integral", price: 430 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1510 }
    ],
    tyres: [{ tyretype: "Non-Marking S/E Tyres", price: 360 }],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "48V 450 A/H",
    defaultcharger: "Fast",
    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
  }
];

// Range data for Forklift collection
const rangeData = [
  {
    range: "M Series (3 Wheel) Lead Acid Electric Rear Wheel Drive",
    models: [
      {
        model: "FB16S-MHJZ",
        capacity: 1600,
        engType: "Electric"
      }
    ]
  },
  {
    range: "M Series (3 Wheel) Lithium Electric Rear Wheel Drive",
    models: [
      {
        model: "FB16S-LR",
        capacity: 1600,
        engType: "Electric"
      }
    ]
  },
  {
    range: "M Series (3 Wheel) Lead Acid Electric Front Wheel Drive",
    models: [
      {
        model: "FB16S-MJZ",
        capacity: 1600,
        engType: "Electric"
      },
      {
        model: "FB18S-MJZ",
        capacity: 1800,
        engType: "Electric"
      },
      {
        model: "FB20S-MJZ",
        capacity: 2000,
        engType: "Electric"
      }
    ]
  },
  {
    range: "M Series (3 Wheel) Lithium Electric Front Wheel Drive",
    models: [
      {
        model: "FB16S-LF",
        capacity: 1600,
        engType: "Electric"
      },
      {
        model: "FB18S-LF",
        capacity: 1800,
        engType: "Electric"
      },
      {
        model: "FB20S-LF",
        capacity: 2000,
        engType: "Electric"
      }
    ]
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  console.log("🔄 Starting M Series Electric Seed with Clear...");
  
  // Clear existing electric forklift details
  console.log("🗑️  Clearing existing electric forklift details...");
  const deletedDetails = await Forkliftdetail.deleteMany({
    $or: [
      { engType: "Lead Acid Electric" },
      { engType: "Electric" },
      { engType: "Lithium-ion Electric" }
    ]
  });
  console.log(`✅ Deleted ${deletedDetails.deletedCount} forklift details`);

  // Clear existing electric ranges
  console.log("🗑️  Clearing existing electric ranges...");
  const deletedRanges = await Forklift.deleteMany({
    range: {
      $in: [
        "M Series (3 Wheel) Lead Acid Electric Rear Wheel Drive",
        "M Series (3 Wheel) Lithium Electric Rear Wheel Drive",
        "M Series (3 Wheel) Lead Acid Electric Front Wheel Drive",
        "M Series (3 Wheel) Lithium Electric Front Wheel Drive",
        "A Series (4 Wheel) Lead Acid Electric",
        "AA Series (4 Wheel) Lithium Electric",
        "AX Series (4 Wheel) Lithium Electric"
      ]
    }
  });
  console.log(`✅ Deleted ${deletedRanges.deletedCount} ranges`);

  // Seed forklift details
  console.log("📦 Seeding forklift details...");
  let count = 0;
  for (let forkliftItem of allElectricData) {
    const forky = new Forkliftdetail(forkliftItem);
    const doc = await forky.save();
    count++;
    console.log(`✅ Seeded ${count}: ${doc.model} (${doc.engType})`);
  }

  // Seed ranges
  console.log("📦 Seeding ranges...");
  for (let rangeItem of rangeData) {
    const forky = new Forklift(rangeItem);
    const doc = await forky.save();
    console.log(`✅ Seeded range: ${doc.range}`);
  }

  mongoose.disconnect();
  console.log("🎉 M Series Electric Seed Complete!");
}

seed().catch(console.error);
