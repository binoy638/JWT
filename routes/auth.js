const express = require("express");
const router = express.Router();
const User = require("../model/user");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const user = new User({
    username,
    email,
    password,
  });

  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post("/login", (req, res) => {
  res.send("login");
});

module.exports = router;
