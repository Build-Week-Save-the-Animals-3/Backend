const bcrypt = require('bcryptjs');
const db = require('../data/db-config');

function find() {
	return db('supporters').select('id', 'email');
}

function findBy(sup) {
	return db('supporters')
		.where(sup)
		.select('id', 'email', 'password');
}

async function add(sup) {
	sup.password = await bcrypt.hash(sup.password, 14);
	// sqlite 
	const [id] = await db('supporters')
		.insert(sup)

		return findSupById(id)
	// return db('supporters')
	// 	.insert(sup)
	// 	.returning('*');
}

function findById(id) {
	return db('supporters')
		.where({ id })
		.first('id', 'email');
}

module.exports = {
	find,
	findBy,
	findById,
	add,
};
