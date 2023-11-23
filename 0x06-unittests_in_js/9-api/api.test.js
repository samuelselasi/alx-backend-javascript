// test suite for express server module wih endpoint that returns welcome message
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const request = require('request');
const chai = require('chai');

describe('basic integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('regex correct response message', () => new Promise((done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      chai.expect(res.statusCode).to.be.equal(200);
      chai.expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  }));
  it('check correct response for valid :id', () => new Promise((done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      chai.expect(res.statusCode).to.be.equal(200);
      chai.expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  }));

  it('check error response for negative number values in :id', () => new Promise((done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res) => {
      chai.expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));

  it('check error response for non-numeric values in :id', () => new Promise((done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res) => {
      chai.expect(res.statusCode).to.be.equal(404);
      done();
    });
  }));
});
