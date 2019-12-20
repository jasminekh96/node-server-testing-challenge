exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('dinosaurs').truncate().then(function() {
		// Inserts seed entries
		return knex('dinosaurs').insert([
			{ id: 1, name: 'Velociraptor', type: 'Carnivore' },
			{ id: 2, name: 'Brachiosaurus', type: 'Herbivore' },
			{ id: 3, name: 'Stegosaurus', type: 'Herbivore' },
		]);
	});
};
