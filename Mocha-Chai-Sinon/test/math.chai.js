/* Testes, TDD e BDD */
"use strict";

const assert = require("assert");
const Math = require("../src/math.js");
const expect = require("chai").expect;
const math = new Math();

/* propriedades do mocha e chai */
describe("Test math class sum", () => {
  it("Sum of two numbers", () => {
    expect(math.sum(5, 5)).to.equal(10);
  });
});

/* propriedades do chain com done*/
describe("Test math class multiply", function () {
  it("Multiply of two numbers", function () {
    math.multiply(4, 3, (value) => {
      expect(value).to.equal(12);
    });
  });
});

/* propriedades do mocha e chai*/
describe("Test math class sub", function () {
  /* testar apenas este codigo */
  //it.only("Sub two numbers", function () {
  it("Sub two numbers", function () {
    math.sub(4, 3, (value) => {
      expect(value).to.equal(1);
    });
  });
});

/* propriedades do mocha e chai*/
describe("Test math class div", function () {
  /* ignorar teste no mocha e chai */
  it.skip("Div two numbers", function () {
    math.div(9, 3, (value) => {
      expect(value).to.equal(3);
    });
  });
});

/* propriedades do mocha e chai*/
let value = 0;
describe("Test math class mod", function () {
  //hooks
  beforeEach(function () {
    value = 0;
  });
  /*teste no mocha e chai */
  it("Nod two numbers", function () {
    value = 4;
    math.mod(4, 2, (value) => {
      expect(value).to.equal(0);
    });
  });
  it("Div two numbers", function () {
    expect(math.div(value, 3)).to.equal(0);
  });
});

/* comparar objetos */
describe("Test equal objects", function () {
  /*  teste com mocha e chai */
  it("Test equal objects", function () {
    const obj1 = {
      name: "Danilson Sanches",
    };

    const obj2 = {
      name: "Danilson Sanches",
    };
    expect(obj1).to.deep.equal(obj2);
  });
});
