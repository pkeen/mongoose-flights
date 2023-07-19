const mongoose = require('mongoose');


const seatValidator = (v) => {
    return /[A-F][1-9][1-9]?/.test(v);
}

const ticketSchema = new mongoose.Schema({
    seat: {type: String, validate: seatValidator},
    price: {type: Number, min: 0},
    flight: {type: mongoose.Schema.Types.ObjectId, ref: "Flight"}
})

module.exports = mongoose.model("Ticket", ticketSchema);
