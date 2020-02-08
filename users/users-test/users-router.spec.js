const supertest = require('supertest');
const server = require('../../index');
const db = require('../../data/db-config');

const userToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJuYW1lIjoidGVzdGluZyIsImlhdCI6MTU4MTE5MjA4OSwiZXhwIjoxNTgxNjI0MDg5fQ.I7q_dzf8EJfsG_49xRgmfvpvNkN_OFLzfkxyLYwEqbg';

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
