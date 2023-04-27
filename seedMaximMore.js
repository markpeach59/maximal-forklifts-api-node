const mongoose = require("mongoose");
const config = require("config");

const { User } = require("./models/user");

const data = [
  {
    name: "Ashleigh Jackson",
    email:"ashleigh.jackson@maximgb.co.uk",
    password:"$2b$10$nMMa2EvaKDXDyTBcfkvkBe4w0h1yBx6mOiqhwGM/eOarDhMRiYhzi",
    isMaximGB: true  
 },
  {
     name: "James Wright",
     email:"james.wright@maximgb.co.uk",
     password:"$2b$10$EdO0oub40Xc06QS4TaNhj.rVp5wHkAAb6S5BXiwHIIvU9VH2VYoLq",
     isMaximGB: true  
  },

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
