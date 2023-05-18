const mongoose = require("mongoose");
const config = require("config");

const { Dealer } = require("./models/dealer");

const data = [
  {
    dealername: "Frontback Tech",
    isRestricted : true
  }
  
  
];

async function seed() {
  await mongoose.connect(config.get("db"));

  /*
  await Dealer.deleteMany({}, function(err) {
    if (err) console.log("Delete Many Failed");
  });
*/
  for (let item of data) {
    const dealer = new Dealer(item);
    const doc = await dealer.save();
    console.log(doc);
  }
  mongoose.disconnect();

  console.info("Done!");
}

seed();
