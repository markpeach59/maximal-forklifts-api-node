const _ = require("lodash");
const auth = require("../middleware/auth");

const express = require("express");
const router = express.Router();

const { Quote } = require("../models/quote");

const { User } = require("../models/user");
const { Dealer } = require("../models/dealer");

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


router.get("/", auth, async (req, res) => {
  console.log("GET /quotes request received");
  console.log("User ID from token:", req.user._id);
  
  try {
    const quotes = await Quote.find({ userid: req.user._id, order: false })
      .select("-__v")
      .sort("-updatedAt");
    
    console.log("Quotes found:", quotes.length);
    res.send(quotes);
  } catch (error) {
    console.error("Error fetching quotes:", error);
    res.status(500).send("Error fetching quotes: " + error.message);
  }
});

router.get("/all", async (req, res) => {
  const quotes = await Quote.find({ order: false })
    .select("-__v")
    .sort("-updatedAt");

  res.send(quotes);
});

router.get("/:id", async (req, res) => {
  const quote = await Quote.findById(req.params.id).select("-__v");

  if (!quote)
    return res.status(404).send("The quote with the given ID was not found.");

  res.send(quote);
});

router.patch("/reassign/:id", async (req, res) => {
  const newowner = _.pick(req.body, ["userid"]);

  const quote = await Quote.findByIdAndUpdate(
    req.params.id,
    { $set: { userid: req.body.userid } },
    { useFindAndModify: false, new: true }
  ).select("-__v");

  if (!quote)
    return res.status(404).send("The quote with the given ID was not found.");

  res.send(_.pick(quote, ["_id", "userid"]));
});

router.patch("/:id", async (req, res) => {
  //const orderstatus = _.pick(req.body, ["order"]);

  //console.log ('poumber', req.body.ponumber);
  const quote = await Quote.findByIdAndUpdate(
    req.params.id,
    { $set: { order: true, ponumber: req.body.ponumber} },
    { useFindAndModify: false, new: true }
  ).select("-__v");

  if (!quote)
    return res.status(404).send("The quote with the given ID was not found.");

  res.send(_.pick(quote, ["_id", "order"]));

  // now notify MaximGB of order

  const username = await User.findById(quote.userid).select("-password");

  const dealerid = username.dealerId;

  let MsgAdendum = '';

  if (dealerid){
    const dealername = await Dealer.findById(dealerid).select("-__v");
    MsgAdendum = ' of ' + dealername.dealername + ' ';
  }
  

  const msg = {
    to: 'ashleigh.jackson@maximgb.co.uk', 
    from: 'configurator@maximgb.co.uk', // Change to your verified sender
    subject: 'New Order of ' + quote.model,
    text: username.name +' has ordered a ' + quote.model,
    html: '<p>' + username.name + MsgAdendum + ' has ordered a ' + quote.model + '</p>',
  }


  sgMail
  .send(msg)
  .then((response) => {
    //console.log('Msg Sent')
  })
  .catch((error) => {
    //console.error(error)
  })
});

router.patch("/savemarkup/:id", async (req, res) => {
  const newmarkup = _.pick(req.body, ["markup"]);

  //console.log("Markup passed", newmarkup)

  const quote = await Quote.findByIdAndUpdate(
    req.params.id,
    { $set: { markup: req.body.markup } },
    { useFindAndModify: false, new: true }
  ).select("-__v");

  if (!quote)
    return res.status(404).send("The quote with the given ID was not found.");

  res.send(_.pick(quote, ["_id", "userid"]));
});


router.post("/", async (req, res) => {
  quote = new Quote(
    _.pick(req.body, [
      "userid",
      "model",
      "powertrain",
      "capacity",
      "engtype",
      "baseprice",
      "markup",
      "price",
      
      "offer",
      "offerprice",
      "saving",
      "confirmedorder",
      "stocknumber",
      "ponumber",

      "imgname",
      "masttype",
      "mastsize",
      "closedheight",
      "freeliftheight",
      "maxcapacity",
      "valve",
      "forks",
      "sideshift",
      "forkpositioner",
      "tyre",

      "pincode",
      "controller",
      "roller",
      "liftybutton",
      "displaywithcamera",
      "safetybluespot",

      "halolight",
      "upsweptexhaust",
      "precleaner",
      "heavydutyairfilter",

      "coldstoreprot",
      "seat",
      "cabin",
      "aircon",
      "heater",
      "reargrab",
      "sideleverhydraulic",
      "battery",
      "charger",
      "spare",
      "armguard",
      "platform",
      "loadbackrest",
      "steering",
      "fork2d",
      "bfs",
      "manualtrolley",
      "blinkey",
      "stabiliser",
      "sideextractionbattery",


      "order",
      "specsheet",
    ])
  );

  quote = await quote.save();

  res.send(
    _.pick(quote, [
      "_id",
      "userid",
      "model",
      "powertrain",
      "capacity",
      "engtype",
      "baseprice",
      "imgname",
      "markup",
      "price",

      "offer",
      "offerprice",
      "saving",
      "confirmedorder",
      "stocknumber",
      "ponumber",

      "masttype",
      "mastsize",
      "closedheight",
      "freeliftheight",
      "maxcapacity",
      "valve",
      "forks",
      "sideshift",
      "forkpositioner",
      "tyre",
      "pincode",
      "controller",
      "roller",
      "liftybutton",
      "displaywithcamera",
      "safetybluespot",

      "halolight",
      "upsweptexhaust",
      "precleaner",
      "heavydutyairfilter",
      
      "coldstoreprot",
      "seat",
      "cabin",
      "aircon",
      "heater",
      "reargrab",
      "sideleverhydraulic",
      "battery",
      "charger",
      "spare",
      "armguard",
      "platform",
      "loadbackrest",
      "steering",
      "fork2d",
      "bfs",
      "manualtrolley",
      "blinkey",
      "stabiliser",
      "sideextractionbattery",
      "order",
      "specsheet",
    ])
  );
});

module.exports = router;
