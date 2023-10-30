const Vehicle = require('../models/vehicle');
const User = require('../models/user');

module.exports = {
    index,
    delete: deleteCar
};

//clicking 'my cars' in nav bar
async function index(req, res) {
    console.log(req.user)
    const user = await User.findById(req.user._id).populate('carsOwned');
    const carsOwned = user.carsOwned;
    res.render('../views/myCars.ejs', {carsOwned});
}

async function deleteCar (req, res) {
    // console.log('deleted the car')
    try {
    await Vehicle.findByIdAndDelete(req.params.id);
    const id = parseInt(req.params.id);
    const idx = req.user.carsOwned.findIndex(carOwned => carOwned.id === id);
    req.user.carsOwned.splice(idx, 1);
    await req.user.save();
    console.log(req.user)
    } catch (err) {
        console.log(err)
    } finally {
       res.redirect('/myCars') 
    }
}

// function deleteIt (car) {
//     console.log('is this working')
// }