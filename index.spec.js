const supertest = require('supertest');
const server = require('./index');
const db = require('./data/db-config');

beforeAll(async () => {
	await db.seed.run();
});

// welcome route
test('welcome route', async () => {
	const res = await supertest(server).get('/');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.message).toBe('Welcome to Save The Animals API');
});

// Campaign router tests
// GET Campaigns route
test('get camps', async () => {
	const res = await supertest(server).get('/api/campaigns');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
});

// GET Organizations route
test('get orgs', async () => {
	const res = await supertest(server).get('/api/organizations');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
});

// GET Donations route
test('get dons', async () => {
	const res = await supertest(server).get('/api/donations');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
});

// users router tests
// GET Org users
test('get users', async () => {
	const res = await supertest(server).get('/users');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
});

// GET Sups users
test('get supporters', async () => {
	const res = await supertest(server).get('/users/supporters');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
});
