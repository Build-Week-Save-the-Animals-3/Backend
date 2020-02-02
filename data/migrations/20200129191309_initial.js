
exports.up = async function(knex) {
  await knex.schema.createTable("organizations", (table) => {
    table.increments("id")
    table.string("name").notNullable().unique()
  });

  await knex.schema.createTable("species", (table) => {
    table.increments("id")
    table.string("animal", 128).notNullable()
    table.integer("org_id")
      .notNullable()
      .references("id")
      .inTable("organizations")
  });

  await knex.schema.createTable("campaigns", (table) => {
    table.increments("id")
    table.string("title", 255).notNullable()
    table.string("description", 255).notNullable()
    table.string("urgency_level").notNullable()
    table.string("location", 255).notNullable()
    table.date("deadline").notNullable()
    table.integer("fund_goal")
      .notNullable()
      .unsigned()
    table.boolean("completed")
      .defaultTo(false)
      .notNullable()
  });

  await knex.schema.createTable("supporters", (table) => {
    table.increments("id")
    table.string("email", 128).notNullable().unique()
    table.string("password", 128).notNullable()
  });

  await knex.schema.createTable("donations", (table) => {
    table.increments("id")
    table.integer("amount")
      .notNullable()
      .unsigned()
  });

  await knex.schema.createTable("sups_donations", (table) => {
    table.integer("supporter_id")
      .notNullable()
      .references("id")
      .inTable("supporters")
    table.integer("donation_id")
      .notNullable()
      .references("id")
      .inTable("donations")
    table.integer("campaign_id")
      .notNullable()
      .references("id")
      .inTable("campaigns")
    table.primary(["supporter_id", "donation_id", "campaign_id"])
  });

  await knex.schema.createTable("camps_animals", (table) => {
    table.integer("campaign_id")
      .notNullable()
      .references("id")
      .inTable("campaigns")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table.integer("species_id")
      .notNullable()
      .references("id")
      .inTable("species")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table.primary(["campaign_id", "species_id"])
  });

  await knex.schema.createTable("orgs_camps", (table) => {
    table.integer("campaign_id")
      .notNullable()
      .references("id")
      .inTable("campaigns")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    table.integer("org_id")
      .notNullable()
      .references("id")
      .inTable("organizations")
    table.primary(["campaign_id", "org_id"])
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("orgs_camps")
  await knex.schema.dropTableIfExists("camps_animals")
  await knex.schema.dropTableIfExists("sups_donations")
  await knex.schema.dropTableIfExists("donations")
  await knex.schema.dropTableIfExists("supporters")
  await knex.schema.dropTableIfExists("campaigns")
  await knex.schema.dropTableIfExists("species")
  await knex.schema.dropTableIfExists("organizations")
};
