const Vehicle = require('../models/vehicle');

module.exports = {
    index
}
    
//function for 'browse' link in nav bar
async function index (req, res) {
    const vehicleList = await Vehicle.find({});
    res.render('vehiclesfolder/vehicles', {vehicleList});
    // res.render('../views/vehiclesfolder/vehicles');
}