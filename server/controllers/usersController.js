const knex = require("knex")(require("../knexfile.js"));

exports.index = (_req, res) => {
	knex("users")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving users: ${err}`));
};

exports.singleUserHabits = (req, res) => {
	knex("habits")
		.join("tracked_data", function () {
			this.on("tracked_data.habit_id", "=", "habits.id");
		})
		.join("users", "users.id", "=", "tracked_data.user_id")
		.select(
			"users.id as user_id",
			"users.name as user_name",
			"habits.id as habit_id",
			"habits.name as habit_name",
			"tracked_data.id as data_id",
			"tracked_data.date",
			"tracked_data.completed"
		)
		.where({ "users.id": req.params.userId })
		.groupBy(
			"users.id",
			"users.name",
			"habits.id",
			"habits.name",
			"tracked_data.id",
			"tracked_data.date",
			"tracked_data.completed"
		)
		.then((data) => {
			if (!data.length) {
				return res
					.status(404)
					.send(`User with id: ${req.params.userId} not found`);
			}

			// Group the data by habits to get the correct structure of JSON
			const userHabits = data.reduce((habits, item) => {
				const habit = habits.find((h) => h.habit_id === item.habit_id);

				if (habit) {
					habit.tracked_data.push({
						data_id: item.data_id,
						date: item.date,
						completed: item.completed,
					});
				} else {
					habits.push({
						habit_id: item.habit_id,
						habit_name: item.habit_name,
						tracked_data: [
							{
								data_id: item.data_id,
								date: item.date,
								completed: item.completed,
							},
						],
					});
				}

				return habits;
			}, []);

			// Construct the response
			const response = {
				user_id: data[0].user_id,
				user_name: data[0].user_name,
				user_habits: userHabits,
			};

			res.status(200).json(response);
		})
		.catch((err) =>
			res.status(500).send(`Error retrieving user ${req.params.userId}: ${err}`)
		);
};
