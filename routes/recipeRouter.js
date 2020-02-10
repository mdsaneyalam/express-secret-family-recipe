const express = require('express');
const bodyParser = require('body-parser');

const recipeRouter = express.Router();

recipeRouter.use(bodyParser.json());

recipeRouter.route('/')
.all((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    next();
})
.get((req, res) => {
    res.end('Getting all the recipes from /recipes');
})
.post((req, res) => {
    res.end('Adding a NEW Recipe');
})
.put(( req, res) => {
    res.statusCode = 400;
    res.end('PUT operation is NOT permitted for /recipes');
})
.delete(( req, res) => {
    
    res.end('Deleting a Recipe from /recipes');
});

module.exports = recipeRouter;