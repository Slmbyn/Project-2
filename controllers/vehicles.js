const vehicle = require('../models/vehicle');
const Vehicle = require('../models/vehicle');

module.exports = {
    index
}
    
//function for 'browse' link in nav bar
async function index (req, res) {
    // const vehicleList = await vehicle.find({});
    // res.render('/views/vehiclefolder/vehicles', {vehicleList});
    res.render('../views/vehiclesfolder/vehicles');
}