exports.seed = async function(knex) {
	await knex('donations').insert([{ amount: 100 }, { amount: 20 }, { amount: 5 }, { amount: 1 }]);
};
