exports.seed = async function(knex) {
	await knex('supporters').insert([
		{ email: 'jane@doe.com', password: '123' },
		{ email: 'john@doe.com', password: '456' },
	]);
};
