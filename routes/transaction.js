const express = require('express');
const router = express.Router();
const passport = require('passport');

const transactionsCtrlr = require('../controllers/transactions')
const paymentCtrlr = require('../controllers/payment')

router.get('/payment/:id', paymentCtrlr.index)

router.patch('/payment/:id', paymentCtrlr.update)

module.exports = router;