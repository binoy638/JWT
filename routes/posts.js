const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const router = express.Router();

router.get("/", verifyToken, (req, res) => {
  res.json({
    posts: {
      title: "Private Post",
    },
  });
});

module.exports = router;
