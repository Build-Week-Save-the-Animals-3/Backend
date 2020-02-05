exports.seed = async function(knex) {
	await knex('supporters').insert([
		{ email: 'jane@doe.com', password: '123' },
		{ email: 'john@done.com', password: '456' },
	]);
};
