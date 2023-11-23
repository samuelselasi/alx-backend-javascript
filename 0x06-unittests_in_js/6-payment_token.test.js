// test for function that returns token from api
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */
const chai = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('async testing with done callback', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
      .then((data) => {
        chai.expect(data).to.have.property('data');
        done();
      });
  }));
});
