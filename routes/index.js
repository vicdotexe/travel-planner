const express = require('express');
const router = express.Router();
const locations = require('./locationsController');
const trips = require('./tripsControllers');
const travelers = require('./travelersController');

router.use('/trips', trips);
router.use('/travelers', travelers);
router.use('/locations', locations);

module.exports = router;