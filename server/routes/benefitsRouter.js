const express = require("express");
const router = express.Router();
const { index } = require("../controllers/benefitsController.js");

router.route("/benefits").get(index);

module.exports = router;
