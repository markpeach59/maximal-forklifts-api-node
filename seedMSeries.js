const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");


const data = [
  {
    model: "FB16S-MHJZ",
    capacity: 1600,
    engType: "Lead Acid Electric",
    basePrice: 11740,
    imgName: "M-SERIES-ELECTRIC-Rear-drive-3-wheel-1.6T.jpg",
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
      { forkpositionertype: "", price: 1510 },
    ],

    tyres: [{ tyretype: "Non-Marking S/E Tyres", price: 360 }],
    
    seatrequired: 'true',
    
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    
    defaultbattery: "No",

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
