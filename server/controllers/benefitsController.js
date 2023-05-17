const knex = require("knex")(require("../knexfile.js"));

exports.index = (_req, res) => {
	knex("benefits")
		.then((data) => {
			res.status(200).json(data);
		})
		.catch((err) => res.status(400).send(`Error retrieving benefits: ${err}`));
};
