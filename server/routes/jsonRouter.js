const express = require("express");
const router = express.Router();
const { readFileSync, writeFileSync, writeFile } = require("fs");
const uniqid = require("uniqid");
const { getBenefits } = require("../openai.js");

function readHabits() {
	const habitsJSON = readFileSync("./data/habits-test.json");
	const parsedHabits = JSON.parse(habitsJSON);
	return parsedHabits;
}
readHabits();

function readBenefits() {
	const benefitsJSON = readFileSync("./data/benefits.json");
	const parsedBenefits = JSON.parse(benefitsJSON);
	return parsedBenefits;
}
readBenefits();

router.use((req, res, next) => {
	console.log("Middleware from habits router");
	next();
});

//GET JSON Data
router.get("/", (req, res) => {
	res.json(readHabits());
});

router.get("/benefits", (req, res) => {
	res.json(readBenefits());
});

//GET Individual User Data
router.get("/my-account/:userId/habits", (req, res) => {
	const habits = readHabits();
	const userId = req.params.userId;

	const user = habits.users.find((user) => user.id === userId);

	if (!user) {
		return res.status(404).json({ message: `User ${userId} not found` });
	}

	res.json(user);
});

//GET Individual Habit Data
router.get("/my-account/:userId/habits/:habitId", (req, res) => {
	const habits = readHabits();
	const userId = req.params.userId;
	const habitId = req.params.habitId;

	const user = habits.users.find((user) => user.id === userId);
	const habit = user.habits.find((habit) => habit.id === habitId);

	if (!habit) {
		return res.status(404).json({ message: `Habit ${habitId} not found` });
	}

	res.json(habit);
});

router.put(
	"/my-account/:userId/habits/:habitId/tracked-data",
	async (req, res) => {
		const { userId, habitId } = req.params;
		const { completed, date } = req.body;
		const habits = readHabits();

		const user = habits.users.find((user) => user.id === userId);
		if (!user) {
			return res.status(404).send("User not found");
		}
		const habit = user.habits.find((habit) => habit.id === habitId);
		if (!habit) {
			return res.status(404).send("Habit not found");
		}

		let trackedData = habit.tracked_data.find((data) => data.date === date);

		if (!trackedData) {
			trackedData = {
				id: uniqid(),
				date: date,
				completed: completed,
			};
			habit.tracked_data.push(trackedData);
		} else {
			// Save the old completed status before updating it
			const wasCompleted = trackedData.completed;
			trackedData.completed = completed;

			// If the habit was completed and is now being marked as not completed, decrement the streak
			if (wasCompleted && !completed) {
				habit.streak = Math.max(0, habit.streak - 1);
			}
		}

		if (completed) {
			habit.streak++;

			// Fetch the benefits for the updated streak count
			const benefitsData = JSON.parse(readFileSync("./data/benefits.json"));

			if (
				!benefitsData[habit.name] ||
				!benefitsData[habit.name][habit.streak]
			) {
				try {
					const benefits = await getBenefits(habit.name, habit.streak);

					if (!benefitsData[habit.name]) {
						benefitsData[habit.name] = {};
					}
					benefitsData[habit.name][habit.streak] = benefits;

					writeFileSync("./data/benefits.json", JSON.stringify(benefitsData));
				} catch (error) {
					console.error("Error fetching benefits:", error);
				}
			}

			// Add new benefit to the habit
			benefit = await fetchAndWriteBenefits(habit.name, habit.streak);
		}

		writeFile("./data/habits-test.json", JSON.stringify(habits), (err) => {
			if (err) {
				console.error(err);
				return res.status(500).send("Error writing to file");
			}
			return res.send(trackedData);
		});
	}
);

async function fetchAndWriteBenefits(habitName, streak) {
	const benefitsData = readBenefits();

	if (!benefitsData[habitName] || !benefitsData[habitName][streak]) {
		try {
			const benefits = await getBenefits(habitName, streak);

			if (!benefitsData[habitName]) {
				benefitsData[habitName] = {};
			}
			benefitsData[habitName][streak] = benefits;

			writeFileSync("./data/benefits.json", JSON.stringify(benefitsData));
		} catch (error) {
			console.error("Error fetching benefits:", error);
		}
	}

	return benefitsData[habitName][streak];
}

module.exports = router;
