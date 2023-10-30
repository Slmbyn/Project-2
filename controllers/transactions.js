const Transaction = require('../models/transaction')
const Vehicle = require('../models/vehicle');
const User = require('../models/user');

module.exports = {
    index,
    create
}

//'sell' on nav bar (routes from vehicles router)
async function index(req, res) {
    const ownerId = req.user._id
    res.render('../views/vehiclesfolder/new', {ownerId});
}

//'submit' button on new car form
//should store the data & redirect user to 'my cars' page
async function create(req, res) {
    // console.log('the route to this function works!!!!!!!!!!')
    try {
        const newCar = await Vehicle.create(req.body);
        const user = await User.findById(req.user._id);
        user.carsOwned.push(newCar);
        await user.save();
        // res.render('/myCars', { newCar });
        res.redirect('/myCars')
    } catch (err) {
        console.log(err);
    }
}