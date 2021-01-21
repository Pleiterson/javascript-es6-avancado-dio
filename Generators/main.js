/* Generators */

/* pausar e despausar função '<nome_funcao>*' e dentro da função usar o 'yield;' */
function* hello() {
  console.log("Hello");
  yield 1;
  console.log("from");
  yield 2;
  console.log("Function!");
}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next());

/* quando a função next() recebe argumentos next(<valor>) este valor é recebido no yield que receber */
function* helloOutside() {
  console.log("Hello");
  yield 1;
  console.log("from");
  const value = yield 2;
  console.log(value);
}
const it1 = helloOutside();
console.log("\n");
console.log(it1.next());
console.log(it1.next());
console.log(it1.next("Outside"));

/*  função gerar numeros infinitos */
function* naturalNumbers() {
  let number = 0;
  while (true) {
    yield number;
    number++;
  }
}

const it2 = naturalNumbers();
console.log("\n");
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

/* Generators para criar objetos iteraveis, bas colocar '*' no Symbol.Iterador => *[Symbol.iterator](){} */
const obj = {
  values: [1, 3, 6, 7, 9, 5, 4],
  *[Symbol.iterator]() {
    for (let i = 0; i < this.values.length; i++) {
      yield this.values[i];
    }
  },
};
console.log("\n");
for (let value of obj) {
  console.log(value);
}
