const jwt = require("jsonwebtoken");
const config = require("config");

function auth(req, res, next) {
  console.log("Auth middleware called");
  const token = req.header("x-auth-token");
  console.log("Token received:", token ? "Token exists" : "No token");
  
  if (!token) return res.status(401).send("Access Denied. No Token Provided");

  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    console.log("Token decoded successfully:", decoded);
    req.user = decoded;
    next();
  } catch (ex) {
    console.error("Token verification error:", ex.message);
    return res.status(400).send("Access Denied. Invalid Token");
  }
}

module.exports = auth;
