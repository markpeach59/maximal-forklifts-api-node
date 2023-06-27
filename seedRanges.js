const mongoose = require("mongoose");
const config = require("config");

const { Forklift } = require("./models/forklift");

const data = [
  {
    range: "M Series (3 Wheel) Electric Rear Wheel Drive",
    models: [
      {
        model: "FB16S-MHJZ",
        capacity: 1600,
        engType: "Electric"
      }
    ]
  },
  {
    range: "M Series (3 Wheel) Electric Front Wheel Drive",
    models: [
      {
        model: "FB16S-MJZ",
        capacity: 1600,
        engType: "Electric"
      },
      {
        model: "FB18S-MJZ",
        capacity: 1800,
        engType: "Electric"
      },
      {
        model: "FB20S-MJZ",
        capacity: 2000,
        engType: "Electric"
      }
    ]
  },
  {
    range: "A Series (4 Wheel) Lead Acid Electric",
    models: [
      {
        model: "FBA15-JZ",
        capacity: 1500,
        engType: "Electric"
      },
      {
        model: "FBA18-JZ",
        capacity: 1750,
        engType: "Electric"
      },
      {
        model: "FBA20-JZ",
        capacity: 2000,
        engType: "Electric"
      },
      {
        model: "FBA25-JZ",
        capacity: 2500,
        engType: "Electric"
      },
      {
        model: "FBA30-JZ",
        capacity: 3000,
        engType: "Electric"
      },
      {
        model: "FBA35-JZ",
        capacity: 3500,
        engType: "Electric"
      }
      ]
      },
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
  }
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await Forklift.deleteMany({}, function(err) {
    if (err) console.log("Delete Many Failed");
  });

  for (let rangeItem of data) {
    const forky = new Forklift(rangeItem);
    const doc = await forky.save();
    console.log(doc);
  }
  mongoose.disconnect();

  console.info("Done!");
}

seed();
