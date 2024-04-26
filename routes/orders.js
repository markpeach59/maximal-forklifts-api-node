const _ = require("lodash");
const auth = require("../middleware/auth");

const express = require("express");
const router = express.Router();

const { Quote } = require("../models/quote");

/*
Orders are quotes with the field 'order' set to true
*/

router.get("/", auth, async (req, res) => {
  const quotes = await Quote.find({ userid: req.user._id, order: true })
    .select("-__v")
    .sort("-updatedAt");

  res.send(quotes);
});

router.get("/all", async (req, res) => {
  const quotes = await Quote.find({ order: true })
    .select("-__v")
    .sort("-updatedAt");

  res.send(quotes);
});

router.get("/:id", async (req, res) => {
  const quote = await Quote.findById(req.params.id).select("-__v");

  if (!quote)
    return res.status(404).send("The Order with the given ID was not found.");

  res.send(quote);
});

router.patch("/confirmorder/:id", async (req, res) => {
  
  console.log ('stocknumber', req.body.stocknumber);
  const quote = await Quote.findByIdAndUpdate(
    req.params.id,
    { $set: { confirmedorder: true, stocknumber: req.body.stocknumber }},
    { useFindAndModify: false, new: true }
  ).select("-__v");

  if (!quote)
    return res.status(404).send("The quote with the given ID was not found.");

  res.send(_.pick(quote, ["_id", "order"]));
});

module.exports = router;
