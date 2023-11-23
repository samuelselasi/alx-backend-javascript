// test for sendPaymentRequestToApi through utils
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const chai = require('chai');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('validate usage of Utils function', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    chai.expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.equal(true);
    chai.expect(consoleLogSpy.calledWith('The total is: 10')).to.equal(true);

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
