const { v4: uuidv4 } = require("uuid");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("benefits").del();
	await knex("benefits").insert([
		{
			id: uuidv4(),
			description:
				"Starting an exercise habit, even for just one day, provides immediate benefits. Physical activity increases heart rate, improving blood circulation, and burning calories. This can help in managing weight, strengthening muscles and bones, and boosting energy levels. Additionally, exercise releases endorphins, often known as 'feel-good' hormones, which can enhance mood and reduce stress.",
			streak: 1,
			habit_name: "Exercise",
			habit_id: "9c4e067f-b7f1-423a-a30c-9c88f41e4c4c",
		},
		{
			id: uuidv4(),
			description:
				"Regular exercise for two days provides benefits such as increased energy, improved mood, better mental clarity, enhanced sleep, strengthened muscles and bones, weight management, reduced risk of chronic diseases, and boosted immune system.",
			streak: 2,
			habit_name: "Exercise",
			habit_id: "9c4e067f-b7f1-423a-a30c-9c88f41e4c4c",
		},
		{
			id: uuidv4(),
			description:
				"Exercising for three days offers even more benefits, including increased energy, improved mood, better mental clarity, enhanced sleep, strengthened muscles and bones, weight management, reduced risk of chronic diseases, boosted immune system, and a greater sense of overall well-being.",
			streak: 3,
			habit_name: "Exercise",
			habit_id: "9c4e067f-b7f1-423a-a30c-9c88f41e4c4c",
		},
		{
			id: uuidv4(),
			description:
				"Reading for just one day can help reduce stress, expand your knowledge, and improve focus and concentration. It's a small step towards developing a lifelong habit that can significantly boost mental fitness.",
			streak: 1,
			habit_name: "Reading",
			habit_id: "a6c6f46f-0de8-4ba3-9bfe-8b7849eae9c1",
		},
		{
			id: uuidv4(),
			description:
				"Reading for two days not only reinforces the benefits from the first day, but it also begins to establish a routine. Consistency is key in habit formation. Additionally, you might start noticing an improvement in your memory retention from the information absorbed.",
			streak: 2,
			habit_name: "Reading",
			habit_id: "a6c6f46f-0de8-4ba3-9bfe-8b7849eae9c1",
		},
		{
			id: uuidv4(),
			description:
				"Even just one day of proper water intake can provide benefits such as improved hydration, enhanced energy levels, healthy skin, better digestion, detoxification, and effective temperature regulation.",
			streak: 1,
			habit_name: "Drink Water",
			habit_id: "3b4a5d21-7d20-449f-8a0b-5eac52c9c056",
		},
	]);
};
