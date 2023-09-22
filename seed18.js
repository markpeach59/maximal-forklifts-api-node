
const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [

{
    model: "PT 18 M",
    capacity: 1800,
    engType: "Warehouse",
    basePrice: 4798,
    imgName: "PT18-M.jpg",
    modeldescription:[
        {description:"Powered Pallet Truck"}
    ],
    
    forks2d: [
      { forklength: "550 X 1150", price: 0 },
      { forklength: "550 X 1220", price: 0 },
      { forklength: "685 X 1150", price: 30 },
      { forklength: "685 X 1220", price: 60 },
    ],
  
    defaultbattery : "25V 150 A/H Lithium",
    defaultcharger : "Fast",
  
  
  defaultroller: "Single",
  
  rollers:[
      {rollertype : "Twin", price: 95}
  ],
  
  
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

