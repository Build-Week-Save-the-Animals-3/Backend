const supertest = require('supertest');
const server = require('../index');
const db = require('../data/db-config');

beforeAll(async () => {
	await db.seed.run();
});

describe()
test('get camps', async () => {
	const res = await supertest(server).get('/api/campaigns');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
});

test('get orgs', async () => {
	const res = await supertest(server).get('/api/organizations');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
});

test('get dons', async () => {
	const res = await supertest(server).get('/api/donations');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
});
