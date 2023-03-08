const jwt = require("jsonwebtoken");
const config = require("config");

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    maxlength: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 1024,
  },
  dealerId: mongoose.Schema.Types.ObjectId,
  isAdmin: Boolean,
  isMaximGB: Boolean,
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      fullname: this.name,
      dealerId: this.dealerId,
      isAdmin: this.isAdmin,
      isMaximGB: this.isMaximGB,
    },
    config.get("jwtPrivateKey")
  );
  return token;
};

const User = mongoose.model("Users", userSchema);

exports.User = User;
