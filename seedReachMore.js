const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "FBREA16-J1",
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

    chassis :[
      {label:"Lead Acid Version", price: 16900, batteries:[
        {batterytype:"48V 450A/H", price:3050, 
        chargers:[
          {chargertype:"8hr", price:810}
        ]}
      ]},
      {label:"Lithium Version", price: 16900,
      batteries:[{batterytype:"Lithium 48V 450A/H", price:5050, chargers:[
        {chargertype:"Fast", price:1200}
      ]}]}
    ],

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3700, closedheight: 2490 , price: 240}, 
          { mastlength: 4000, closedheight: 2640, price: 390}  
        ]
      },
      
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350,  closedheight: 1980, freeliftheight: 1425,price: 855 },
          { mastlength: 4500,  closedheight: 2115, freeliftheight: 1520,price: 855 },
         
          { mastlength: 4800,  closedheight: 2180, freeliftheight: 1625,price: 1200 },
          { mastlength: 5000,  closedheight: 2300, freeliftheight: 1740,price: 1390 },
          { mastlength: 5500,  closedheight: 2500, freeliftheight: 1940,price: 1390 },
          { mastlength: 6000,  closedheight: 2630, freeliftheight: 2075,price: 1600 },
          { mastlength: 6500,  closedheight: 2860, freeliftheight: 2280,price: 2150 },

          { mastlength: 7000,  closedheight: 3015, freeliftheight: 2415,price: 2270 },
          { mastlength: 7500,  closedheight: 3180, freeliftheight: 2580,price: 2400 },
          { mastlength: 8000,  closedheight: 3350, freeliftheight: 2760,price: 2850 },
          { mastlength: 8500,  closedheight: 3535, freeliftheight: 2855,price: 2850 },
          { mastlength: 9000,  closedheight: 3700, freeliftheight: 3020,price: 3970 }

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
{
    model: "FBREA20-J1",
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

    chassis :[
      {label:"Lead Acid Version", price: 18800, batteries:[
        {batterytype:"48V 450A/H", price:3050, 
        chargers:[
          {chargertype:"8hr", price:810}
        ]}
      ]},
      {label:"Lithium Version", price: 18800,batteries:[{batterytype:"Lithium 48V 450A/H", price:5050,
      chargers:[
        {chargertype:"Fast", price:1200}
      ]
    
    },{batterytype:"Lithium 48V 600A/H", price:5700,
    chargers:[
      {chargertype:"Fast", price:1290}
    ]
  
  }]}
    ],

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3700, closedheight: 2490, price: 385}, 
          { mastlength: 4000, closedheight: 2640, price: 790}  
        ]
      },
      
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4500,  closedheight: 2080, freeliftheight: 1335,price: 1285 },
          
         
          { mastlength: 4800,  closedheight: 2215, freeliftheight: 1535,price: 1610 },
          { mastlength: 5000,  closedheight: 2315, freeliftheight: 1635,price: 1610 },
          { mastlength: 5500,  closedheight: 2615, freeliftheight: 1855,price: 2280 },
          { mastlength: 6000,  closedheight: 2650, freeliftheight: 1970,price: 2510 },
          { mastlength: 6500,  closedheight: 2900, freeliftheight: 2220,price: 3020 },

          { mastlength: 7000,  closedheight: 3035, freeliftheight: 2355,price: 3230 },
          
          { mastlength: 8000,  closedheight: 3370, freeliftheight: 2685,price: 3600 },
          { mastlength: 8500,  closedheight: 3535, freeliftheight: 2855,price: 4090 },
          { mastlength: 9000,  closedheight: 3700, freeliftheight: 3020,price: 4090 },
          { mastlength: 9500,  closedheight: 3870, freeliftheight: 3185,price: 5880 }
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

    displaywithcamera: [
      { displaywithcameratype: "", price: 690 },
    ],
    
    seat: [
      { seattype: "Full Comfort Suspension", price: 410 }
    ]
  
  },
  {
    model: "FBREA25-J1",
    capacity: 2500,
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

    chassis :[
      {label:"Lead Acid Version", price: 19810, batteries:[
        {batterytype:"48V 600A/H", price:3700, 
        chargers:[
          {chargertype:"8hr", price:916}
        ]}
      ]},
      {label:"Lithium Version", price: 19810,
      batteries:[{batterytype:"Lithium 48V 600A/H", price:5700,
      chargers:[
        {chargertype:"Fast", price:1290}
      ]
    
    }]}
    ],

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3700, closedheight: 2490, price: 385}, 
          { mastlength: 4000, closedheight: 2640, price: 790}  
        ]
      },
      
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4500,  closedheight: 2080, freeliftheight: 1335,price: 1285 },
          
         
          { mastlength: 4800,  closedheight: 2215, freeliftheight: 1535,price: 1610 },
          { mastlength: 5000,  closedheight: 2315, freeliftheight: 1635,price: 1610 },
          { mastlength: 5500,  closedheight: 2615, freeliftheight: 1855,price: 2280 },
          { mastlength: 6000,  closedheight: 2650, freeliftheight: 1970,price: 2510 },
          { mastlength: 6500,  closedheight: 2900, freeliftheight: 2220,price: 3020 },

          { mastlength: 7000,  closedheight: 3035, freeliftheight: 2355,price: 3230 },
          
          { mastlength: 8000,  closedheight: 3370, freeliftheight: 2685,price: 3600 },
          { mastlength: 8500,  closedheight: 3535, freeliftheight: 2855,price: 4090 },
          { mastlength: 9000,  closedheight: 3700, freeliftheight: 3020,price: 4090 },
          { mastlength: 9500,  closedheight: 3870, freeliftheight: 3185,price: 5880 }
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
