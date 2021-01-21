/* Testes, TDD e BDD */
"use strict";

const Math = require("../src/math.js");
const expect = require("chai").expect;
const sinon = require("sinon");
const math = new Math();

/* propriedades do mocha e chai */
describe("Test math class sum", function () {
  it("Sum of two numbers", function () {
    math.sum(6, 4, (value) => {
      expect(value).to.equal(10);
    });
  });
  it.only("Calls req with sum and index value", function () {
    const req = {};
    const res = {
      load: function () {
        console.log("Called function load()");
      },
      teste: function () {
        console.log("Called function teste()");
      },
    };
    /* com spy() */
    sinon.spy(res, "load");
    math.printSum(req, res, 5, 5);
    expect(res.load.calledOnce).to.be.true;

    /* com stub */
    sinon.stub(res, "teste").returns("xpto");
    math.printMultiply(req, res, 5, 5);
    expect(res.teste.calledOnce).to.be.true;
  });
});
