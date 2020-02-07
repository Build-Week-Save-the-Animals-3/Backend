const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');
const restricted = require('../middleware/restricted');
const usersModel = require('../users/users-model');
const suppsModel = require('../supporters/supps-model')
const secret = require('../config/secret');

const router = express.Router();

router.post('/users/register',  async (req, res, next) => {
	try {
		const saved = await usersModel.add(req.body);

		res.status(201).json(saved);
	} catch (err) {
		next(err);
	}
});

router.post('/users/login', async (req, res, next) => {
	try {
		const { name, password } = req.body;
		const user = await usersModel.findBy({ name }).first();
		const pwValid = await bcrypt.compare(password, user.password);

		if (user && pwValid) {
			const token = jwt.sign(
				{
					subject: user.id,
					name: user.name,
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

router.get('/protected', restricted(), async (req, res, next) => {
	try {
		res.json({
			message: 'You are authorized',
			userId: req.userId,
		});
	} catch (err) {
		next(err);
	}
});

router.post('/supps/register',  async (req, res, next) => {
	try {
		const saved = await suppsModel.add(req.body);

		res.status(201).json(saved);
	} catch (err) {
		next(err);
	}
});

router.post('/supps/login', async (req, res, next) => {
	try {
		const { name, password } = req.body;
		const supps = await suppsModel.findBy({ name }).first();
		const pwValid = await bcrypt.compare(password, supps.password);

		if (supps && pwValid) {
			const token = jwt.sign(
				{
					subject: supps.id,
					name: supps.name,
				},
				secret.jwt,
				{
					expiresIn: '5d',
				}
			);

			res.status(200).json({
				message: `Welcome ${supps.name}!`,
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

router.get('/supporters/protected', restricted(), async (req, res, next) => {
	try {
		res.json({
			message: 'You are authorized',
			suppsId: req.userId,
		});
	} catch (err) {
		next(err);
	}
});


module.exports = router;
