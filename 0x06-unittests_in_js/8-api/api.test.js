// test suite for express server module wih endpoint that returns welcome message
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const request = require('request');
const chai = require('chai');

describe('basic integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('check correct response message', () => new Promise((done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      chai.expect(res.statusCode).to.be.equal(200);
      chai.expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));
});
