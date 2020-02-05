const jwt = require('jsonwebtoken');
const secret = require('../config/secret');

module.exports = () => {
	return (req, res, next) => {
		try {
			const token = req.headers.authorization;
			const decoded = jwt.verify(token, secret.jwt);

			req.userId = decoded.subject;
			next();
		} catch (err) {
			return res.status(401).json({
				message: 'Invalid credentials',
			});
		}
	};
};
