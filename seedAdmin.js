const mongoose = require("mongoose");
const config = require("config");

const { User } = require("./models/user");

const data = [
  {
     name: "Admin",
     email:"mark.peach@frontbacktech.com",
     password:"xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
     isAdmin: true,
     isMaximGB: true  
  }
  
  
];

async function seed() {
  await mongoose.connect(config.get("db"));

  await User.deleteMany({}, function(err) {
    if (err) console.log("Delete Many Failed");
  });

  for (let item of data) {
    const user = new User(item);
    const doc = await user.save();
    console.log(doc);
  }
  mongoose.disconnect();

  console.info("Done!");
}

seed();
