const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "FBAX25-YWL",
    capacity: 2500,
    engType: "Lithium-ion Electric",
    basePrice: 0,
    basePriceR: 0,
    imgName: "AX-SERIES-30T.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",


    voltagerequired : true,    
    voltage :[
      {
        label:"Light Duty", 
        price: 14000, 
        priceR: 13800,
        defaultbattery: "76.8V 350A/H Lithium"
      },
      {
        label:"Standard", 
        price: 18061,
        priceR: 16500,
        defaultbattery: "115V 125A/H Lithium",
        batteries:[{
          batterytype: "115V 230A/H",
          price: 2850
        }]
      },
      {
        label:"Heavy Duty", 
        price: 19966, 
        priceR: 18900,
        defaultbattery: "153.6 Lithium"
      },
    ],

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2050, mastrange:"2LFL", mastabvtype:"M300", stdcapacity: 2500, isscapacity: 2500, price: 0 },
          { mastlength: 3300, closedheight: 2200, mastrange:"2LFL", mastabvtype:"M330", stdcapacity: 2500, isscapacity: 2500,price: 210 },
          { mastlength: 3500, closedheight: 2300, mastrange:"2LFL", mastabvtype:"M350", stdcapacity: 2500, isscapacity: 2500,price: 298 },
          { mastlength: 4000, closedheight: 2600, mastrange:"2LFL", mastabvtype:"M400", stdcapacity: 2500, isscapacity: 2500,price: 510},
          { mastlength: 4500, closedheight: 2850, mastrange:"2LFL", mastabvtype:"M450", stdcapacity: 2390, isscapacity: 2390,price: 737},
          { mastlength: 5000, closedheight: 3100, mastrange:"2LFL", mastabvtype:"M500", stdcapacity: 2270, isscapacity: 2270,price: 795}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2050, freeliftheight: 1420, mastrange:"2FFL", mastabvtype:"FM300", stdcapacity: 2500, isscapacity: 2500,price: 460 },
          { mastlength: 3300, closedheight: 2165, freeliftheight: 1570, mastrange:"2FFL", mastabvtype:"FM330", stdcapacity: 2500, isscapacity: 2500,price: 576 },
          { mastlength: 3500, closedheight: 2265, freeliftheight: 1670, mastrange:"2FFL", mastabvtype:"FM350", stdcapacity: 2500, isscapacity: 2500,price: 701 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2100, freeliftheight: 1390, mastrange:"3FFL", mastabvtype:"FM435", stdcapacity: 2380, isscapacity: 2300, price: 1120 },
          { mastlength: 4500, closedheight: 2150, freeliftheight: 1440, mastrange:"3FFL", mastabvtype:"FM450", stdcapacity: 2340, isscapacity: 2260, price: 1120 },
          { mastlength: 4800, closedheight: 2240, freeliftheight: 1540, mastrange:"3FFL", mastabvtype:"FM480", stdcapacity: 2270, isscapacity: 2190, price: 1408 },
          { mastlength: 5000, closedheight: 2393, freeliftheight: 1640, mastrange:"3FFL", mastabvtype:"FM500", stdcapacity: 2160, isscapacity: 2100, price: 1530 },
          { mastlength: 5500, closedheight: 2627, freeliftheight: 1765, mastrange:"3FFL", mastabvtype:"FM550", stdcapacity: 1710, isscapacity: 1650, price: 1630 },
          { mastlength: 6000, closedheight: 2860, freeliftheight: 1990, mastrange:"3FFL", mastabvtype:"FM600", stdcapacity: 1410, isscapacity: 1350, price: 1760 },
          { mastlength: 6500, closedheight: 3095, freeliftheight: 2205, mastrange:"3FFL", mastabvtype:"FM650", stdcapacity: 1120, isscapacity: 1050, price: 1900}
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
      { forkpositionertype: "", price: 1800 },
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 465 },
      { tyretype: "Non-Marking S/E Solid", price: 486 },
      { tyretype: "Super Elastic", price: 480 }
    ],
     
    seatrequired: 'true',
    
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }],

    defaultbattery: "115V 125A/H Lithium",
    defaultcharger: "Fast",
  
    batteries: [
          {
          batterytype: "115V 230A/H",
          price: 2850
        }
      ],

    halolight: [{ halolighttype: "", price: 210 }],
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],

    heater:[ {heatertype:"Heater/Demister", price:110}],
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
