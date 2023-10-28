const Vehicle = require('../models/vehicle');
const User = require('../models/user');

module.exports = {
    index
};

async function index(req, res) {
    res.render('../views/myCars.ejs');
}