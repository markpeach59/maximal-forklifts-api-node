const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "FBRGA16-J1",
    capacity: 1600,
    engType: "Reach",
    basePrice: 0,
    imgName: "A-SERIES-REACH-TRUCK.jpg",
    modeldescription:[
    {description:"Sit-on Reach"},
    {description:"INMOTION Controller for Lead Acid"},
    {description:"Zapi Controller for Lithium"},
   
    {description:"Vulkaline Tyre Load"},
    {description:"Rubber Tyre Drive"},
   
    {description:"Safety Blue Spot"},
    {description:"2 X Working Spotlights"}

  ],
    loadcenter:500,
    defaulttyre:"Rubber",

    engines :[
      {enginetype:"Lead Acid Version", price: 15302},
      {enginetype:"Lithium Version", price: 16211}
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
          { mastlength: 5000,  price: 1390 },
          { mastlength: 5500,  price: 1390 },
          { mastlength: 6000,  price: 1600 },
          { mastlength: 6500,  price: 2150 },

          { mastlength: 7000,  price: 2270 },
          { mastlength: 7500,  price: 2400 },
          { mastlength: 8000,  price: 2850 },
          { mastlength: 8500,  price: 2850 },
          { mastlength: 9000,  price: 3970 }

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
{
    model: "FBRGA20-J1",
    capacity: 2000,
    engType: "Reach",
    basePrice: 0,
    imgName: "A-SERIES-REACH-TRUCK.jpg",
    modeldescription:[
    {description:"Sit-on Reach"},
    {description:"INMOTION Controller for Lead Acid"},
    {description:"Zapi Controller for Lithium"},
    
    {description:"Vulkaline Tyre Load"},
    {description:"Rubber Tyre Drive"},

    {description:"Safety Blue Spot"},
    {description:"2 X Front Spotlights"}

  ],
    loadcenter:500,
    defaulttyre:"Rubber",

    engines :[
      {enginetype:"Lead Acid Version", price: 16000},
      {enginetype:"Lithium Version", price: 17293}
    ],

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3700, price: 385}, 
          { mastlength: 4000, price: 790}  
        ]
      },
      
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350,  price: 1285 },
          { mastlength: 4500,  price: 1295 },
         
          { mastlength: 4800,  price: 1610 },
          { mastlength: 5000,  price: 1610 },
          { mastlength: 5500,  price: 2280 },
          { mastlength: 6000,  price: 2510 },
          { mastlength: 6500,  price: 3020 },

          { mastlength: 7000,  price: 3230 },
          { mastlength: 7500,  price: 3600 },
          { mastlength: 8000,  price: 4090 },
          { mastlength: 8500,  price: 4090 },
          { mastlength: 9000,  price: 5880 }

        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 100 },
      { forklength: 1200, price: 200 },
      { forklength: 1370, price: 300 },
      { forklength: 1500, price: 400 }
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
  {
    model: "FBRGA25-J1",
    capacity: 1600,
    engType: "Reach",
    basePrice: 0,
    imgName: "A-SERIES-REACH-TRUCK.jpg",
    modeldescription:[
    {description:"Sit-on Reach"},

    {description:"INMOTION Controller for Lead Acid"},
    {description:"Zapi Controller for Lithium"},
    
    {description:"Vulkaline Tyre Load"},
    {description:"Rubber Tyre Drive"},

    {description:"Safety Blue Spot"},
    {description:"2 X Front Spotlights"}

  ],
    loadcenter:500,
    defaulttyre:"Rubber",

    engines :[
      {enginetype:"Lead Acid Version", price: 16980},
      {enginetype:"Lithium Version", price: 18210}
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
          { mastlength: 5000,  price: 1390 },
          { mastlength: 5500,  price: 1390 },
          { mastlength: 6000,  price: 1600 },
          { mastlength: 6500,  price: 2150 },

          { mastlength: 7000,  price: 2270 },
          { mastlength: 7500,  price: 2400 },
          { mastlength: 8000,  price: 2850 },
          { mastlength: 8500,  price: 2850 },
          { mastlength: 9000,  price: 3970 }

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
