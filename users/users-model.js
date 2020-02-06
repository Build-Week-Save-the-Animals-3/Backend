const bcrypt = require('bcryptjs');
const db = require('../data/db-config');

function findOrgs() {
	return db('users').select('id', 'username');
}

function findSups() {
	return db('supporters').select('id', 'email');
}

function findOrgsBy(filter) {
	return db('users')
		.where(filter)
		.select('id', 'username', 'password', 'org_id');
}

function findSupsBy(filter) {
	return db('supporters')
		.where(filter)
		.select('id', 'email', 'password');
}

function findOrgById(id) {
	return db('users')
		.where({ id })
		.first('id', 'username');
}

function findSupById(id) {
	return db('supporters')
		.where({ id })
		.first('id', 'email');
}

function addOrg(org) {
	org.password = bcrypt.hash(org.password, 14)
	return db('users')
		.insert(org)
		.returning('*');
}

function addSup(sup) {
	sup.password = bcrypt.hash(sup.password, 14)
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
