const db = require('../data/db-config');

// view, edit, delete existing campaigns - orgs
// make donation to campaigns, find campaigns - supporters
function findCampaigns() {
	const camps = db('campaigns').select();
	return camps.map(camp => {
		return {
			...camp,
			completed: camp.completed === 1 ? true : false,
		};
	});
}

// asdfa?
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

function addCampaigns(campaign) {
	return db('campaigns')
		.insert(campaign)
		.returning('*');
}

function addDonations(donate) {
	return db('donations')
		.insert(donate)
		.returning('*');
}

function updateCampaign(id, changes) {
	return db('campaigns')
		.where({ id })
		.update(changes)
		.returning('*');
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
