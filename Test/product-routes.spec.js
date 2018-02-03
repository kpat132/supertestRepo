const chai = require('chai');
const expect = chai.expect;
const request = require('supertest');

const app = require('../server');

describe('GET product smoke test', function(){

  it('should return "product smoke test" text', function(){
    request(app)
    .get('/products')
    .expect(200)
    .expect('Content-Type', /text/)
    .end(done);
  })

});