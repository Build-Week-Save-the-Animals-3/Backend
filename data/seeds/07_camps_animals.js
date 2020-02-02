
exports.seed = async function(knex) {
  await knex('camps_animals').insert([
    { campaign_id: 1, species_id: 1 },
    { campaign_id: 2, species_id: 4 },
    { campaign_id: 3, species_id: 9 },
    { campaign_id: 4, species_id: 8 },
  ])
};
