// tests for function calculateNumber that takes 3 args to add, sub or divide
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber type == SUM', () => {
  it('check the rounded part', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('check negative numbers', () => {
    assert.strictEqual(calculateNumber('SUM', -1, 3), 2);
    assert.strictEqual(calculateNumber('SUM', 1, -3.7), -3);
    assert.strictEqual(calculateNumber('SUM', -1.2, 3.7), 3);
    assert.strictEqual(calculateNumber('SUM', -1.5, -3.7), -5);
  });
  it('check valid args', () => {
    assert.strictEqual(Number.isNaN(calculateNumber('SUM', 1)), true);
    assert.strictEqual(Number.isNaN(calculateNumber('SUM')), true);
  });
});
describe('calculateNumber type == SUBTRACT', () => {
  it('check the rounded part', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
  });
  it('check negative numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', -1, 3), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -3.7), 5);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.2, 3.7), -5);
    assert.strictEqual(calculateNumber('SUBTRACT', -1.5, -3.7), 3);
  });
  it('check valid args', () => {
    assert.strictEqual(Number.isNaN(calculateNumber('SUBTRACT', 1)), true);
    assert.strictEqual(Number.isNaN(calculateNumber('SUBTRACT')), true);
  });
});
describe('calculateNumber type == DIVIDE', () => {
  it('check the rounded part', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 0, 3.7), 0);
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2);
  });
  it('check negative numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 0, -3.7), -0);
    assert.strictEqual(calculateNumber('DIVIDE', -1.4, 4.5), -0.2);
    assert.strictEqual(calculateNumber('DIVIDE', -4, -2), 2);
  });
  it('check valid args', () => {
    assert.strictEqual(Number.isNaN(calculateNumber('DIVIDE', 1)), true);
    assert.strictEqual(Number.isNaN(calculateNumber('DIVIDE')), true);
  });
});
