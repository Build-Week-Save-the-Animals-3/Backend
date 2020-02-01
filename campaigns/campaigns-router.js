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
      res.json(camp)
    } else {
      res.status(404).json({
        message: 'The campaign with the specified ID does not exist'
      })
    }
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

router.get('/donations/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const don = await campModel.findDonsById(id)

    if (don) {
      res.json(don)
    } else {
      res.status(404).json({
        message: 'The campaign with the specified ID does not exist'
      })
    }
  } catch(err) {
    next(err)
  }
});

router.post('/campaigns', async (req, res, next) => {
  try {
    const newCamp = await campModel.addCampaigns(req.body)
    res.status(201).json(newCamp)
  } catch(err) {
    next(err)
  }
});

router.post('/donations', async (req, res, next) => {
  try {
    const newDon = await campModel.addDonations(req.body)
    res.status(201).json(newDon)
  } catch(err) {
    next(err)
  }
});

router.put('/campaigns/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateCamp = await campModel.updateCampaign(id)

    if (updateCamp) {
      res.json(updateCamp)
    } else {
      res.status(404).json({
        message: 'The campaign with the specified ID does not exist'
      })
    }
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