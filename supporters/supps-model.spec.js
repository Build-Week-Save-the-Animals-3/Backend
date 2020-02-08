const db = require('../data/db-config');
const suppsModel = require('./supps-model');

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

	test('register supporter ', async () => {
		await campsModel.add({
			name: 'test',
			password: 'testing',
		});
		const supporter = await db('supporters').select();
		expect(supporter).toHaveLength(3);
	});

	// test('add dons', async () => {
	// 	await campsModel.addDonations({ amount: 50 });
	// 	const donations = await db('donations').select();
	// 	expect(donations).toHaveLength(5);
	// });

	// test('update camps', async () => {
	// 	await campsModel.updateCampaign(1, { title: 'Support The River Otters', location: 'Indiana' });
	// 	const camp = await campsModel.findCampById(1);
	// 	expect(camp.title).toBe('Support The River Otters');
	// 	expect(camp.location).toBe('Indiana');
	// });

	// test('delete camps', async () => {
	// 	await campsModel.deleteCampaign(5);
	// 	const camps = await campsModel.findCampaigns();
	// 	expect(camps).toHaveLength(4);
	// });
});
