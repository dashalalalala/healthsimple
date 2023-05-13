const knex = require("knex")(require("../knexfile.js"));

exports.index = (_req, res) => {
	knex("users")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving habits: ${err}`));
};

exports.singleUser = (req, res) => {
	knex("habits")
		.join("users", "habits.user_id", "users.id")
		.select("users.id", "users.user_name", "habits.name", "habits.id")
		.where({ "habits.user_id": req.params.userId })
		.then((data) => {
			if (!data.length) {
				return res
					.status(404)
					.send(`Record with id: ${req.params.id} is not found`);
			}
			res.status(200).json(data);
		})
		.catch((err) =>
			res.status(500).send(`Error retrieving user ${req.params.id} ${err}`)
		);
};
