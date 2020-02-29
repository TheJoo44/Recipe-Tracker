const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  firstName: String,
  email: String,
  picture: String,
  googelId: String
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);