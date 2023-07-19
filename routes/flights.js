const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// Path defaults to /flights

// GET /
router.get('/', flightsCtrl.index);

// GET /new
router.get('/new', flightsCtrl.new);

// POST / 
router.post('/', flightsCtrl.create);

// GET /:id
router.get('/:id', flightsCtrl.show);

// ADD destination
// POST /:id/destination
router.post('/:id/destination', flightsCtrl.addDestination);

module.exports = router;