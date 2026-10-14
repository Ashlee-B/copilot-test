const test = require('node:test');
const assert = require('node:assert/strict');
const { getDiscount } = require('../cart');

test('calculates a valid discount', () => {
  assert.equal(getDiscount(100, 25), 75);
});

test('leaves the price unchanged for a 0% discount', () => {
  assert.equal(getDiscount(100, 0), 100);
});

test('returns zero for a 100% discount', () => {
  assert.equal(getDiscount(100, 100), 0);
});

for (const percent of [-1, 101, '25', NaN, Infinity]) {
  test(`rejects invalid percent ${String(percent)}`, () => {
    assert.throws(() => getDiscount(100, percent), Error);
  });
}

for (const price of [-1, '100', NaN, Infinity]) {
  test(`rejects invalid price ${String(price)}`, () => {
    assert.throws(() => getDiscount(price, 25), Error);
  });
}
