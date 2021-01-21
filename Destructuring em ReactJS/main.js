/*  Destructuring em ReactJS  */

var arr = ["Apple", "Banana", "Orange"];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

/* com ES6 foi introduzida o Destructuring assignment  */
const [apple2, banana3, orange3] = ["Apple", "Banana", "Orange"];
console.log(apple, apple2);

/* objetos literais sem destructuring assignement */
var obj1 = {
  name: "Danilson Sanches",
  props: {
    age: 38,
    favoriteColors: ["Green", "Yellow"],
  },
};
var age1 = obj1.props.age;
console.log(age1);

//objetos literais com destructuring assignement
const [apple5] = arr;
const {
  props: {
    age: age2,
    favoriteColors: [color1, color2],
  },
} = obj1;
console.log(color1);
console.log(color2);

/*  destructuring assignement num array de objetos */
const arr1 = [{ name: "Apple", type: "Fruit" }];
console.log(arr1);

//pegar o nome da fruta sem destructuring
const fruit1 = arr1[0].name;
console.log(fruit1);

//pegar o nome da fruta com destructuring
const [{ name }] = arr1;
console.log(name);

//functions sem destructuring
function sum(arr) {
  return arr[0] + arr[1];
}
console.log(sum([1, 2]));

//functions com destructuring
function multiply([a, b]) {
  return a * b;
}
console.log(multiply([3, 2]));

//functions com destructuring e default value
function sub([a, b] = [2, 1]) {
  return a - b;
}
console.log(sub());
console.log(sub([7, 3]));

//objetos com destructuring e defualt value
function div({ a, b } = { a: 4, b: 2 }) {
  return a / b;
}
console.log(div());
console.log(div({ a: 15, b: 3 }));

let [one, two, three, four] = ['Digital', 'Innovation', 'One'];
console.log(four);