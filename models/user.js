const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vehicle = require('./vehicle');

const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  carsOwned: [{
    type: Schema.Types.ObjectId,
    ref: 'Vehicle'
  }]
  }, {
  timestamps: true
});


module.exports = mongoose.model('User', userSchema);
