const mongoose = require("mongoose");
const config = require("config");

const { User } = require("./models/user");

const data = [
{
  name:"Lee Hemphill",
  email:"lee@dabhandling.com",
  password:"$2b$10$b8y3sp20rX/3p7aJZOG3puPDNbsh5exIsmXNn6BsYnTBKnPAN8Bsa"
},
{
  name:"Allan Macbride",
  email:"allan@macbridegroup.com",
  password:"$2b$10$LjTv21AKe1gPDZW4yk6ZEOe8QSxJNi3j.2tt8dv4rq0f.aiE6X7R6"
},
{
  name:"Doug Warrender",
  email:"doug@macbridegroup.com",
  password:"$2b$10$NjBgnnS1OgNDyWlqd4y8SeJKtq.Retm9OkZRLnqdNlG9.wdX3Yis."
},
{
  name:"Michael Conway",
  email:"mconway@bconway.co.uk",
  password:"$2b$10$wL73wEsIEhIVzWR2Ww3Nuuehm.jNu6cMb2m8zs.4nDqvJq8kVDIXS"
},
{
  name:"Iain Drake",
  email:"jaftrucks",
  password:"$2b$10$GaK9oyb4aOVbv4w9CKdaWO2azfGjVp4DAPIXy2v1skBFuPeuO6iF2"
},
{
  name:"Paul Layton",
  email:"paul@bakercc.co.uk",
  password:"$2b$10$boc.QWHU9trejSYF9hb5GOzrSJHQZWjGOJnBvVzfx.EekVg0C5Qu2"
},
{
  name:"Charlie Marks",
  email:"charlie.marks@hqforklifts.co.uk",
  password:"$2b$10$hNZq9iTEiuMJ7z5/IJVl3u1Lc4om5gd4x6tfpdcndquEB2kW8dNCi"
},
{
  name:"Ian Stanford",
  email:"ian.stanford@pallet-trucksdirect.co.uk",
  password:"$2b$10$zzbSnm.iDVd3WdNkMhIBcelEX/Kg/HLZaeajRQzTXi2KaDHno9tS6"
},
{
  name:"Trevor Yates",
  email:"trevor@mchvr.co.uk",
  password:"$2b$10$9EUonRVbzK2qMz5Mpf5h3Ogmbo/KP20xbVSqNqCuDUrTeOW00mIhy"
},
{
  name:"Peter Kelly",
  email:"midsussexforklifts@yahoo.com",
  password:"$2b$10$hOb3YxNkUrGlbVrLdgVPbOkjVjrFx0Ymb9HU3WIQwJl1TUILJcxxe"
},
{
  name:"Lee Smith",
  email:"leesmith@oast-eng.co.uk",
  password:"$2b$10$U6Kk4wOKYV5QRl9pFrw9yu6G680qlZ.gDrb.6XggZIqm4U1ivfAgi"
},
{
  name:"Paul Nolan",
  email:"paul@suasenergy.ie",
  password:"$2b$10$V.QawFoTY.4C8XXKqYBLJOlgBFXc2eKJtZppRUe1BtQ7tuYwhUHKy"
},
{
  name:"Mike Teather",
  email:"mike@teathermh.co.uk",
  password:"$2b$10$a5u8XgJYdfYx/YKxifQo7OlLIQquwC9sOBHyrGVf9ieLOYIVRe5La"
},
{
  name:"Keith Teather",
  email:"keith@teathermh.co.uk",
  password:"$2b$10$OMIsiXAbgSb85aAfj5hM8.cXIpWLTbQcPV6IwKPLXG2eFWc6az.Lm"
},
{
  name:"Dave Lambert",
  email:"universallifttruck@hotmail.co.uk",
  password:"$2b$10$4ievT4N9uzU.qp.guvxiAuR3X2/H8zA2dseOMu.SQUt9E9p2N4Lya"
},

{
  name:"Pete Jones",
  email:"pete.jones@briggsequipment.co.uk",
  password:"$2b$10$Ch2VdwVek1zaf/Yyzp1hcerORs.ktdY21QsRQjDhTQIxDSL0.XiL."
},
{
  name:"Matt Day",
  email:"matt@berkshireforkliftservices.co.uk",
  password:"$2b$10$dK1VBzEAvRIToazO3DQ5vO8gi6d3SYitVCkrFdclJWmVqvYg5lzPK"
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
