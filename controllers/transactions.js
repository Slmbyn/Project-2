const Transaction = require('../models/transaction')

module.exports = {
    index
}

async function index(req, res) {
    res.render('../views/vehiclesfolder/new');
}