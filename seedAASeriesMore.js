const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "FBA18-YJ",
    capacity: 1750,
    engType: "Lithium-ion Electric",
    basePrice: 17150,
    basePriceR: 15435,
    imgName: "AA-SERIES-15-35T.jpg",
    modeldescription:[{description:"AA Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1990, price: 0 },
          { mastlength: 3300, closedheight: 2140, price: 120 },
          { mastlength: 3500, closedheight: 2240, price: 210 },
          { mastlength: 4000, closedheight: 2540, price: 352},
          { mastlength: 4500, closedheight: 2740, price: 510}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1990, freeliftheight: 1450, price: 460 },
          { mastlength: 3500, closedheight: 2240, freeliftheight: 1600, price: 576 },
          { mastlength: 4000, closedheight: 2340, freeliftheight: 1750, price: 678 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 1990, freeliftheight: 1466, price: 851 },
          { mastlength: 4500, closedheight: 2040, freeliftheight: 1516, price: 950 },
          { mastlength: 4800, closedheight: 2140, freeliftheight: 1616, price: 1120 },
          { mastlength: 5000, closedheight: 2240, freeliftheight: 1716, price: 1220 },
          { mastlength: 5500, closedheight: 2405, freeliftheight: 1886, price: 1472 },
          { mastlength: 6000, closedheight: 2590, freeliftheight: 2066, price: 1730 },
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
      { forkpositionertype: "", price: 1510 },
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

    defaultbattery: "76.8V 230A/H Li-ion",
    defaultcharger: "Fast",
    
    halolight: [{ halolighttype: "", price: 210 }],
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]

  },
  {
    model: "FBA20-YJ",
    capacity: 2000,
    engType: "Lithium-ion Electric",
    basePrice: 17461,
    basePriceR: 15714,
    imgName: "AA-SERIES-15-35T.jpg",
    modeldescription:[{description:"AA Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2030, price: 0 },
          { mastlength: 3300, closedheight: 2180, price: 210 },
          { mastlength: 3500, closedheight: 2280, price: 298 },
          { mastlength: 4000, closedheight: 2580, price: 510},
          { mastlength: 4500, closedheight: 2830, price: 737},
          { mastlength: 5000, closedheight: 3065, price: 795}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2015, freeliftheight: 1385, price: 460 },
          { mastlength: 3300, closedheight: 2180, freeliftheight: 1535, price: 576 },
          { mastlength: 3500, closedheight: 2280, freeliftheight: 1635, price: 701}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2040, freeliftheight: 1390, price: 1120 },
          { mastlength: 4500, closedheight: 2090, freeliftheight: 1440, price: 1120 },
          { mastlength: 4800, closedheight: 2190, freeliftheight: 1540, price: 1408 },
          { mastlength: 5000, closedheight: 2290, freeliftheight: 1640, price: 1530 },
          { mastlength: 5500, closedheight: 2455, freeliftheight: 1800, price: 1830 },
          { mastlength: 6000, closedheight: 2640, freeliftheight: 1990, price: 1780 },
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
      { forkpositionertype: "", price: 1800 },
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

    defaultbattery: "76.8 230A/H Li-ion",
    defaultcharger: "Fast",

    batteries: [
      	{
        batterytype: "76.8V 300A/H",
        price: 810,
    	},
      {
        batterytype: "76.8V 350A/H",
        price: 1650,
    	}
    ],

    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
    
     cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]
  
  },
   {
    model: "FBA25-YJ",
    capacity: 2500,
    engType: "Lithium-ion Electric",
    basePrice: 17961,
    basePriceR: 16100,
    imgName: "AA-SERIES-15-35T.jpg",
    modeldescription:[{description:"AA Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2030, price: 0 },
          { mastlength: 3300, closedheight: 2180, price: 210 },
          { mastlength: 3500, closedheight: 2280, price: 298 },
          { mastlength: 4000, closedheight: 2580, price: 510},
          { mastlength: 4500, closedheight: 2830, price: 737},
          { mastlength: 5000, closedheight: 3065, price: 795}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2030, freeliftheight: 1420, price: 460 },
          { mastlength: 3300, closedheight: 2180, freeliftheight: 1570, price: 576 },
          { mastlength: 3500, closedheight: 2280, freeliftheight: 1670, price: 701}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2040, freeliftheight: 1390, price: 1120 },
          { mastlength: 4500, closedheight: 2090, freeliftheight: 1440, price: 1120 },
          { mastlength: 4800, closedheight: 2190, freeliftheight: 1560, price: 1408 },
          { mastlength: 5000, closedheight: 2290, freeliftheight: 1640, price: 1530 },
          { mastlength: 5500, closedheight: 2455, freeliftheight: 1800, price: 1830 },
          { mastlength: 6000, closedheight: 2640, freeliftheight: 1990, price: 1780 },


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
      { forkpositionertype: "", price: 1800 },
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
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }],

      defaultbattery: "76.8V 230A/H Li-ion",
    defaultcharger: "Fast",

    batteries: [
      	{
        batterytype: "76.8V 300A/H",
        price: 810,
    	},
      {
        batterytype: "76.8V 350A/H",
        price: 1650,
    	}
    ],

    halolight: [{ halolighttype: "", price: 210 }],
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]
  },
{
    model: "FBA30-YJ",
    capacity: 3000,
    engType: "Lithium-ion Electric",
    basePrice: 20550,
    basePriceR: 18495,
    imgName: "AA-SERIES-15-35T.jpg",
    modeldescription:[{description:"AA Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2045, price: 0 },
          { mastlength: 3300, closedheight: 2195, price: 210 },
          { mastlength: 3500, closedheight: 2295, price: 298 },
          { mastlength: 4000, closedheight: 2595, price: 510},
          { mastlength: 4500, closedheight: 2845, price: 739},
          { mastlength: 5000, closedheight: 3095, price: 850}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2045, freeliftheight: 1390, price: 576 },
          { mastlength: 3300, closedheight: 2195, freeliftheight: 1540, price: 737 },
          { mastlength: 3500, closedheight: 2295, freeliftheight: 1640, price: 858}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2045, freeliftheight: 1340, price: 1120 },
          { mastlength: 4500, closedheight: 2095, freeliftheight: 1390, price: 1120 },
          { mastlength: 4800, closedheight: 2195, freeliftheight: 1490, price: 1589 },
          { mastlength: 5000, closedheight: 2295, freeliftheight: 1590, price: 1960 },
          { mastlength: 5500, closedheight: 2460, freeliftheight: 17455, price: 2580 },
          { mastlength: 6000, closedheight: 2645, freeliftheight: 1940, price: 3099 },

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
      { forkpositionertype: "", price: 1900 },
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
    
    defaultbattery: "76.8V 350A/H Li-ion",
    defaultcharger: "Fast",

    batteries: [
      	{
        batterytype: "76.8V 460A/H",
        price: 1200,
    	}
    ],

    halolight: [{ halolighttype: "", price: 210 }],
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
     
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]

  },
  {
    model: "FBA35-YJ",
    capacity: 3500,
    engType: "Lithium-ion Electric",
    basePrice: 21300,
    basePriceR: 19175,
    imgName: "AA-SERIES-15-35T.jpg",
    modeldescription:[{description:"AA Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2120, price: 0 },
          { mastlength: 3300, closedheight: 2270, price: 210 },
          { mastlength: 3500, closedheight: 2370, price: 298 },
          { mastlength: 4000, closedheight: 2670, price: 510},
          { mastlength: 4500, closedheight: 2920, price: 739},

          { mastlength: 5000, closedheight: 3170, price: 739}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2120, freeliftheight: 1390, price: 576 },
          { mastlength: 3300, closedheight: 2270, freeliftheight: 1540, price: 737 },
          { mastlength: 3500, closedheight: 2370, freeliftheight: 1640, price: 858}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2120, freeliftheight: 1330, price: 1120 },
          { mastlength: 4500, closedheight: 2170, freeliftheight: 1380, price: 1120 },
          { mastlength: 4800, closedheight: 2270, freeliftheight: 1480, price: 1589 },
          { mastlength: 5000, closedheight: 2370, freeliftheight: 1580, price: 1960 },
          { mastlength: 5500, closedheight: 2535, freeliftheight: 1735, price: 2580 },
          { mastlength: 6000, closedheight: 2720, freeliftheight: 1930, price: 3099 },
          
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
      { forkpositionertype: "", price: 1950 },
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
    
    
    defaultbattery: "76.8V 350A/H Li-ion",
    defaultcharger: "Fast",

    batteries: [
      	{
        batterytype: "76.8V 460A/H",
        price: 1200,
    	}
    ],
    
    halolight: [{ halolighttype: "", price: 210 }],
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]
  }
  
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
