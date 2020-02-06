const express = require('express');
// const restricted = require('../middleware/restricted');
const usersModel = require('./users-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const orgs = await usersModel.findOrgs();

		res.json(orgs);
	} catch (err) {
		next(err);
	}
});

router.get('/supporters', async (req, res, next) => {
	try {
		const sups = await usersModel.findSups();

		res.json(sups);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
