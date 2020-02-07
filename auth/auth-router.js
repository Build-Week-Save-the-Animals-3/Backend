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
		const { name, password } = req.body;
		const user = await usersModel.findOrgsBy({ name }).first();
		const pwValid = await bcrypt.compare(password, user.password);

		if (user && pwValid) {
			const token = jwt.sign(
				{
					subject: user.id,
					username: user.name,
				},
				secret.jwt,
				{
					expiresIn: '5d',
				}
			);

			res.status(200).json({
				message: `Welcome ${user.name}!`,
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

router.get('/users/protected', restricted(), async (req, res, next) => {
	try {
		res.json({
			message: 'You are authorized',
			userId: req.userId,
		});
	} catch (err) {
		next(err);
	}
});

module.exports = router;
