const User = require("./../model/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();

const login = (req, res, next) => {
  let user = User.getByIEmail(req.body.email);
  if (!user) {
    return res.status(401).json({ message: "Login ou mot de passe incorrect" });
  }
  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.status(401).json({ message: "Login ou mot de passe incorrect" });
  }
  res.status(200).json({
    id: user.id,
    email: user.email,
    token: jwt.sign(
      {
        id: user.email,
        email: user.email,
      },process.env.JWT_KEY),
  });
};

module.exports = { login };
