// test for sendPaymentRequestToApi through utils
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('validate usage of Utils function', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    chai.expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.equal(true);
    calculateNumberSpy.restore();
  });
});
