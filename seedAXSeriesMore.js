const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [  
{
    model: "FBAX30-YWL",
    capacity: 3000,
    engType: "Lithium-ion Electric",
    basePrice: 20550,
    imgName: "AX-SERIES.png",
    series:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

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
          { mastlength: 4350, closedheight: 2120, freeliftheight: 1460, price: 1120 },
          { mastlength: 4500, closedheight: 2170, freeliftheight: 1510, price: 1120 },
          { mastlength: 4700, closedheight: 2270, freeliftheight: 1610, price: 1589 },
          { mastlength: 5000, closedheight: 2370, freeliftheight: 1710, price: 1960 },
          { mastlength: 5500, closedheight: 2435, freeliftheight: 1835, price: 2580 },
          { mastlength: 6000, closedheight: 2720, freeliftheight: 2060, price: 2846},
          { mastlength: 6500, closedheight: 2935, freeliftheight: 2935, price: 3099}
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
     
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    	
    safetybluespot: [{ safetybluespottype: "", price: 90 }],
     
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
    
 },
 {
    model: "FBAX35-YWL",
    capacity: 3500,
    engType: "Lithium-ion Electric",
    basePrice: 21350,
    imgName: "AX-SERIES.png",
    series:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

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
          { mastlength: 4700, closedheight: 2205, freeliftheight: 1610, price: 1589 },
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
      { forkpositionertype: "", price: 1950 },
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 590 },
      { tyretype: "Non-Marking Solid S/E Tyres", price: 610 },
      { tyretype: "Super Elastic Tyres", price: 620 }
    ],
     
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    	
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
  },
  {
    model: "FBAX45-YWL",
    capacity: 4500,
    engType: "Lithium-ion Electric",
    basePrice: 29240,
    imgName: "AX-SERIES.png",
    series:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2250, price: 0 },
          { mastlength: 3300, closedheight: 2400, price: 262 },
          { mastlength: 3500, closedheight: 2500, price: 350 },
          { mastlength: 4000, closedheight: 2800, price: 514}
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
          { mastlength: 4700, closedheight: 2385, freeliftheight: 1545, price: 2160 },
          { mastlength: 5000, closedheight: 2485, freeliftheight: 1645, price: 2160 },
          { mastlength: 5500, closedheight: 2610, freeliftheight: 1770, price: 2580 },
          { mastlength: 6000, closedheight: 2850, freeliftheight: 2010, price: 3099 },
          { mastlength: 6500, closedheight: 3035, freeliftheight: 2210, price: 3430 }
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
     
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    	
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
  },
  {
    model: "FBAX50-YWL",
    capacity: 5000,
    engType: "Lithium-ion Electric",
    basePrice: 33040,
    imgName: "AX-SERIES.png",
    series:[{description:"AX Series"}, {description:"4 Wheel"}],
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
          { mastlength: 4700, closedheight: 2385, freeliftheight: 1545, price: 2678 },
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
      { forkpositionertype: "", price: 3900 },
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 1150 }
    ],
     
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    	
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1300 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1700 },
      { cabinoption: "Full Steel Cabin", price: 2050 }
    ]
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
