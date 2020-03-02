const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  catName: String,
  recipes: [{
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);