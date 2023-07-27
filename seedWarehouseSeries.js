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
        {description:"Turtle speed with vertical drive function"},
        {description:"No PIN code option"}],
    
    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 100 },
    ],

    defaultroller : "Single",
    defaultbattery : "24V 15A/H Lithium",
    defaultcharger : "5A",

    batteries: [
      {
        batterytype: "24V 30A/H Lithium",
        price: 49
      }
    ],
    spares : [{sparetype:"24V 30A/H Lithium", price:346}]
  },
  {
    model: "PTE 15N",
    capacity: 1500,
    engType: "Warehouse",
    basePrice: 1120,
    imgName: "PALLET-TRUCK-PTE15N.jpg",
    modeldescription:[
        {description:"Turtle speed with vertical drive function"},
        {description:"with PIN code"}],
    
    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 100 },
    ],

    defaultroller : "Single",
    defaultbattery : "24V 15A/H Lithium",
    defaultcharger : "5A",

    batteries: [
      {
        batterytype: "24V 36A/H Lithium",
        price: 89
      }
    ],
    spares : [{sparetype:"24V 36A/H Lithium", price:396}],
  },
  {
    model: "PTE 20N",
    capacity: 2000,
    engType: "Warehouse",
    basePrice: 1887,
    imgName: "PALLET-TRUCK-PTE20N-PTE20B-Li.jpg",
    modeldescription:[
        {description:"Turtle speed with vertical drive function"},
        {description:"with PIN code"}],
    
    forks2d: [
      { forklength: "540 X 1150", price: 0 },
      { forklength: "685 X 1150", price: 0 },
      { forklength: "685 X 1220", price: 100 },
    ],


    defaultbattery : "24V 20A/H Lithium",
    defaultcharger : "9A",

    spares : [{sparetype:"24V 36A/H Lithium", price:396}],
  
  
  defaultroller: "Single",

  rollers:[
      {rollertype : "Twin", price: 95}
  ]
},


