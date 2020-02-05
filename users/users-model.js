const bcrypt = require('bcryptjs');
const db = require('../data/db-config');

function findOrgs() {
	return db('users').select('id', 'username', 'password', 'org_id');
}

function findSups() {
	return null;
}

function findOrgsBy() {
	return null;
}

function findSupsBy() {
	return null;
}

function findOrgById(id) {
	return null;
}

function findSupById(id) {
	return null;
}

function addOrg(org) {
	return null;
}

function addSup(sup) {
	return null;
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
