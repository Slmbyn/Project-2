const express = require('express');
const router = express.Router();
const passport = require('passport');

const vehiclesCtrlr = require('../controllers/vehicles')
const transactionsCtrlr = require('../controllers/transactions')

//clicking 'browse' on nav bar
router.get('/', vehiclesCtrlr.index)

//clicking 'sell' on nav bar
router.get('/new', transactionsCtrlr.index)

router.get('/:id', vehiclesCtrlr.show)

//clicking 'submit' button on new.ejs
router.post('/', transactionsCtrlr.create)



module.exports = router;