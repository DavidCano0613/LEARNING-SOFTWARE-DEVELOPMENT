//*Callbacks: Son funciones que se pasan como argumento dentro de otras funciones y se ejecutan despues de que se complete alguna operación

//* 1) Callbacks sincronas

// (() => {
//   // function generaNumero(){
//   //   console.log(10)
//   // }
//   // function imprimeNumero(callback){
//   //   return callback()
//   // }
//   // imprimeNumero(generaNumero)
// })

// (() => {
//   //*Otro ejemplo
//   // function doStep1(init, callback) {
//   //     const result = init + 1;
//   //     callback(result);
//   //   }
//   //   function doStep2(init, callback) {
//   //     const result = init + 2;
//   //     callback(result);
//   //   }
//   //   function doStep3(init, callback) {
//   //     const result = init + 3;
//   //     callback(result);
//   //   }
//   //   function doOperation() {
//   //     doStep1(0, result1 => {
//   //       doStep2(result1, result2 => {
//   //         doStep3(result2, result3 => {
//   //           console.log(`result: ${result3}`);
//   //         });
//   //       });
//   //     });
//   //   }
//   //   doOperation();
// });

//*2) Callbacks asincronas

// (()=>{
//   // function bajaVideo(URL, callback) {
//   //   console.log("Bajando video de: ", URL);
//   //   setTimeout(function () {
//   //     console.log("Video de: ", URL, " descargado");
//   //     callback(URL);
//   //   }, 5000);
//   // }
//   // function procesaVideo(URL) {
//   //   console.log("Procesando video de:", URL);
//   // }
//   // let url = "https://www.youtube.com/watch?v=HgqNstf4xg0";
//   // bajaVideo(url, procesaVideo);
// })

// //*Callback hell
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


