const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
  {
    model: "PTE 12N",
    capacity: 1200,
    engType: "Warehouse",
    basePrice: 980,
    imgName: "PALLET-TRUCK-PTE12N.jpg",
    modeldescription:[
        {description:"Single Roller"}, 
        {description:"Turtle speed with verticle drive function"},
        {description:"No PIN code option"}],
    
    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 100 },
    ],

    defaultbattery : "24V 15A/H Lithiium",
    defaultcharger : "5A Charger",

    batteries: [
      {
        batterytype: "24V 30A/H Lithium",
        price: 49,
      }
    ]
  },
  {
    model: "PTE 15N",
    capacity: 1500,
    engType: "Warehouse",
    basePrice: 1120,
    imgName: "PALLET-TRUCK-PTE15N.jpg",
    modeldescription:[
        {description:"Single Roller"}, 
        {description:"Turtle speed with verticle drive function"},
        {description:"with PIN code"}],
    
    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 100 },
    ],

    defaultbattery : "24V 15A/H Lithiium",
    defaultcharger : "5A Charger",

    batteries: [
      {
        batterytype: "24V 30A/H Lithium",
        price: 89,
      }
    ]
  },
  {
    model: "PTE 20N",
    capacity: 2000,
    engType: "Warehouse",
    basePrice: 1887,
    imgName: "PALLET-TRUCK-PTE20N-PTE20B-Li.jpg",
    modeldescription:[
        {description:"Single Roller"}, 
        {description:"Turtle speed with verticle drive function"},
        {description:"with PIN code"}],
    
    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 100 },
    ],

    defaultbattery : "24V 20A/H Lithiium",
    defaultcharger : "9A Charger",

    batteries: [
      {
        batterytype: "24V 36A/H Lithium",
        price: 100,
      }
    ],
  
  
  defaultroller: "single",

  optionalrollers:[
      {rollertype : "Twin Roller", price: 95}
  ]
},


{
  model: "PT 18 M1X",
  capacity: 1800,
  engType: "Warehouse",
  basePrice: 3393,
  imgName: "",
  modeldescription:[
      {description:"Powered Pallet Truck"}, 
      {description:"Single Roller"}
  ],
  
  forks2d: [
    { forklength: "550 X 1150", price: 0 },
    { forklength: "550 X 1220", price: 0 },
    { forklength: "685 X 1150", price: 30 },
    { forklength: "685 X 1220", price: 60 },
  ],

  defaultbattery : "24V 1600A/H Lead Acid",
  defaultcharger : "built-in Charger",

  batteries: [
    {
      batterytype: "24V 36A/H Lithium",
      price: 100,
    }
  ],


defaultroller: "single",

optionalrollers:[
    {rollertype : "Twin Roller", price: 95}
]
},
{
  model: "PT 20 M1X",
  capacity: 2000,
  engType: "Warehouse",
  basePrice: 4100,
  imgName: "",
  modeldescription:[
      {description:"Powered Pallet Truck"}, 
      {description:"Single Roller"}
  ],
  
  forks2d: [
    { forklength: "550 X 1150", price: 0 },
    { forklength: "550 X 1220", price: 0 },
    { forklength: "685 X 1150", price: 30 },
    { forklength: "685 X 1220", price: 60 },
  ],

  defaultbattery : "24V 210A/H Lead Acid",
  defaultcharger : "built-in Charger",

  batteries: [
    {
      batterytype: "24V 280A/H Lead Acid",
      price: 79,
    }
  ],


defaultroller: "Single",

optionalrollers:[
    {rollertype : "Twin Roller", price: 67}
]
},
{
  model: "PT 20 M1XL",
  capacity: 2000,
  engType: "Warehouse",
  basePrice: 5200,
  imgName: "",
  modeldescription:[
      {description:"Powered Pallet Truck"}, 
      {description:"Single Roller"}
  ],
  
  forks2d: [
    { forklength: "550 X 1150", price: 0 },
    { forklength: "550 X 1220", price: 0 },
    { forklength: "685 X 1150", price: 30 },
    { forklength: "685 X 1220", price: 60 },
  ],

  defaultbattery : "Lithium",
  defaultcharger : "Fast Charger",

  defaultroller: "Single",

  optionalrollers:[
    {rollertype : "Twin Roller", price: 67}
]
},


