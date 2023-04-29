const mongoose = require("mongoose");
const config = require("config");

const { Dealer } = require("./models/dealer");

const data = [
  {dealername:"DAB Handling",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/dab_logo.png"},
  {dealername:"Macbride Lift Trucks",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/macbride_logo.jpg"},
  {dealername:"B Conway",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/BConway.png"},
  {dealername:"Jaf Engineering",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/jaf_logo.png"},
  {dealername:"Baker Plant",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/baker_logo.png"},
  {dealername:"HQ Forklifts",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/HQ_MasterLogo.jpg"},
  {dealername:"Pallet Trucks direct",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/pallettrucks_logo.png"},
  {dealername:"MCH Handling",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/Maximal-Logo.png"},
  {dealername:"Mid Sussex",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/forklifts-in-sussex.jpg"},
  {dealername:"Oast Handling",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/oast_logo.png"},
  {dealername:"Bercon/Suas",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/Maximal-Logo.png"},
  {dealername:"Berkshire Forklift Services",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/berkshire_logo.png"},
  {dealername:"Briggs Equipment",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/Maximal-Logo.png"},
  {dealername:"Teather Mechanical",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/Maximal-Logo.png"},
  {dealername:"F.I.M.S",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/FIMS_logo.jpg"},
  {dealername:"East Midlands",dealerlogo:"https://dealerlogos.s3-eu-west-1.amazonaws.com/Maximal-Logo.png"},
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
