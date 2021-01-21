"use strict";

class Math {
  sum(a, b) {
    return a + b;
  }
  multiply(a, b) {
    return a * b;
  }
  sub(a, b) {
    return a - b;
  }
  div(a, b) {
    return a / b;
  }
  mod(a, b) {
    return a % b;
  }
  printSum(req, res, a, b) {
    console.log(res.load("index", a + b));
  }

  printMultiply(req, res, a, b) {
    console.log(res.teste("index", a + b));
  }
}

module.exports = Math;