{
  model: "PTE 20C",
  capacity: 2000,
  engType: "Warehouse",
  basePrice: 4396,
  imgName: "PALLET-TRUCK-PTE20-C.jpg",
  modeldescription:[
      {description:"Powered Pallet Truck"}, 
      {description:"Flat-down Platform"},
      {description:"with Arms"},
      {description:"Double Load Wheels"}
  ],
  
  forks2d: [
    { forklength: "540 X 1150", price: 0 },
    { forklength: "540 X 1220", price: 39 },
    { forklength: "540 X 1500", price: 70 },
    { forklength: "540 X 1800", price: 110 },

  
    { forklength: "685 X 1220", price: 0 },
    { forklength: "685 X 1500", price: 42 },
    { forklength: "685 X 1800", price: 96 },
    { forklength: "685 X 2000", price: 129 },
  ],

  defaultbattery : "24V 180A/H Lead Acid",
  defaultcharger : "24V 20A Charger",

  loadbackrest : [{loadbackresttype:"", price: 46}],

  pincode : [{pincodetype:"", price: 60}]
},

{
  model: "PT 20H",
  capacity: 2000,
  engType: "Warehouse",
  basePrice: 5780,
  imgName: "",
  modeldescription:[
      {description:"Ride-On Powered Pallet Truck"}, 
      {description:"Flat-down Platform"},
      {description:"with Safety Arms"}
  ],
  
  forks2d: [
    { forklength: "560 X 1150", price: 0 },
    { forklength: "685 X 1150", price: 33 }
  ],

  steering :{steeringtype:"", price: 310},
  defaultbattery : "24V 150A/H Lithium",
  defaultcharger : "Fast Charger"
},

{
  model: "PT 25H",
  capacity: 2500,
  engType: "Warehouse",
  basePrice: 5996,
  imgName: "",
  modeldescription:[
      {description:"Ride-On Powered Pallet Truck"}, 
      {description:"Flat-down Platform"},
      {description:"with Safety Arms"},
      {description:"EPS Steering as Standard"},

  ],
  
  forks2d: [
    { forklength: "560 X 1150", price: 0 },
    { forklength: "685 X 1150", price: 33 }
  ],

  steering :{steeringtype:"", price: 310},

  defaultbattery : "24V 150A/H Lithium",
  defaultcharger : "Fast Charger"
},

