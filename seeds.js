// Utility to initialize DB
require('dotenv').config()
require('./config/database');
const Recipe = require('./models/recipe');
const data = require('./data')

// clear out old categories
const p1 = Recipe.deleteMany({});

Promise.all([p1])
.then(function(results) {
  console.log('Results: ', results);
  return Recipe.create(data.recipes);
})
.then(function(recipes) {
  console.log('Recipes: ', recipes)
  return
})
.then(function() {
  process.exit();
})

