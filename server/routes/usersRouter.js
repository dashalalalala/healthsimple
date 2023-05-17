const express = require("express");
const router = express.Router();
const { index, singleUserHabits } = require("../controllers/usersController.js");

router.route("/").get(index);
router.route("/my-account/:userId/habits").get(singleUserHabits);


module.exports = router;
