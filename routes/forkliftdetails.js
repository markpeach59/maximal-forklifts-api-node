const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const auth = require("../middleware/auth");
const winston = require("winston");

const { Forkliftdetail } = require("../models/forkliftdetail");

router.get("/", auth, async (req, res) => {
  const forklifts = await Forkliftdetail.find().select("-__v");

  res.send(forklifts);
});

router.get("/:model", auth, async (req, res) => {
  console.log("GET forkliftdetail for model:", req.params.model);

  try {
    const forklift = await Forkliftdetail.findOne({
      model: req.params.model
    }).select("-__v");

    if (!forklift) {
      console.log("Forklift not found for model:", req.params.model);
      return res
        .status(404)
        .send("The forklift for the given modelname was not found.");
    }

    // Ensure sideshift is properly defined for FB16S-MHJZ model
    if (forklift.model === "FB16S-MHJZ" && (!forklift.sideshift || forklift.sideshift.length === 0)) {
      // Add default side shift option for this model
      forklift.sideshift = [
        {
          _id: mongoose.Types.ObjectId(),
          sideshifttype: "Integral",
          price: 0
        }
      ];
      console.log("Added missing side shift option for FB16S-MHJZ model");
    }

    console.log("Forklift found:", forklift.model);
    res.send(forklift);
  } catch (error) {
    console.error("Error fetching forklift detail:", error);
    res.status(500).send("Error fetching forklift detail: " + error.message);
  }
});

module.exports = router;
