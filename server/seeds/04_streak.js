const { v4: uuidv4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("streak").del();
	await knex("streak").insert([
		{
			id: uuidv4(),
			habit_id: "9c4e067f-b7f1-423a-a30c-9c88f41e4c4c",
			user_id: "9e5e0f4c-7327-43c5-8f4c-44e10ed9a58b",
			streak: 0,
		},
		{
			id: uuidv4(),
			habit_id: "a6c6f46f-0de8-4ba3-9bfe-8b7849eae9c1",
			user_id: "9e5e0f4c-7327-43c5-8f4c-44e10ed9a58b",
			streak: 0,
		},
		{
			id: uuidv4(),
			habit_id: "3b4a5d21-7d20-449f-8a0b-5eac52c9c056",
			user_id: "9e5e0f4c-7327-43c5-8f4c-44e10ed9a58b",
			streak: 0,
		},

		{
			id: uuidv4(),
			habit_id: "9c4e067f-b7f1-423a-a30c-9c88f41e4c4c",
			user_id: "8d9b240f-7c4e-4f57-ba44-99af4b0dcedf",
			streak: 1,
		},
		{
			id: uuidv4(),
			habit_id: "a6c6f46f-0de8-4ba3-9bfe-8b7849eae9c1",
			user_id: "8d9b240f-7c4e-4f57-ba44-99af4b0dcedf",
			streak: 1,
		},
		{
			id: uuidv4(),
			habit_id: "3b4a5d21-7d20-449f-8a0b-5eac52c9c056",
			user_id: "8d9b240f-7c4e-4f57-ba44-99af4b0dcedf",
			streak: 1,
		},

		{
			id: uuidv4(),
			habit_id: "9c4e067f-b7f1-423a-a30c-9c88f41e4c4c",
			user_id: "c95f775a-29c9-43c6-94dd-08d9b3c49d52",
			streak: 0,
		},
		{
			id: uuidv4(),
			habit_id: "a6c6f46f-0de8-4ba3-9bfe-8b7849eae9c1",
			user_id: "c95f775a-29c9-43c6-94dd-08d9b3c49d52",
			streak: 0,
		},
		{
			id: uuidv4(),
			habit_id: "3b4a5d21-7d20-449f-8a0b-5eac52c9c056",
			user_id: "c95f775a-29c9-43c6-94dd-08d9b3c49d52",
			streak: 0,
		},
	]);
};
