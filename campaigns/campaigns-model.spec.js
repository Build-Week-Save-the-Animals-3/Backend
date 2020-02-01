const db = require('../data/db-config');
const campsModel = require('./campaigns-model');

beforeEach(async () => {
  await db.seed.run()
});

describe('campaigns model', () => {
  test('find camps', async () => {
    const res = await campsModel.findCampaigns()
    expect(res).toHaveLength(4)
  });

  test('find orgs', async () => {
    const res = await campsModel.findOrganizations()
    expect(res).toHaveLength(4)
  });

  test('find dons', async () => {
    const res = await campsModel.findDonations()
    expect(res).toHaveLength(4)
  });

  test('find camps by id', async () => {
    const res = await campsModel.findCampById(1)
    expect(res.title).toBe("Support The River Otters")
  });


})