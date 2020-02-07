const db = require('../data/db-config');
const usersModel = require('./users-model');

beforeAll(async () => {
	await db.seed.run();
});

describe('users model', () => {
	test('find orgs', async () => {
		const res = await usersModel.findOrgs();
		expect(res).toHaveLength(4);
	});

	test('find orgs by id', async () => {
		const res = await usersModel.findOrgById(1);
		expect(res.name).toBe('Best Friends First');
	});

	test('find sups', async () => {
		const res = await usersModel.findSups();
		expect(res).toHaveLength(2);
	});
});
