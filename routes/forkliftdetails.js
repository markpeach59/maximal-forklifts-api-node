const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { Forkliftdetail } = require("../models/forkliftdetail");

router.get("/", async (req, res) => {
  const forklifts = await Forkliftdetail.find().select("-__v");

  res.send(forklifts);
});

router.get("/:model", async (req, res) => {
  //console.log("GET", req.params.model);

  const forklift = await Forkliftdetail.findOne({
    model: req.params.model
  }).select("-__v");

  if (!forklift)
    return res
      .status(404)
      .send("The forklift for the given modelname was not found.");

  res.send(forklift);
});

module.exports = router;
