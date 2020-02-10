const db = require('../../data/db-config');
const usersModel = require('../users-model');

beforeAll(async () => {
	await db.seed.run();
});

// testing the contents of the model
describe('users model', () => {
	test('find orgs', async () => {
		const res = await usersModel.find();
		expect(res).toHaveLength(4);
	});

	test('find orgs by id', async () => {
		const res = await usersModel.findById(1);
		expect(res.name).toBe('Best Friends First');
	});

	test('register new org', async () => {
		await usersModel.add({
			name: 'test1',
			password: 'test1',
		});
		const user = await db('organizations').select();
		expect(user).toHaveLength(5);
	});
});
