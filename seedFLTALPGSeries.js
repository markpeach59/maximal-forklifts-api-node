const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
  model: "FLTA25",
  capacity: 2500,
  engType: "LPG",
  basePrice: 14900,
  imgName: "M-modeldescription-GAS-25T.png",
  modeldescription:[{description:"A modeldescription"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
  masts: [
    {
      masttype: "2 Stage Free View Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2080, price: 0 },
        { mastlength: 3300, closedheight: 2230, price: 210}, 
        { mastlength: 4000, closedheight: 2630, price: 510},
        { mastlength: 4500, closedheight: 2880, price: 737},
        { mastlength: 5000, closedheight: 3130, price: 795}
      ]
    },
    {
      masttype: "2 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2080, freeliftheight: 1420, price: 460 },
        { mastlength: 3500, closedheight: 2165, freeliftheight: 1570, price: 536 },
        { mastlength: 3500, closedheight: 2265, freeliftheight: 1670, price: 600 },
        { mastlength: 4000, closedheight: 2630, freeliftheight: 1700, price: 701 }
      ]
    },
    {
      masttype: "3 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 4350, closedheight: 2130, freeliftheight: 1390, price: 1120 },
        { mastlength: 4500, closedheight: 2180, freeliftheight: 1440, price: 1120 },
        { mastlength: 4700, closedheight: 2245, freeliftheight: 1540, price: 1408 },
        { mastlength: 4800, closedheight: 2280, freeliftheight: 1580, price: 1408 },
        { mastlength: 5000, closedheight: 2428, freeliftheight: 1640, price: 1530 },
        { mastlength: 5500, closedheight: 2657, freeliftheight: 1765, price: 1630 },
        { mastlength: 6000, closedheight: 2890, freeliftheight: 1990, price: 1760 },
        { mastlength: 6500, closedheight: 3095, freeliftheight: 2205, price: 1900 }
      ]
    }
  ],
  forks: [
    { forklength: 1100, price: 40 },
    { forklength: 1200, price: 80 },
    { forklength: 1370, price: 120 },
    { forklength: 1500, price: 160 },
    { forklength: 1670, price: 200 }
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
    { forkpositionertype: "", price: 1800 },
  ],

  tyres: [
      { tyretype: "S/E Tyres", price: 465 },
      { tyretype: "Non-Marking S/E Tyres", price: 486 },
      { tyretype: "Super Elastic Tyres", price: 480 }],
  
  seat: [
    { seattype: "Standard", price: 192 },
    { seattype: "Full Comfort Suspension", price: 298 },
    { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
  ],
    
  cabin: [
    { cabinoption: "Half Cabin", price: 1100 },
    { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
    { cabinoption: "Full Steel Cabin", price: 1900 }
  ],

  heater:[ {heatertype:"Heater/Demister",price:110}],

  safetybluespot: [{ safetybluespottype: "", price: 90 }]

},
{
  model: "FLTA30",
  capacity: 3000,
  engType: "LPG",
  basePrice: 15300,
  imgName: "M-modeldescription-GAS-30-35T.png",
  modeldescription:[{description:"A modeldescription"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
  masts: [
    {
      masttype: "2 Stage Free View Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2080, price: 0 },
        { mastlength: 3300, closedheight: 2230, price: 210}, 
        { mastlength: 4000, closedheight: 2630, price: 510},
        { mastlength: 4500, closedheight: 2880, price: 737},
        { mastlength: 5000, closedheight: 3130, price: 850}
      ]
    },
    {
      masttype: "2 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2080, freeliftheight: 1420, price: 576 },
        { mastlength: 3500, closedheight: 2265, freeliftheight: 1570, price: 737 }
      ]
    },
    {
      masttype: "3 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 4350, closedheight: 2130, freeliftheight: 1390, price: 1120 },
        { mastlength: 4500, closedheight: 2180, freeliftheight: 1440, price: 1120 },
        { mastlength: 4700, closedheight: 2245, freeliftheight: 1540, price: 1559 },
      
        { mastlength: 5000, closedheight: 2428, freeliftheight: 1640, price: 1960 },
        { mastlength: 5500, closedheight: 2657, freeliftheight: 1765, price: 2580 },
        { mastlength: 6000, closedheight: 2890, freeliftheight: 1990, price: 2846 },
        { mastlength: 6500, closedheight: 3095, freeliftheight: 2200, price: 3099 }
      ]
    }
  ],
  forks: [
    { forklength: 1100, price: 40 },
    { forklength: 1200, price: 80 },
    { forklength: 1370, price: 120 },
    { forklength: 1500, price: 160 },
    { forklength: 1670, price: 200 }
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
      { tyretype: "S/E Tyres", price: 590 },
      { tyretype: "Non-Marking S/E Tyres", price: 610 },
      { tyretype: "Dual Drive Tyres", price: 980 }
  ],
  
  seat: [
    { seattype: "Standard", price: 192 },
    { seattype: "Full Comfort Suspension", price: 298 },
    { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
  ],
    
  cabin: [
    { cabinoption: "Half Cabin", price: 1100 },
    { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
    { cabinoption: "Full Steel Cabin", price: 1900 }
  ],

  heater:[ {heatertype:"Heater/Demister", price:110}],

  safetybluespot: [{ safetybluespottype: "", price: 90 }]

},
{
  model: "FLTA35",
  capacity: 3500,
  engType: "LPG",
  basePrice: 15666,
  imgName: "M-modeldescription-GAS-30-35T.png",
  modeldescription:[{description:"A modeldescription"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
  masts: [
    {
      masttype: "2 Stage Free View Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2080, price: 0 },
        { mastlength: 3300, closedheight: 2230, price: 210}, 
        { mastlength: 4000, closedheight: 2630, price: 510},
        { mastlength: 4500, closedheight: 2880, price: 737},
        { mastlength: 5000, closedheight: 3130, price: 850}
      ]
    },
    {
      masttype: "2 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2080, freeliftheight: 1420, price: 576 },
        { mastlength: 3500, closedheight: 2265, freeliftheight: 1570, price: 737 }
      ]
    },
    {
      masttype: "3 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 4350, closedheight: 2130, freeliftheight: 1390, price: 1120 },
        { mastlength: 4500, closedheight: 2180, freeliftheight: 1440, price: 1120 },
        { mastlength: 4700, closedheight: 2245, freeliftheight: 1540, price: 1559 },
      
        { mastlength: 5000, closedheight: 2428, freeliftheight: 1640, price: 1960 },
        { mastlength: 5500, closedheight: 2657, freeliftheight: 1765, price: 2580 },
        { mastlength: 6000, closedheight: 2890, freeliftheight: 1990, price: 2846 },
        { mastlength: 6500, closedheight: 3095, freeliftheight: 2200, price: 3099 }
      ]
    }
  ],
  forks: [
    { forklength: 1100, price: 40 },
    { forklength: 1200, price: 80 },
    { forklength: 1370, price: 120 },
    { forklength: 1500, price: 160 },
    { forklength: 1670, price: 200 }
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
      { tyretype: "S/E Tyres", price: 590 },
      { tyretype: "Non-Marking S/E Tyres", price: 610 },
      { tyretype: "Dual Drive Tyres", price: 980 }
  ],
  
  seat: [
    { seattype: "Standard", price: 192 },
    { seattype: "Full Comfort Suspension", price: 298 },
    { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
  ],
    
  cabin: [
    { cabinoption: "Half Cabin", price: 1100 },
    { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
    { cabinoption: "Full Steel Cabin", price: 1900 }
  ],

  heater:[ {heatertype:"Heater/Demister", price:110}],

  safetybluespot: [{ safetybluespottype: "", price: 90 }]

},
{
  model: "FLTA45",
  capacity: 4500,
  engType: "LPG",
  basePrice: 22300,
  imgName: "M-modeldescription-DIESEL-45-compact50T.jpg",
  modeldescription:[{description:"A modeldescription"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
  masts: [
    {
      masttype: "2 Stage Free View Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2080, price: 0 },
        { mastlength: 3300, closedheight: 2230, price: 262},
        { mastlength: 3500, closedheight: 2810, price: 380}, 
        { mastlength: 4000, closedheight: 3175, price: 514},
        { mastlength: 4500, closedheight: 3300, price: 737},
        { mastlength: 5000, closedheight: 3850, price: 960}
      ]
    },
    {
      masttype: "2 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2390, freeliftheight: 1425, price: 891 },
        { mastlength: 3500, closedheight: 2875, freeliftheight: 1675, price: 737 },
        { mastlength: 4000, closedheight: 3175, freeliftheight: 1995, price: 737 }
      ]
    },
    {
      masttype: "3 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 4350, closedheight: 2350, freeliftheight: 1390, price: 1730 },
        { mastlength: 4500, closedheight: 2441, freeliftheight: 1440, price: 1790 },
        { mastlength: 4700, closedheight: 2507, freeliftheight: 1540, price: 2160 },
        { mastlength: 5000, closedheight: 2540, freeliftheight: 1645, price: 2580 },
        { mastlength: 5500, closedheight: 2765, freeliftheight: 1770, price: 2580 },
        { mastlength: 6000, closedheight: 3005, freeliftheight: 2010, price: 3099 },
        { mastlength: 6500, closedheight: 3050, freeliftheight: 2210, price: 3430 }
      ]
    }
  ],
  forks: [
    { forklength: 1100, price: 40 },
    { forklength: 1200, price: 80 },
    { forklength: 1370, price: 120 },
    { forklength: 1500, price: 160 },
    { forklength: 1670, price: 200 }
  ],
  valves: [
    { valvetype: "3rd", price: 90 },
    { valvetype: "3rd + 4th", price: 220 }
  ],
  
  sideshift: [
    { sideshifttype: "Hook On", price: 550 },
    { sideshifttype: "Integral", price: 560 }
  ],
 
  forkpositioner: [
    { forkpositionertype: "", price: 3100 }
  ],

  tyres: [
      { tyretype: "S/E Tyres", price: 788 },
      { tyretype: "Non-Marking White Tyres", price: 1400 },
      { tyretype: "Dual Drive Tyres", price: 900 }
  ],
  
  seat: [
    { seattype: "Standard", price: 192 },
    { seattype: "Full Comfort Suspension", price: 298 },
    { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
  ],
    
  cabin: [
    { cabinoption: "Half Cabin", price: 1100 },
    { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
    { cabinoption: "Full Steel Cabin", price: 1900 }
  ],

  heater:[ {heatertype:"Heater/Demister", price:190}],

  safetybluespot: [{ safetybluespottype: "", price: 90 }]

},
{
  model: "FLTA50S",
  capacity: 5000,
  engType: "LPG",
  basePrice: 22901,
  imgName: "M-modeldescription-DIESEL-45-compact50T.jpg",
  modeldescription:[{description:"A modeldescription"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
  masts: [
    {
      masttype: "2 Stage Free View Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2390, price: 0 },
        { mastlength: 3300, closedheight: 2540, price: 262},
        { mastlength: 3500, closedheight: 2870, price: 380}, 
        { mastlength: 4000, closedheight: 2940, price: 514},
        { mastlength: 4500, closedheight: 3190, price: 737},
        { mastlength: 5000, closedheight: 3440, price: 960}
      ]
    },
    {
      masttype: "2 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2390, freeliftheight: 1425, price: 891 },
        { mastlength: 3500, closedheight: 2875, freeliftheight: 1675, price: 1130 },
        { mastlength: 4000, closedheight: 2890, freeliftheight: 1975, price: 1260 }
      ]
    },
    {
      masttype: "3 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 4350, closedheight: 2350, freeliftheight: 1395, price: 1730 },
        { mastlength: 4500, closedheight: 2441, freeliftheight: 1480, price: 1790 },
        { mastlength: 4700, closedheight: 2507, freeliftheight: 1545, price: 2160 },
        { mastlength: 5000, closedheight: 2540, freeliftheight: 1645, price: 2300 },
        { mastlength: 5500, closedheight: 2765, freeliftheight: 1770, price: 2580 },
        { mastlength: 6000, closedheight: 3005, freeliftheight: 2010, price: 3099 },
        { mastlength: 6500, closedheight: 3050, freeliftheight: 2210, price: 3430 }
      ]
    }
  ],
  forks: [
    { forklength: 1100, price: 0 },
    { forklength: 1200, price: 0 },
    { forklength: 1370, price: 60 },
    { forklength: 1500, price: 180 },
    { forklength: 1670, price: 200 },
    { forklength: 1800, price: 240 }
  ],

  valves: [
    { valvetype: "3rd", price: 190 },
    { valvetype: "3rd + 4th", price: 260 }
  ],
  
  sideshift: [
    { sideshifttype: "Hook On", price: 550 },
    { sideshifttype: "Integral", price: 600 }
  ],
 
  forkpositioner: [
    { forkpositionertype: "", price: 3100 }
  ],

  tyres: [
      { tyretype: "S/E Tyres", price: 788 },
      { tyretype: "Non-Marking White Tyres", price: 1400 },
      { tyretype: "Dual Drive Tyres", price: 900 }
  ],
  
  seat: [
    { seattype: "Standard", price: 192 },
    { seattype: "Full Comfort Suspension", price: 298 },
    { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
  ],
    
  cabin: [
    { cabinoption: "Half Cabin", price: 1300 },
    { cabinoption: "Half Cabin with Canvas Sides", price: 1700 },
    { cabinoption: "Full Steel Cabin", price: 2050 }
  ],

  heater:[ {heatertype:"Heater/Demister", price:190}],

  safetybluespot: [{ safetybluespottype: "", price: 90 }]

},
{
  model: "FLTA50",
  capacity: 5000,
  engType: "LPG",
  basePrice: 26540,
  imgName: "M-modeldescription-GAS-50-70T.png",
  modeldescription:[{description:"A modeldescription"}],
  loadcenter:500,
  defaulttyre:"Pneumatic",
  masts: [
    {
      masttype: "2 Stage Free View Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2390, price: 0 },
        { mastlength: 3500, closedheight: 2870, price: 352}, 
        { mastlength: 4000, closedheight: 2940, price: 669},
        { mastlength: 4500, closedheight: 3190, price: 988},
        { mastlength: 5000, closedheight: 3440, price: 1408}
      ]
    },
    {
      masttype: "2 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2625, freeliftheight: 1555, price: 1290 },
        { mastlength: 3500, closedheight: 2775, freeliftheight: 1765, price: 1589 },
        { mastlength: 4000, closedheight: 2875, freeliftheight: 1805, price: 1620 }
      ]
    },
    {
      masttype: "3 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 4350, closedheight: 2630, freeliftheight: 1560, price: 2225 },
        { mastlength: 4500, closedheight: 2680, freeliftheight: 1685, price: 2419 },
        { mastlength: 4700, closedheight: 2780, freeliftheight: 1735, price: 2678 },
        { mastlength: 5000, closedheight: 2880, freeliftheight: 1835, price: 2678 },
        { mastlength: 5500, closedheight: 3005, freeliftheight: 1960, price: 3194 },
        { mastlength: 6000, closedheight: 3305, freeliftheight: 2260, price: 3601 },
        { mastlength: 6500, closedheight: 3530, freeliftheight: 2485, price: 4226 }
      ]
    }
  ],
  forks: [
    { forklength: 1200, price: 0 },
    { forklength: 1370, price: 0 },
    { forklength: 1500, price: 110 },
    { forklength: 1800, price: 165 },
    { forklength: 2120, price: 240 },
    { forklength: 2420, price: 295 }
  ],

  valves: [
    { valvetype: "3rd", price: 140 },
    { valvetype: "3rd + 4th", price: 305 }
  ],
  
  sideshift: [
    { sideshifttype: "Hook On", price: 550 },
    { sideshifttype: "Integral", price: 600 }
  ],
 
  forkpositioner: [
    { forkpositionertype: "" , price: null }
  ],

  tyres: [
      { tyretype: "S/E Tyres", price: 788 },
      { tyretype: "Non-Marking White Tyres", price: 1400 },
      { tyretype: "Dual Drive Tyres", price: 900 }
  ],
  
  seat: [
    { seattype: "Standard", price: 192 },
    { seattype: "Full Comfort Suspension", price: 298 },
    { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
  ],
    
  cabin: [
    { cabinoption: "Half Cabin", price: 1300 },
    { cabinoption: "Half Cabin with Canvas Sides", price: 1700 },
    { cabinoption: "Full Steel Cabin", price: 2050 }
  ],

  heater:[ {heatertype:"Heater/Demister", price:190}],

  safetybluespot: [{ safetybluespottype: "", price: 90 }]

},
{
  model: "FLTA570",
  capacity: 7000,
  engType: "LPG",
  basePrice: 27780,
  imgName: "M-modeldescription-GAS-50-70T.png",
  modeldescription:[{description:"A modeldescription"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
  masts: [
    {
      masttype: "2 Stage Free View Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2390, price: 0 },
        { mastlength: 3500, closedheight: 2870, price: 352}, 
        { mastlength: 4000, closedheight: 2940, price: 669},
        { mastlength: 4500, closedheight: 3190, price: 988},
        { mastlength: 5000, closedheight: 3440, price: 1408}
      ]
    },
    {
      masttype: "2 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 3000, closedheight: 2625, freeliftheight: 1555, price: 1290 },
        { mastlength: 3500, closedheight: 2775, freeliftheight: 1765, price: 1589 },
        { mastlength: 4000, closedheight: 2875, freeliftheight: 1805, price: 1620 }
      ]
    },
    {
      masttype: "3 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 4350, closedheight: 2630, freeliftheight: 1560, price: 2225 },
        { mastlength: 4500, closedheight: 2680, freeliftheight: 1685, price: 2419 },
        { mastlength: 4700, closedheight: 2780, freeliftheight: 1735, price: 2678 },
        { mastlength: 5000, closedheight: 2880, freeliftheight: 1835, price: 2678 },
        { mastlength: 5500, closedheight: 3005, freeliftheight: 1960, price: 3194 },
        { mastlength: 6000, closedheight: 3305, freeliftheight: 2260, price: 3601 },
        { mastlength: 6500, closedheight: 3530, freeliftheight: 2485, price: 4226 }
      ]
    }
  ],
  forks: [
    { forklength: 1200, price: 0 },
    { forklength: 1370, price: 0 },
    { forklength: 1500, price: 110 },
    { forklength: 1800, price: 165 },
    { forklength: 2120, price: 240 },
    { forklength: 2420, price: 295 }
  ],

  valves: [
    { valvetype: "3rd", price: 140 },
    { valvetype: "3rd + 4th", price: 305 }
  ],
  
  sideshift: [
    { sideshifttype: "Hook On", price: 550 },
    { sideshifttype: "Integral", price: 600 }
  ],
 
  forkpositioner: [
    { forkpositionertype: "" , price: null }
  ],

  tyres: [
      { tyretype: "S/E Tyres", price: 1150 },
  ],
  
  seat: [
    { seattype: "Standard", price: 192 },
    { seattype: "Full Comfort Suspension", price: 298 },
    { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
  ],
    
  cabin: [
    { cabinoption: "Half Cabin", price: 1300 },
    { cabinoption: "Half Cabin with Canvas Sides", price: 1700 },
    { cabinoption: "Full Steel Cabin", price: 2050 }
  ],

  heater:[ {heatertype:"Heater/Demister", price:190}],

  safetybluespot: [{ safetybluespottype: "", price: 90 }]

},

];

async function seed() {
  await mongoose.connect(config.get("db"));

  for (let forkliftItem of data) {
    const forky = new Forkliftdetail(forkliftItem);
    const doc = await forky.save();
    console.log(doc);
  }
  mongoose.disconnect();

  console.info("Done!");
}

seed();
