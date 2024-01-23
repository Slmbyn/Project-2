const Transaction = require('../models/transaction')
const Vehicle = require('../models/vehicle');
const User = require('../models/user');

module.exports = {
    index,
    update
}


async function index (req, res) {
    try {
    //get the cars details
    const carDetails = await Vehicle.findById(req.params.id);
    // console.log(carDetails)
    //get user id
    let userId
    if (req.user) {
      userId = req.user._id  
    }
    // console.log('This is the buyers id: ', userId)
    res.render('vehiclesfolder/payment', {carDetails, userId})
    } catch (err) {
        console.log(err)
    }
}

async function update(req, res) {
    try {
        const purchasedCar = await Vehicle.findById(req.params.id)
        const ownerId = await purchasedCar.owner;
        const updateCarsOwned = {
            $pull: { carsOwned: purchasedCar._id}
        }
        let userId
        if (req.user) {
            userId = req.user._id
        }
        const buyersId = await User.findById(userId);
        const updateBuyer = {
            $push: { carsOwned: purchasedCar._id}
        }
        const updateVehicleOwner = {
            owner: userId,
            forSale: false
        }
        const updatedBuyer = await User.findByIdAndUpdate(buyersId, updateBuyer)
        const updatedPrevOwner = await User.findByIdAndUpdate(ownerId, updateCarsOwned);
        const updatedCar = await Vehicle.findByIdAndUpdate(purchasedCar, updateVehicleOwner, {new: true, runValidators: true})
        res.redirect('/myCars')
    } catch (err) {
        console.log(err)
    }
}