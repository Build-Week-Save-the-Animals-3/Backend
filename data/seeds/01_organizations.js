exports.seed = async function(knex) {
	await knex('organizations').insert([
		{ name: 'Best Friends First' },
		{ name: 'Fish Are Friends, Not Food' },
		{ name: 'Koala Sanctuary' },
		{ name: 'All Claws and Paws' },
	]);
};
