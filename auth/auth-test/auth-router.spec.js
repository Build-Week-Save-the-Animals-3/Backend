const supertest = require('supertest');
const server = require('../../index');
const db = require('../../data/db-config');

beforeAll(async () => {
	await db.seed.run();
});

test('POST /users/register', async () => {
	const res = await supertest(server)
		.post('/users/register')
		.send({
			name: 'test123',
			password: 'test123',
		});
	expect(res.status).toBe(201);
	expect(res.type).toBe('application/json');
});

test('POST /users/login', async () => {
	const res = await supertest(server)
		.post('/users/login')
		.send({
			name: '123test',
			password: '123test',
		});
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.message).toMatch(/Welcome 123test/i);
});

test('POST /supps/register', async () => {
	const res = await supertest(server)
		.post('/supps/register')
		.send({
			name: 'test@1234.com',
			password: '123test',
		});
	expect(res.status).toBe(201);
	expect(res.type).toBe('application/json');
});

test('POST /supps/login', async () => {
	const res = await supertest(server)
		.post('/supps/login')
		.send({
			name: '123@test.com',
			password: '1t2e3s4t',
		});
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.message).toMatch(/Welcome 123@test.com/i);
});
