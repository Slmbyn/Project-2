const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user');

const vehicleSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    forSale: {
        type: Boolean,
        default: true
    },
    image: String,
    year: Number,
    make: String,
    model: String,
    color: String,
    description: String,
    price: Number
});

module.exports = mongoose.model('Vehicle', vehicleSchema);