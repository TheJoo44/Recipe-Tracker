const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: String,
  image: String,
  description: String,
  ingredients: [String],
  instructions: [String],
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
}
},{
  timestamps: true
})

module.exports = mongoose.model('Recipe', recipeSchema);
