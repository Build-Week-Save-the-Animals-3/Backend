const bcrypt = require('bcryptjs');
const db = require('../data/db-config');

function find() {
	return db('organizations').select('id', 'name');
}

function findBy(org) {
	return db('organizations')
		.where(org)
		.select('id', 'name', 'password');
}

function findById(id) {
	return db('organizations')
		.where({ id })
		.first();
}

async function add(org) {
	org.password = await bcrypt.hash(org.password, 14);
 // sqlite 
	// const [id] = await db('organizations')
	// 	.insert(org)

	// return findById(id)
	// pg
	return db('organizations')
		.insert(org)
		.returning('*');
}

module.exports = {
	find,
	findBy,
	findById,
	add,
};
