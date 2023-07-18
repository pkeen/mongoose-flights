const Flight = require('../models/flight');

const index = async (req, res) => {
    const flights = await Flight.find({}).sort({departs: 'asc'});
    res.render('flights/index', {
        flights: flights
    });
}

const newFlight = (req, res) => {
    const newFlight = new Flight();
    // Obtain the default date
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    let departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
    departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
    res.render('flights/new', { departsDate });
} 

const create = async (req, res) => {
    try {
        await Flight.create(req.body);
        // Always redirect after CRUDing data
        // We'll refactor to redirect to the movies index after we implement it
        res.redirect('/flights');  // Update this line
      } catch (err) {
        // Typically some sort of validation error
        console.log(err);
        res.render('flights/new', { errorMsg: err.message });
      }
}

module.exports = {
    index,
    new: newFlight,
    create
}