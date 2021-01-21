/* Symbols e Iterators */

/* identificador unico */
const uniqueId1 = Symbol("Hello");
console.log(uniqueId1);

/* symbols não são iguais */
const uniqueId2 = Symbol("Hello");
console.log(uniqueId2);
console.log(uniqueId1 === uniqueId2); /* false */

/* propriedades well known symbols  */
Symbol.iterator; /* adicionar metas propriedades */
Symbol.split;
Symbol.toStringTag;

/* SYMBOLS.ITERATOR */
const arr1 = [1, 2, 3, 4];
const it1 = arr1[Symbol.iterator]();
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

/* com while ITERATOR.NEXT() */
const arr2 = [5, 6, 7, 8, 9];
const it2 = arr2[Symbol.iterator]();

while (true) {
  let { value, done } = it2.next();
  if (done) {
    break;
  }
  console.log(value);
}

/* com ES6 agora é possivel iterar sem necessitar usar o symbols.iterator, 
foi introduzida o for ...of */
for (let value of arr2) {
  console.log(value);
}

const str = "Digital Innovation One";
for (let value of str) {
  console.log(value);
}

/* e tambem o spread operator */
const arr3 = [...arr2];

/* Symbols.Iterator nos objetos literais fica em objetos interaveis */
const obj = {
  values: [11, 34, 66, 89, 20, 33],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => {
        i++;
        return {
          value: this.values[i - 1],
          done: i > this.values.length,
        };
      },
    };
  },
};

const it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

/* objetos iteraveis com for ...of */
for (let value of obj) {
  console.log(value);
}

/*objetos iteraveis com spread operator para criar array */
const arr4 = [...obj];
for (let value of obj) {
  console.log(value);
}
