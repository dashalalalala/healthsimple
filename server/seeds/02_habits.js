/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("habits").del();
	await knex("habits").insert([
		{
			id: "9c4e067f-b7f1-423a-a30c-9c88f41e4c4c",
			name: "Exercise",
		},
		{
			id: "a6c6f46f-0de8-4ba3-9bfe-8b7849eae9c1",
			name: "Reading",
		},
		{
			id: "3b4a5d21-7d20-449f-8a0b-5eac52c9c056",
			name: "Drink Water",
		},
	]);
};
