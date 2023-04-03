const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "FBAX25-YWL",
    capacity: 2500,
    engType: "Lithium-ion Electric",
    basePrice: 18061,
    imgName: "AX-SERIES.png",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

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
          { mastlength: 4700, closedheight: 2215, freeliftheight: 1540, price: 1408 },
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
      { forkpositionertype: "", price: 1800 },
    ],
    tyres: [
      { tyretype: "S/E Tyres", price: 465 },
      { tyretype: "Non-Marking S/E Tyres", price: 486 },
      { tyretype: "Super Elastic Tyres", price: 480 }
    ],
     
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }],

	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ]
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
