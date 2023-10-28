const express = require('express');
const router = express.Router();
const passport = require('passport');

const vehiclesCtrlr = require('../controllers/vehicles')

router.get('/vehicles', vehiclesCtrlr.index)




module.exports = router;