'use strict';

//setup
const express = require('express');
const router = express.Router(); // used instead of app 

//model
const Clothes = require('../models/clothes.js');
const clothes = new Clothes(); //object



//routs 
router.get('/', getClothes);
router.get('/:id', getClothesWithId);
router.post('/', createClothes);
router.delete('/:id', deleteClothes);
router.put('/:id',updateClothes);



//handlers
function getClothes (req,res){
  res.send(clothes.read());
}


function getClothesWithId (req,res){
  res.send(clothes.read(req.params.id));
}


function createClothes (req,res){
  res.status(201).send(clothes.create(req.body));
}


function deleteClothes (req,res){
  res.send(clothes.delete(req.params.id));
}


function updateClothes (req,res){
  res.send(clothes.update( req.body, req.params.id ));
}


//export rout-module
module.exports = router;



