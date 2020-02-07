exports.up = async function(knex) {
	await knex.schema.createTable('organizations', table => {
		table.increments('id');
		table
			.string('name', 128)
			.notNullable()
			.unique();
		table.string('password', 128).notNullable();
	});

	await knex.schema.createTable('campaigns', table => {
		table.increments('id');
		table.string('title', 255).notNullable();
		table.string('animal', 128).notNullable();
		table.string('description', 255).notNullable();
		table.string('urgency_level').notNullable();
		table.string('location', 255).notNullable();
		table.date('deadline').notNullable();
		table
			.integer('fund_goal')
			.notNullable()
			.unsigned();
		table
			.boolean('completed')
			.defaultTo(false)
			.notNullable();
	});

	await knex.schema.createTable('supporters', table => {
		table.increments('id');
		table
			.string('email', 128)
			.notNullable()
			.unique();
		table.string('password', 128).notNullable();
	});

	await knex.schema.createTable('donations', table => {
		table.increments('id');
		table
			.integer('amount')
			.notNullable()
			.unsigned();
	});

	await knex.schema.createTable('sups_donations', table => {
		table
			.integer('supporter_id')
			.notNullable()
			.references('id')
			.inTable('supporters')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table
			.integer('donation_id')
			.notNullable()
			.references('id')
			.inTable('donations')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table
			.integer('campaign_id')
			.notNullable()
			.references('id')
			.inTable('campaigns')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');
		table.primary(['supporter_id', 'donation_id', 'campaign_id']);
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists('sups_donations');
	await knex.schema.dropTableIfExists('donations');
	await knex.schema.dropTableIfExists('supporters');
	await knex.schema.dropTableIfExists('campaigns');
	await knex.schema.dropTableIfExists('organizations');
};
