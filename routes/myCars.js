const express = require('express');
const router = express.Router();
const passport = require('passport');

const myCarCtrlr = require('../controllers/myCars')

//clicking 'my cars' in nav
router.get('/myCars', myCarCtrlr.index);

module.exports = router;