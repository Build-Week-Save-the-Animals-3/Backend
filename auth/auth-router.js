const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');
const restricted = require('../middleware/restricted');
const usersModel = require('../users/users-model');
const secret = require('../config/secret');

const router = express.Router();

router.post('/register', async (req, res, next) => {
	try {
		const saved = await usersModel.addOrg(req.body);

		res.status(201).json(saved);
	} catch (err) {
		next(err);
	}
});

router.post('/login', async (req, res, next) => {
	try {
		const { username, password } = req.body;
		const org = await usersModel.findOrgsBy({ username }).first();
		const pwValid = await bcrypt.compare(password, org.password);

		if (org && pwValid) {
			const token = jwt.sign(
				{
					subject: org.id,
					username: org.username,
				},
				secret.jwt,
				{
					expiresIn: '14d',
				}
			);

			res.status(200).json({
				message: `Welcome ${org.username}!`,
				token: token,
			});
		} else {
			res.status(401).json({
				message: 'Invalid Credentials',
			});
		}
	} catch (err) {
		next(err);
	}
});

router.get('/protected', restricted(), async (req, res, next) => {
	try {
		res.json({
			message: 'You are authorized',
			orgId: req.orgId,
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
