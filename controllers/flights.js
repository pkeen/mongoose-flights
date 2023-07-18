const Flight = require('../models/flight');

const index = async (req, res) => {
    const flights = await Flight.find({});
    res.render('flights/index', {
        flights: flights
    });
}

const newFlight = (req, res) => {
    res.render('flights/new');
} 

const create = async (req, res) => {
    await Flight.create(req.body);
    res.redirect('/flights');
}

module.exports = {
    index,
    new: newFlight,
    create
}