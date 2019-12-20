const db = require('../data/dbConfig');

module.exports = {
	insert,
	remove,
};

async function insert(dinosaurs) {
	const [ id ] = await db('dinosaurs').insert(dinosaurs, 'id');
	return db('dinosaurs').where({ id }).first();
}

function remove(id) {
	return db('dinosaurs').delete().where({ id });
}
