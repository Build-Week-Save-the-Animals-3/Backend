require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const campRouter = require('./campaigns/campaigns-router');
const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');

const server = express();
const port = process.env.PORT || 8080;

server.use(helmet());
server.use(cors());
server.use(express.json());

// add in auth and users router
server.use('/auth', authRouter);
server.use('/api', campRouter);
server.use('/users', usersRouter);

server.get('/', (req, res) => {
	res.json({
		message: 'Welcome to Save The Animals API',
	});
});

server.use((err, req, res, next) => {
	console.log('Error:', err);
	res.status(500).json({
		message: 'Something went wrong',
	});
});

if (!module.parent) {
	server.listen(port, () => {
		console.log(`\n*** Server is running http://localhost:${port} \n`);
	});
}

module.exports = server;
