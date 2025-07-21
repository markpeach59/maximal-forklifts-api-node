const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [

{
  model: "FDTA80",
capacity: 8000,
engType: "Diesel",

  basePrice: 52500,
  imgName: "FDTA50.jpg",
  powertrain: "Kubota V3800 euro5 type W 13",
  modeldescription:[{description:"A Series"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    
  masts: [
    {
      masttype: "2 Stage Free View Mast",
      mastsizes: [
        { mastlength: 3300,  price: 650 },
        { mastlength: 3500,  price: 900}, 
        { mastlength: 4000,  price: 1800},
        { mastlength: 4500, price: 2000},
        { mastlength: 5000,  price: 2400}
      ]
    }
  ],
  forks: [
    { forklength: 1200, price: 202 },
    { forklength: 1370, price: 277 },
    { forklength: 1500, price: 352 },
    { forklength: 1800, price: 502 },
    { forklength: 2120, price: 652 },
    { forklength: 2420, price: 810 },
    { forklength: 3200, price: 1239 }
  ],

  valves: [
    { valvetype: "3rd", price: 0 },
    { valvetype: "3rd + 4th", price: 400 }
  ],
 
  forkpositioner: [
    { forkpositionertype: "" , price: 1734 }
  ],

  tyres: [
      { tyretype: "S/E Tyres", pprice: 1150 },
  ],
  
  seatrequired: 'true',
  
  seat: [
    { seattype: "Full Comfort Suspension", price: 476 },
    { seattype: "Full Comfort Suspension with Arm Rest", price: 696 }
  ],
    
  cabin: [
    { cabinoption: "Closed Roof", price: 0 },
    { cabinoption: "Full Steel Cabin", price: 2812 }
  ],

  heater:[ {heatertype:"Heater/Demister", price:105}],

 
  safetybluespot: [{ safetybluespottype: "", price: 210 }],

  heavydutyairfilter:[{heavydutyairfiltertype:"", price: 60}],

},
{
  model: "FDTA100",
capacity: 10000,
engType: "Diesel",
modeldescription:[{description:"Available - POA"}]
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