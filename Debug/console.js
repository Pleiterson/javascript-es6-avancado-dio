/* Console */

console.log("Black text");
console.warn("Yellow text with alert");
console.error("Red error text");

//console.trace();

console.group("My group");
console.log("Info inside group");
console.log("More info inside group");
console.groupEnd("My group");

console.time("Log time");
setTimeout(() => {
  console.timeEnd("Log time");
}, 1000);

console.table(["Danilson Sanches", "Digital Innovation One"]);

console.assert(1 === 0, "Ops");

console.log("%c styled log", "color: blue; font-size: 40px;");
