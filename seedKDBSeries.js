const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
{
    model:"KBD15",
    capacity:1500,
    engType:"Diesel",
    basePrice:12910,
    imgName:"KBD20.jpg",

masts:[
    {
    masttype:"2 Stage Free View Mast",
    mastsizes:[
     {mastlength:3000,closedheight:2002,price:0},
     {mastlength:3300,closedheight:2152,price:237},
     { mastlength:4000,closedheight:2552,price:415},
     { mastlength:4500,closedheight:2802,price:672},
     { mastlength:5000,closedheight:3052,price:798}
    ]
    },
    {
    masttype:"2 Stage Full Free Lift Mast",
        mastsizes:[
            {mastlength:3000,closedheight:2002,price:527},
        { mastlength:4000,closedheight:2552,price:940}
    ]
    },
    {
    masttype:"3 Stage Full Free Lift Mast",
        mastsizes:[
            {mastlength:4350,closedheight:2102,price:1260},
            {mastlength:4500,closedheight:2152,price:1418},
            {mastlength:4700,closedheight:2217,price:1481},
            {mastlength:4800,closedheight:2252,price:1565},
            {mastlength:5000,closedheight:2395,price:1701},
            {mastlength:5500,closedheight:2629,price:1796},
            {mastlength:6000,closedheight:2862,price:2088}
        ]
    }
    ],
forks:[
        {forklength:1100,price:0},
        {forklength:1200,price:100},
        {forklength:1370,price:178},
        {forklength:1500,price:279},
        {forklength:1670,price:327}
    ],
    
valves:[
    {valvetype:"3rd",price:347},
    {valvetype:"3rd + 4th",price:767}
],
sideshift:[
    {sideshifttype:"Hook On",price:368},
    {sideshifttype:"Integral",price:840}
],

tyres:[
    {tyretype:"S/E Solid Tyres",price:431},
    {tyretype:"Non-Marking White Tyres",price:786}
],

cabin:[
    {cabinoption:"Half Cabin",price:860},
    {cabinoption:"Half Cabin with Canvas Sides",price:1338},
    {cabinoption:"Full Steel Cabin",price:1361}
],

heater:[ {heatertype:"Heater/Demister",price:181}],
forkpositioner:[{forkpositionertype:"",price:1995}],
powertrain:"Doosan DM02 Euro 5 Diesel Engine"
},

{
    model:"KBD18",
    capacity:1750,
    engType:"Diesel",
    basePrice:13211,
    imgName:"KBD20.jpg",

    masts:[{
   
    masttype:"2 Stage Free View Mast",
    mastsizes:[
        {mastlength:3000,closedheight:2002,price:0},
        {mastlength:3300,closedheight:2152,price:237},
        {mastlength:4000,closedheight:2552,price:415},
        {mastlength:4500,closedheight:2802,price:672},
        {mastlength:5000,closedheight:3052,price:798}
    ]
    },
    {
    masttype:"2 Stage Full Free Lift Mast",
    mastsizes:[
        {mastlength:3000,closedheight:2002,price:527},
        {mastlength:4000,closedheight:2552,price:940}
    ]
    },
    {
    masttype:"3 Stage Full Free Lift Mast",
    mastsizes:[
        {mastlength:4350,closedheight:2102,price:1260},
        {mastlength:4500,closedheight:2152,price:1418},
        {mastlength:4700,closedheight:2217,price:1481},
        {mastlength:4800,closedheight:2252,price:1565},
        {mastlength:5000,closedheight:2395,price:1701},
        {mastlength:5500,closedheight:2629,price:1796},
        {mastlength:6000,closedheight:2862,price:2088}
    ]
    }
],
forks:[
    {forklength:1100,price:0},
    {forklength:1200,price:100},
    {forklength:1370,price:178},
    {forklength:1500,price:279},
    {forklength:1670,price:327}
],
valves:[
    {valvetype:"3rd",price:347},
    {valvetype:"3rd + 4th",price:767}
],
sideshift:[
    {sideshifttype:"Hook On",price:368},
    {sideshifttype:"Integral",price:840}
],

tyres:[
    {tyretype:"S/E Solid Tyres",price:431},
    {tyretype:"Non-Marking White Tyres",price:786}
],
seat:[{seattype:"Full Comfort",price:191}],

cabin:[
    {cabinoption:"Half Cabin",price:860},
    {cabinoption:"Half Cabin with Canvas Sides",price:1338},
    {cabinoption:"Full Steel Cabin",price:1361}
],
heater:[{heatertype:"Heater/Demister",price:181}],
forkpositioner:[{forkpositionertype:"",price:1995}],
powertrain:"Doosan DM02 Euro 5 Diesel Engine"
},

{
    model:"KBD20",
    capacity:2000,
    engType:"Diesel",
    basePrice:13558,
    imgName:"KBD20.jpg",

masts:[{
    masttype:"2 Stage Free View Mast",
        mastsizes:[
        {mastlength:3000,closedheight:2002,price:0},
        {mastlength:3300,closedheight:2152,price:237},
        {mastlength:4000,closedheight:2552,price:415},
        {mastlength:4500,closedheight:2802,price:672},
        {mastlength:5000,closedheight:3052,price:798}]
    },
    {masttype:"2 Stage Full Free Lift Mast",
        mastsizes:[
            {mastlength:3000,closedheight:2002,price:527},
            {mastlength:4000,closedheight:2552,price:940}
        ]
    },
     {masttype:"3 Stage Full Free Lift Mast",
        mastsizes:[
            {mastlength:4350,closedheight:2102,price:1260},
            {mastlength:4500,closedheight:2152,price:1418},
            {mastlength:4700,closedheight:2217,price:1481},
            {mastlength:4800,closedheight:2252,price:1565},
            {mastlength:5000,closedheight:2395,price:1701},
            {mastlength:5500,closedheight:2629,price:1796},
            {mastlength:6000,closedheight:2862,price:2088}
        ]
    }
        
    ],

    forks:[
            {forklength:1100,price:0},
            {forklength:1200,price:100},
            {forklength:1370,price:178},
            {forklength:1500,price:279},
            {forklength:1670,price:327}
        ],
    
    valves:[
        {valvetype:"3rd",price:347},
        {valvetype:"3rd + 4th",price:767}
    ],
    sideshift:[
        {sideshifttype:"Hook On",price:368},
        {sideshifttype:"Integral",price:840}
    ],
        
    tyre:[
        {tyretype:"S/E Solid Tyres",price:431},
        {tyretype:"Non-Marking White Tyres",price:786}
    ],

    seat:[{seattype:"Full Comfort",price:191}],
    cabin:[
        {cabinoption:"Half Cabin",price:860},
        {cabinoption:"Half Cabin with Canvas Sides",price:1338},
        {cabinoption:"Full Steel Cabin",price:1361}
    ],
    heater:[{heatertype:"Heater/Demister",price:181}],

    forkpositioner:[{forkpositionertype:"",price:1995}],
    

    powertrain:"Doosan DM02 Euro 5 Diesel Engine"

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
