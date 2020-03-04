const express = require('express');
const router = express.Router();
const newRecipesCtrl = require('../controllers/newrecipes');

router.get('/users/category/:id/newrecipes', newRecipesCtrl.new)

router.post('.category/:id', newRecipesCtrl.new)