/* Testes, TDD e BDD */
"use strict";

const assert = require("assert");
const Math = require("../src/math.js");
const math = new Math();

/* propriedades do mocha */
describe("Test math class", () => {
  it("Sum of two numbers", () => {
    assert.strictEqual(math.sum(5, 5), 10);
  });
});

/* propriedades do mocha com done*/
describe("Test math class", function () {
  it("Multiply of two numbers", function () {
    math.multiply(4, 3, (value) => {
      assert.strictEqual(value, 12);
    });
  });
});

/* propriedades do mocha*/
describe("Test math class", function () {
  /* testar apenas este codigo */
  //it.only("Sub two numbers", function () {
  it("Sub two numbers", function () {
    math.sub(4, 3, (value) => {
      assert.strictEqual(value, 1);
    });
  });
});

/* propriedades do mocha*/
describe("Test math class", function () {
  /* ignorar teste no mocha */
  it.skip("Div two numbers", function () {
    math.div(9, 3, (value) => {
      assert.strictEqual(value, 3);
    });
  });
});

/* propriedades do mocha*/
let value = 0;
describe("Test math class", function () {
  //hooks
  beforeEach(function () {
    value = 0;
  });
  /*teste no mocha */
  it("Nod two numbers", function () {
    value = 4;
    math.mod(4, 2, (value) => {
      assert.strictEqual(value, 0);
    });
  });
  it("Div two numbers", function () {
    assert.strictEqual(math.div(value, 3), 0);
  });
});
