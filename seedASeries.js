const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "FBA15-JZ",
    capacity: 1500,
    engType: "Lead Acid Electric",
    basePrice: 12000,
    imgName: "A-Series-25.jpg",
    modeldescription:[{description:"A Series"}, {description:"4 Wheel"}],
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
          { mastlength: 4500, closedheight: 2790, price: 510}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 1990, freeliftheight: 1486, price: 460 },
          { mastlength: 3500, closedheight: 2240, freeliftheight: 1736, price: 576 },
          { mastlength: 4000, closedheight: 2340, freeliftheight: 1836, price: 678 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 1990, freeliftheight: 1466, price: 851 },
          { mastlength: 4500, closedheight: 2040, freeliftheight: 1516, price: 950 },
          { mastlength: 4800, closedheight: 2140, freeliftheight: 1616, price: 1120 },
          { mastlength: 5000, closedheight: 2240, freeliftheight: 1716, price: 1220 },
          { mastlength: 5500, closedheight: 2405, freeliftheight: 1866, price: 1472 },
          { mastlength: 6000, closedheight: 2590, freeliftheight: 2066, price: 1730 },
          { mastlength: 6500, closedheight: 2805, freeliftheight: 2281, price: 1910 }
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
            chargertype: "3 Phase 12 Hour 48V 60",
            price: 480
          },
          {
            chargertype: "3 Phase 8 Hour 48V 80",
            price: 488
          }
        ]
      ,

    halolight: [{ halolighttype: "", price: 210 }],
	safetybluespot: [{ safetybluespottype: "", price: 90 }],

    bfs: [{ bfstype: "", price: 216 }],
    trolley: [{ trolleytype: "", price: 95 }],
    blinkey: [{ blinkeytype: "", price: 30}],

    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]
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
