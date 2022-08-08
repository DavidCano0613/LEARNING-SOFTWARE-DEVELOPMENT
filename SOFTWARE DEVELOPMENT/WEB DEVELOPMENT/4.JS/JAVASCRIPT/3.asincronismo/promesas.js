//* Promesas: 

// const hacerCompra = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       compras += "📦"
//       console.log(compras)
//       resolve();
//     },2000);
//   });
// }

// hacerCompra()
//   .then(() => hacerCompra())
//   .then(() => hacerCompra())

 
let desarrollo = new Promise((resolve,reject)=>{
  setTimeout(() => {
    let proyecto = "📦";
    if (!isNaN(proyecto)) {
      resolve(proyecto);
    } else {
      reject("No se ha podido crear el paquete");
    }
  },4000);
});
 
desarrollo
  .then((resultado_del_resolve) => console.log(resultado_del_resolve))
  .catch((resultado_del_reject) => console.log(resultado_del_reject))
  .finally(console.log("Ya la promesa dio un resultado por lo tanto se ejecuta"));

 

