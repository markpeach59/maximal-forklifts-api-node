const _ = require("lodash");

const auth = require("../middleware/auth");

const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();

const { User } = require("../models/user");

router.get("/", async (req, res) => {
  const users = await User.find()
    .select("-password")
    .sort("name");

  res.send(users);
});

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");

  res.send(user);
});

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exists");

  user = new User(_.pick(req.body, ["name", "email", "password"]));

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);

  user = await user.save();

  const token = user.generateAuthToken();

  res
    .header("x-auth-token", token)
    .send(_.pick(user, ["_id", "name", "email"]));
});


router.post("/assigndealer", async (req, res) => {
  
//console.log('was called - ', req.body.userid, ' to ', req.body.dealerid);

  const user = await User.findByIdAndUpdate(
    req.body.userid,
    { $set: { dealerId: req.body.dealerid } },
    { useFindAndModify: false, new: false }
  ).select("-__v");


  if (!user)
    return res.status(404).send("The user with the given ID was not found.");

  res.send(_.pick(user, ["_id", "dealerId"]));

  
});

router.post("/removedealer", async (req, res) => {
  
  //console.log('remove dealer was called - ', req.body.userid );
  
    const user = await User.findByIdAndUpdate(
      req.body.userid,
      { $unset: {dealerId:1} },
      { useFindAndModify: false, new: false }
    ).select("-__v");
  
  
    if (!user)
      return res.status(404).send("The user with the given ID was not found.");
  
    res.send(_.pick(user, ["_id"]));
  
    
  });

module.exports = router;
