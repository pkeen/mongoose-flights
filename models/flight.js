// require Mongoose
const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: {
        type: String, 
        enum: ["American", "United", "Southwest", "BA", "Air Canada"]
    },
    airport: {
        type: String,
        enum: ["LHR", "LAX", "DEN", "YYC"],
        default: "LHR"
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: [true, "flight number is required"]
    },
    departs: {
        type: Date,
        default: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }
},
{
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);



