const knex = require("knex")(require("../knexfile.js"));
const { v4: uuidv4 } = require("uuid");
const { getBenefits } = require("../openai.js");

//Habits Data
exports.index = (_req, res) => {
	knex("habits")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving habits: ${err}`));
};

exports.singleUserHabit = async (req, res) => {
	const userId = req.params.userId;
	const habitId = req.params.habitId;

	try {
		const data = await knex("tracked_data")
			.join("habits", "habits.id", "=", "tracked_data.habit_id")
			.join("users", "users.id", "=", "tracked_data.user_id")
			.leftJoin("streak", function () {
				this.on("streak.user_id", "=", "users.id").andOn(
					"streak.habit_id",
					"=",
					"habits.id"
				);
			})
			.select(
				"habits.name as habit_name",
				"tracked_data.id as data_id",
				"tracked_data.date",
				"tracked_data.completed",
				"streak.streak"
			)
			.where({ "users.id": userId, "habits.id": habitId });

		if (!data.length) {
			return res
				.status(404)
				.send(`User with id: ${userId} or Habit with id: ${habitId} not found`);
		}

		const streak = data[0].streak;

		let benefits = await knex("benefits").where({
			habit_id: habitId,
			streak: streak,
		});

		// if benefits are not found, openAI request is made
		if (!benefits.length) {
			const benefitsText = await getBenefits(data[0].habit_name, streak);
			await knex("benefits").insert({
				id: uuidv4(),
				habit_id: habitId,
				habit_name: data[0].habit_name,
				streak: streak,
				description: benefitsText,
			});
			benefits = [{ description: benefitsText }];
		}

		const response = {
			habit_id: habitId,
			habit_name: data[0].habit_name,
			streak: streak,
			benefits: benefits,
			tracked_data: data.map((item) => ({
				data_id: item.data_id,
				date: item.date,
				completed: item.completed,
			})),
		};

		res.status(200).json(response);
	} catch (err) {
		console.error(`Error retrieving user ${userId}: ${err}`);
		res.status(500).send(`Error retrieving user ${userId}: ${err}`);
	}
};

exports.updateHabit = async (req, res) => {
	const { userId, habitId } = req.params;
	const { completed, date } = req.body;

	try {
		const userExists = await knex("users").where({ id: userId }).first();
		const habitExists = await knex("habits").where({ id: habitId }).first();

		if (!userExists || !habitExists) {
			return res.status(404).send("User or habit not found");
		}

		const trackedData = await knex("tracked_data")
			.where({ habit_id: habitId, date: date })
			.first();

		if (trackedData) {
			await knex("tracked_data")
				.where({ id: trackedData.id })
				.update({ completed: completed });
		} else {
			await knex("tracked_data").insert({
				id: uuidv4(),
				date: new Date(date).toISOString().split("T")[0],
				completed: completed,
				habit_id: habitId,
				user_id: userId,
			});
		}

		const allTrackedData = await knex("tracked_data")
			.where({ habit_id: habitId, user_id: userId })
			.orderBy("date", "desc");

		// Start of the new streak calculation logic - !!!! needs to be updated in case if the user doesnt put data for x days in a row
		let streak = 0;
		let firstIncompleteFound = false;
		for (const data of allTrackedData) {
			if (data.completed) {
				if (!firstIncompleteFound) {
					streak++;
				}
			} else {
				if (!firstIncompleteFound) {
					firstIncompleteFound = true;
				}
			}
		}

		await knex("streak")
			.where({ user_id: userId, habit_id: habitId })
			.update({ streak: streak });

		console.log(
			`Updating streak for user ${userId}, habit ${habitId}: ${streak}`
		);

		const benefits = await knex("benefits").select("description").where({
			habit_id: habitId,
			streak: streak,
		});

		let benefitsMessage = "No benefits found for the current streak";

		if (benefits.length > 0) {
			benefitsMessage = benefits
				.map((benefit) => benefit.description)
				.join(", ");
		}

		res.status(200).send({
			message: "Tracked data updated successfully.",
			benefits: benefitsMessage,
		});
	} catch (err) {
		console.error(err);
		return res.status(500).send("Server error");
	}
};
