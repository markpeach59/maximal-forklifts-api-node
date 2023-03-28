const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "FBRA15-J1",
    capacity: 1500,
    engType: "Electric",
    basePrice: 0,
    imgName: "",
    series:[
    {description:"Stand-on Reach"},
    {description:"INMOTION Controller for Lead Acid"},
    {description:"Zapi Controller for Lithium"},
    {description:"Deads Mans Safety Foot Button"},
    {description:"Return to Centre Safety Lever"},
    {description:"2 X Working Spotlights"},
    {description:"Safety Blue Spot"},
    {description:"Vulkaline Tyre Load"}
  ],
    loadcenter:500,
    defaulttyre:"Rubber",

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
      { forklength: 1500, price: 160 }
    ],
    valves: [
      { valvetype: "4th", price: 160 }
    ],
    
    
   
    forkpositioner: [
      { forkpositionertype: "", price: 1800 },
    ],
  
    tyres: [
        { tyretype: "S/E Tyres", price: 465 },
        { tyretype: "Non-Marking S/E Tyres", price: 486 },
        { tyretype: "Super Elastic Tyres", price: 480 }],
    
    seat: [
      { seattype: "Full Comfort Suspension", price: 410 }
    ],
      
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
