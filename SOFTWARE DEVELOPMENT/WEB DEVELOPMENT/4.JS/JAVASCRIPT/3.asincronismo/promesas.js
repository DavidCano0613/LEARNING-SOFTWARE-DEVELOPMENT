//* Promesas: 

let compras = "🛒";

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

const hacerCompra = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      compras += "📦"
      console.log(compras)
      resolve();
    },1000);
  });
}

hacerCompra()
  .then(() => hacerCompra())
  .then(() => hacerCompra())
  .then(() => hacerCompra())
  .then(() => hacerCompra())
  .then(() => hacerCompra())
  .then(() => hacerCompra())
 

