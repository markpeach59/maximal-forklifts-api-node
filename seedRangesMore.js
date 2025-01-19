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
      },
      {
        model: "FDTA80",
        capacity: 8000,
        engType: "Diesel"
      },
      {
        model: "FDTA100",
        capacity: 10000,
        engType: "Diesel"
      },
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
    range: "Diesel Rough Terrain",
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
      range: "Lithium Rough Terrain",
      models: [
      {
        model: "FBCX18T-YT2",
        capacity: 1800,
        engType: "Rough Terrain"
      },
      {
        model: "FBCX25T-YT2",
        capacity: 2500,
        engType: "Rough Terrain"
      },
      {
        model: "FBCX35T-YT2",
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
