/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("benefits", function (table) {
		table.string("id").primary();
		table.string("description", 1000);
		table.integer("streak");
		table.string("habit_name");
		table
			.string("habit_id")
			.references("habits.id")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("benefits");
};