{
  model: "PT 18 M1X",
  capacity: 1800,
  engType: "Warehouse",
  basePrice: 3393,
  imgName: "PT18-M1X.jpg",
  modeldescription:[
      {description:"Powered Pallet Truck"}
  ],
  
  forks2d: [
    { forklength: "550 X 1150", price: 0 },
    { forklength: "550 X 1220", price: 0 },
    { forklength: "685 X 1150", price: 30 },
    { forklength: "685 X 1220", price: 60 },
  ],

  defaultbattery : "24V 160A/H Lead Acid",
  defaultcharger : "Built-in",


defaultroller: "Single",

rollers:[
    {rollertype : "Twin", price: 95}
],


},
{
  model: "PT 20 M1X",
  capacity: 2000,
  engType: "Warehouse",
  basePrice: 4100,
  imgName: "PT20-M1X.jpg",
  modeldescription:[
      {description:"Powered Pallet Truck"}, 
  
  ],
  
  forks2d: [
    { forklength: "550 X 1150", price: 0 },
    { forklength: "550 X 1220", price: 0 },
    { forklength: "685 X 1150", price: 30 },
    { forklength: "685 X 1220", price: 60 },
  ],

  defaultbattery : "24V 210A/H Lead Acid",
  defaultcharger : "Built-in",

  batteries: [
    {
      batterytype: "24V 280A/H Lead Acid",
      price: 79,
    }
  ],


defaultroller: "Single",

rollers:[
    {rollertype : "Twin", price: 67}
],


controllers:[
  {controllertype : "Curtis", price: 0},
  {controllertype : "Zapi", price: 0}
],

liftybutton:[
  {liftybuttontype : "", price: 210}
],





},
{
  model: "PT 20 M1XL",
  capacity: 2000,
  engType: "Warehouse",
  basePrice: 5200,
  basePriceR: 4600,
  imgName: "PT20-M1X.jpg",
  modeldescription:[
      {description:"Powered Pallet Truck"}
      
  ],
  
  forks2d: [
    { forklength: "550 X 1150", price: 0 },
    { forklength: "550 X 1220", price: 0 },
    { forklength: "685 X 1150", price: 30 },
    { forklength: "685 X 1220", price: 60 },
  ],

  defaultbattery : "Lithium",
  defaultcharger : "Fast",

  defaultroller: "Single",

  rollers:[
    {rollertype : "Twin", price: 67}
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
  defaultcharger : "24V 20A",

  loadbackrest : [{loadbackresttype:"", price: 46}],

  pincode : [{pincodetype:"Access", price: 60}]
},

{
  model: "PT 20H",
  capacity: 2000,
  engType: "Warehouse",
  basePrice: 5780,
  basePriceR: 5250,
  imgName: "PT20H.png",
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
  defaultcharger : "Fast"
},

{
  model: "PT 25H",
  capacity: 2500,
  engType: "Warehouse",
  basePrice: 5996,
  basePriceR: 5440,
  imgName: "PT20H.png",
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


  defaultbattery : "24V 150A/H Lithium",
  defaultcharger : "Fast"
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
  defaultcharger : "Built-in",

  pincode : [{pincodetype:"Start", price: 120}]

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
  defaultcharger : "Built-in",

  pincode : [{pincodetype:"Start", price: 120}]

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
  defaultcharger : "Built-in",

  pincode : [{pincodetype:"Start", price: 120}]

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
  defaultcharger : "Standard",

  defaultroller: "Tandem",
  rollers:[
    {rollertype : "Single", price: 66}
  ],

  platform : [{platformtype:"Man up lifting", price: 107}],

  batteries: [
    {
      batterytype: "24V 300A/H Lithium",
      price: 2997,
    }
  ]


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
  defaultcharger : "Standard",

  defaultroller: "Tandem",
  rollers:[
    {rollertype : "Single", price: 66}
],

  
platform : [{platformtype:"Man up lifting", price: 107}],

batteries: [
  {
    batterytype: "24V 300A/H Lithium",
    price: 2997,
  }
]


},




{
  model: "PSE 12B",
  capacity: 1200,
  engType: "Warehouse",
  basePrice: 3900,
  imgName: "PSE12B.jpg",
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

 loadbackrest:[{loadbackresttype:"", price:110}],

  defaultbattery : "24V 85A/H Lead Acid",
  defaultcharger : "12A",

  batteries: [
    {
      batterytype: "24V 106A/H",
      price: 98,
    }
  ],

  bfs: [{ bfstype: "", price: 80 }],
  blinkey: [{ blinkeytype: "", price: 30}]
},

{
  model: "ECL 15B",
  capacity: 1500,
  engType: "Warehouse",
  basePrice: 3800,
  basePriceR: 2790,
  imgName: "ECL15B.jpg",
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
  
  loadbackrest:[{loadbackresttype:"", price: 70}],

  defaultbattery : "48V 60A/H",
  defaultcharger : "Built-in 48/8",

  batteries: [
    {
      batterytype: "24V 50A/H Lithium with Fast Charger",
      price: 610,
    }
  ],


},
{
  model: "PSE 15L",
  capacity: 1500,
  engType: "Warehouse",
  basePrice: 4400,
  imgName: "PSE15L.jpg",
  modeldescription:[
    {description:"Pedestrian Stacker"}
],

loadcenter:600,
masts: [
  
  {
    masttype: "2 Stage Mast",
    mastsizes: [
     
      { mastlength: 2900, price: 0 },
      { mastlength: 3600,  price: 0 },
      { mastlength: 4000,  price: 0}
    ]
  },
  {
    masttype: "2 Stage Free Lift Mast",
    mastsizes: [
     
      { mastlength: 2900, price: 0 },
      { mastlength: 3600,  price: 40 }
    ]
  },



],

forks2d: [
  { forklength: "540 X 1150", price: 0 },
  { forklength: "685 X 1150", price: 0 }
],


defaultbattery : "24V 100A/H Lead Acid",
defaultcharger : "24V 15A",

bfs: [{ bfstype: "", price: 80 }],
blinkey: [{ blinkeytype: "", price: 30}]

},

{
  model: "PSE 10L-C",
  capacity: 1000,
  engType: "Warehouse",
  basePrice: 2780,
  imgName: "PSE15L-C.jpg",
  modeldescription:[
      {description:"Curtis Controller"}
  ],

  masts: [
    {
      masttype: "Single Mast",
      mastsizes: [
        { mastlength: 1600, price: 0 },
        { mastlength: 2000, price: 120 }
      ]
    },
    {
      masttype: "2 Stage Mast",
      mastsizes: [
       
        { mastlength: 2900, price: 296 },
        { mastlength: 3200,  price: 388 },
        { mastlength: 3600,  price: 520}
      ]
    }
  ],
  
  forks2d: [
    { forklength: "540 X 1150", price: 0 },
    { forklength: "685 X 1220", price: 190 }
  ],

 
  defaultbattery : "24V 85A/H Lead Acid",
  defaultcharger : "Built-in",


},


{
  model: "PSE 15L-C",
  capacity: 1500,
  engType: "Warehouse",
  basePrice: 2998,
  imgName: "PSE15L-C.jpg",
  modeldescription:[
    {description:"Curtis Controller"}
],

masts: [
  {
    masttype: "Single Mast",
    mastsizes: [
      { mastlength: 1600, price: 0 },
      { mastlength: 2000, price: 120 }
    ]
  },
  {
    masttype: "2 Stage Mast",
    mastsizes: [
     
      { mastlength: 2900, price: 296 },
      { mastlength: 3200,  price: 388 },
      { mastlength: 3600,  price: 520}
    ]
  }
],

forks2d: [
  { forklength: "540 X 1150", price: 0 },
  { forklength: "685 X 1220", price: 190 }
],


defaultbattery : "24V 100A/H Lead Acid",
defaultcharger : "Built-in"

},

{
  model: "PS 12N",
  capacity: 1200,
  engType: "Warehouse",
  basePrice: 5180,
  basePriceR: 5500,
  imgName: "PS12_16 _20N.jpg",
  modeldescription:[
      {description:"Pedestrian Stacker"},
      {description:"Platform and Arms"},
      {description:"Zapi Controller"},
  ],

  masts: [
    {
      masttype: "2 Stage Mast",
      mastsizes: [
        { mastlength: 2900, price: 0 },
        { mastlength: 3200, price: 140 },
        { mastlength: 3600, price: 296 }
      ]
    }, {
      masttype: "3 Stage Mast",
      mastsizes: [ 
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

 
  loadbackrest:[{loadbackresttype:"", price: 77}],

  defaultbattery : "No",
  defaultcharger : "",

  batteries: [
    {
      batterytype: "24V 210A/H up to 3.6M Mast",
      price: 950,
      chargers: [
        {
          chargertype: " ",
          price: 295
        }]
    },
    {
      batterytype: "24V 270A/H 4M and above Mast",
      price: 1020,
      chargers: [
        {
          chargertype: " ",
          price: 295
        }]
    },

  ],


  bfs: [{ bfstype: "", price: 178 }]
}

{
  model: "PS 16N",
  capacity: 1600,
  engType: "Warehouse",
  basePrice: 6100,
  basePriceR: 5500,
  imgName: "PS12_16 _20N.jpg",
  modeldescription:[
      {description:"Pedestrian Stacker"},
      {description:"Platform and Arms"},
      {description:"Zapi Controller"},
  ],

  masts: [
    {
      masttype: "2 Stage Mast",
      mastsizes: [
        { mastlength: 2900, price: 0 },
        { mastlength: 3200, price: 140 },
        { mastlength: 3600, price: 296 }
      ]
    }, {
      masttype: "3 Stage Mast",
      mastsizes: [ 
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

 
  loadbackrest:[{loadbackresttype:"", price: 77}],

  defaultbattery : "No",
  defaultcharger : "",

  batteries: [
    {
      batterytype: "24V 210A/H up to 3.6M Mast",
      price: 950,
      chargers: [
        {
          chargertype: " ",
          price: 295
        }]
    },
    {
      batterytype: "24V 270A/H 4M and above Mast",
      price: 1020,
      chargers: [
        {
          chargertype: " ",
          price: 295
        }]
    },

  ],


  bfs: [{ bfstype: "", price: 178 }]
},
{
  model: "PS 20N",
  capacity: 2000,
  engType: "Warehouse",
  basePrice: 7810,
  basePriceR: 7010,
  imgName: "PS12_16 _20N.jpg",
  modeldescription:[
      {description:"Pedestrian Stacker"},
      {description:"Platform and Arms"},
      {description:"Zapi Controller"},
  ],

  masts: [
    {
      masttype: "2 Stage Mast",
      mastsizes: [
        { mastlength: 2900, price: 0 },
        { mastlength: 3200, price: 140 },
        { mastlength: 3600, price: 296 }
      ]
    }, {
      masttype: "3 Stage Mast",
      mastsizes: [ 
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

 
  loadbackrest:[{loadbackresttype:"", price: 77}],

  defaultbattery : "No",
  defaultcharger : "",
  
  batteries: [
    {
      batterytype: "24V 210A/H up to 3.6M Mast",
      price: 950,
      chargers: [
        {
          chargertype: " ",
          price: 295
        }]
    },
    {
      batterytype: "24V 270A/H 4M and above Mast",
      price: 1020,
      chargers: [
        {
          chargertype: " ",
          price: 295
        }]
    },

  ],

  bfs: [{ bfstype: "", price: 178 }]
},


{
  model: "PS 16TSL",
  capacity: 1600,
  engType: "Warehouse",
  basePrice: 6700,
  imgName: "PS16_18_TSL_Series.jpg",
  modeldescription:[
    {description:"Straddle Stacker"}
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
  imgName: "PS16_18_TSL_Series.jpg",
  modeldescription:[
    {description:"Straddle Stacker"}
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

        { mastlength: 4600, price: 760 }
        
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
