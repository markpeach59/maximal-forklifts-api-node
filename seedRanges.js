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
        engType: "Electric",
        basePrice: 10740
      }
    ]
  },
  {
    range: "M Series (3 Wheel) Electric Front Wheel Drive",
    models: [
      {
        model: "FB16S-MJZ",
        capacity: 1500,
        engType: "Electric",
        basePrice: 13400
      },
      {
        model: "FB18S-MJZ",
        capacity: 1800,
        engType: "Electric",
        basePrice: 13800
      },
      {
        model: "FB20S-MJZ",
        capacity: 2000,
        engType: "Electric",
        basePrice: 14180
      }
    ]
  },
  {
    range: "A Series (4 Wheel) Lead Acid Electric"",
    models: [
      {
        model: "FBA15-JZ",
        capacity: 1500,
        engType: "Electric",
        basePrice: 12000
      },
      {
        model: "FBA18-JZ",
        capacity: 1750,
        engType: "Electric",
        basePrice: 12200
      },
      {
        model: "FBA20-JZ",
        capacity: 2000,
        engType: "Electric",
        basePrice: 12500
      },
      {
        model: "FBA25-JZ",
        capacity: 2500,
        engType: "Electric",
        basePrice: 13000
      },
      {
        model: "FBA30-JZ",
        capacity: 3000,
        engType: "Electric",
        basePrice: 13950
      },
      {
        model: "FBA35-JZ",
        capacity: 3500,
        engType: "Electric",
        basePrice: 14800
      },
      {
    range: "AA Series (4 Wheel) Lithium Electric"",
    models: [
      {
        model: "FBA15-YJ",
        capacity: 1500,
        engType: "Electric",
        basePrice: 12200
      },
      {
        model: "FBA18-YJ",
        capacity: 1750,
        engType: "Electric",
        basePrice: 12400
      },
      {
        model: "FBA20-YJ",
        capacity: 2000,
        engType: "Electric",
        basePrice: 12600
      },
      {
        model: "FBA25-YJ",
        capacity: 2500,
        engType: "Electric",
        basePrice: 13300
      },
      {
        model: "FBA30-YJ",
        capacity: 3000,
        engType: "Electric",
        basePrice: 14100
      },
      {
        model: "FBA35-YJ",
        capacity: 3500,
        engType: "Electric",
        basePrice: 14950
      }
    ]
  },
  {
    range: "AX Series (4 Wheel) Lithium Electric"",
    models: [
      {
        model: "FBAX25-YWL",
        capacity: 2500,
        engType: "Electric",
        basePrice: 13900
      },
      {
        model: "FBAX30-YWL",
        capacity: 3000,
        engType: "Electric",
        basePrice: 14300
      },
      {
        model: "FBAX35-YWL",
        capacity: 3500,
        engType: "Electric",
        basePrice: 15000
      },
      {
        model: "FBAX45-YWL",
        capacity: 4500,
        engType: "Electric",
        basePrice: 19000
      },
      {
        model: "FBAX50-YWL",
        capacity: 5000,
        engType: "Electric",
        basePrice: 21800
      },
      {
        model: "FBAX70-YWL",
        capacity: 7000,
        engType: "Electric",
        basePrice: 14950
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
