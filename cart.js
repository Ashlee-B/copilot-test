function addItems(a, b) {
  return a + b;
}

function getDiscount(price, percent) {
  if (typeof price !== 'number' || !Number.isFinite(price) || price < 0) {
    throw new Error('price must be a non-negative number');
  }
  if (typeof percent !== 'number' || !Number.isFinite(percent) || percent < 0 || percent > 100) {
    throw new Error('percent must be a number between 0 and 100');
  }
  return price - (price * percent / 100);
}

module.exports = { addItems, getDiscount };
