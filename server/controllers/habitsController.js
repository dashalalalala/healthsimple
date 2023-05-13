// const knex = require("knex")(require("../knexfile.js"));

// exports.index = (_req, res) => {
// 	knex("habits")
// 		.then((data) => {
// 			res.status(200).json(data);
// 		})
// 		.catch((err) => res.status(400).send(`Error retrieving habits: ${err}`));
// };

// exports.singleHabit = (req, res) => {
// 	knex("habits")
// 		.join("users", "habits.user_id", "users.id")
// 		.select("users.id", "habits.name", "habits.id", "habits.start_date", "habits.duration")
// 		.where({ "habits.id": req.params.habitId })
// 		.then((data) => {
// 			if (!data.length) {
// 				return res
// 					.status(404)
// 					.send(`Record with id: ${req.params.habitId} is not found`);
// 			}
// 			res.status(200).json(data[0]);
// 		})
// 		.catch((err) =>
// 			res.status(500).send(`Error retrieving habit ${req.params.habitId} ${err}`)
// 		);
// };

const fs = require("fs");

// Load the habits data from the JSON file
const habitsData = require("../data/habits-test.json");

// Handle submission of the "Add Activity" form
const handleAddActivitySubmit = (req, res) => {
	const { habitId, completed } = req.body;

	// Find the habit object in the data with the matching ID
	const habit = habitsData.find((habit) => habit.id === habitId);

	// Update the most recent tracked data object for the habit
	const latestData = habit.tracked_data[habit.tracked_data.length - 1];
	latestData.completed = true;

	// Update the streak field based on the completion status and date
	const today = new Date().toDateString();
	if (latestData.date.toDateString() === today) {
		habit.streak += 1;
	} else {
		habit.streak = 1;
	}

	// Save the updated habits data to the JSON file
	fs.writeFile(
		"../data/habits-test.json",
		JSON.stringify(habitsData),
		(err) => {
			if (err) {
				console.error(err);
				res.status(500).send("Error saving habits data");
			} else {
				console.log(`Habit ${habitId} updated`);
				res.status(200).send(`Habit ${habitId} updated`);
			}
		}
	);
};

// exports.singleHabit = (req, res) => {
// 	knex("habits")
// 		.where({ habit_id: req.params.id })
// 		.then((data) => {

// 			// res.status(200).json(data[0]);
// 			// TODO: return (API request)

// 		})
// 		.then((chatGPTResponse) => {

// 			res.status(200).json()
// 		})
// 		.catch((err) =>
// 			res.status(500).send(`Error retrieving habit ${req.params.id} ${err}`)
// 		);
// };
