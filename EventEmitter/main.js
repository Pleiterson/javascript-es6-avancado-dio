/* EventEmitter tem que ser importado */
const EventEmitter = require("events");
const emitter = new EventEmitter();

/* consumir evento usa 'on'*/
console.log("\n--- CONSUMIR VARIOS UM EVENTO ---");
emitter.on("User logged", (data) => {
  console.log(data);
});

/* emitir eventos usa 'emit' */
emitter.emit("User logged", { user: "Danilson Sanches", sex: "M" });
emitter.emit("User logged", { user: "Karina Martins", sex: "F" });

/* extender a classe EventEmitter usar o 'extends' */
class Users extends EventEmitter {
  userLogged(data) {
    setTimeout(() => {
      /* emitir eventos usa 'emit' */
      this.emit("User logged", data);
    }, 2000);
  }
}
const users = new Users();

console.log("\n--- CONSUMIR APENAS UM EVENTO ---");
/* consumir evento apenas uma vez usa o 'once' */
users.once("User logged", (data) => {
  console.log(data);
});
users.userLogged({ user: "Izilda Kossy", sex: "F" });
users.userLogged({ user: "João dos Santos", sex: "M" });