{
  model: "PT 16L",
  capacity: 1600,
  engType: "Warehouse",
  basePrice: 3984,
  imgName: "PALLET-TRUCK-PT16L-20L-25L.jpg",
  modeldescription:[
      {description:"Walk-behind Powered Pallet Truck"}
  ],
  
  forks2d: [
    { forklength: "560 X 1150", price: 0 },
    { forklength: "685 X 1150", price: 90 },

    { forklength: "540 X 1500", price:310 },
    { forklength: "685 X 1500", price:310 },

    { forklength: "540 X 1800", price: 390 },
    { forklength: "685 X 1800", price: 390 },


    { forklength: "685 X 2000", price: 496 }
  ],

 
  defaultbattery : "24V 160A/H Lead Acid",
  defaultcharger : "Built-in Charger",

  pincode : [{pincodetype:"", price: 120}]

},
{
  model: "PT 20L",
  capacity: 2000,
  engType: "Warehouse",
  basePrice: 4079,
  imgName: "PALLET-TRUCK-PT16L-20L-25L.jpg",
  modeldescription:[
      {description:"Walk-behind Powered Pallet Truck"}
  ],
  
  forks2d: [
    { forklength: "560 X 1150", price: 0 },
    { forklength: "685 X 1150", price: 90 },

    { forklength: "540 X 1500", price:310 },
    { forklength: "685 X 1500", price:310 },

    { forklength: "540 X 1800", price: 390 },
    { forklength: "685 X 1800", price: 390 },


    { forklength: "685 X 2000", price: 496 }
  ],

 
  defaultbattery : "24V 210A/H Lead Acid",
  defaultcharger : "Built-in Charger",

  pincode : [{pincodetype:"", price: 120}]

},
{
  model: "PT 25L",
  capacity: 2500,
  engType: "Warehouse",
  basePrice: 5601,
  imgName: "PALLET-TRUCK-PT16L-20L-25L.jpg",
  modeldescription:[
      {description:"Walk-behind Powered Pallet Truck"}
  ],
  
  forks2d: [
    { forklength: "560 X 1150", price: 0 },
    { forklength: "685 X 1150", price: 90 },

    { forklength: "540 X 1500", price:310 },
    { forklength: "685 X 1500", price:310 },

    { forklength: "540 X 1800", price: 390 },
    { forklength: "685 X 1800", price: 390 },


    { forklength: "685 X 2000", price: 496 }
  ],

 
  defaultbattery : "24V 350A/H Lead Acid",
  defaultcharger : "Built-in Charger",

  pincode : [{pincodetype:"", price: 120}]

},


{
  model: "OPL 20N",
  capacity: 2000,
  engType: "Warehouse",
  basePrice: 8600,
  imgName: "PALLET-TRUCK-OPL25N.jpg",
  modeldescription:[
      {description:"Low Level Order Picker"},
      {description:"Pin Code Access"}
  ],
  
  forks2d: [
    { forklength: "540 X 2000", price: 400 },
    { forklength: "540 X 2400", price: 400 },
    { forklength: "540 X 1800", price: 290 },
    { forklength: "540 X 1500", price: 210 },

    { forklength: "685 X 2000", price: 400 },
    { forklength: "685 X 2400", price: 400 },
    { forklength: "685 X 1800", price: 290 },
    { forklength: "685 X 1500", price: 210 },
    { forklength: "685 X 1220", price: 180 }
    
  ],

 
  defaultbattery : "24V 465A/H Lead Acid",
  defaultcharger : "Standard Charger",

  defaultroller: "Tandem",
  optionalrollers:[
    {rollertype : "Single", price: 66}
  ],

  pincode : [{pincodetype:"", price: 120}]

},
{
  model: "OPL 25N",
  capacity: 2500,
  engType: "Warehouse",
  basePrice: 8980,
  imgName: "PALLET-TRUCK-OPL25N.jpg",
  modeldescription:[
      {description:"Low Level Order Picker"},
      {description:"Pin Code Access"}
  ],
  
  forks2d: [
    { forklength: "540 X 2000", price: 400 },
    { forklength: "540 X 2400", price: 400 },
    { forklength: "540 X 1800", price: 290 },
    { forklength: "540 X 1500", price: 210 },

    { forklength: "685 X 2000", price: 400 },
    { forklength: "685 X 2400", price: 400 },
    { forklength: "685 X 1800", price: 290 },
    { forklength: "685 X 1500", price: 210 },
    { forklength: "685 X 1220", price: 180 }
    
  ],

 
  defaultbattery : "24V 465A/H Lead Acid",
  defaultcharger : "Standard Charger",

  defaultroller: "Tandem",
  optionalrollers:[
    {rollertype : "Single", price: 66}
],

  pincode : [{pincodetype:"", price: 120}]

},




