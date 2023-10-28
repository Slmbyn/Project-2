const express = require('express');
const router = express.Router();
const passport = require('passport');

const vehiclesCtrlr = require('../controllers/vehicles')
const transactionsCtrlr = require('../controllers/transactions')

//clicking 'browse' on nav bar
router.get('/vehicles', vehiclesCtrlr.index)

//clicking 'sell' on nav bar
router.get('/vehicles/new', transactionsCtrlr.index)



module.exports = router;