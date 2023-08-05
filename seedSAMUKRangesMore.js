const mongoose = require("mongoose");
const config = require("config");

const { Forklift } = require("./models/forklift");

const data = [
  {
    range: "Diesel",
    models: [
     
      {
        model: "FDTA25",
        capacity: 2500,
        engType: "Diesel"
      },
      {
        model: "FDTA30",
        capacity: 3000,
        engType: "Diesel"
      },
      {
        model: "FDTA35",
        capacity: 3500,
        engType: "Diesel"
      },
      {
        model: "FDTA45",
        capacity: 4500,
        engType: "Diesel"
      },
      {
        model: "FDTA50S",
        capacity: 5000,
        engType: "Diesel"
      },
      {
        model: "FDTA50",
        capacity: 5000,
        engType: "Diesel"
      },
      {
        model: "FDTA70",
        capacity: 7000,
        engType: "Diesel"
      }
      ]
  }, 
  {
    range: "LPG",
    models: [
      
      {
        model: "FLTA25",
        capacity: 2500,
        engType: "LPG"
      },
      {
        model: "FLTA30",
        capacity: 3000,
        engType: "LPG"
      },
      {
        model: "FLTA35",
        capacity: 3500,
        engType: "LPG"
      },
      {
        model: "FLTA45",
        capacity: 4500,
        engType: "LPG"
      },
      {
        model: "FLTA50S",
        capacity: 5000,
        engType: "LPG"
      },
      {
        model: "FLTA50",
        capacity: 5000,
        engType: "LPG"
      },
      {
        model: "FLTA70",
        capacity: 7000,
        engType: "LPG"
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
