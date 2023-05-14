/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("users").del();
	await knex("users").insert([
		{ id: "9e5e0f4c-7327-43c5-8f4c-44e10ed9a58b", name: "John Doe" },
		{ id: "8d9b240f-7c4e-4f57-ba44-99af4b0dcedf", name: "Jane Smith" },
		{ id: "c95f775a-29c9-43c6-94dd-08d9b3c49d52", name: "Michael Johnson" },
	]);
};