{
  model: "PSE 12B",
  capacity: 1200,
  engType: "Warehouse",
  basePrice: 8980,
  imgName: "",
  modeldescription:[
      {description:"Pedestrian Stacker"}
  ],

  masts: [
    {
      masttype: "Single Mast",
      mastsizes: [
        { mastlength: 1600, closedheight: 1930, freeliftheight: 1514, price: 460 },
        { mastlength: 2000, closedheight: 2330, freeliftheight: 1914, price: 600 }
      ]
    },
    {
      masttype: "2 Stage Mast",
      mastsizes: [
        { mastlength: 2600, closedheight: 1780, price: 0 },
        { mastlength: 2900, closedheight: 1930,  price: 90 },
        { mastlength: 3200, closedheight: 2080,  price: 110 },
        { mastlength: 3600, closedheight: 2230,  price: 140 }
      ]
    }
  ],
  
  forks2d: [
    { forklength: "540 X 1150", price: 0 },
    { forklength: "685 X 1150", price: 0 }
  ],

 
  defaultbattery : "24V 85A/H Lead Acid",
  defaultcharger : "12A Charger",

  bfs: [{ bfstype: "", price: 80 }],
  blinkey: [{ blinkeytype: "", price: 30}],
},

{
  model: "ECL 15B",
  capacity: 1500,
  engType: "Warehouse",
  basePrice: 2999,
  imgName: "ELECTRIC-STACKER-ECL15B",
  modeldescription:[
      {description:"Walk-behind Stacker"},
      {description:"585 X 1150 Forks"}
  ],

  masts: [
    {
      masttype: "Simplex Mast",
      mastsizes: [
        { mastlength: 1600, price: 0 },
        { mastlength: 2000, price: 90 }
      ]
    },
    {
      masttype: "Duplex Mast",
      mastsizes: [
       
        { mastlength: 2900,  price: 210 },
        { mastlength: 3200,  price: 288 },
        { mastlength: 3600,  price: 310 }
      ]
    }
  ],
  
  

 
  defaultbattery : "48V 60A/H Lead Acid",
  defaultcharger : "Built-in Charger",

},

{
  model: "PSE 15L",
  capacity: 1500,
  engType: "Warehouse",
  basePrice: 2999,
  imgName: "",
  modeldescription:[
      {description:"Walk-behind Stacker"},
      {description:"585 X 1150 Forks"}
  ],

  masts: [
    {
      masttype: "Simplex Mast",
      mastsizes: [
        { mastlength: 1600, price: 0 },
        { mastlength: 2000, price: 90 }
      ]
    },
    {
      masttype: "Duplex Mast",
      mastsizes: [
       
        { mastlength: 2900,  price: 210 },
        { mastlength: 3200,  price: 288 },
        { mastlength: 3600,  price: 310 }
      ]
    }
  ],
  
  

 
  defaultbattery : "48V 60A/H Lead Acid",
  defaultcharger : "Built-in Charger",

},
{
  model: "PSE 15L-C",
  capacity: 1500,
  engType: "Warehouse",
  basePrice: 4400,
  imgName: "ELECTRIC-STACKER-PSE15-C.jpg",
  modeldescription:[
      {description:"Pedestrian Stacker"}
  ],

  masts: [
    {
      masttype: "Single Mast",
      mastsizes: [
        { mastlength: 1600, closedheight: 1930, freeliftheight: 1514, price: 460 },
        { mastlength: 2000, closedheight: 2330, freeliftheight: 1914, price: 600 }
      ]
    },
    {
      masttype: "2 Stage Mast",
      mastsizes: [
       
        { mastlength: 2900, closedheight: 1930,  price: 90 },
       
        { mastlength: 3600, closedheight: 2230,  price: 140 }
      ]
    }
  ],
  
  forks2d: [
    { forklength: "540 X 1150", price: 0 },
    { forklength: "685 X 1150", price: 0 }
  ],

 
  defaultbattery : "24V 100A/H Lead Acid",
  defaultcharger : "24V 15A Charger",

  loadcenter:600,

  bfs: [{ bfstype: "", price: 80 }],
  blinkey: [{ blinkeytype: "", price: 30}],
},



