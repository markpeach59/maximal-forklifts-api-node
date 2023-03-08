const _ = require("lodash");
const auth = require("../middleware/auth");

const express = require("express");
const router = express.Router();

const { Quote } = require("../models/quote");

/*
router.get("/", async (req, res) => {
  const quotes = await Quote.find()
    .select("-__v")
    .sort("-updatedAt");

  res.send(quotes);
});
*/

router.get("/", auth, async (req, res) => {
  const quotes = await Quote.find({ userid: req.user._id, order: false })
    .select("-__v")
    .sort("-updatedAt");

  res.send(quotes);
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

  const quote = await Quote.findByIdAndUpdate(
    req.params.id,
    { $set: { order: true } },
    { useFindAndModify: false, new: true }
  ).select("-__v");

  if (!quote)
    return res.status(404).send("The quote with the given ID was not found.");

  res.send(_.pick(quote, ["_id", "order"]));
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
      "imgname",
      "masttype",
      "mastsize",
      "valve",
      "forks",
      "sideshift",
      "forkpositioner",
      "tyre",
      "coldstoreprot",
      "seat",
      "cabin",
      "aircon",
      "heater",
      "reargrab",
      "sideleverhydraulic",
      "battery",
      "charger",
      "armguard",
      "platform",
      "loadbackrest",
      "steering",
      "fork2d",
      "bfs",
      "manualtrolley",
      "blinkey",
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
      "masttype",
      "mastsize",
      "valve",
      "forks",
      "sideshift",
      "forkpositioner",
      "tyre",
      "coldstoreprot",
      "seat",
      "cabin",
      "aircon",
      "heater",
      "reargrab",
      "sideleverhydraulic",
      "battery",
      "charger",
      "armguard",
      "platform",
      "loadbackrest",
      "steering",
      "fork2d",
      "bfs",
      "manualtrolley",
      "blinkey",
      "sideextractionbattery",
      "order",
      "specsheet",
    ])
  );
});

module.exports = router;
