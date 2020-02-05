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
});
