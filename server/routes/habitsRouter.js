const express = require("express");
const router = express.Router();
const {
	index,
	singleUserHabit,
	updateHabit,
} = require("../controllers/habitsController.js");

router.route("/habits").get(index);
router.route("/my-account/:userId/habits/:habitId").get(singleUserHabit);
router.route("/my-account/:userId/habits/:habitId").put(updateHabit);

module.exports = router;
