const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "FBRA15-J1",
    capacity: 1500,
    engType: "Reach",
    basePrice: 0,
    imgName: "",
   
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
    

    engines :[
      {enginetype:"Lead Acid Version", price: 14001},
      {enginetype:"Lithium Version", price: 14987}
    ],

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3700, price: 240}, 
          { mastlength: 4000, price: 390}  
        ]
      },
      
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350,  price: 855 },
          { mastlength: 4500,  price: 855 },
         
          { mastlength: 4800,  price: 1200 },
         
          { mastlength: 5500,  price: 1390 }
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
