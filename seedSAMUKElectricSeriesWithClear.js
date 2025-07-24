const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");
const { Forklift } = require("./models/forklift");

// M Series Electric Data (8 models) + A Series Electric Data (6 models) + AA Series Electric Data (6 models) + AX Series Electric Data (8 models) = 28 models total
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
  },
  // A Series Lead Acid Electric Data (6 models)
  {
    model: "FBA15-JZ",
    capacity: 1500,
    engType: "Lead Acid Electric",
    basePrice: 10017,
    imgName: "ASeries.jpg",
    modeldescription:[{description:"A Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
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
          { mastlength: 4800, closedheight: 2140, freeliftheight: 1575, price: 1120 },
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
    tyres: [
      { tyretype: "S/E Tyres", price: 368 },
      { tyretype: "Non-Marking S/E Tyres", price: 388 },
      { tyretype: "Super Elastic Tyres", price: 360 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "48V 420A/H Chinese",
    defaultcharger: "No",
    batteries: [
      {
        batterytype: "48V 420 A/H UK Supply 5Yr Warranty",
        price: 1606
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
    model: "FBA18-JZ",
    capacity: 1750,
    engType: "Lead Acid Electric",
    basePrice: 10140,
    imgName: "ASeries.jpg",
    modeldescription:[{description:"A Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
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
          { mastlength: 4350, closedheight: 2065, freeliftheight: 1425, price: 851 },
          { mastlength: 4500, closedheight: 2115, freeliftheight: 1475, price: 950 },
          { mastlength: 4800, closedheight: 2140, freeliftheight: 1575, price: 1120 },
          { mastlength: 5000, closedheight: 2315, freeliftheight: 1675, price: 1220 },
          { mastlength: 5500, closedheight: 2465, freeliftheight: 1840, price: 1472 },
          { mastlength: 6000, closedheight: 2665, freeliftheight: 2025, price: 1730 },
          { mastlength: 6500, closedheight: 2665, freeliftheight: 2205, price: 1910 }
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
    tyres: [
      { tyretype: "S/E Tyres", price: 368 },
      { tyretype: "Non-Marking S/E Tyres", price: 388 },
      { tyretype: "Super Elastic Tyres", price: 360 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "48V 420A/H Chinese",
    defaultcharger: "No",
    batteries: [
      {
        batterytype: "48V 420 A/H UK Supply 5Yr Warranty",
        price: 1606
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
        chargertype: "3 Phase 12 Hour 48V 6",
        price: 480
      },
      {
        chargertype: "3 Phase 8 Hour 48V 80",
        price: 488
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
    model: "FBA20-JZ",
    capacity: 2000,
    engType: "Lead Acid Electric",
    basePrice: 11100,
    imgName: "ASeries.jpg",
    modeldescription:[{description:"A Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2015, price: 0 },
          { mastlength: 3300, closedheight: 2165, price: 210 },
          { mastlength: 3500, closedheight: 2265, price: 298 },
          { mastlength: 4000, closedheight: 2565, price: 510},
          { mastlength: 4500, closedheight: 2815, price: 737},
          { mastlength: 5000, closedheight: 3065, price: 795}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2015, freeliftheight: 1420, price: 460 },
          { mastlength: 3300, closedheight: 2165, freeliftheight: 1570, price: 576 },
          { mastlength: 3500, closedheight: 2265, freeliftheight: 1670, price: 701}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2015, freeliftheight: 1390, price: 1120 },
          { mastlength: 4500, closedheight: 2065, freeliftheight: 1445, price: 1120 },
          { mastlength: 4800, closedheight: 2190, freeliftheight: 1590, price: 1408 },
          { mastlength: 5000, closedheight: 2265, freeliftheight: 1640, price: 1530 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1765, price: 1830 },
          { mastlength: 6000, closedheight: 2615, freeliftheight: 1990, price: 1780 },
          { mastlength: 6500, closedheight: 2840, freeliftheight: 2205, price: 1900 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 40 },
      { forklength: 1200, price: 80 },
      { forklength: 1370, price: 120 },
      { forklength: 1520, price: 160 },
      { forklength: 1800, price: 200 }
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
      { forkpositionertype: "", price: 1800 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 465 },
      { tyretype: "Non-Marking Solid S/E Tyres", price: 456 },
      { tyretype: "Super Elastic Tyres", price: 480 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "48V 600A/H Chinese",
    defaultcharger: "No",
    batteries: [
      {
        batterytype: "48V 600A/H",
        price: 1903
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
        price: 515
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
    model: "FBA25-JZ",
    capacity: 2500,
    engType: "Lead Acid Electric",
    basePrice: 11278,
    imgName: "ASeries.jpg",
    modeldescription:[{description:"A Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2015, price: 0 },
          { mastlength: 3300, closedheight: 2165, price: 210 },
          { mastlength: 3500, closedheight: 2265, price: 298 },
          { mastlength: 4000, closedheight: 2565, price: 510},
          { mastlength: 4500, closedheight: 2815, price: 737},
          { mastlength: 5000, closedheight: 3065, price: 795}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2015, freeliftheight: 1420, price: 460 },
          { mastlength: 3300, closedheight: 2165, freeliftheight: 1570, price: 576 },
          { mastlength: 3500, closedheight: 2265, freeliftheight: 1670, price: 701}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2015, freeliftheight: 1390, price: 1120 },
          { mastlength: 4500, closedheight: 2065, freeliftheight: 1445, price: 1120 },
          { mastlength: 4800, closedheight: 2190, freeliftheight: 1590, price: 1408 },
          { mastlength: 5000, closedheight: 2265, freeliftheight: 1640, price: 1530 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1765, price: 1830 },
          { mastlength: 6000, closedheight: 2615, freeliftheight: 1990, price: 1780 },
          { mastlength: 6500, closedheight: 2840, freeliftheight: 2205, price: 1900 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 40 },
      { forklength: 1200, price: 80 },
      { forklength: 1370, price: 120 },
      { forklength: 1520, price: 160 },
      { forklength: 1800, price: 200 }
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
      { forkpositionertype: "", price: 1800 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 465 },
      { tyretype: "Non-Marking Solid S/E Tyres", price: 456 },
      { tyretype: "Super Elastic Tyres", price: 480 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "48V 600A/H Chinese",
    defaultcharger: "No",
    batteries: [
      {
        batterytype: "48V 600A/H UK Supply 5Yr Warranty",
        price: 1903
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
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
  },
  {
    model: "FBA30-JZ",
    capacity: 3000,
    engType: "Lead Acid Electric",
    basePrice: 12840,
    imgName: "ASeries.jpg",
    modeldescription:[{description:"A Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, price: 0 },
          { mastlength: 3300, closedheight: 2190, price: 210 },
          { mastlength: 3500, closedheight: 2290, price: 298 },
          { mastlength: 4000, closedheight: 2670, price: 510},
          { mastlength: 4500, closedheight: 2920, price: 739},
          { mastlength: 5000, closedheight: 3095, price: 850}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, freeliftheight: 1390, price: 576 },
          { mastlength: 3300, closedheight: 2290, freeliftheight: 1540, price: 737 },
          { mastlength: 3500, closedheight: 2370, freeliftheight: 1640, price: 858}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2120, freeliftheight: 1460, price: 1120 },
          { mastlength: 4500, closedheight: 2170, freeliftheight: 1510, price: 1120 },
          { mastlength: 4800, closedheight: 2195, freeliftheight: 1610, price: 1589 },
          { mastlength: 5000, closedheight: 2370, freeliftheight: 1710, price: 1960 },
          { mastlength: 5500, closedheight: 2435, freeliftheight: 1835, price: 2580 },
          { mastlength: 6000, closedheight: 2720, freeliftheight: 2060, price: 3099 },
          { mastlength: 6500, closedheight: 2935, freeliftheight: 2935, price: 2846}
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 45 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 135 },
      { forklength: 1800, price: 180 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 510 },
      { sideshifttype: "Integral", price: 520 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1900 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 590 },
      { tyretype: "Non-Marking Solid S/E Tyres", price: 610 },
      { tyretype: "Super Elastic Tyres", price: 620 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "80V 500A/H Chinese",
    defaultcharger: "No",
    batteries: [
      {
        batterytype: "80V 500A/H UK Supply 5Yr Warranty",
        price: 2165
      }
    ],
    chargers: [
      {
        chargertype: "3 Phase 12 Hour 80V 80",
        price: 537
      },
      {
        chargertype: "3 Phase 8 Hour 80V 100",
        price: 520
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
    model: "FBA35-JZ",
    capacity: 3500,
    engType: "Lead Acid Electric",
    basePrice: 13697,
    imgName: "ASeries.jpg",
    modeldescription:[{description:"A Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, price: 0 },
          { mastlength: 3300, closedheight: 2190, price: 210 },
          { mastlength: 3500, closedheight: 2290, price: 298 },
          { mastlength: 4000, closedheight: 2670, price: 510},
          { mastlength: 4500, closedheight: 2920, price: 739}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, freeliftheight: 1390, price: 576 },
          { mastlength: 3300, closedheight: 2290, freeliftheight: 1540, price: 737 },
          { mastlength: 3500, closedheight: 2370, freeliftheight: 1640, price: 858}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2120, freeliftheight: 1460, price: 1120 },
          { mastlength: 4500, closedheight: 2170, freeliftheight: 1510, price: 1120 },
          { mastlength: 4800, closedheight: 2270, freeliftheight: 1610, price: 1589 },
          { mastlength: 5000, closedheight: 2370, freeliftheight: 1710, price: 1960 },
          { mastlength: 5500, closedheight: 2435, freeliftheight: 1835, price: 2580 },
          { mastlength: 6000, closedheight: 2720, freeliftheight: 2060, price: 3099 },
          { mastlength: 6500, closedheight: 2935, freeliftheight: 2935, price: 2846}
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 45 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 135 },
      { forklength: 1800, price: 180 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 510 },
      { sideshifttype: "Integral", price: 520 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1950 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 590 },
      { tyretype: "Non-Marking Solid S/E Tyres", price: 610 },
      { tyretype: "Super Elastic Tyres", price: 620 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "80V 500A/H Chinese",
    defaultcharger: "No",
    batteries: [
      {
        batterytype: "80V 500A/H UK Supply 5 year Warranty",
        price: 2165
      }
    ],
    chargers: [
      {
        chargertype: "3 Phase 12 Hour 80V 80",
        price: 537
      },
      {
        chargertype: "3 Phase 8 Hour 80V 100",
        price: 520
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
  // AA Series Lithium Electric Data (6 models)
  {
    model: "FB15-A",
    capacity: 1500,
    engType: "Lithium-ion Electric",
    basePrice: 14300,
    imgName: "AA-SERIES-15-35T.jpg",
    modeldescription:[{description:"AA Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
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
          { mastlength: 4350, closedheight: 2065, freeliftheight: 1425, price: 851 },
          { mastlength: 4500, closedheight: 2115, freeliftheight: 1475, price: 950 },
          { mastlength: 4800, closedheight: 2140, freeliftheight: 1575, price: 1120 },
          { mastlength: 5000, closedheight: 2315, freeliftheight: 1675, price: 1220 },
          { mastlength: 5500, closedheight: 2465, freeliftheight: 1840, price: 1472 },
          { mastlength: 6000, closedheight: 2665, freeliftheight: 2025, price: 1730 },
          { mastlength: 6500, closedheight: 2790, freeliftheight: 2200, price: 1910 }
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
    tyres: [
      { tyretype: "S/E Tyres", price: 368 },
      { tyretype: "Non-Marking S/E Tyres", price: 388 },
      { tyretype: "Super Elastic Tyres", price: 360 }
    ],
    seatrequired: 'true',
    seat: [
        { seattype: "Standard", price: 192 },
        { seattype: "Full Comfort Suspension", price: 298 },
        { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "83.2V 230A/H Li-ion",
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
    model: "FB18-A",
    capacity: 1750,
    engType: "Lithium-ion Electric",
    basePrice: 14600,
    imgName: "AA-SERIES-15-35T.jpg",
    modeldescription:[{description:"AA Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
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
          { mastlength: 4350, closedheight: 2065, freeliftheight: 1425, price: 851 },
          { mastlength: 4500, closedheight: 2115, freeliftheight: 1475, price: 950 },
          { mastlength: 4800, closedheight: 2140, freeliftheight: 1575, price: 1120 },
          { mastlength: 5000, closedheight: 2315, freeliftheight: 1675, price: 1220 },
          { mastlength: 5500, closedheight: 2465, freeliftheight: 1840, price: 1472 },
          { mastlength: 6000, closedheight: 2665, freeliftheight: 2025, price: 1730 },
          { mastlength: 6500, closedheight: 2790, freeliftheight: 2200, price: 1910 }
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
    tyres: [
      { tyretype: "S/E Tyres", price: 368 },
      { tyretype: "Non-Marking S/E Tyres", price: 388 },
      { tyretype: "Super Elastic Tyres", price: 360 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "83.2V 230A/H Li-ion",
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
    model: "FB20-A",
    capacity: 2000,
    engType: "Lithium-ion Electric",
    basePrice: 15198,
    imgName: "AA-SERIES-15-35T.jpg",
    modeldescription:[{description:"AA Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2015, price: 0 },
          { mastlength: 3300, closedheight: 2165, price: 210 },
          { mastlength: 3500, closedheight: 2265, price: 298 },
          { mastlength: 4000, closedheight: 2565, price: 510},
          { mastlength: 4500, closedheight: 2815, price: 737},
          { mastlength: 5000, closedheight: 3065, price: 795}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2015, freeliftheight: 1420, price: 460 },
          { mastlength: 3300, closedheight: 2165, freeliftheight: 1570, price: 576 },
          { mastlength: 3500, closedheight: 2265, freeliftheight: 1670, price: 701}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2015, freeliftheight: 1390, price: 1120 },
          { mastlength: 4500, closedheight: 2065, freeliftheight: 1445, price: 1120 },
          { mastlength: 4800, closedheight: 2190, freeliftheight: 1590, price: 1408 },
          { mastlength: 5000, closedheight: 2265, freeliftheight: 1640, price: 1530 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1765, price: 1830 },
          { mastlength: 6000, closedheight: 2615, freeliftheight: 1990, price: 1780 },
          { mastlength: 6500, closedheight: 2840, freeliftheight: 2205, price: 1900 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 40 },
      { forklength: 1200, price: 80 },
      { forklength: 1370, price: 120 },
      { forklength: 1520, price: 160 },
      { forklength: 1800, price: 200 }
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
      { forkpositionertype: "", price: 1800 }
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 465 },
      { tyretype: "Non-Marking Solid S/E", price: 456 },
      { tyretype: "Super Elastic", price: 480 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "80V 230A/H Li-ion",
    defaultcharger: "Fast",
    batteries: [
      {
        batterytype: "80V 304A/H",
        price: 989
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
    model: "FB25-A",
    capacity: 2500,
    engType: "Lithium-ion Electric",
    basePrice: 115601,
    imgName: "AA-SERIES-15-35T.jpg",
    modeldescription:[{description:"AA Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2015, price: 0 },
          { mastlength: 3300, closedheight: 2165, price: 210 },
          { mastlength: 3500, closedheight: 2265, price: 298 },
          { mastlength: 4000, closedheight: 2565, price: 510},
          { mastlength: 4500, closedheight: 2815, price: 737},
          { mastlength: 5000, closedheight: 3065, price: 795}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2015, freeliftheight: 1420, price: 460 },
          { mastlength: 3300, closedheight: 2165, freeliftheight: 1570, price: 576 },
          { mastlength: 3500, closedheight: 2265, freeliftheight: 1670, price: 701}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2015, freeliftheight: 1390, price: 1120 },
          { mastlength: 4500, closedheight: 2065, freeliftheight: 1445, price: 1120 },
          { mastlength: 4800, closedheight: 2190, freeliftheight: 1590, price: 1408 },
          { mastlength: 5000, closedheight: 2265, freeliftheight: 1640, price: 1530 },
          { mastlength: 5500, closedheight: 2390, freeliftheight: 1765, price: 1830 },
          { mastlength: 6000, closedheight: 2615, freeliftheight: 1990, price: 1780 },
          { mastlength: 6500, closedheight: 2840, freeliftheight: 2205, price: 1900 }
        ]
      }
    ],
    forks: [
      { forklength: 1070, price: 40 },
      { forklength: 1200, price: 80 },
      { forklength: 1370, price: 120 },
      { forklength: 1520, price: 160 },
      { forklength: 1800, price: 200 }
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
      { forkpositionertype: "", price: 1800 }
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 465 },
      { tyretype: "Non-Marking Solid S/E", price: 456 },
      { tyretype: "Super Elastic", price: 480 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "80V 230A/H Li-ion",
    defaultcharger: "Fast",
    batteries: [
      {
        batterytype: "80V 304A/H",
        price: 989
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
    model: "FB30-A",
    capacity: 3000,
    engType: "Lithium-ion Electric",
    basePrice: 17296,
    imgName: "AA-SERIES-15-35T.jpg",
    modeldescription:[{description:"AA Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, price: 0 },
          { mastlength: 3300, closedheight: 2190, price: 210 },
          { mastlength: 3500, closedheight: 2290, price: 298 },
          { mastlength: 4000, closedheight: 2670, price: 510},
          { mastlength: 4500, closedheight: 2920, price: 739},
          { mastlength: 5000, closedheight: 3095, price: 850}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, freeliftheight: 1390, price: 576 },
          { mastlength: 3300, closedheight: 2290, freeliftheight: 1540, price: 737 },
          { mastlength: 3500, closedheight: 2370, freeliftheight: 1640, price: 858}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2120, freeliftheight: 1460, price: 1120 },
          { mastlength: 4500, closedheight: 2170, freeliftheight: 1510, price: 1120 },
          { mastlength: 4800, closedheight: 2195, freeliftheight: 1610, price: 1589 },
          { mastlength: 5000, closedheight: 2370, freeliftheight: 1710, price: 1960 },
          { mastlength: 5500, closedheight: 2435, freeliftheight: 1835, price: 2580 },
          { mastlength: 6000, closedheight: 2720, freeliftheight: 2060, price: 3099 },
          { mastlength: 6500, closedheight: 2935, freeliftheight: 2935, price: 2846}
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 45 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 135 },
      { forklength: 1800, price: 180 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 510 },
      { sideshifttype: "Integral", price: 520 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1900 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 590 },
      { tyretype: "Non-Marking Solid S/E Tyres", price: 610 },
      { tyretype: "Super Elastic Tyres", price: 620 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "80V 346A/H Li-ion",
    defaultcharger: "Fast",
    batteries: [
      {
        batterytype: "80V 460A/H",
        price: 1791
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
    model: "FB35-A",
    capacity: 3500,
    engType: "Lithium-ion Electric",
    basePrice: 18001,
    imgName: "AA-SERIES-15-35T.jpg",
    modeldescription:[{description:"AA Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, price: 0 },
          { mastlength: 3300, closedheight: 2190, price: 210 },
          { mastlength: 3500, closedheight: 2290, price: 298 },
          { mastlength: 4000, closedheight: 2670, price: 510},
          { mastlength: 4500, closedheight: 2920, price: 739}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, freeliftheight: 1390, price: 576 },
          { mastlength: 3300, closedheight: 2290, freeliftheight: 1540, price: 737 },
          { mastlength: 3500, closedheight: 2370, freeliftheight: 1640, price: 858}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2120, freeliftheight: 1460, price: 1120 },
          { mastlength: 4500, closedheight: 2170, freeliftheight: 1510, price: 1120 },
          { mastlength: 4800, closedheight: 2270, freeliftheight: 1610, price: 1589 },
          { mastlength: 5000, closedheight: 2370, freeliftheight: 1710, price: 1960 },
          { mastlength: 5500, closedheight: 2435, freeliftheight: 1835, price: 2580 },
          { mastlength: 6000, closedheight: 2720, freeliftheight: 2060, price: 3099 },
          { mastlength: 6500, closedheight: 2935, freeliftheight: 2935, price: 2846}
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 45 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 135 },
      { forklength: 1800, price: 180 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 510 },
      { sideshifttype: "Integral", price: 520 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1950 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 590 },
      { tyretype: "Non-Marking Solid S/E Tyres", price: 610 },
      { tyretype: "Super Elastic Tyres", price: 620 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "80V 346A/H Li-ion",
    defaultcharger: "Fast",
    batteries: [
      {
        batterytype: "80V 460A/H",
        price: 1791
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
  // AX Series Lithium Electric Data (8 models)
  {
    model: "FB25-AX",
    capacity: 2500,
    engType: "Lithium-ion Electric",
    basePrice: 0,
    imgName: "AX-SERIES-30T.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    voltagerequired : true,    
    voltage :[
      {
        label:"Light Duty (2.5 - 3 hrs runtime)", 
        price: 13800, 
        defaultbattery: "76.8V 350A/H Lithium"
      },
      {
        label:"Standard (4.5 - 5 hrs runtime)", 
        price: 19765, 
        defaultbattery: "115V 230A/H Lithium"
      },
      {
        label:"Heavy Duty (6 - 6.5 hrs runtime)", 
        price: 20345, 
        defaultbattery: "153.6V 228A/H Lithium"
      }
    ],
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2050, price: 0 },
          { mastlength: 3300, closedheight: 2200, price: 210 },
          { mastlength: 3500, closedheight: 2300, price: 298 },
          { mastlength: 4000, closedheight: 2600, price: 510},
          { mastlength: 4500, closedheight: 2850, price: 737},
          { mastlength: 5000, closedheight: 3100, price: 795}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2050, freeliftheight: 1420, price: 460 },
          { mastlength: 3300, closedheight: 2165, freeliftheight: 1570, price: 576 },
          { mastlength: 3500, closedheight: 2265, freeliftheight: 1670, price: 701 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2100, freeliftheight: 1390, price: 1120 },
          { mastlength: 4500, closedheight: 2150, freeliftheight: 1440, price: 1120 },
          { mastlength: 4800, closedheight: 2240, freeliftheight: 1540, price: 1408 },
          { mastlength: 5000, closedheight: 2393, freeliftheight: 1640, price: 1530 },
          { mastlength: 5500, closedheight: 2627, freeliftheight: 1765, price: 1630 },
          { mastlength: 6000, closedheight: 2860, freeliftheight: 1990, price: 1760 },
          { mastlength: 6500, closedheight: 3095, freeliftheight: 2205, price: 1900}
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
      { forkpositionertype: "", price: 1800 }
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 465 },
      { tyretype: "Non-Marking S/E Solid", price: 486 },
      { tyretype: "Super Elastic", price: 480 }
    ],
    seatrequired: 'true',
    seat: [
        { seattype: "Standard", price: 192 },
        { seattype: "Full Comfort Suspension", price: 298 },
        { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
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
    model: "FB30-AX",
    capacity: 3000,
    engType: "Lithium-ion Electric",
    basePrice: 0,
    imgName: "AX-SERIES-30T.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    voltagerequired : true,    
    voltage :[
      {
        label:"Light Duty (2.5 - 3 hrs runtime)", 
        price: 15600, 
        defaultbattery: "76.8V 350A/H Lithium"
      },
      {
        label:"Standard (4.5 - 5 hrs runtime)", 
        price: 19882,
        defaultbattery: "115V 230A/H Lithium"
      },
      {
        label:"Heavy Duty (6 - 6.5 hrs runtime)", 
        price: 21962,
        defaultbattery: "153.6V 228A/H Lithium"
      }
    ],
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, price: 0 },
          { mastlength: 3300, closedheight: 2190, price: 210 },
          { mastlength: 3500, closedheight: 2290, price: 298 },
          { mastlength: 4000, closedheight: 2590, price: 510},
          { mastlength: 4500, closedheight: 2840, price: 739}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, freeliftheight: 1415, price: 576 },
          { mastlength: 3300, closedheight: 2290, freeliftheight: 1565, price: 737 },
          { mastlength: 3500, closedheight: 2590, freeliftheight: 1665, price: 858}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2090, freeliftheight: 1460, price: 1120 },
          { mastlength: 4500, closedheight: 2140, freeliftheight: 1510, price: 1120 },
          { mastlength: 4800, closedheight: 2225, freeliftheight: 1610, price: 1589 },
          { mastlength: 5000, closedheight: 2383, freeliftheight: 1710, price: 1960 },
          { mastlength: 5500, closedheight: 2617, freeliftheight: 1835, price: 2580 },
          { mastlength: 6000, closedheight: 2850, freeliftheight: 2060, price: 2846},
          { mastlength: 6500, closedheight: 3035, freeliftheight: 2275, price: 3099}
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 45 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 135 },
      { forklength: 1800, price: 180 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 510 },
      { sideshifttype: "Integral", price: 520 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1950 }
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 590 },
      { tyretype: "Non-Marking Solid S/E Tyres", price: 610 },
      { tyretype: "Super Elastic Tyres", price: 620 },
      { tyretype: "Dual Drive", price: 1198 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
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
    model: "FB35-AX",
    capacity: 3500,
    engType: "Lithium-ion Electric",
    basePrice: 0,
    imgName: "AX-SERIES-30T.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    voltagerequired : true,    
    voltage :[
      {
        label:"Light Duty (2.5 - 3 hrs runtime)", 
        price: 16200, 
        defaultbattery: "76.8V 350A/H Lithium"
      },
      {
        label:"Standard (4.5 - 5 hrs runtime)", 
        price: 20588,
        defaultbattery: "115V 230A/H Lithium"
      },
      {
        label:"Heavy Duty (6 - 6.5 hrs runtime)",    
        price: 22706,
        defaultbattery: "153.6V 228A/H Lithium"
      }
    ],
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, price: 0 },
          { mastlength: 3300, closedheight: 2190, price: 210 },
          { mastlength: 3500, closedheight: 2290, price: 298 },
          { mastlength: 4000, closedheight: 2590, price: 510},
          { mastlength: 4500, closedheight: 2840, price: 739}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, freeliftheight: 1415, price: 576 },
          { mastlength: 3300, closedheight: 2290, freeliftheight: 1565, price: 737 },
          { mastlength: 3500, closedheight: 2590, freeliftheight: 1665, price: 858 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2190, freeliftheight: 1460, price: 1120 },
          { mastlength: 4500, closedheight: 2140, freeliftheight: 1510, price: 1120 },
          { mastlength: 4800, closedheight: 2300, freeliftheight: 1610, price: 1589 },
          { mastlength: 5000, closedheight: 2383, freeliftheight: 1710, price: 1960 },
          { mastlength: 5500, closedheight: 2617, freeliftheight: 1835, price: 2580 },
          { mastlength: 6000, closedheight: 2850, freeliftheight: 2060, price: 2846 },
          { mastlength: 6500, closedheight: 3035, freeliftheight: 2275, price: 3099 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 45 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 135 },
      { forklength: 1800, price: 180 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 510 },
      { sideshifttype: "Integral", price: 520 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 1950 }
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 590 },
      { tyretype: "Non-Marking Solid S/E", price: 610 },
      { tyretype: "Super Elastic", price: 620 },
      { tyretype: "Dual Drive", price: 1198 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
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
    model: "FB45-AX",
    capacity: 4500,
    engType: "Lithium-ion Electric",
    basePrice: 29240,
    percentOffBase: 7,
    offer:'false',
    imgName: "AX-Series-45.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2250, price: 0 },
          { mastlength: 3300, closedheight: 2400, price: 262 },
          { mastlength: 3500, closedheight: 2500, price: 350 },
          { mastlength: 4000, closedheight: 2800, price: 514},
          { mastlength: 4000, closedheight: 3050, price: 890}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2250, freeliftheight: 1430, price: 891},
          { mastlength: 3300, closedheight: 2400, freeliftheight: 1580, price: 1130 },
          { mastlength: 3500, closedheight: 2500, freeliftheight: 1680, price: 1200 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2235, freeliftheight: 1395, price: 1730 },
          { mastlength: 4500, closedheight: 2285, freeliftheight: 1450, price: 1730 },
          { mastlength: 4800, closedheight: 2385, freeliftheight: 1545, price: 2160 },
          { mastlength: 5000, closedheight: 2485, freeliftheight: 1645, price: 2160 },
          { mastlength: 5500, closedheight: 2610, freeliftheight: 1770, price: 2580 },
          { mastlength: 6000, closedheight: 2850, freeliftheight: 2010, price: 3099 },
          { mastlength: 6500, closedheight: 3050, freeliftheight: 2210, price: 3430 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 45 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 135 },
      { forklength: 1800, price: 180 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 550 },
      { sideshifttype: "Integral", price: 550 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 3100 }
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 788 },
      { tyretype: "Non-Marking Solid S/E", price: 1039 },
      { tyretype: "Dual Drive", price: 1198 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "153V 304A/H Lithium",
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
    model: "FB50-AX COMPACT",
    capacity: 5000,
    engType: "Lithium-ion Electric",
    basePrice: 33040,
    percentOffBase: 7,
    offer:'false',
    imgName: "AX-Series-45.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3500, closedheight: 2500, price: 352 },
          { mastlength: 4000, closedheight: 2800, price: 669},
          { mastlength: 4500, closedheight: 3050, price: 988},
          { mastlength: 5000, closedheight: 3300, price: 1408}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2250, freeliftheight: 1430, price: 1290},
          { mastlength: 3300, closedheight: 2400, freeliftheight: 1580, price: 1589 },
          { mastlength: 3500, closedheight: 2500, freeliftheight: 1680, price: 1620 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2235, freeliftheight: 1395, price: 2225 },
          { mastlength: 4500, closedheight: 2285, freeliftheight: 1450, price: 2419 },
          { mastlength: 4800, closedheight: 2385, freeliftheight: 1545, price: 2678 },
          { mastlength: 5000, closedheight: 2485, freeliftheight: 1645, price: 2678 },
          { mastlength: 5500, closedheight: 2630, freeliftheight: 1770, price: 3193 },
          { mastlength: 6000, closedheight: 2870, freeliftheight: 2010, price: 3601 },
          { mastlength: 6500, closedheight: 3095, freeliftheight: 2210, price: 4226 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 0 },
      { forklength: 1370, price: 60 },
      { forklength: 1520, price: 180 },
      { forklength: 1800, price: 240 }
    ],
    valves: [
      { valvetype: "3rd", price: 190 },
      { valvetype: "3rd + 4th", price: 270 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 1600 },
      { sideshifttype: "Integral", price: 1600 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 3900 }
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 1150 },
      { tyretype: "Dual Drive", price: 1198 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "153V 304A/H Lithium",
    defaultcharger: "Fast",
    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 1300 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1700 },
      { cabinoption: "Full Steel Cabin", price: 2050 }
    ]
  },
  {
    model: "FB50-AX BIG",
    capacity: 5000,
    engType: "Lithium-ion Electric",
    basePrice: 48900,
    percentOffBase: 7,
    offer:'false',
    imgName: "AX-Series-45.jpg",
    modeldescription:[{description:"AX Series"}, {description:"Twin Front Wheels"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3500, closedheight: 2500, price: 352 },
          { mastlength: 4000, closedheight: 2800, price: 669},
          { mastlength: 4500, closedheight: 3050, price: 988},
          { mastlength: 5000, closedheight: 3300, price: 1408}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2250, freeliftheight: 1430, price: 1290},
          { mastlength: 3300, closedheight: 2400, freeliftheight: 1580, price: 1589 },
          { mastlength: 3500, closedheight: 2500, freeliftheight: 1680, price: 1620 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2235, freeliftheight: 1395, price: 2225 },
          { mastlength: 4500, closedheight: 2285, freeliftheight: 1450, price: 2419 },
          { mastlength: 4800, closedheight: 2385, freeliftheight: 1545, price: 2678 },
          { mastlength: 5000, closedheight: 2485, freeliftheight: 1645, price: 2678 },
          { mastlength: 5500, closedheight: 2630, freeliftheight: 1770, price: 3193 },
          { mastlength: 6000, closedheight: 2870, freeliftheight: 2010, price: 3601 },
          { mastlength: 6500, closedheight: 3095, freeliftheight: 2210, price: 4226 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 0 },
      { forklength: 1370, price: 60 },
      { forklength: 1520, price: 180 },
      { forklength: 1800, price: 240 }
    ],
    valves: [
      { valvetype: "3rd", price: 190 },
      { valvetype: "3rd + 4th", price: 270 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 1600 },
      { sideshifttype: "Integral", price: 1600 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 3900 }
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 1150 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "352V 230A/H Lithium",
    defaultcharger: "Fast",
    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 1300 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1700 },
      { cabinoption: "Full Steel Cabin", price: 2050 }
    ]
  },
  {
    model: "FB70-AX",
    capacity: 7000,
    engType: "Lithium-ion Electric",
    basePrice: 50200,
    percentOffBase: 7,
    offer:'false',
    imgName: "AX-Series-45.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3500, closedheight: 2500, price: 352 },
          { mastlength: 4000, closedheight: 2800, price: 669},
          { mastlength: 4500, closedheight: 3050, price: 988},
          { mastlength: 5000, closedheight: 3300, price: 1408}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, price: 1290},
          { mastlength: 3300, price: 1589 },
          { mastlength: 3500, price: 1620 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, price: 2225 },
          { mastlength: 4500, price: 2419 },
          { mastlength: 4800, price: 2678 },
          { mastlength: 5000, price: 2678 },
          { mastlength: 5500, price: 3193 },
          { mastlength: 6000, price: 3601 },
          { mastlength: 6500, price: 4226 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 0 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 210 },
      { forklength: 1800, price: 270 }
    ],
    valves: [
      { valvetype: "3rd", price: 190 },
      { valvetype: "3rd + 4th", price: 270 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 1600 },
      { sideshifttype: "Integral", price: 1600 }
    ],
    forkpositioner: [
      { forkpositionertype: "", price: 4200 }
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 1150 }
    ],
    seatrequired: 'true',
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    defaultbattery: "352V 230A/H Lithium",
    defaultcharger: "Fast",
    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    cabin: [
      { cabinoption: "Half Cabin", price: 1300 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1700 },
      { cabinoption: "Full Steel Cabin", price: 2050 }
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
  },
  {
    range: "A Series (4 Wheel) Lead Acid Electric",
    models: [
      {
        model: "FBA15-JZ",
        capacity: 1500,
        engType: "Electric"
      },
      {
        model: "FBA18-JZ",
        capacity: 1750,
        engType: "Electric"
      },
      {
        model: "FBA20-JZ",
        capacity: 2000,
        engType: "Electric"
      },
      {
        model: "FBA25-JZ",
        capacity: 2500,
        engType: "Electric"
      },
      {
        model: "FBA30-JZ",
        capacity: 3000,
        engType: "Electric"
      },
      {
        model: "FBA35-JZ",
        capacity: 3500,
        engType: "Electric"
      }
    ]
  },
  {
    range: "AA Series (4 Wheel) Lithium Electric",
    models: [
      {
        model: "FB15-A",
        capacity: 1500,
        engType: "Electric"
      },
      {
        model: "FB18-A",
        capacity: 1750,
        engType: "Electric"
      },
      {
        model: "FB20-A",
        capacity: 2000,
        engType: "Electric"
      },
      {
        model: "FB25-A",
        capacity: 2500,
        engType: "Electric"
      },
      {
        model: "FB30-A",
        capacity: 3000,
        engType: "Electric"
      },
      {
        model: "FB35-A",
        capacity: 3500,
        engType: "Electric"
      }
    ]
  },
  {
    range: "AX Series (4 Wheel) Lithium Electric",
    models: [
      {
        model: "FB25-AX",
        capacity: 2500,
        engType: "Electric"
      },
      {
        model: "FB30-AX",
        capacity: 3000,
        engType: "Electric"
      },
      {
        model: "FB35-AX",
        capacity: 3500,
        engType: "Electric"
      },
      {
        model: "FB45-AX",
        capacity: 4500,
        engType: "Electric"
      },
      {
        model: "FB50-AX COMPACT",
        capacity: 5000,
        engType: "Electric"
      },
      {
        model: "FB50-AX BIG",
        capacity: 5000,
        engType: "Electric"
      },
      {
        model: "FB70-AX",
        capacity: 7000,
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
