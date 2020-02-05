exports.seed = async function(knex) {
	await knex('campaigns').insert([
		{
			title: 'Support The River Otters',
			description: 'Highly valued for their pelts',
			urgency_level: 'Critical',
			location: 'Indiana',
			deadline: '2025-05-19',
			fund_goal: 15000,
			completed: false,
		},
		{
			title: 'Seahorses Unite!',
			description: 'High demand for traditional Chinese medicine market and aquarium trade',
			urgency_level: 'Critical',
			location: 'South Africa',
			deadline: '2025-10-06',
			fund_goal: 25000,
			completed: false,
		},
		{
			title: 'Save The Creeps',
			description: 'Highly sought by insect collectors for exotic pet trade',
			urgency_level: 'Critical',
			location: 'Sri Lanka',
			deadline: '2022-01-25',
			fund_goal: 10000,
			completed: false,
		},
		{
			title: "Save The Koala's",
			description: 'Raging fires that are still buring',
			urgency_level: 'Critical',
			location: 'Australia',
			deadline: '2030-08-15',
			fund_goal: 100000,
			completed: false,
		},
	]);
};
