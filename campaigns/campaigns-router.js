const express = require('express');
const campModel = require('./campaigns-model');
const router = express.Router();

router.get('/campaigns', async (req, res, next) => {
  try {
    const camps = await campModel.findCampaigns()
    res.json(camps)
  } catch(err) {
    next(err)
  }
});

router.get('/campaigns/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const camp = await campModel.findCampById(id)

    if (camp) {
      res.status(200).json(camp)
    } else {
      res.status(404).json({
        message: 'The campaign with the specified ID does not exist'
      })
    }
    res.json(camps)
  } catch(err) {
    next(err)
  }
});

router.get('/organizations', async (req, res, next) => {
  try {
    const orgs = await campModel.findOrganizations()
    res.json(orgs)
  } catch(err) {
    next(err)
  }
});

router.get('/donations', async (req, res, next) => {
  try {
    const dons = await campModel.findDonations()
    res.json(dons)
  } catch(err) {
    next(err)
  }
});

router.post('/campaigns', async (req, res, next) => {
  try {
    const [id] = await db('campaigns')
      .insert(req.body)

    const camp = await db('campaigns')
      .where({ id })
      .first()

    res.status(201).json(camp)
  } catch(err) {
    next(err)
  }
});

router.post('/donations', async (req, res, next) => {
  try {

  } catch(err) {
    next(err)
  }
});

router.put('/campaigns/:id', async (req, res, next) => {
  try {

  } catch(err) {
    next(err)
  }
});

router.delete('/campaigns/:id', async (req, res, next) => {
  try {

  } catch(err) {
    next(err)
  }
});

module.exports = router;