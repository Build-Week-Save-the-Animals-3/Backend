const supertest = require('supertest');
const server = require('../../index');
const db = require('../../data/db-config');

beforeAll(async () => {
	await db.seed.run();
});

test('GET /api/campaigns route', async () => {
	const res = await supertest(server).get('/api/campaigns');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.length).toBe(4);
});

test('GET /api/campaigns/:id route', async () => {
	const res = await supertest(server).get('/api/campaigns/1');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.id).toBe(1);
});

test('GET /api/donations route', async () => {
	const res = await supertest(server).get('/api/donations');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.length).toBe(4);
});

test('GET /api/donations/:id route', async () => {
	const res = await supertest(server).get('/api/donations/1');
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.id).toBe(1);
});

test('POST /api/campaigns route', async () => {
	const res = await supertest(server)
		.post('/api/campaigns')
		.send({
			title: 'test',
			animal: 'test',
			description: 'test',
			urgency_level: 'test',
			location: 'test',
			deadline: '2021-02-21',
			fund_goal: 0,
			completed: true,
		});
	expect(res.status).toBe(201);
	expect(res.type).toBe('application/json');
});

test('POST /api/donations route', async () => {
	const res = await supertest(server)
		.post('/api/donations')
		.send({
			amount: 1,
		});
	expect(res.status).toBe(201);
	expect(res.type).toBe('application/json');
});

test('PUT /api/campaigns/:id route', async () => {
	const res = await supertest(server)
		.put('/api/campaigns/4')
		.send({
			title: 'testing',
			animal: 'testing',
			description: 'testing',
			urgency_level: 'testing',
			location: 'testing',
			deadline: '2021-02-21',
			fund_goal: 0,
			completed: true,
		});
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
});

test('DELETE /api/campaigns/:id route', async () => {
	const res = await supertest(server).delete('/api/campaigns/4');
	expect(res.status).toBe(204);
	expect(res.type).toBe('');
});

// test('GET /api/organizations route', async () => {
// 	const res = await supertest(server).get('/api/organizations');
// 	expect(res.status).toBe(200);
// 	expect(res.type).toBe('application/json');
// 	expect(res.body.length).toBe(4);
// });
