const Vehicle = require('../models/vehicle');
const User = require('../models/user');

module.exports = {
    index,
    show,
}
    
//function for 'browse' link in nav bar
async function index (req, res) {
    try { 
    const vehicleList = await Vehicle.find({});
    //get current user
    // const currentUser = await User.findById(req.user._id)
    // console.log('THE CURRENT USER IS:', {currentUser})
    //get car owner
    // const carOwner = await vehicleList.owner;
    // console.log('THE OWNER IS', {carOwner})
    // const isForSale = await vehicleList.forSale;
    // console.log('IS IT FOR SALE:' , {isForSale})
    res.render('vehiclesfolder/vehicles', {vehicleList});
    } catch (err) {
        console.log(err)
    }
}

async function show (req, res) {
    try {
    // console.log('show function is working')
    const carDetails = await Vehicle.findById(req.params.id);
    console.log(carDetails)
    let userId
    if (req.user) {
      userId = req.user._id  
    }
    res.render('vehiclesfolder/show', {carDetails, userId})
    } catch (err) {
        console.log(err)
    }
}

