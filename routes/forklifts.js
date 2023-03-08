const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Forklift } = require("../models/forklift");

router.get("/", async (req, res) => {
  const forklifts = await Forklift.find().select("-__v");

  res.send(forklifts);
});

router.get("/:id", async (req, res) => {
  const forklift = await Forklift.findById(req.params.id).select("-__v");

  if (!forklift)
    return res
      .status(404)
      .send("The forklift range with the given ID was not found.");

  res.send(forklift);
});

module.exports = router;
