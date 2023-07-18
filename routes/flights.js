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

module.exports = router;