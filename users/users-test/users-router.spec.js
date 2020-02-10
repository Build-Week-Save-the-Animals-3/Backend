const supertest = require('supertest');
const server = require('../../index');
const db = require('../../data/db-config');

const userToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE1ODEyOTYxNDIsImV4cCI6MTU4MTcyODE0Mn0.NCHgslUa2V5DaIG2fmlWaP6T3EjX50aU2FA8rg-Vodc';

beforeAll(async () => {
	await db.seed.run();
});

// testing end-points of users router
test('GET /users', async () => {
	const res = await supertest(server)
		.get('/users')
		.set({ Authorization: userToken });
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.length).toBe(4);
});
