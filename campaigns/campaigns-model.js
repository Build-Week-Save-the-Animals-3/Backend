const db = require('../data/db-config');

// view, edit, delete existing campaigns - orgs
// make donation to campaigns, find campaigns - supporters
function findCampaigns() {
	const camps = db('campaigns').select();
	return camps.map(camp => {
		return {
			...camp,
			completed: camp.completed === 0 ? true : false,
		};
	});
}

function findOrganizations() {
	return db('organizations').select();
}

function findDonations() {
	return db('donations').select();
}

function findCampById(id) {
	return db('campaigns')
		.where({ id })
		.first();
}

function findDonsById(id) {
	return db('donations')
		.where({ id })
		.first();
}

async function addCampaigns(campaign) {
	const [id] = await db('campaigns')
		.insert(campaign)
		.returning('*');
	return findCampById(id);
}

async function addDonations(donate) {
	const [id] = await db('donations')
		.insert(donate)
		.returning('*');
	return findDonsById(id);
}

async function updateCampaign(id, changes) {
	await db('campaigns')
		.where({ id })
		.update(changes)
		.returning('*');

	return findCampById(id);
}

function deleteCampaign(id) {
	return db('campaigns')
		.where({ id })
		.del();
}

module.exports = {
	findCampaigns,
	findOrganizations,
	findDonations,
	findCampById,
	findDonsById,
	addCampaigns,
	addDonations,
	updateCampaign,
	deleteCampaign,
};
