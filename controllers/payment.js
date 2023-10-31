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
    console.log('confirmation button works!')
    try {
        // get vehicle id
        const purchasedCar = await Vehicle.findById(req.params.id)
        // console.log('the cars original info: ', {purchasedCar})
                    // access the User model of the owner and update the carsOwned field
        // getting the id of the owner
        const ownerId = await purchasedCar.owner;
        // console.log('the owners Id: ', [ownerId])
        // update the carsOwned property for prev owner
        const updateCarsOwned = {
            $pull: { carsOwned: purchasedCar._id}
        }
        // get the current userId
        let userId
        if (req.user) {
            userId = req.user._id
        }
        // console.log('the buyers id: ', {userId})
        const buyersId = await User.findById(userId);
        const updateBuyer = {
            $push: { carsOwned: purchasedCar._id}
        }
        // define what needs to be updated
        const updateVehicleOwner = {
            owner: userId,
            forSale: false
        }
        // console.log('info to be updated', {updateVehicleOwner, updateCarsOwned})
        // make the updates
        const updatedBuyer = await User.findByIdAndUpdate(buyersId, updateBuyer)
        const updatedPrevOwner = await User.findByIdAndUpdate(ownerId, updateCarsOwned);
        const updatedCar = await Vehicle.findByIdAndUpdate(purchasedCar, updateVehicleOwner, {new: true, runValidators: true})
        // console.log('new car info: ', {updatedCar, updatedPrevOwner, updatedBuyer})
        res.redirect('/myCars')
    } catch (err) {
        console.log(err)
    }
}