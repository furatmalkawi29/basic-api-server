'use strict';

//setup 
const uuid = require('uuid').v4; // v4 method/ generate random ids




//class 
class Food {

  constructor () {
    this.db= [];
    // [{id:, data: {name, type, ...}}]
  }

  
  read(id) {
    if (id){
      return this.db.find(element => element.id === id); //return one records
    } else { return this.db;} //return all records
  }

  create(foodObj){
    let newFood = {id : uuid(),
      data: foodObj};

    this.db.push(newFood); //add to database

    return newFood;
  }


  delete( id ) {
    this.db = this.db.filter( ( clothes ) => clothes.id !== id );
    return this.db;
  }


  update(foodObj,id) {
    this.db.filter(element => element.id === id)[0].data = foodObj;
   
    return this.db.filter(element => element.id === id)[0];
  }


}



//export class
module.exports = Food;
