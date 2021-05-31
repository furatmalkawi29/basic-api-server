'use strict';

//setup 
const uuid = require('uuid').v4; // v4 method/ generate random ids




//class 
class Clothes {

  constructor () {
    this.db= [];
    // [{id:, data: {name, type, ...}}]
  }

  
  read(id) {
    if (id){
      return this.db.find(element => element.id === id); //return one records
    } else { return this.db;} //return all records
  }

  create(clothesObj){
    let newClothes = {id : uuid(),
      data: clothesObj};

    this.db.push(newClothes); //add to database

    return newClothes;
  }

  delete( id ) {
    this.db = this.db.filter( ( clothes ) => clothes.id !== id );
    return this.db;
  }


  update(clothesObj,id) {
    this.db.filter(element => element.id === id)[0].data = clothesObj;

    return this.db.filter(element => element.id === id)[0];
  }


}



//export class
module.exports = Clothes;
