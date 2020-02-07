const bcrypt = require('bcryptjs');
const db = require('../data/db-config');

function find() {
	return db('organizations').select('id', 'name');
}

// function find() {
// 	return db('supporters').select('id', 'email');
// }

function findBy(org) {
	return db('organizations')
		.where(org)
		.select('id', 'name', 'password');
}

// function findBy(sup) {
// 	return db('supporters')
// 		.where(sup)
// 		.select('id', 'email', 'password');
// }

async function add(org) {
	org.password = await bcrypt.hash(org.password, 14);
 // sqlite 
	const [id] = await db('organizations')
		.insert(org)

	return findById(id)
	// pg
	// return db('organizations')
	// 	.insert(org)
	// 	.returning('*');
}

// async function add(sup) {
// 	sup.password = await bcrypt.hash(sup.password, 14);
// 	// sqlite 
// 	const [id] = await db('supporters')
// 		.insert(sup)

// 		return findSupById(id)
// 	// return db('supporters')
// 	// 	.insert(sup)
// 	// 	.returning('*');
// }

function findById(id) {
	return db('organizations')
		.where({ id })
		.first('id', 'name');
}

// function findById(id) {
// 	return db('supporters')
// 		.where({ id })
// 		.first('id', 'email');
// }

module.exports = {
	find,
	findBy,
	findById,
	add,
};
