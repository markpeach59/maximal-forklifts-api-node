const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "FBRA15-J1",
    capacity: 1500,
    engType: "Reach",
    basePrice: 0,
    imgName: "FBRA15-J1.jpg",
   
    modeldescription:[
    {description:"Stand-on Reach"},

    {description:"INMOTION Controller for Lead Acid"},
    {description:"Zapi Controller for Lithium"},

    {description:"Deads Mans Safety Foot Button"},
    {description:"Return to Centre Safety Lever"},
    
    {description:"Vulkaline Tyre Load"},
    {description:"Rubber Tyre Drive"},

    {description:"Safety Blue Spot"},
    {description:"2 X Working Spotlights"}
    
  ],
    loadcenter:500,
    

    chassis :[
      {label:"Lead Acid Version", price: 14001, batteries:[
        {batterytype:"48V 340A/H", price:2400, 
        chargers:[
          {chargertype:"8hr 3 Phase", price:595}
        ]}
      ]},
      {label:"Lithium Version", price: 14987,batteries:[{batterytype:"Lithium POA", price:0}]}
    ],

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3700, closedheight: 2490, price: 240}, 
          { mastlength: 4000, closedheight: 2640, price: 390}  
        ]
      },
      
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350,  closedheight: 1980, freeliftheight: 1425, price: 855 },
          { mastlength: 4500,  closedheight: 2080, freeliftheight: 1520, price: 855 },
         
          { mastlength: 4800,  closedheight: 2180, freeliftheight: 1625, price: 1200 },
         
          { mastlength: 5500,  closedheight: 2500, freeliftheight: 1940, price: 1390 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 40 },
      { forklength: 1200, price: 80 },
      { forklength: 1370, price: 120 },
      { forklength: 1500, price: 160 }
    ],

    valves: [
      { valvetype: "4th", price: 160 }
    ],
    
    
    sideshift: [
      { sideshifttype: "Integral", price: 400 },
    ],
    
    displaywithcamera: [
      { displaywithcameratype: "", price: 690 },
    ],
    
    seat: [
      { seattype: "Full Comfort Suspension", price: 410 }
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
