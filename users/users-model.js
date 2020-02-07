const bcrypt = require('bcryptjs');
const db = require('../data/db-config');

function findOrgs() {
	return db('organizations').select('id', 'name');
}

function findSups() {
	return db('supporters').select('id', 'email');
}

function findOrgsBy(filter) {
	return db('organizations')
		.where(filter)
		.select('id', 'name', 'password');
}

function findSupsBy(filter) {
	return db('supporters')
		.where(filter)
		.select('id', 'email', 'password');
}

function findOrgById(id) {
	return db('organizations')
		.where({ id })
		.first('id', 'name');
}

function findSupById(id) {
	return db('supporters')
		.where({ id })
		.first('id', 'email');
}

function addOrg(org) {
	org.password = bcrypt.hash(org.password, 14);
	return db('organizations')
		.insert(org)
		.returning('*');
}

function addSup(sup) {
	sup.password = bcrypt.hash(sup.password, 14);
	return db('supporters')
		.insert(sup)
		.returning('*');
}

module.exports = {
	findOrgs,
	findSups,
	findOrgsBy,
	findSupsBy,
	findOrgById,
	findSupById,
	addOrg,
	addSup,
};
