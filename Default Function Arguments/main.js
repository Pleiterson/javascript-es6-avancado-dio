/* Default Function Arguments */
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(4, 3));
console.log(multiply(4, 0));
console.log(multiply(5));
console.log(multiply(5, 5));

/* é possivel colocar valor padrao de uma outra variavel */
function soma(a, b = a) {
  return a + b;
}
console.log(soma(4, 3));
console.log(soma(5));
console.log(soma(2));

/* Lazy evaluation */
function randomNumber() {
  return Math.random() * 10 + 1;
}

function divisao(a, b = randomNumber()) {
  return a / b;
}

console.log(divisao(4, 2));
console.log(divisao(5));
console.log(divisao(20));
console.log(divisao(9, 3));

