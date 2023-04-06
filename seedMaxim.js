const mongoose = require("mongoose");
const config = require("config");

const { User } = require("./models/user");

const data = [
  {
     name: "Ian Capes",
     email:"ian@maximgb.co.uk",
     password:"$2b$10$2.OuxaWJdUYKhrEPWfCo.uyG4BC1w108CyEg/9YvY2UonisvQSjbe",
     dealerId:ObjectId('640f05b462da2e0e2ebb1c25'),
     isMaximGB: true  
  }

];

async function seed() {
  await mongoose.connect(config.get("db"));

/*
  await User.deleteMany({}, function(err) {
    if (err) console.log("Delete Many Failed");
  });*/
  
  for (let item of data) {
    const user = new User(item);
    const doc = await user.save();
    console.log(doc);
  }
  mongoose.disconnect();

  console.info("Done!");
}

seed();
