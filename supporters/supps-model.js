const bcrypt = require('bcryptjs');
const db = require('../data/db-config');

function find() {
	return db('supporters').select('id', 'name');
}

function findBy(sup) {
	return db('supporters')
		.where(sup)
		.select('id', 'name', 'password');
}

function findById(id) {
	return db('supporters')
		.where({ id })
		.first();
}

async function add(sup) {
	sup.password = await bcrypt.hash(sup.password, 14);
	// sqlite
	// const [id] = await db('supporters').insert(sup);

	// return findById(id);
	// pg
	return db('supporters')
		.insert(sup)
		.returning('*');
}

module.exports = {
	find,
	findBy,
	findById,
	add,
};
