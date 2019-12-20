const Dinosaurs = require('./dinoModel');

const db = require('../data/dbConfig');

describe('dinoModel', function() {
	beforeEach(async () => {
		await db('dinosaurs').truncate();
	});
	describe('insert()', function() {
		it('should add the dinosaur to the database', async function() {
			await Dinosaurs.insert({ name: 'TREX', type: 'Carnivore' });
			await Dinosaurs.insert({ name: 'Three Horns', type: 'Herbivore' });

			const dinosaurs = await db('dinosaurs');
			expect(dinosaurs).toHaveLength(2);
		});
	});
});
