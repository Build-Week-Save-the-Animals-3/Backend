const express = require('express');
const auth = require('../middleware/auth');
const suppsModel = require('./supps-model');

const router = express.Router();

router.get('/supporters', auth(), async (req, res, next) => {
	try {
		const supps = await suppsModel.find();

		res.json(supps);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
