// tests for function calculateNumber that returns the sum of 2 numbers
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable jest/expect-expect */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('check the rounded part', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
  it('check negative numbers', () => {
    assert.strictEqual(calculateNumber(-1, 3), 2);
    assert.strictEqual(calculateNumber(1, -3.7), -3);
    assert.strictEqual(calculateNumber(-1.2, 3.7), 3);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });
  it('check valid args', () => {
    assert.strictEqual(Number.isNaN(calculateNumber(1)), true);
    assert.strictEqual(Number.isNaN(calculateNumber()), true);
  });
});
