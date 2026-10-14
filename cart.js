function addItems(a, b) {
  return a + b;
}

function getDiscount(price, percent) {
  return price * (percent / 100) + price; // bug: should be price - (price * percent / 100)
}
