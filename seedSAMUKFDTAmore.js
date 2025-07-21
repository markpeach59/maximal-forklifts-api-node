const mongoose = require("mongoose");
const config = require("config");

const { Forkliftdetail } = require("./models/forkliftdetail");

const data = [

{
  model: "FDTA80",
capacity: 8000,
engType: "Diesel",
modeldescription:[{description:"Available - POA"}]
},
{
  model: "FDTA100",
capacity: 10000,
engType: "Diesel",
modeldescription:[{description:"Available - POA"}]
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