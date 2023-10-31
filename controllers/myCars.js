const Vehicle = require('../models/vehicle');
const User = require('../models/user');

module.exports = {
    index,
    delete: deleteCar,
    edit,
    update
};

//clicking 'my cars' in nav bar
async function index(req, res) {
    // console.log(req.user)
    const user = await User.findById(req.user._id).populate('carsOwned');
    const carsOwned = user.carsOwned;
    res.render('../views/myCars.ejs', {carsOwned});
}

async function deleteCar(req, res) {
    // This function handles the process of deleting a car from the system.
    // It attempts to find, delete, and update the user's list of owned cars.
    try {
        // We use the 'await' keyword to wait for this operation to complete.
        // 'Vehicle.findByIdAndDelete(req.params.id)' looks for and deletes
        // the vehicle with the ID provided in the request parameters.
        await Vehicle.findByIdAndDelete(req.params.id);
        // We parse the ID parameter from the request into an integer
        // using 'parseInt(req.params.id)'. This helps ensure it's a number.
        const id = parseInt(req.params.id);
        // We use 'findIndex' to locate the index of the car in the
        // user's list of owned cars based on its ID.
        const idx = req.user.carsOwned.findIndex(carOwned => carOwned.id === id);
        // We use 'splice' to remove the car from the user's list of owned cars.
        // 'splice' is a method for adding/removing elements from an array.
        req.user.carsOwned.splice(idx, 1);
        // After making changes to the user's data, we save those updates
        // to the database with 'await req.user.save()'.
        await req.user.save();
        // We log the updated user data for debugging purposes.
        // console.log(req.user);
    } catch (err) {
        // If an error occurs in the try block, we catch it here.
        // We log the error for debugging and troubleshooting.

        console.log(err);
    } finally {
        // The 'finally' block ensures this code runs, no matter what.
        // After deleting and updating, we redirect the user to the 'myCars' page.
        res.redirect('/myCars');
    }
}


async function edit (req, res) {
    //get the current car details
    // console.log('testing the edit function')
    //find the cars ID
    const carId = await Vehicle.findById(req.params.id);
    //parse that ID
    // const id = parseInt(carId)
    res.render('vehiclesfolder/edit', { carId })
}

async function update(req, res) {
    //const ___ = find it by id
    const updateCar = await Vehicle.findById(req.params.id)
    //update it
    Object.assign(updateCar, req.body);
    await updateCar.save();
    res.redirect('/myCars');
}
