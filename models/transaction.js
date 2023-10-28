const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user');
const Vehicle = require('./vehicle');

const transactionSchema = new Schema({
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }
});

module.exports = mongoose.model('Transaction', transactionSchema);