/* Callbacks e Promises */

/* antigamento no javascript, era comum usar o callback para realizar uma determinada tarefa 
assincrona depois de ter sido executada  */
function doSomeThing(callback) {
  setTimeout(function () {
    //did something
    callback("First Data");
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function () {
    //did something
    callback("Second Data");
  }, 1500);
}

/* tratamento de erro com try-catch */
function addAll() {
  try {
    doSomeThing(function (data1) {
      let processedDate1 = data1.split("");
      try {
        doOtherThing(function (data2) {
          let processedDate2 = data2.split("");

          try {
            setTimeout(function () {
              console.log(processedDate1, processedDate2);
            }, 1000);
          } catch (err) {
            //handle error
            throw new Error(err);
          }
        });
      } catch (err) {
        //handle error
        throw new Error(err);
      }
    });
  } catch (err) {
    //handle error
    throw new Error(err);
  }
}

addAll();

/* re-escrever o codigo anterior com Promise no ES6 */
const doSomeThingPromise = new Promise((resolve, reject) => {
  try {
    setTimeout(function () {
      //did something
      resolve("First Data");
    }, 1600);
  } catch (error) {
    throw new Error("ERROR PROMISE doSomeThingPromise:" + error);
  }
});

const doOtherThingPromise = new Promise((resolve, reject) => {
  try {
    setTimeout(function () {
      //did something
      resolve("Second Data");
    }, 2000);
  } catch (error) {
    throw new Error("ERROR PROMISE doOtherThingPromise:" + error);
  }
});

/* promisse pendent -> quando ainda está para ser executado */
console.log(doSomeThingPromise);
console.log(doOtherThingPromise);

/* promisse fullfiled com uso de 'then(<função_anonima>) -> quando já foi executado com sucesso */
doSomeThingPromise.then((data) => console.log(data));
doOtherThingPromise.then((data) => console.log(data));

/* promisse fullfiled com then e tratamento de erro usando 'catch(<função) */
doSomeThingPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

doOtherThingPromise
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/* Encadeamento de uma promise na outra promise */
doSomeThingPromise
  .then((data) => {
    console.log(data);
    return doOtherThingPromise;
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

/* criar uma função anonima que retorna um novo promise */
var promise1 = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(function () {
        //did something
        resolve("Third Data");
      }, 1100);
    } catch (error) {
      throw new Error("ERROR PROMISE 1:" + error);
    }
  });

var promise2 = () =>
  new Promise((resolve, reject) => {
    try {
      setTimeout(function () {
        //did something
        resolve("Fourth Data");
      }, 1000);
    } catch (error) {
      throw new Error("ERROR PROMISE 2:" + error);
    }
  });

promise1()
  .then((data) => {
    console.log(data.split(""));
    return promise2();
  })
  .then((data) => console.log(data.split("")))
  .catch((error) => console.log(error));

/* executar promisse em paralelo 'Promise.all([<promisses>])' */
Promise.all([promise1(), promise2(), doSomeThingPromise, doOtherThingPromise])
  .then((data) => {
    console.log(data[0].split(""));
    console.log(data[1].split(""));
    console.log(data[2].split(""));
    console.log(data[3].split(""));
  })
  .catch((data) => console.log(data));

/*multiplas promises e a que resolver primeiro usa o Promise.race([<promisses>]) */
Promise.race([promise1(), promise2(), doSomeThingPromise, doOtherThingPromise])
  .then((data) => {
    console.log(data[0].split(""));
    console.log(data[1].split(""));
    console.log(data[2].split(""));
    console.log(data[3].split(""));
  })
  .catch((data) => console.log(data));
