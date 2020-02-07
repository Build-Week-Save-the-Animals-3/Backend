const express = require('express');
const auth = require('../middleware/auth');
const suppsModel = require('./supps-model');

const router = express.Router();

router.get('/supporters', auth(), async (req, res, next) => {
	try {
		const orgs = await suppsModel.find();

		res.json(orgs);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
