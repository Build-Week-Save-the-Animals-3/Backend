const db = require('../data/db-config');

// view, edit, delete existing campaigns - orgs
// make donation to campaigns, find campaigns - supporters
function findCampaigns() {
  return db('campaigns').select()
};

function findOrganizations() {
  return db('organizations').select()
};

function findDonations() {
  return db('donations').select()
};

function findCampById(id) {
  return db('campaigns')
    .where({ id })
    .first()
};

function findDonsById(id) {
  return db('donations')
    .where({ id })
    .first()
};

function addCampaigns() {

};

function addDonations() {

};

function updateCampaign() {

};

function deleteCampaign(id) {
  return db('campaigns')
    .where({ id })
    .del()
};

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
}