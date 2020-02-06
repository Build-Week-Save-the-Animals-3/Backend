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

router.get('/:userId', async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await usersModel.findOrgById(id);

		if (user) {
			res.json(user);
		} else {
			res.status(404).json({
				message: 'The organizations user with the specified ID does not exist',
			});
		}
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
