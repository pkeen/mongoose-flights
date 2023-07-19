const Ticket = require('../models/ticket');

const newTicket = (req, res) => {
    // new ticket view
    // with flightId passed to use in form submission
    const flightId = req.params.flightId;
    console.log(flightId);
    res.render('tickets/new', { flightId});
}

const create = async (req, res) => {
    // create ticket
    const ticket = req.body
    console.log(ticket);
    // use flight id as value
    const flightId = req.params.flightId;
    console.log(flightId)
    ticket.flight = flightId;
    console.log(ticket);
    ticket.price = parseFloat(ticket.price);
    try {
        await Ticket.create(ticket);
        res.redirect(`/flights/${flightId}`);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    new: newTicket,
    create
}