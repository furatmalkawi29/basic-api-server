'use strict';

//setup
const express = require('express');
const router = express.Router(); // used instead of app 

//model
const Food = require('../models/food.js');
const food = new Food(); //object



//routs 
router.get('/', getFood);
router.get('/:id', getFoodWithId);
router.post('/', createFood);
router.delete('/:id', deleteFood);
router.put('/:id',updateFood);



//handlers
function getFood (req,res){
  res.send(food.read());
}


function getFoodWithId (req,res){
  res.send(food.read(req.params.id));
}


function createFood (req,res){
  res.status(201).send(food.create(req.body));
}


function deleteFood (req,res){
  res.send(food.delete(req.params.id));
}


function updateFood (req,res){
  res.send(food.update( req.body, req.params.id ));
}


//export rout-module
module.exports = router;



