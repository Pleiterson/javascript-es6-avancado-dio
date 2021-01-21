/* Enhanced Object Literals */

/* declarar um objeto literal tradicional */
const obj1 = {
  prop1: "Digital Innovation One",
  method1: function (params) {
    return "bem vindo ao " + params;
  },
};
console.log("\n");
console.log(obj1);
console.log(obj1.prop1);
console.log(obj1.method1(obj1.prop1));

/* uma outra forma de criar objetos literais, só que os parametros e valores tem nomes repetidos */
const prop2 = "Digital Innovation One";
const method2 = function (params) {
  return "bem vindo ao " + params;
};

const obj2 = {
  prop2: prop2,
  method2: method2,
};
console.log("\n");
console.log(obj2);
console.log(obj2.prop2);
console.log(obj2.method2(obj2.prop2));

/* no ES6 foi criado o short-end, para omitir propriedades, quando tem mesmo nome que parametro */
const obj3 = {
  prop2,
  method2,
};
console.log("\n");
console.log(obj3);
console.log(obj3.prop2);
console.log(obj3.method2("Paraiso"));

/* outra forma de short-end na função de ES6, ocultando  palavra function */
var obj4 = {
  sum(a, b) {
    return a + b;
  },
};
console.log("\n");
console.log(obj4);
console.log(obj4.sum(3, 5));
console.log(obj4.sum(6, 7));
console.log(obj4.sum(2, 3));