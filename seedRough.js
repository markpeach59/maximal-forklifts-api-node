const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "FD18T-C2W",
    capacity: 1800,
    engType: "Rough Terrain",
    basePrice: 17200,
    imgName: "M-SERIES-ROUGH-TERRAIN-18T-25T-35T-2WD.png",
    modeldescription:[{description:"M modeldescription 2WD"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2298, price: 0 },
          { mastlength: 3300, closedheight: 2398, price: 330}, 
          { mastlength: 4000, closedheight: 2698, price: 780},
          { mastlength: 4500, closedheight: 2948, price: 900}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4000, closedheight: 2033, freeliftheight: 1230, price: 1680 },
          { mastlength: 4350, closedheight: 2158, freeliftheight: 1360, price: 1680 },
          { mastlength: 4500, closedheight: 2208, freeliftheight: 1410, price: 1710},
          { mastlength: 5000, closedheight: 2408, freeliftheight: 1610, price: 1956 },
          { mastlength: 5500, closedheight: 2657, freeliftheight: 1770, price: 2550 },
          { mastlength: 6000, closedheight: 2890, freeliftheight: 1990, price: 2900 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 40 },
      { forklength: 1200, price: 80 },
      { forklength: 1370, price: 120 },
      { forklength: 1500, price: 160 },
      { forklength: 1670, price: 200 }
    ],
    valves: [
      { valvetype: "3rd", price: 120 },
      { valvetype: "3rd + 4th", price: 210 }
    ],
    
    sideshift: [
      { sideshifttype: "Hook On", price: 690 },
      { sideshifttype: "Integral", price: 980 }
    ],
   
    forkpositioner: [
      { forkpositionertype: "", price: 1900 },
    ],
  
    tyres: [
        { tyretype: "S/E Tyres", price: 1100 }
      ],
    
    seat: [
      { seattype: "Standard", price: 192 },
      { seattype: "Full Comfort Suspension", price: 298 },
      { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
      
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
  
    heater:[ {heatertype:"Heater/Demister",price:110}],
  
    safetybluespot: [{ safetybluespottype: "", price: 90 }]
  
  },
  {
    model: "FD25T-C2W",
    capacity: 2500,
    engType: "Rough Terrain",
    basePrice: 18200,
    imgName: "M-SERIES-ROUGH-TERRAIN-18T-25T-35T-2WD.png",
    modeldescription:[{description:"M modeldescription 2WD"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2298, price: 0 },
          { mastlength: 3300, closedheight: 2485, price: 330}, 
          { mastlength: 4000, closedheight: 2765, price: 780},
          { mastlength: 4500, closedheight: 3035, price: 900}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4000, closedheight: 2080, freeliftheight: 1330, price: 1680 },
          { mastlength: 4350, closedheight: 2205, freeliftheight: 1450, price: 1680 },
          { mastlength: 4500, closedheight: 2320, freeliftheight: 1573, price: 1710 },
          { mastlength: 5000, closedheight: 2455, freeliftheight: 1673, price: 1956 },
          { mastlength: 5500, closedheight: 2620, freeliftheight: 1873, price: 2550 },
          { mastlength: 6000, closedheight: 2805, freeliftheight: 1805, price: 2900 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 40 },
      { forklength: 1200, price: 80 },
      { forklength: 1370, price: 120 },
      { forklength: 1500, price: 160 },
      { forklength: 1670, price: 200 }
    ],
    valves: [
      { valvetype: "3rd", price: 120 },
      { valvetype: "3rd + 4th", price: 210 }
    ],
    
    sideshift: [
      { sideshifttype: "Hook On", price: 690 },
      { sideshifttype: "Integral", price: 980 }
    ],
   
    forkpositioner: [
      { forkpositionertype: "", price: 1900 },
    ],
  
    tyres: [
        { tyretype: "S/E Tyres", price: 1100 }
      ],
    
    seat: [
      { seattype: "Standard", price: 192 },
      { seattype: "Full Comfort Suspension", price: 298 },
      { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
      
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
  
    heater:[ {heatertype:"Heater/Demister",price:110}],
  
    safetybluespot: [{ safetybluespottype: "", price: 90 }]
  
  },
  {
    model: "FD35T-C2W",
    capacity: 3500,
    engType: "Rough Terrain",
    basePrice: 19996,
    imgName: "M-SERIES-ROUGH-TERRAIN-18T-25T-35T-2WD.png",
    modeldescription:[{description:"M modeldescription 2WD"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2480, price: 0 },
          { mastlength: 3300, closedheight: 2580, price: 330}, 
          { mastlength: 4000, closedheight: 2880, price: 780},
          { mastlength: 4500, closedheight: 3130, price: 900}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4000, closedheight: 2205, freeliftheight: 1330, price: 1680 },
          { mastlength: 4350, closedheight: 2330, freeliftheight: 1450, price: 1680 },
          { mastlength: 4500, closedheight: 2445, freeliftheight: 1573, price: 1710 },
          { mastlength: 5000, closedheight: 2580, freeliftheight: 1673, price: 1956 },
          { mastlength: 5500, closedheight: 2745, freeliftheight: 1873, price: 2550 },
          { mastlength: 6000, closedheight: 2930, freeliftheight: 1805, price: 2900 },
          { mastlength: 6500, closedheight: 3145, freeliftheight: 1805, price: 3200 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 40 },
      { forklength: 1200, price: 80 },
      { forklength: 1370, price: 120 },
      { forklength: 1500, price: 160 },
      { forklength: 1670, price: 200 },
      { forklength: 1800, price: 240 }
    ],
    valves: [
      { valvetype: "3rd", price: 120 },
      { valvetype: "3rd + 4th", price: 210 }
    ],
    
    sideshift: [
      { sideshifttype: "Hook On", price: 690 },
      { sideshifttype: "Integral", price: 980 }
    ],
   
    forkpositioner: [
      { forkpositionertype: "", price: 2100 },
    ],
  
    tyres: [
        { tyretype: "S/E Tyres", price: 1100 }
      ],
    
    seat: [
      { seattype: "Standard", price: 192 },
      { seattype: "Full Comfort Suspension", price: 298 },
      { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
      
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
  
    heater:[ { heatertype:"Heater/Demister", price:110}],
  
    safetybluespot: [{ safetybluespottype: "", price: 90 }]
  
  },
  {
    model: "FD50T-C2W",
    capacity: 5000,
    engType: "Rough Terrain",
    basePrice: 32900,
    imgName: "M-SERIES-ROUGH-TERRAIN-5T-2WD.png",
    modeldescription:[{description:"M modeldescription 2WD"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3300, closedheight: 2715, price: 293}, 
          { mastlength: 3500, closedheight: 2815, price: 390}, 
          { mastlength: 4000, closedheight: 3115, price: 890},
          { mastlength: 4500, closedheight: 3385, price: 1600},
          { mastlength: 5000, closedheight: 3615, price: 1700}

        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2685, freeliftheight: 1275, price: 1998 },
          { mastlength: 4500, closedheight: 2738, freeliftheight: 1275, price: 1998 },
          { mastlength: 4700, closedheight: 2738, freeliftheight: 1242, price: 1998 },
          { mastlength: 5000, closedheight: 2802, freeliftheight: 1242, price: 2610 },
          { mastlength: 5500, closedheight: 2935, freeliftheight: 1375, price: 2980 },
          { mastlength: 6000, closedheight: 3300, freeliftheight: 1740, price: 3300 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 60 },
      { forklength: 1200, price: 120 },
      { forklength: 1370, price: 180 },
      { forklength: 1500, price: 240 },
      { forklength: 1800, price: 240 },
      { forklength: 2120, price: 360 }
    ],
    valves: [
      { valvetype: "3rd", price: 120 },
      { valvetype: "3rd + 4th", price: 210 }
    ],
    
    sideshift: [
      { sideshifttype: "Hook On", price: 1200 },
      { sideshifttype: "Integral", price: 1497 }
    ],
   
    forkpositioner: [
      { forkpositionertype: "", price: 2460 },
    ],
  
    seat: [
      { seattype: "Standard", price: 192 },
      { seattype: "Full Comfort Suspension", price: 298 },
      { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
      
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
  
    heater:[ { heatertype:"Heater/Demister", price:110}],
  
    safetybluespot: [{ safetybluespottype: "", price: 90 }]
  
  },
  {
    model: "FD18T-C4W",
    capacity: 1800,
    engType: "Rough Terrain",
    basePrice: 23000,
    imgName: "M-SERIES-ROUGH-TERRAIN-18T-25T-35T-4WD.png",
    modeldescription:[{description:"M modeldescription 4WD"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2298, price: 0 },
          { mastlength: 3300, closedheight: 2398, price: 330}, 
          { mastlength: 4000, closedheight: 2698, price: 780},
          { mastlength: 4500, closedheight: 2948, price: 900}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4000, closedheight: 2033, freeliftheight: 1230, price: 1680 },
          { mastlength: 4350, closedheight: 2158, freeliftheight: 1360, price: 1680 },
          { mastlength: 4500, closedheight: 2208, freeliftheight: 1410, price: 1710},
          { mastlength: 5000, closedheight: 2408, freeliftheight: 1610, price: 1956 },
          { mastlength: 5500, closedheight: 2657, freeliftheight: 1770, price: 2550 },
          { mastlength: 6000, closedheight: 2890, freeliftheight: 1990, price: 2900 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 40 },
      { forklength: 1200, price: 80 },
      { forklength: 1370, price: 120 },
      { forklength: 1500, price: 160 },
      { forklength: 1670, price: 200 }
    ],
    valves: [
      { valvetype: "3rd", price: 120 },
      { valvetype: "3rd + 4th", price: 210 }
    ],
    
    sideshift: [
      { sideshifttype: "Hook On", price: 690 },
      { sideshifttype: "Integral", price: 980 }
    ],
   
    forkpositioner: [
      { forkpositionertype: "", price: 1900 },
    ],
  
    tyres: [
        { tyretype: "S/E Tyres", price: 1100 }
      ],
    
    seat: [
      { seattype: "Standard", price: 192 },
      { seattype: "Full Comfort Suspension", price: 298 },
      { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
      
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
  
    heater:[ {heatertype:"Heater/Demister",price:110}],
  
    safetybluespot: [{ safetybluespottype: "", price: 90 }]
  
  },
  {
    model: "FD25T-C4W",
    capacity: 2500,
    engType: "Rough Terrain",
    basePrice: 24700,
    imgName: "M-SERIES-ROUGH-TERRAIN-18T-25T-35T-4WD.png",
    modeldescription:[{description:"M modeldescription 4WD"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2298, price: 0 },
          { mastlength: 3300, closedheight: 2485, price: 330}, 
          { mastlength: 4000, closedheight: 2765, price: 780},
          { mastlength: 4500, closedheight: 3035, price: 900}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4000, closedheight: 2080, freeliftheight: 1330, price: 1680 },
          { mastlength: 4350, closedheight: 2205, freeliftheight: 1450, price: 1680 },
          { mastlength: 4500, closedheight: 2320, freeliftheight: 1573, price: 1710 },
          { mastlength: 5000, closedheight: 2455, freeliftheight: 1673, price: 1956 },
          { mastlength: 5500, closedheight: 2620, freeliftheight: 1873, price: 2550 },
          { mastlength: 6000, closedheight: 2805, freeliftheight: 1805, price: 2900 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 40 },
      { forklength: 1200, price: 80 },
      { forklength: 1370, price: 120 },
      { forklength: 1500, price: 160 },
      { forklength: 1670, price: 200 }
    ],
    valves: [
      { valvetype: "3rd", price: 120 },
      { valvetype: "3rd + 4th", price: 210 }
    ],
    
    sideshift: [
      { sideshifttype: "Hook On", price: 690 },
      { sideshifttype: "Integral", price: 980 }
    ],
   
    forkpositioner: [
      { forkpositionertype: "", price: 1900 },
    ],
  
    tyres: [
        { tyretype: "S/E Tyres", price: 1100 }
      ],
    
    seat: [
      { seattype: "Standard", price: 192 },
      { seattype: "Full Comfort Suspension", price: 298 },
      { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
      
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
  
    heater:[ {heatertype:"Heater/Demister",price:110}],
  
    safetybluespot: [{ safetybluespottype: "", price: 90 }]
  
  },
  {
    model: "FD35T-C4W",
    capacity: 3500,
    engType: "Rough Terrain",
    basePrice: 26490,
    imgName: "",
    modeldescription:[{description:"M modeldescription 4WD"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2480, price: 0 },
          { mastlength: 3300, closedheight: 2580, price: 330}, 
          { mastlength: 4000, closedheight: 2880, price: 780},
          { mastlength: 4500, closedheight: 3130, price: 900}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4000, closedheight: 2205, freeliftheight: 1330, price: 1680 },
          { mastlength: 4350, closedheight: 2330, freeliftheight: 1450, price: 1680 },
          { mastlength: 4500, closedheight: 2445, freeliftheight: 1573, price: 1710 },
          { mastlength: 5000, closedheight: 2580, freeliftheight: 1673, price: 1956 },
          { mastlength: 5500, closedheight: 2745, freeliftheight: 1873, price: 2550 },
          { mastlength: 6000, closedheight: 2930, freeliftheight: 1805, price: 2900 },
          { mastlength: 6500, closedheight: 3145, freeliftheight: 1805, price: 3200 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 40 },
      { forklength: 1200, price: 80 },
      { forklength: 1370, price: 120 },
      { forklength: 1500, price: 160 },
      { forklength: 1670, price: 200 },
      { forklength: 1800, price: 240 }
    ],
    valves: [
      { valvetype: "3rd", price: 120 },
      { valvetype: "3rd + 4th", price: 210 }
    ],
    
    sideshift: [
      { sideshifttype: "Hook On", price: 690 },
      { sideshifttype: "Integral", price: 980 }
    ],
   
    forkpositioner: [
      { forkpositionertype: "", price: 2100 },
    ],
  
    tyres: [
        { tyretype: "S/E Tyres", price: 1100 }
      ],
    
    seat: [
      { seattype: "Standard", price: 192 },
      { seattype: "Full Comfort Suspension", price: 298 },
      { seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
      
    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
  
    heater:[ { heatertype:"Heater/Demister", price:110}],
  
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
