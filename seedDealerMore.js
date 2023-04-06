const mongoose = require("mongoose");
const config = require("config");

const { Dealer } = require("./models/dealer");

const data = [
  

  {dealername:"DAB Handling"},
  {dealername:"Macbride Lift Trucks",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/macbride_logo.jpg"},
  {dealername:"B Conway",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/BConway.png"},
  {dealername:"Jaf Engineering",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/JAF-LOGO.png"},
  {dealername:"Baker Plant"},
  {dealername:"HQ Forklifts",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/HQ_MasterLogo.jpg"},
  {dealername:"Pallet Trucks direct",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/Pallet_Trucks_Direct.png"},
  {dealername:"MCH Handling"},
  {dealername:"Mid Sussex",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/forklifts-in-sussex.jpg"},
  {dealername:"Oast Handling"},
  
  {dealername:"Bercon/Suas"},
  {dealername:"Teather Mechanical"},
  {dealername:"Universal Lift Trucks"},
 
  {dealername:"Briggs Equipment"},
  {dealername:"Berkshire Forklift Services"}


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
