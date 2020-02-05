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

module.exports = router;
