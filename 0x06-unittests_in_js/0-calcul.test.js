const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('not rounded', () => {
    assert.strictEqual(calculateNumber(1, 1), 2);
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('has decimal point >= 0.5 ', () => {
    assert.strictEqual(calculateNumber(1.5, 1), 3);
    assert.strictEqual(calculateNumber(1, 2.6), 4);
    assert.strictEqual(calculateNumber(1.5, 2.6), 5);
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('one arg has decimal point >= 0.5 ', () => {
    assert.strictEqual(calculateNumber(1.4, 1), 2);
    assert.strictEqual(calculateNumber(1, 2.1), 3);
    assert.strictEqual(calculateNumber(1.4, 1.4), 2);
  });

  it('should return NaN', () => {
    assert.strictEqual(calculateNumber(), NaN);
    assert.strictEqual(calculateNumber(1, 'e'), NaN);
    assert.strictEqual(calculateNumber('e', 'e'), NaN);
  });
});
