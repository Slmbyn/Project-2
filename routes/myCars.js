const express = require('express');
const router = express.Router();
const passport = require('passport');

const myCarCtrlr = require('../controllers/myCars')

//clicking 'my cars' in nav
router.get('/', myCarCtrlr.index);

//delete a car
router.delete('/:id', myCarCtrlr.delete)

//pull up the edit car form
router.get('/:id/edit', myCarCtrlr.edit)

//submit the car edit form
router.put('/:id', myCarCtrlr.update)

module.exports = router;