const { rejects } = require("assert");
const { resolve } = require("path");

/* Fetch-Async-Await-EventEmitter */
global.fetch = require("./node_modules/node-fetch");

fetch("https://viacep.com.br/ws/23080060/json")
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Request error");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("ERROR: ", err);
  });

/* fecth permite ter mais parametros */
fetch("https://viacep.com.br/ws/27910050/json", { method: "GET" })
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Request error");
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("ERROR: ", err);
  });

/* apartir de ES7, foi introduzido async / await */
const simpleFunc = async () => {
  return 12345;
};
simpleFunc()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

/* await para esperar que promise seja resolvida e depois disparar */
const asyncTimes = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Digital Innovation One");
    }, 1000);
  });

const strFunc = async () => {
  const data = asyncTimes();
  console.log(data);
  const dataJSON = await fetch(
    "https://viacep.com.br/ws/63160000/json"
  ).then((response) => response.json());
  return dataJSON;
};

strFunc()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

const strOutFunc = async () => {
  const data = Promise.all([
    asyncTimes(),
    fetch("https://viacep.com.br/ws/91120500/json").then((response) =>
      response.json()
    ),
  ]);
  return data;
};
strOutFunc()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
