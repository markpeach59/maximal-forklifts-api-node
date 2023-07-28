const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [
 


{
  model: "PS 12N",
  capacity: 1200,
  engType: "Warehouse",
  basePrice: 5180,
  basePriceR: 4680,
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