{
  model: "PS 16N",
  capacity: 1600,
  engType: "Warehouse",
  basePrice: 6100,
  imgName: "",
  modeldescription:[
      {description:"Pedestrian Stacker"},
      {description:"Platform and Arms"},
      {description:"Zapi Controller"},
  ],

  masts: [
    {
      masttype: "Single Mast",
      mastsizes: [
        { mastlength: 2900, price: 0 },
        { mastlength: 3200, price: 140 },

        { mastlength: 3600, price: 296 },
        { mastlength: 4000, price: 620 },
        { mastlength: 4300, price: 730 },
        { mastlength: 4600, price: 997 },
        { mastlength: 5300, price: 1180 },
        { mastlength: 5500, price: 1494 }
      ]
    }
  ],
  
  forks2d: [
    { forklength: "540 X 1150", price: 0 },
    { forklength: "685 X 1150", price: 90 }
  ],

 
  defaultbattery : "",
  defaultcharger : "",


  bfs: [{ bfstype: "", price: 178 }],
  blinkey: [{ blinkeytype: "", price: 30}],
},
{
  model: "PS 20N",
  capacity: 2000,
  engType: "Warehouse",
  basePrice: 7810,
  imgName: "",
  modeldescription:[
      {description:"Pedestrian Stacker"},
      {description:"Platform and Arms"},
      {description:"Zapi Controller"},
  ],

  masts: [
    {
      masttype: "Single Mast",
      mastsizes: [
        { mastlength: 2900, price: 0 },
        { mastlength: 3200, price: 140 },

        { mastlength: 3600, price: 296 },
        { mastlength: 4000, price: 620 },
        { mastlength: 4300, price: 730 },
        { mastlength: 4600, price: 997 },
        { mastlength: 5300, price: 1180 },
        { mastlength: 5500, price: 1494 }
      ]
    }
  ],
  
  forks2d: [
    { forklength: "540 X 1150", price: 0 },
    { forklength: "685 X 1150", price: 90 }
  ],

 
  defaultbattery : "",
  defaultcharger : "",


  bfs: [{ bfstype: "", price: 178 }],
  blinkey: [{ blinkeytype: "", price: 30}],
},

{
  model: "PSE 10L-C",
  capacity: 1000,
  engType: "Warehouse",
  basePrice: 2780,
  imgName: "ELECTRIC-STACKER-PSE10L-C.jpg",
  modeldescription:[
      {description:"Curtis Controller"},
  ],

  masts: [
    {
      masttype: "Single Mast",
      mastsizes: [
        { mastlength: 1600, price: 0 },
        { mastlength: 2000, price: 120 },

        { mastlength: 2900, price: 296 },
        { mastlength: 3200, price: 388 },
        { mastlength: 3500, price: 520 }
      ]
    }
  ],
  
  forks2d: [
    { forklength: "540 X 1150", price: 0 },
    { forklength: "685 X 1220", price: 190 }
  ],

 
  defaultbattery : "24V 85A/H Battery Maintenance Free",
  defaultcharger : "Built-in",
},
{
  model: "PSE 15L-C",
  capacity: 1500,
  engType: "Warehouse",
  basePrice: 2998,
  imgName: "",
  modeldescription:[
      {description:"Curtis Controller"},
  ],

  masts: [
    {
      masttype: "Single Mast",
      mastsizes: [
        { mastlength: 1600, price: 0 },
        { mastlength: 2000, price: 120 },

        { mastlength: 2900, price: 296 },
        { mastlength: 3200, price: 388 },
        { mastlength: 3500, price: 520 }
      ]
    }
  ],
  
  forks2d: [
    { forklength: "540 X 1150", price: 0 },
    { forklength: "685 X 1220", price: 190 }
  ],

 
  defaultbattery : "24V 85A/H Battery Maintenance Free",
  defaultcharger : "Built-in",
},

