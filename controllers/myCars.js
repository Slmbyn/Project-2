const Vehicle = require('../models/vehicle');
const User = require('../models/user');

module.exports = {
    index
};

//clicking 'my cars' in nav bar
async function index(req, res) {
    const user = await User.findById(req.user._id).populate('carsOwned');
    const carsOwned = user.carsOwned;
    res.render('../views/myCars.ejs', {carsOwned});
}