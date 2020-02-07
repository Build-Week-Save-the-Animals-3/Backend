const express = require('express');
const restricted = require('../middleware/restricted');
const usersModel = require('./users-model');

const router = express.Router();

router.get('/', restricted(), async (req, res, next) => {
	try {
		const orgs = await usersModel.find();

		res.json(orgs);
	} catch (err) {
		next(err);
	}
});

// router.get('/supporters', restricted(), async (req, res, next) => {
// 	try {
// 		const sups = await usersModel.find();

// 		res.json(sups);
// 	} catch (err) {
// 		next(err);
// 	}
// });

module.exports = router;
