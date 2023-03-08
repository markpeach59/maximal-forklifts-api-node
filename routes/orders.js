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

module.exports = router;
