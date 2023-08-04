const mongoose = require("mongoose");
const config = require("config");

const { Forkliftrestricted } = require("./models/forkliftrestricted");

const data = [
  {
    range: "AA Series (4 Wheel) Lithium Electric",
    models: [
      {
        model: "FBA15-YJ",
        capacity: 1500,
        engType: "Electric"
      },
      {
        model: "FBA18-YJ",
        capacity: 1750,
        engType: "Electric"
      },
      {
        model: "FBA20-YJ",
        capacity: 2000,
        engType: "Electric"
      },
      {
        model: "FBA25-YJ",
        capacity: 2500,
        engType: "Electric"
      },
      {
        model: "FBA30-YJ",
        capacity: 3000,
        engType: "Electric"
      },
      {
        model: "FBA35-YJ",
        capacity: 3500,
        engType: "Electric"
      }
    ]
  },
  {
    range: "AX Series (4 Wheel) Lithium Electric",
    models: [
      {
        model: "FBAX25-YWL",
        capacity: 2500,
        engType: "Electric"
      },
      {
        model: "FBAX30-YWL",
        capacity: 3000,
        engType: "Electric"
      },
      {
        model: "FBAX35-YWL",
        capacity: 3500,
        engType: "Electric"
      },
      {
        model: "FBAX45-YWL",
        capacity: 4500,
        engType: "Electric"
      },
      {
        model: "FBAX50-YWL COMPACT",
        capacity: 5000,
        engType: "Electric"
      },
      {
        model: "FBAX50-YWL BIG",
        capacity: 5000,
        engType: "Electric"
      },
      {
        model: "FBAX70-YWL",
        capacity: 7000,
        engType: "Electric"
      }
    ]
  },
  {
    range: "Rough Terrain",
    models: [
      {
        model: "FD18T-C2W",
        capacity: 1800,
        engType: "Rough Terrain"
      },
      {
        model: "FD25T-C2W",
        capacity: 2500,
        engType: "Rough Terrain"
      },
      {
        model: "FD35T-C2W",
        capacity: 3500,
        engType: "Rough Terrain"
      },
      {
        model: "FD50T-C2W",
        capacity: 5000,
        engType: "Rough Terrain"
      },
      {
        model: "FD18T-C4W",
        capacity: 1800,
        engType: "Rough Terrain"
      },
      {
        model: "FD25T-C4W",
        capacity: 2500,
        engType: "Rough Terrain"
      },
      {
        model: "FD35T-C4W",
        capacity: 3500,
        engType: "Rough Terrain"
      }
      
    ]
  },
  {
    range: "Reach",
    models: [
      {
        model: "FBRA15-J1",
        capacity: 1500,
        engType: "Reach"
      },
      {
        model: "FBREA16-J1",
        capacity: 1600,
        engType: "Reach"
      },
      {
        model: "FBREA20-J1",
        capacity: 2000,
        engType: "Reach"
      },
      {
        model: "FBREA25-J1",
        capacity: 2500,
        engType: "Reach"
      }
      
    ]
  },
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
        model: "ECL 15B",
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

  

  for (let rangeItem of data) {
    const forky = new Forkliftrestricted(rangeItem);
    const doc = await forky.save();
    console.log(doc);
  }
  mongoose.disconnect();

  console.info("Done!");
}

seed();