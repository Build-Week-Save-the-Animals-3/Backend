
exports.seed = async function(knex) {
  await knex('sups_donations').insert([
    { supporter_id: 1, donation_id: 1, campaign_id: 1 },
    { supporter_id: 2, donation_id: 2, campaign_id: 2 },
    { supporter_id: 1, donation_id: 3, campaign_id: 3 },
    { supporter_id: 2, donation_id: 4, campaign_id: 4 },
  ])
};
