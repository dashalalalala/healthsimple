/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
	return knex.schema.createTable("streak", function (table) {
		table.string("id").primary();
		table
			.string("habit_id")
			.references("habits.id")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table
			.string("user_id")
			.references("users.id")
			.onUpdate("CASCADE")
			.onDelete("CASCADE");
		table.integer("streak");
		table.timestamps(true, true);
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable("streak");
};
