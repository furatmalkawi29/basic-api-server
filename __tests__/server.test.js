'use strict';

//import 
const { server } = require('../src/server.js'); // equivelant to app


//supertest
const superTest = require('supertest');
const request = superTest(server);




//test 

describe('basic api server', () => {

  let id;

  it('should create a new food using post request', async () => {
    //arrange
    let food = {
      name: 'pizza',
      origin: 'italy',
    };
    //act
    const response = await request.post('/api/v1/food').send(food);
    //assert
    expect(response.status).toEqual(201);
    expect(response.body.data.name).toEqual('pizza');
    expect(response.body.data.origin).toEqual('italy');
    expect(response.body.id.length).toBeGreaterThan(0);

    id = response.body.id;
  });





  it('should update a food using put request', async () => {
    //arrange
    let food = {
      name: 'falafel',
      origin: 'jordan',
    };
    //act
    const response = await request.put(`/api/v1/food/${id}`).send(food);
    //asert
    expect(response.status).toEqual(200);
    expect(response.body.data).toEqual(food);
  });


  it('should get food using get request', async () => {
    //arrange
    //act
    const response = await request.get(`/api/v1/food`);
    //asert
    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(1);
  });



  it('should delete a food using delete request', async () => {
    //arrange
    //act
    const response = await request.delete(`/api/v1/food/${id}`);
    //asert
    expect(response.status).toEqual(200);
  });


  it('should Read a food record using get request', async () => {
    const recordResponse = await request.get(`/api/v1/food/${id}`);

    expect(recordResponse.status).toBe(200);
  });

});





describe('basic api server', () => {

  let id;

  it('should create a new clothes using post request', async () => {
    //arrange
    let clothes = {
      name: 'pizza',
      origin: 'italy',
    };
    //act
    const response = await request.post('/api/v1/clothes').send(clothes);
    //assert
    expect(response.status).toEqual(201);
    expect(response.body.data.name).toEqual('pizza');
    expect(response.body.data.origin).toEqual('italy');
    expect(response.body.id.length).toBeGreaterThan(0);

    id = response.body.id;
  });





  it('should update a clothes using put request', async () => {
    //arrange
    let clothes = {
      name: 'falafel',
      origin: 'jordan',
    };
    //act
    const response = await request.put(`/api/v1/clothes/${id}`).send(clothes);
    //asert
    expect(response.status).toEqual(200);
    expect(response.body.data).toEqual(clothes);
  });


  it('should get clothes using get request', async () => {
    //arrange
    //act
    const response = await request.get(`/api/v1/clothes`);
    //asert
    expect(response.status).toEqual(200);
    expect(response.body.length).toEqual(1);
  });



  it('should delete a clothes using delete request', async () => {
    //arrange
    //act
    const response = await request.delete(`/api/v1/clothes/${id}`);
    //asert
    expect(response.status).toEqual(200);
  });


  it('should Read a clothes record using get request', async () => {
    const recordResponse = await request.get(`/api/v1/clothes/${id}`);

    expect(recordResponse.status).toBe(200);
  });

});





describe('404 error', () => {

  it('should get 404 status error on a bad route', async () => {
    const notFoundResponse ={
      error: 404,
      message: 'Not Found',
    };

    const response = await request.get('/foo');

    expect(response.status).toBe(404);
    expect(response.body).toEqual(notFoundResponse);
  });


  it('should get 404 status error on a bad method', async () => {
    const notFoundResponse ={
      error: 404,
      message: 'Not Found',
    };

    const postResponse = await request.post('/foo');
    const putResponse = await request.put('/foo');
    const deleteResponse = await request.delete('/foo');

    expect(postResponse.status).toBe(404);
    expect(postResponse.body).toEqual(notFoundResponse);

    expect(putResponse.status).toBe(404);
    expect(putResponse.body).toEqual(notFoundResponse);

    expect(deleteResponse.status).toBe(404);
    expect(deleteResponse.body).toEqual(notFoundResponse);
  });

});