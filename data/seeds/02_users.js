exports.seed = async function(knex) {
	await knex('users').insert([
		{ username: 'BFF', password: 'FriendsF!rst', org_id: 1 },
		{ username: 'Fishy Friends', password: 'Nev3rF00d', org_id: 2 },
		{ username: 'Kasy', password: 'BadFires!!', org_id: 3 },
		{ username: 'ClawsNPaws', password: 'SpidersAreFr1ends', org_id: 4 },
	]);
};
