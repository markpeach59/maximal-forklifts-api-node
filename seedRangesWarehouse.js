const mongoose = require("mongoose");
const config = require("config");

const { Forklift } = require("./models/forklift");

const data = [
  {
    range: "Warehouse",
    models: [
      {
        model: "PTE 12N",
        capacity: 1200,
        engType: "Warehouse"
      },
      {
        model: "PTE 15N",
        capacity: 1500,
        engType: "Warehouse"
      },
      {
        model: "PTE 20N",
        capacity: 2000,
        engType: "Warehouse"
      },
      {
        model: "PT 18 M1X",
        capacity: 1800,
        engType: "Warehouse"
      },
      {
        model: "PT 20 M1X",
        capacity: 2000,
        engType: "Warehouse"
      },
      {
        model: "PT 20 M1XL",
        capacity: 2000,
        engType: "Warehouse"
      },
      {
        model: "PTE 20C",
        capacity: 2000,
        engType: "Warehouse"
      },
       {
        model: "PT 20H",
        capacity: 2000,
        engType: "Warehouse"
      },
      {
        model: "PT 25H",
        capacity: 2500,
        engType: "Warehouse"
      },
      {
        model: "PT 16L",
        capacity: 1600,
        engType: "Warehouse"
      },
      {
        model: "PT 20L",
        capacity: 2000,
        engType: "Warehouse"
      },
      {
        model: "PT 25L",
        capacity: 2500,
        engType: "Warehouse"
      },
      {
        model: "OPL 20N",
        capacity: 2000,
        engType: "Warehouse"
      },
      {
        model: "OPL 25N",
        capacity: 2500,
        engType: "Warehouse"
      },
      {
        model: "PSE 10L-C",
        capacity: 1000,
        engType: "Warehouse"
      },
      {
        model: "PSE 15L-C",
        capacity: 1500,
        engType: "Warehouse"
      },
      {
        model: "PSE 12B",
        capacity: 1200,
        engType: "Warehouse"
      },
      {
        model: "ECL 15B",
        capacity: 1500,
        engType: "Warehouse"
      },
      {
        model: "PSE 15L",
        capacity: 1500,
        engType: "Warehouse"
      },
      {
        model: "PS 12N",
        capacity: 1200,
        engType: "Warehouse"
      },
      {
        model: "PS 16N",
        capacity: 1600,
        engType: "Warehouse"
      },
      {
        model: "PS 20N",
        capacity: 2000,
        engType: "Warehouse"
      },
      
      { 
      	model: "PS 16TSL",
        capacity: 1600,
        engType: "Warehouse"
      },
      { 
      	model: "PS 18TSL",
        capacity: 1800,
        engType: "Warehouse"
      },    
      { 
      	model: "PS 13RM PLUS",
        capacity: 1300,
        engType: "Warehouse"
      },
      { 
      	model: "PS 15RM PLUS",
        capacity: 1500,
        engType: "Warehouse"
      }

    ]
  }
  
];

async function seed() {
  await mongoose.connect(config.get("db"));
/*
  await Forklift.deleteMany({}, function(err) {
    if (err) console.log("Delete Many Failed");
  });
*/
  for (let rangeItem of data) {
    const forky = new Forklift(rangeItem);
    const doc = await forky.save();
    console.log(doc);
  }
  mongoose.disconnect();

  console.info("Done!");
}

seed();
