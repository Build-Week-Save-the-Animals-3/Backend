
exports.seed = async (knex) => {
  await knex("camps_animals").truncate()
  await knex("sups_donations").truncate()
  await knex("donations").truncate()
  await knex("supporters").truncate()
  await knex("campaigns").truncate()
  await knex("species").truncate()
  await knex("organizations").truncate()
}