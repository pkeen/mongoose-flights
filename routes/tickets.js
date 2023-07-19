const express = require('express')
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// Starts at root '/'
// GET /flights/:flightId/tickets/new
router.get('/flights/:flightId/tickets/new', ticketsCtrl.new);

// POST /flights/:flightId/tickets
router.post('/flights/:flightId/tickets', ticketsCtrl.create);

module.exports = router;