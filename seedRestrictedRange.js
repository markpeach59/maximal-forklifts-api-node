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
        model: "FBAX50-YWL",
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

  

  for (let rangeItem of data) {
    const forky = new Forkliftrestricted(rangeItem);
    const doc = await forky.save();
    console.log(doc);
  }
  mongoose.disconnect();

  console.info("Done!");
}

seed();