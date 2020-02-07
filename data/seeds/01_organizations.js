exports.seed = async function(knex) {
	await knex('organizations').insert([
		{ name: 'Best Friends First', password: 'FriendsF!rst' },
		{ name: 'Fish Are Friends, Not Food', password: 'Nev3rF00d' },
		{ name: 'Koala Sanctuary', password: 'BadFires!!' },
		{ name: 'All Claws and Paws', password: 'SpidersAreFr1ends' },
	]);
};
