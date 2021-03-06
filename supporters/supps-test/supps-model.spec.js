const db = require('../../data/db-config');
const suppsModel = require('../supps-model');

beforeAll(async () => {
	await db.seed.run();
});

describe('Supporters model', () => {
	test('find supporters', async () => {
		const res = await suppsModel.find();
		expect(res).toHaveLength(2);
	});

	test('find supporters by id', async () => {
		const res = await suppsModel.findById(1);
		expect(res.name).toBe('jane@doe.com');
	});

	test('register new supporter ', async () => {
		await suppsModel.add({
			name: 'test1@gmail.com',
			password: 't1gm',
		});
		const supporter = await db('supporters').select();
		expect(supporter).toHaveLength(3);
	});
});
