const supertest = require('supertest');
const server = require('./index');
const db = require('./data/db-config');

beforeAll(async () => {
	await db.seed.run();
});

// welcome route
test('GET / welcome route', async () => {
	const res = await supertest(server).get('/');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.message).toMatch('Welcome to Save The Animals API');
});

