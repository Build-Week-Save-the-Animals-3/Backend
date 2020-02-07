exports.seed = async function(knex) {
	await knex('supporters').insert([
		{ name: 'jane@doe.com', password: '123' },
		{ name: 'john@done.com', password: '456' },
	]);
};
