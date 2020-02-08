const db = require('../../data/db-config');
const campsModel = require('../campaigns-model');

beforeAll(async () => {
	await db.seed.run();
});

// testing the contents of the model
describe('campaigns model', () => {
	test('find camps', async () => {
		const res = await campsModel.findCampaigns();
		expect(res).toHaveLength(4);
	});

	test('find camps by id', async () => {
		const res = await campsModel.findCampById(1);
		expect(res.title).toBe('Support The River Otters');
	});

	// test('find orgs', async () => {
	// 	const res = await campsModel.findOrganizations();
	// 	expect(res).toHaveLength(4);
	// });

	test('find dons', async () => {
		const res = await campsModel.findDonations();
		expect(res).toHaveLength(4);
	});

	test('find dons by id', async () => {
		const res = await campsModel.findDonsById(1);
		expect(res.amount).toBe(100);
	});

	test('add camps', async () => {
		await campsModel.addCampaigns({
			title: 'test',
			animal: 'testing',
			description: 'testing',
			urgency_level: 'Critical',
			location: 'testing',
			deadline: '2020-02-23',
			fund_goal: 1,
			completed: 1,
		});
		const campaigns = await db('campaigns').select();
		expect(campaigns).toHaveLength(5);
	});

	test('add dons', async () => {
		await campsModel.addDonations({ amount: 50 });
		const donations = await db('donations').select();
		expect(donations).toHaveLength(5);
	});

	test('update camps', async () => {
		await campsModel.updateCampaign(1, {
			title: 'Support The River Otters',
			animal: 'River Otter',
			description: 'Highly valued for their pelts',
			urgency_level: 'Critical',
			location: 'Indiana',
			deadline: '2025-05-19',
			fund_goal: 15000,
			completed: 0,
		});
		const camp = await campsModel.findCampById(1);
		expect(camp.title).toBe('Support The River Otters');
		expect(camp.location).toBe('Indiana');
	});

	test('delete camps', async () => {
		await campsModel.deleteCampaign(5);
		const camps = await campsModel.findCampaigns();
		expect(camps).toHaveLength(4);
	});
});
