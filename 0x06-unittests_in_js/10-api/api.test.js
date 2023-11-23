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
  it('check correct response for available_payments endpoint', () => new Promise((done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      chai.expect(res.statusCode).to.be.equal(200);
      chai.expect(JSON.parse(body))
        .to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  }));
  it('check correct response for login endpoint', () => new Promise((done) => {
    request.post(`${API_URL}/login`, { json: { userName: 'Pinkbrook' } }, (_err, res, body) => {
      chai.expect(res.statusCode).to.be.equal(200);
      chai.expect(body).to.be.equal('Welcome Pinkbrook');
      done();
    });
  }));
});
