const express = require('express');
const router = express.Router();
const passport = require('passport');

const myCarCtrlr = require('../controllers/myCars')

//clicking 'my cars' in nav
router.get('/', myCarCtrlr.index);

//delete a car
router.delete('/:id', myCarCtrlr.delete)

module.exports = router;