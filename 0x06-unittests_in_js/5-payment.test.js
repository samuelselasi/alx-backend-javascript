// test for sendPaymentRequestToApi through utils
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const chai = require('chai');
const sinon = require('sinon');
//  const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  beforeEach('set up spy', () => {
    sinon.spy(console, 'log');
  });
  afterEach('restore after test', () => {
    console.log.restore();
  });
  it('verify that the console is logging the right string and called once', () => {
    sendPaymentRequestToApi(100, 20);

    chai.expect(console.log.withArgs('The total is: 120').calledOnce).to.equal(true);
  });
  it('verify that console is logging the right string and called only once', () => {
    sendPaymentRequestToApi(10, 10);

    chai.expect(console.log.withArgs('The total is: 20').calledOnce).to.equal(true);
  });
});
