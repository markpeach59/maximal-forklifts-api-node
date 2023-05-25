const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const auth = require("../middleware/auth");


const { Forklift } = require("../models/forklift");
const { Forkliftrestricted } = require("../models/forkliftrestricted");

const { Dealer } = require("../models/dealer");

router.get("/", auth, async (req, res) => {

  //console.log("Req", req.route);
  //console.log("X-Auth", req.route.accept);
  //console.log("Auth", req.user);

  let restricted = false;

  if (req.user.dealerId ){
    const dealer = await Dealer.findById(req.user.dealerId )

    //console.log('Dealer', dealer)
    if (dealer.isRestricted) restricted= true;
  }

  if (restricted === true){
    const restrictedlist = await Forkliftrestricted.find().select("-__v");

    res.send(restrictedlist);

  } 
  else
  {
    //console.log('Full List');
    const forklifts = await Forklift.find().select("-__v");
    res.send(forklifts);

  }
  
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
