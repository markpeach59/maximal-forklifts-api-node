const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [  
{
    model: "FBAX30-YWL",
    capacity: 3000,
    engType: "Lithium-ion Electric",
    basePrice: 0,
    basePriceR: 0,
    offer:'true',
    imgName: "AX-SERIES-30T.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

    voltagerequired : true,    
    voltage :[
      {
        label:"Light Duty", 
        price: 16100, 
        priceR: 1500,
        defaultbattery: "76.8V 350A/H Lithium"
      },
      {
        label:"Standard", 
        price: 20550,
        priceR: 18400,
        defaultbattery: "115V 125A/H Lithium",
        batteries:[{
          batterytype: "115V 230A/H",
          price: 2850
        }]
      },
      {
        label:"Heavy Duty", 
        price: 20454, 
        priceR: 19400,
        defaultbattery: "153.6 Lithium"
      },
    ],

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, mastrange:"2LFL", mastabvtype:"M300", stdcapacity: 3000, isscapacity: 3000, price: 0 },
          { mastlength: 3300, closedheight: 2190, mastrange:"2LFL", mastabvtype:"M330", stdcapacity: 3000, isscapacity: 3000, price: 210 },
          { mastlength: 3500, closedheight: 2290, mastrange:"2LFL", mastabvtype:"M350", stdcapacity: 3000, isscapacity: 3000, price: 298 },
          { mastlength: 4000, closedheight: 2590, mastrange:"2LFL", mastabvtype:"M400", stdcapacity: 3000, isscapacity: 3000, price: 510},
          { mastlength: 4500, closedheight: 2840, mastrange:"2LFL", mastabvtype:"M450", stdcapacity: 2860, isscapacity: 2770, price: 739}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, freeliftheight: 1415, mastrange:"2FFL", mastabvtype:"FM300", stdcapacity: 3000, isscapacity: 3000, price: 576 },
          { mastlength: 3300, closedheight: 2290, freeliftheight: 1565, mastrange:"2FFL", mastabvtype:"FM330", stdcapacity: 3000, isscapacity: 3000, price: 737 },
          { mastlength: 3500, closedheight: 2590, freeliftheight: 1665, mastrange:"2FFL", mastabvtype:"FM350", stdcapacity: 3000, isscapacity: 3000, price: 858}
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2090, freeliftheight: 1460, mastrange:"3FFL", mastabvtype:"TFM435", stdcapacity: 2830, isscapacity: 2740, price: 1120 },
          { mastlength: 4500, closedheight: 2140, freeliftheight: 1510, mastrange:"3FFL", mastabvtype:"TFM450", stdcapacity: 2790, isscapacity: 2710, price: 1120 },
          { mastlength: 4800, closedheight: 2225, freeliftheight: 1610, mastrange:"3FFL", mastabvtype:"TFM480", stdcapacity: 2720, isscapacity: 2640, price: 1589 },
          { mastlength: 5000, closedheight: 2383, freeliftheight: 1710, mastrange:"3FFL", mastabvtype:"TFM500", stdcapacity: 2650, isscapacity: 2580, price: 1960 },
          { mastlength: 5500, closedheight: 2617, freeliftheight: 1835, mastrange:"3FFL", mastabvtype:"TFM550", stdcapacity: 2190, isscapacity: 2140, price: 2580 },
          { mastlength: 6000, closedheight: 2850, freeliftheight: 2060, mastrange:"3FFL", mastabvtype:"TFM600", stdcapacity: 1630, isscapacity: 1580, price: 2846},
          { mastlength: 6500, closedheight: 3035, freeliftheight: 2275, mastrange:"3FFL", mastabvtype:"TFM650", stdcapacity: 1220, isscapacity: 1150, price: 3099}
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 45 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 135 },
      { forklength: 1800, price: 180 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 510 },
      { sideshifttype: "Integral", price: 520 }
    ],
   forkpositioner: [
      { forkpositionertype: "", price: 1950 },
    ],
    tyres: [
      { tyretype: "S/E Solid Tyres", price: 590 },
      { tyretype: "Non-Marking Solid S/E Tyres", price: 610 },
      { tyretype: "Super Elastic Tyres", price: 620 },
      { tyretype: "Dual Drive", price: 1049 }
    ],
     
    seatrequired: 'true',

    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    
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
 {
    model: "FBAX35-YWL",
    capacity: 3500,
    engType: "Lithium-ion Electric",
    basePrice: 0,
    basePriceR: 0,
    offer:'true',
    imgName: "AX-SERIES-30T.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

    voltagerequired : true,    
    voltage :[
      {
        label:"Light Duty", 
        price: 16700, 
        priceR: 16000,
        defaultbattery: "76.8V 350A/H Lithium"
      },
      {
        label:"Standard", 
        price: 21350,
        priceR: 19215,
        defaultbattery: "115V 125A/H Lithium",
        batteries:[{
          batterytype: "115V 230A/H",
          price: 2850
        }]
      },
      {
        label:"Heavy Duty", 
        price: 21682, 
        priceR: 19600,
        defaultbattery: "153.6 Lithium"
      },
    ],

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, mastrange:"2LFL", mastabvtype:"M300", stdcapacity: 3500, isscapacity: 3500, price: 0 },
          { mastlength: 3300, closedheight: 2190, mastrange:"2LFL", mastabvtype:"M330", stdcapacity: 3500, isscapacity: 3500, price: 210 },
          { mastlength: 3500, closedheight: 2290, mastrange:"2LFL", mastabvtype:"M350", stdcapacity: 3500, isscapacity: 3500, price: 298 },
          { mastlength: 4000, closedheight: 2590, mastrange:"2LFL", mastabvtype:"M400", stdcapacity: 3500, isscapacity: 3500, price: 510},
          { mastlength: 4500, closedheight: 2840, mastrange:"2LFL", mastabvtype:"M450", stdcapacity: 3500, isscapacity: 3500, price: 739}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2040, freeliftheight: 1415, mastrange:"2FFL", mastabvtype:"FM300", stdcapacity: 3500, isscapacity: 3500, price: 576 },
          { mastlength: 3300, closedheight: 2290, freeliftheight: 1565, mastrange:"2FFL", mastabvtype:"FM330", stdcapacity: 3500, isscapacity: 3500, price: 737 },
          { mastlength: 3500, closedheight: 2590, freeliftheight: 1665, mastrange:"2FFL", mastabvtype:"FM305", stdcapacity: 3500, isscapacity: 3500, price: 858 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2190, freeliftheight: 1460, mastrange:"3FFL", mastabvtype:"TFM400", stdcapacity: 3300, isscapacity: 3210, price: 1120 },
          { mastlength: 4500, closedheight: 2140, freeliftheight: 1510, mastrange:"3FFL", mastabvtype:"TFM450", stdcapacity: 3270, isscapacity: 3180, price: 1120 },
          { mastlength: 4800, closedheight: 2300, freeliftheight: 1610, mastrange:"3FFL", mastabvtype:"TFM480", stdcapacity: 3090, isscapacity: 3030, price: 1589 },
          { mastlength: 5000, closedheight: 2383, freeliftheight: 1710, mastrange:"3FFL", mastabvtype:"TFM500", stdcapacity: 2900, isscapacity: 2840, price: 1960 },
          { mastlength: 5500, closedheight: 2617, freeliftheight: 1835, mastrange:"3FFL", mastabvtype:"TFM550", stdcapacity: 2350, isscapacity: 2300, price: 2580 },
          { mastlength: 6000, closedheight: 2850, freeliftheight: 2060, mastrange:"3FFL", mastabvtype:"TFM600", stdcapacity: 1880, isscapacity: 1840, price: 2846 },
          { mastlength: 6500, closedheight: 3035, freeliftheight: 2275, mastrange:"3FFL", mastabvtype:"TFM650", stdcapacity: 1410, isscapacity: 1360, price: 3099 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 45 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 135 },
      { forklength: 1800, price: 180 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 510 },
      { sideshifttype: "Integral", price: 520 }
    ],
   forkpositioner: [
      { forkpositionertype: "", price: 1950 },
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 590 },
      { tyretype: "Non-Marking Solid S/E", price: 610 },
      { tyretype: "Super Elastic", price: 620 },
      { tyretype: "Dual Drive", price: 1049 }
    ],

    seatrequired: 'true',
    
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    
    defaultbattery: "115V 125A/H Lithium",
    defaultcharger: "Fast",
  
    batteries: [
          {
          batterytype: "115V 230A/H",
          price: 2850,
        }
      ],

    halolight: [{ halolighttype: "", price: 210 }],
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]
  },
  {
    model: "FBAX45-YWL",
    capacity: 4500,
    engType: "Lithium-ion Electric",
    basePrice: 29240,
    basePriceR: 26000,
    offer:'false',
    imgName: "AX-Series-45.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",

    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2250, price: 0 },
          { mastlength: 3300, closedheight: 2400, price: 262 },
          { mastlength: 3500, closedheight: 2500, price: 350 },
          { mastlength: 4000, closedheight: 2800, price: 514},
          { mastlength: 4000, closedheight: 3050, price: 890}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2250, freeliftheight: 1430, price: 891},
          { mastlength: 3300, closedheight: 2400, freeliftheight: 1580, price: 1130 },
          { mastlength: 3500, closedheight: 2500, freeliftheight: 1680, price: 1200 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2235, freeliftheight: 1395, price: 1730 },
          { mastlength: 4500, closedheight: 2285, freeliftheight: 1450, price: 1730 },
          { mastlength: 4800, closedheight: 2385, freeliftheight: 1545, price: 2160 },
          { mastlength: 5000, closedheight: 2485, freeliftheight: 1645, price: 2160 },
          { mastlength: 5500, closedheight: 2610, freeliftheight: 1770, price: 2580 },
          { mastlength: 6000, closedheight: 2850, freeliftheight: 2010, price: 3099 },
          { mastlength: 6500, closedheight: 3050, freeliftheight: 2210, price: 3430 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 45 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 135 },
      { forklength: 1800, price: 180 }
    ],
    valves: [
      { valvetype: "3rd", price: 90 },
      { valvetype: "3rd + 4th", price: 220 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 550 },
      { sideshifttype: "Integral", price: 550 }
    ],
   forkpositioner: [
      { forkpositionertype: "", price: 3100 },
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 788 },
      { tyretype: "Non-Marking Solid S/E", price: 1039 },
      { tyretype: "Dual Drive", price: 1198 }
    ],

    seatrequired: 'true',
    
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],

    defaultbattery: "153V 304A/H Lithium",
    defaultcharger: "Fast",
    
    halolight: [{ halolighttype: "", price: 210 }],
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1100 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1460 },
      { cabinoption: "Full Steel Cabin", price: 1900 }
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]
  },
  {
    model: "FBAX50-YWL COMPACT",
    capacity: 5000,
    engType: "Lithium-ion Electric",
    basePrice: 33040,
    basePriceR: 29800,
    offer:'false',
    imgName: "AX-Series-45.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3500, closedheight: 2500, price: 352 },
          { mastlength: 4000, closedheight: 2800, price: 669},
          { mastlength: 4500, closedheight: 3050, price: 988},
          { mastlength: 5000, closedheight: 3300, price: 1408}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2250, freeliftheight: 1430, price: 1290},
          { mastlength: 3300, closedheight: 2400, freeliftheight: 1580, price: 1589 },
          { mastlength: 3500, closedheight: 2500, freeliftheight: 1680, price: 1620 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2235, freeliftheight: 1395, price: 2225 },
          { mastlength: 4500, closedheight: 2285, freeliftheight: 1450, price: 2419 },
          { mastlength: 4800, closedheight: 2385, freeliftheight: 1545, price: 2678 },
          { mastlength: 5000, closedheight: 2485, freeliftheight: 1645, price: 2678 },
          { mastlength: 5500, closedheight: 2630, freeliftheight: 1770, price: 3193 },
          { mastlength: 6000, closedheight: 2870, freeliftheight: 2010, price: 3601 },
          { mastlength: 6500, closedheight: 3095, freeliftheight: 2210, price: 4226 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 0 },
      { forklength: 1370, price: 60 },
      { forklength: 1520, price: 180 },
      { forklength: 1800, price: 240 }
    ],
    valves: [
      { valvetype: "3rd", price: 190 },
      { valvetype: "3rd + 4th", price: 270 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 1600 },
      { sideshifttype: "Integral", price: 1600 }
    ],

    forkpositioner: [
      { forkpositionertype: "", price: 3900 },
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 1150 },
      { tyretype: "Dual Drive", price: 1198 }
    ],
     
    seatrequired: 'true',
    
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    
    defaultbattery: "153V 304A/H Lithium",
    defaultcharger: "Fast",
  
    

    halolight: [{ halolighttype: "", price: 210 }],
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1300 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1700 },
      { cabinoption: "Full Steel Cabin", price: 2050 }
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}],
  },
  {
    model: "FBAX50-YWL BIG",
    capacity: 5000,
    engType: "Lithium-ion Electric",
    basePrice: 48900,
    basePriceR: 45402,
    offer:'false',
    imgName: "AX-Series-45.jpg",
    modeldescription:[{description:"AX Series"}, {description:"Twin Front Wheels"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3500, closedheight: 2500, price: 352 },
          { mastlength: 4000, closedheight: 2800, price: 669},
          { mastlength: 4500, closedheight: 3050, price: 988},
          { mastlength: 5000, closedheight: 3300, price: 1408}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000, closedheight: 2250, freeliftheight: 1430, price: 1290},
          { mastlength: 3300, closedheight: 2400, freeliftheight: 1580, price: 1589 },
          { mastlength: 3500, closedheight: 2500, freeliftheight: 1680, price: 1620 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350, closedheight: 2235, freeliftheight: 1395, price: 2225 },
          { mastlength: 4500, closedheight: 2285, freeliftheight: 1450, price: 2419 },
          { mastlength: 4800, closedheight: 2385, freeliftheight: 1545, price: 2678 },
          { mastlength: 5000, closedheight: 2485, freeliftheight: 1645, price: 2678 },
          { mastlength: 5500, closedheight: 2630, freeliftheight: 1770, price: 3193 },
          { mastlength: 6000, closedheight: 2870, freeliftheight: 2010, price: 3601 },
          { mastlength: 6500, closedheight: 3095, freeliftheight: 2210, price: 4226 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 0 },
      { forklength: 1370, price: 60 },
      { forklength: 1520, price: 180 },
      { forklength: 1800, price: 240 }
    ],
    valves: [
      { valvetype: "3rd", price: 190 },
      { valvetype: "3rd + 4th", price: 270 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 1600 },
      { sideshifttype: "Integral", price: 1600 }
    ],

    forkpositioner: [
      { forkpositionertype: "", price: 3900 },
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 1150 }
    ],
     
    seatrequired: 'true',
    
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],
    
    defaultbattery: "352V 230A/H Lithium",
    defaultcharger: "Fast",

    halolight: [{ halolighttype: "", price: 210 }],
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1300 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1700 },
      { cabinoption: "Full Steel Cabin", price: 2050 }
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]
  },
  {
    model: "FBAX70-YWL",
    capacity: 7000,
    engType: "Lithium-ion Electric",
    basePrice: 50200,
    basePriceR: 46601,
    offer:'false',
    imgName: "AX-Series-45.jpg",
    modeldescription:[{description:"AX Series"}, {description:"4 Wheel"}],
    loadcenter:500,
    defaulttyre:"Pneumatic",
    
    masts: [
      {
        masttype: "2 Stage Free View Mast",
        mastsizes: [
          { mastlength: 3500, closedheight: 2500, price: 352 },
          { mastlength: 4000, closedheight: 2800, price: 669},
          { mastlength: 4500, closedheight: 3050, price: 988},
          { mastlength: 5000, closedheight: 3300, price: 1408}
        ]
      },
      {
        masttype: "2 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 3000,  price: 1290},
          { mastlength: 3300, price: 1589 },
          { mastlength: 3500,  price: 1620 }
        ]
      },
      {
        masttype: "3 Stage Full Free Lift Mast",
        mastsizes: [
          { mastlength: 4350,  price: 2225 },
          { mastlength: 4500,  price: 2419 },
          { mastlength: 4800,  price: 2678 },
          { mastlength: 5000,  price: 2678 },
          { mastlength: 5500,  price: 3193 },
          { mastlength: 6000,  price: 3601 },
          { mastlength: 6500,  price: 4226 }
        ]
      }
    ],
    forks: [
      { forklength: 1100, price: 0 },
      { forklength: 1200, price: 0 },
      { forklength: 1370, price: 90 },
      { forklength: 1520, price: 210 },
      { forklength: 1800, price: 270 }
    ],
    valves: [
      { valvetype: "3rd", price: 190 },
      { valvetype: "3rd + 4th", price: 270 }
    ],
    sideshift: [
      { sideshifttype: "Hook On", price: 1600 },
      { sideshifttype: "Integral", price: 1600 }
    ],

    forkpositioner: [
      { forkpositionertype: "", price: 4200 },
    ],
    tyres: [
      { tyretype: "S/E Solid", price: 1150 }
    ],
     
    seatrequired: 'true',
    
    seat: [
    	{ seattype: "Standard", price: 192 },
    	{ seattype: "Full Comfort Suspension", price: 298 },
    	{ seattype: "Full Comfort Suspension with Arm Rest", price: 336 }
    ],

    defaultbattery: "352V 230A/H Lithium",
    defaultcharger: "Fast",

    halolight: [{ halolighttype: "", price: 210 }],
	  safetybluespot: [{ safetybluespottype: "", price: 90 }],

    cabin: [
      { cabinoption: "Half Cabin", price: 1300 },
      { cabinoption: "Half Cabin with Canvas Sides", price: 1700 },
      { cabinoption: "Full Steel Cabin", price: 2050 }
    ],
    heater:[ {heatertype:"Heater/Demister", price:110}]
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
