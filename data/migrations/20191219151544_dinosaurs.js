exports.up = function(knex) {
	return knex.schema.createTable('dinosaurs', (tbl) => {
		tbl.increments();

		tbl.string('name', 255).notNullable();
		tbl.string('type', 255).notNullable();
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists('dinosaurs');
};