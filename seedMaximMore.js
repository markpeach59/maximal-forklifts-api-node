const mongoose = require("mongoose");
const config = require("config");

const { User } = require("./models/user");

const data = [
  {
     name: "Ian Capes",
     email:"ian@maximgb.co.uk",
     password:"$2b$10$2.OuxaWJdUYKhrEPWfCo.uyG4BC1w108CyEg/9YvY2UonisvQSjbe",
     dealerId:ObjectId('640b21e500dd5f57b56efd54'),
     isMaximGB: true  
  },
  {
    name:"Clive Morrison",
    email:"clive@maximgb.co.uk",
    password:"$2b$10$iDYjiStZa9iykAcP7IdXRO8B0hhdN7No/3Yqv1sbfg0f1173yrT..",
    isMaximGB:true
  },
  {
    name:"Bob Sharp",
    email:"bob@maximgb.co.uk",
    password:"$2b$10$Ge72VymlR9om8XtCFuEuxODXAXaqr.qDM2VRDAfghpjrMJZ9ppR2.",
    isMaximGB:true
  },
  {
    name:"Ashleigh Jackson",
    email:"ashleigh.jackson@neckarforklifts.co.uk",
    password:"$2b$10$NyVOxenyCHOaGnvHBYU4puJRMtDywlnwJX6xk/tTcAb8/zwK20CpS",
    isMaximGB:true
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
