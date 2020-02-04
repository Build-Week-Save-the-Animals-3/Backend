
exports.seed = async (knex) => {
  await knex.raw("truncate camps_animals, sups_donations, donations, supporters, campaigns, species, organizations restart identity cascade")
}