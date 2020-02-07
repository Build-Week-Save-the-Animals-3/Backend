const express = require('express');
const restricted = require('../middleware/restricted');
const suppsModel = require('./supps-model');

const router = express.Router();

router.get('/supporters', restricted(), async (req, res, next) => {
	try {
		const orgs = await suppsModel.find();

		res.json(orgs);
	} catch (err) {
		next(err);
	}
});

module.exports = router;