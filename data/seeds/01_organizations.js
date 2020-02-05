exports.seed = async function(knex) {
	await knex('organizations').insert([
		{ name: 'Best Friends First', username: 'BFF', password: 'FriendsF!rst' },
		{ name: 'Fish Are Friends, Not Food', username: 'Fishy Friends', password: 'Nev3rF00d' },
		{ name: 'Koala Sanctuary', username: 'Kasy', password: 'BadFires!!' },
		{ name: 'All Claws and Paws', username: 'ClawsNPaws', password: 'SpidersAreFr1ends' },
	]);
};
