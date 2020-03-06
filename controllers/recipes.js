const Recipe = require('../models/recipe');
const Category = require('../models/category');

module.exports = {
  index,
  create,
  new: newRecipe,
  show,
  delete: deleteRec,
  update
};

function update(req, res) {
  Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, updateRec) {
    res.redirect(`/users/categories/${req.params.catName}/${updateRec.name}`)
  })
}

function deleteRec(req, res) {
  Recipe.findByIdAndRemove(req.params.id, function(err) {
      res.redirect(`/users/categories/${req.params.catName}`)
    })
  }
 
function show(req, res) {
    Recipe.findOne({name: req.params.recName}, function(err, recipe) {
      res.render('recipes/recipes', {user: req.user, firstName: req.givenName, catName: req.params.catName, recipe, title: 'Recipe Page'});
    })
  };

function index(req, res) {
  res.render('recipes/recipes', {users, user: req.user, name: req.query.name, recipes, catName: req.params.catName, foundCategory, title: 'Recipe Page'
  });
};

  function create(req, res) {
      Category.findOne({catName: req.params.catName}, function(err, foundCategory) {   
          const recipe = new Recipe({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions,
            userId: req.user.id,
            category: foundCategory.id
          });
          recipe.save(function(err) {
            foundCategory.recipes.push(recipe._id)
            if (err) return res.render('/recipes/newrecipes');
            if(err) console.log(err)
            res.redirect(`/users/categories/${req.params.catName}`);
      })}
    )};

  function newRecipe(req, res) {
      Category.findOne({catName: req.params.catName}, function(err, foundCategory) {
      res.render('recipes/newrecipes', {user: req.user, firstName: req.givenName, catName: req.params.catName, foundCategory, title: 'New Recipe Page'})
  })};