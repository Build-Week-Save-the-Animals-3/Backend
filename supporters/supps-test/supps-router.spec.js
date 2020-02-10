const supertest = require('supertest');
const server = require('../../index');
const db = require('../../data/db-config');

const suppsToken =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJuYW1lIjoidGVzdDFAZ21haWwuY29tIiwiaWF0IjoxNTgxMTk1MjEwLCJleHAiOjE1ODE2MjcyMTB9.JNuoL1OMjuIH0voV66EBZGDIMgSiTMqSD5X64WFYnkc';

beforeAll(async () => {
	await db.seed.run();
});

// testing end-points of supporters router
test('GET /supps/supporters', async () => {
	const res = await supertest(server)
		.get('/supps/supporters')
		.set({ Authorization: suppsToken });
	expect(res.status).toBe(200);
	expect(res.type).toBe('application/json');
	expect(res.body.length).toBe(2);
});
