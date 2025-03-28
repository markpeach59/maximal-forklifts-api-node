const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "FBA18-JZ",
    capacity: 1750,
    engType: "Lead Acid Electric",
    basePrice: 12250,
    imgName: "A-Series-25.jpg",
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
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }],

    defaultbattery: "No",
    	
    batteries: [
      {
        batterytype: "48V 420 A/H Chinese",
        price: 1404 },
      {
        batterytype: "48V 420 A/H UK Supply",
        price: 3010 }
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
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]
  },
  {
    model: "FBA20-JZ",
    capacity: 2000,
    engType: "Lead Acid Electric",
    basePrice: 12500,
    imgName: "A-Series-25.jpg",
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
      { forkpositionertype: "", price: 1800 },
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
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }],

    defaultbattery: "No",
    	
    batteries: [
      {
        batterytype: "48V 600A/H Chinese",
        price: 1645,
      },
      {
        batterytype: "48V 600A/H UK Supply",
        price: 3548,
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
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]
  
  },
  {
    model: "FBA25-JZ",
    capacity: 2500,
    engType: "Lead Acid Electric",
    basePrice: 13000,
    imgName: "A-Series-25.jpg",
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
      { forkpositionertype: "", price: 1800 },
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
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }],


    defaultbattery: "No",
    
    batteries: [
      {
        batterytype: "48V 600A/H Chinese",
        price: 1645,
      },
      {
        batterytype: "48V 600A/H UK Supply",
        price: 3548,
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
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]
  },
{
    model: "FBA30-JZ",
    capacity: 3000,
    engType: "Lead Acid Electric",
    basePrice: 13950,
    imgName: "A-Series-25.jpg",
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
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }],

    defaultbattery: "No",
    	
    batteries: [
      {
        batterytype: "80V 500A/H Chinese",
        price: 2780,
      },
      {
        batterytype: "80V 500A/H UK Supply",
        price: 4945,
      },
      {
        batterytype: "80V 600A/H UK Supply",
        price: 5536}
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
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]

  
  },
  {
    model: "FBA35-JZ",
    capacity: 3500,
    engType: "Lead Acid Electric",
    basePrice: 14800,
    imgName: "A-Series-25.jpg",
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
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }],

    defaultbattery: "No",
    	
    batteries: [
      {
        batterytype: "80V 500A/H Chinese",
        price: 2780,
      },
      {
        batterytype: "80V 500A/H UK Supply",
        price: 4945,
      },
      {
        batterytype: "80V 600A/H UK Supply",
        price: 5536}
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
