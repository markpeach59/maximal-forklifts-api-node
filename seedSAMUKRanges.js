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
            model: "FB15-AA",
            capacity: 1500,
            engType: "Electric"
          },
          {
            model: "FB18-AA",
            capacity: 1750,
            engType: "Electric"
          },
          {
            model: "FB20-AA",
            capacity: 2000,
            engType: "Electric"
          },
          {
            model: "FB25-AA",
            capacity: 2500,
            engType: "Electric"
          },
          {
            model: "FB30-AA",
            capacity: 3000,
            engType: "Electric"
          },
          {
            model: "FB35-AA",
            capacity: 3500,
            engType: "Electric"
          }
        ]
      },
      {
        range: "AX Series (4 Wheel) Lithium Electric",
        models: [
          {
            model: "FB25-AX",
            capacity: 2500,
            engType: "Electric"
          },
          {
            model: "FB30-AX",
            capacity: 3000,
            engType: "Electric"
          },
          {
            model: "FB35-AX",
            capacity: 3500,
            engType: "Electric"
          },
          {
            model: "FB45-AX",
            capacity: 4500,
            engType: "Electric"
          },
          {
            model: "FB50-AX COMPACT",
            capacity: 5000,
            engType: "Electric"
          },
          {
            model: "FB50-AX BIG",
            capacity: 5000,
            engType: "Electric"
          },
          {
            model: "FB70-AX",
            capacity: 7000,
            engType: "Electric"
          }
        ]
      },
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
      },
      {
        range: "Reach",
        models: [
          {
            model: "FBRA15",
            capacity: 1500,
            engType: "Reach"
          },
          {
            model: "FBREA16",
            capacity: 1600,
            engType: "Reach"
          },
          {
            model: "FBREA20",
            capacity: 2000,
            engType: "Reach"
          },
          {
            model: "FBREA25",
            capacity: 2500,
            engType: "Reach"
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
