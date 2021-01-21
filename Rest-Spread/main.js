/**  Rest e Spread Operator */

/* antes de ES6 para ler varios valores passados como argumento usava o arguments */
function sumOld(a, b) {
  var value = 0;
  for (var i = 0; i < arguments.length; i++) {
    value += arguments[i];
  }
  return value;
}
console.log(sumOld(5, 5, 4, 6, 7, 8, 4, 3));

/* no ES6, saiu o Rest Operador "...<variavel>"  */
const multiply = (...rest) => rest.reduce((a, b) => a * b, 1);
console.log(multiply(5, 5, 4, 6, 7, 8, 4, 3));

const sub = (a, b, ...rest) => rest.reduce((a, b) => a - b, 0);
console.log(sub(5, 5, 4, 6, 7, 8, 4, 3));

/* passar um rest para argumento de uma outra função -> usa o method.apply(undefined, rest) */
const total = (...rest) => {
  return multiply.apply(undefined, rest);
};
console.log(total(5, 5, 4, 6, 7, 8, 4, 3));

/* Spread Operator escreve da mesma forma que rest operator */
const totalSub = (...rest) => {
  return sub(...rest);
};
console.log(totalSub(5, 5, 4, 6, 7, 8, 4, 3));

/* spread operator pode ser usada em strings */
const str = "Digital Innovation One";
const out = (...args) => console.log(...args);
out(...str);

/* spread operator pode ser usada em arrays */
const arr = [1, 2, 3, 4];
const output = (a, b, c) => console.log(a, b, c);
output(...arr);

const arr2 = arr.concat([5, 6, 7, 8]);
console.log(arr2);

const arr3 = [...arr, 5, 6, 7, 8, 9, 10]; //identico que usar concat
console.log(arr3);

const arr4 = [...arr3, ...arr2, ...arr, 0, 0, 0, 0];
console.log(arr4);

const arrClone = [...arr];
console.log(arrClone);

/* spread operator pode ser usada em objetos literais */
const obj1 = {
  test: 123,
};

const obj2 = {
  ...obj1,
  test2: "hello",
};
console.log(obj2);

/* spread operator pode ser usada em objetos iteraveis */
