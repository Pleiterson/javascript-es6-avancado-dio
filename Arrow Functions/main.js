"use strict";

/* Funções tradicionais do javascript */
function log(params) {
  console.log("Bem vindo " + params);
}
log("Danilson Sanches");

var sumOld = function (a, b) {
  return a + b;
};
console.log(sumOld(5, 3));

/* ARROWS FUNCTIONS NO ES6 */
const sum = (a, b) => a + b;
console.log(sum(4, 3));
console.log(sum(2, 2));

/* array function com operadores ternarios não precisa de return */
const maiorIdade = (idade) =>
  idade >= 18
    ? idade + " anos é maior de idade"
    : idade + " anos não é maior de idade";

console.log(maiorIdade(38));
console.log(maiorIdade(17));

/* array function com operadores condiçionais ou repetição na precisa de return */
const somaPares = (valor) => {
  let total = 0;
  valor.forEach((value) => {
    if (value % 2 === 0) {
      total += value;
    }
  });
  return total;
};
console.log(somaPares([1, 2, 3, 4, 5, 6]));

/* Obter objetos literal com arrow function anonima e com return implicito coloca ({<expressao>}) */
const createObj = () => ({ name: "Danilson Sanches", age: 38, sex: "M" });
console.log(createObj());
