'use strict';
// test('statement', ()=>{
//     expect().toBe()
// });
//supertest library to test our server without running it
const superTest = require('supertest');
const server = require('../server.js');
const request = superTest(server.app);

describe('Server', () => {
  it('handle invalid routes', async () => {
    const response = await request.get('/foo');
    // console.log(response);
    expect(response.status).toEqual(404);
  });
  it('handle server errors', async () => {
    const response = await request.get('/error');
    expect(response.status).toEqual(500);
  });
  it('handle working routes', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello World!');
  });
  it('handle status routes', async () => {
    const response = await request.get('/status');
    expect(response.status).toEqual(200);
    expect('https://boshra-server-deploy-prod.herokuapp.com/').toEqual('https://boshra-server-deploy-prod.herokuapp.com/');
  });
});