{
  model: "PS 16TSL",
  capacity: 1600,
  engType: "Warehouse",
  basePrice: 6700,
  imgName: "",
  modeldescription:[
    {description:"Straddle Stacker"},
    {description:"Curtis Controller"},
  ],

  masts: [
    {
      masttype: "2 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 2900, price: 0 },
        { mastlength: 3200, price: 40 },
        { mastlength: 3600, price: 160 }
      ]
    },
    {
      masttype: "3 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 4000, price: 560 },
        { mastlength: 4300, price: 690 },

        { mastlength: 4600, price: 760 },
        { mastlength: 5300, price: 871 }
        
      ]
    }
  ],
  
  sideshift: [
    { sideshifttype: "", price: 780 }
  ],

 
  defaultbattery : "24V 270A/H Lead Acid",
  defaultcharger : "Built-in",
},

{
  model: "PS 18TSL",
  capacity: 1800,
  engType: "Warehouse",
  basePrice: 7150,
  imgName: "",
  modeldescription:[
    {description:"Straddle Stacker"},
    {description:"Curtis Controller"},
  ],

  masts: [
    {
      masttype: "2 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 2900, price: 0 },
        { mastlength: 3200, price: 40 },
        { mastlength: 3600, price: 160 }
      ]
    },
    {
      masttype: "3 Stage Full Free Lift Mast",
      mastsizes: [
        { mastlength: 4000, price: 560 },
        { mastlength: 4300, price: 690 },

        { mastlength: 4600, price: 760 },
        { mastlength: 5300, price: 871 }
        
      ]
    }
  ],
  
  sideshift: [
    { sideshifttype: "", price: 780 }
  ],

 
  defaultbattery : "24V 270A/H Lead Acid",
  defaultcharger : "Built-in",
},



{
  model: "PS 13RM PLUS",
  capacity: 1300,
  engType: "Warehouse",
  basePrice: 8993,
  imgName: "ELECTRIC-STACKER-PS13-15RM-PLUS.jpg",
  modeldescription:[
    {description:"Pedestrian Reach Truck"}
  ],

  masts: [
    {
      masttype: "2 Stage Mast",
      mastsizes: [
        { mastlength: 2400, price: 0 },
        { mastlength: 3000, price: 90 }
      ]
    },
    {
      masttype: "Triplex Mast",
      mastsizes: [
        { mastlength: 3600, price: 1510 },
        { mastlength: 4500, price: 1910 },
        { mastlength: 4800, price: 2200 }
        
      ]
    }
  ],
  
  forks: [
    { forklength: 1070, price: 21 },
    { forklength: 1150, price: 42 },
  ],

 
  defaultbattery : "24V 270A/H Lead Acid",

  batteries: [
    {
      batterytype: "24V 400 A/H",
      price: 110,
    },
    {
      batterytype: "24/200 A/H Lithium",
      price: 1889,
    },
    {
      batterytype: "24/300 A/H Lithium",
      price: 1991,
    }
  ],

  platform: [{platformtype:"", price: 297}]
},
{
  model: "PS 15RM PLUS",
  capacity: 1500,
  engType: "Warehouse",
  basePrice: 9543,   
  imgName: "ELECTRIC-STACKER-PS13-15RM-PLUS.jpg",
  modeldescription:[
    {description:"Pedestrian Reach Truck"}
  ],

  masts: [
    {
      masttype: "2 Stage Mast",
      mastsizes: [
        { mastlength: 2400, price: 0 },
        { mastlength: 3000, price: 90 }
      ]
    },
    {
      masttype: "Triplex Mast",
      mastsizes: [
        { mastlength: 3600, price: 1510 },
        { mastlength: 4500, price: 1910 },
        { mastlength: 4800, price: 2200 }
        
      ]
    }
  ],
  
  forks: [
    { forklength: 1070, price: 21 },
    { forklength: 1150, price: 42 },
  ],

 
  defaultbattery : "24V 270A/H Lead Acid",

  batteries: [
    {
      batterytype: "24V 400 A/H",
      price: 110,
    },
    {
      batterytype: "24/200 A/H Lithium",
      price: 1889,
    },
    {
      batterytype: "24/300 A/H Lithium",
      price: 1991,
    }
  ],

  platform: [{platformtype:"", price: 297}]
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
