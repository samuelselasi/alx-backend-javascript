// tests for function calculateNumber that takes 3 args to add, sub or divide
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber type == SUM', () => {
  it('check the rounded part', () => {
    chai.expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    chai.expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    chai.expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    chai.expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
  });
  it('check negative numbers', () => {
    chai.expect(calculateNumber('SUM', -1, 3)).to.equal(2);
    chai.expect(calculateNumber('SUM', 1, -3.7)).to.equal(-3);
    chai.expect(calculateNumber('SUM', -1.2, 3.7)).to.equal(3);
    chai.expect(calculateNumber('SUM', -1.5, -3.7)).to.equal(-5);
  });
});
describe('calculateNumber type == SUBTRACT', () => {
  it('check the rounded part', () => {
    chai.expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    chai.expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    chai.expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    chai.expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
  });
  it('check negative numbers', () => {
    chai.expect(calculateNumber('SUBTRACT', -1, 3)).to.equal(-4);
    chai.expect(calculateNumber('SUBTRACT', 1, -3.7)).to.equal(5);
    chai.expect(calculateNumber('SUBTRACT', -1.2, 3.7)).to.equal(-5);
    chai.expect(calculateNumber('SUBTRACT', -1.5, -3.7)).to.equal(3);
  });
});
describe('calculateNumber type == DIVIDE', () => {
  it('check the rounded part', () => {
    chai.expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    chai.expect(calculateNumber('DIVIDE', 0, 3.7)).to.equal(0);
    chai.expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    chai.expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
  });
  it('check negative numbers', () => {
    chai.expect(calculateNumber('DIVIDE', -1.4, 0)).to.equal('Error');
    chai.expect(calculateNumber('DIVIDE', 0, -3.7)).to.equal(-0);
    chai.expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.equal(-0.2);
    chai.expect(calculateNumber('DIVIDE', -4, -2)).to.equal(2);
  });
});
