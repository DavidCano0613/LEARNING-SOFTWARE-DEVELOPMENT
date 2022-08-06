//*Callbacks: Son funciones que se pasan como argumento dentro de otras funciones y se ejecutan despues de que se complete alguna operación

//* 1) Callbacks sincronas

(() => {
  // function generaNumero(){
  //   console.log(10)
  // }
  // function imprimeNumero(callback){
  //   return callback()
  // }
  // imprimeNumero(generaNumero)
})(() => {
  //*Otro ejemplo
  // function doStep1(init, callback) {
  //     const result = init + 1;
  //     callback(result);
  //   }
  //   function doStep2(init, callback) {
  //     const result = init + 2;
  //     callback(result);
  //   }
  //   function doStep3(init, callback) {
  //     const result = init + 3;
  //     callback(result);
  //   }
  //   function doOperation() {
  //     doStep1(0, result1 => {
  //       doStep2(result1, result2 => {
  //         doStep3(result2, result3 => {
  //           console.log(`result: ${result3}`);
  //         });
  //       });
  //     });
  //   }
  //   doOperation();
});

//*2) Callbacks asincronas

// function bajaVideo(URL, callback) {
//   console.log("Bajando video de: ", URL);
//   setTimeout(function () {
//     console.log("Video de: ", URL, " descargado");
//     callback(URL);
//   }, 5000);
// }

// function procesaVideo(URL) {
//   console.log("Procesando video de:", URL);
// }

// let url = "https://www.youtube.com/watch?v=HgqNstf4xg0";

// bajaVideo(url, procesaVideo);

//*Callback hell

// let compras = "🛒";

// function hacerCompra(callback) {
//   setTimeout(() => {
//     compras += "📦";
//     callback();
//   }, 3000);
// }

// hacerCompra(function () {
//   console.log(compras);
//   hacerCompra(function () {
//     console.log(compras);
//     hacerCompra(function () {
//       console.log(compras);
//       hacerCompra(function () {
//         console.log(compras);
//         hacerCompra(function () {
//           console.log(compras);
//           hacerCompra(function () {
//             console.log(compras);
//           });
//           hacerCompra(function () {
//             console.log(compras);
//           });
//           hacerCompra(function () {
//             console.log(compras);
//             hacerCompra(function () {
//               console.log(compras);
//             });
//           });
//         });
//       });
//     });
//   });
// });

//*Una promesa es un objeto especial de JavaScript que permite crear operaciones asincronas. Las promesas lo que hacen es crear algo que en el futuro se va a saber y el resultado de esto puede ser que haya salido bien o mal.

//Las promesas se pueden descomponenr de la siguiente forma:

//Acciones = Código asincrono
//Consumidor = El código que espera el resultado de esa operación asincrona, en otras palabras el resultado de la promesa
//Resultado = Resulta o Rechazada

//Por un lado las promesas tienen una propiedades internas las cuales son pendiente, resulta o rechazada.

//Estas propiedades son callbacks que se llaman cuando se cumpla o se rechace la promesa

// Una promesa solo tiene un tipo de resultado y una vez se resuleve o se rechaza se acabo, es decir solo se resuelve una o solo se rechaza una vez, por lo tanto se debe tener cuidado y usar estas propiedades una sola vez.

//Por otro lado tienen unos métodos los cuales son then y catch estos pueden entenderse como el consumidor es decir es el que sufre las consecuencias del resultado de esa promesa(recordando que esta puede ser satisfactoria o no)

// Then se ejecuta cuando el resultado de la promesa es positivo (recibe el resultado del resolve) y Catch se ejecuta cuando es negativo (recibe el resultado del reject)

//Las promesas reciben una función como parametro y dentro del cuerpo de esta estan las acciones.

// let desarrollo = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     let proyecto = "📦";
//     if (isNaN(proyecto)) {
//       resolve(proyecto);
//     } else {
//       reject("No se ha podido crear el paquete");
//     }
//   },4000);
// });
 
// desarrollo
//   .then((proyecto) => console.log(proyecto))
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally("Ya la promesa dio un resultado por lo tanto se ejecuta");

 
