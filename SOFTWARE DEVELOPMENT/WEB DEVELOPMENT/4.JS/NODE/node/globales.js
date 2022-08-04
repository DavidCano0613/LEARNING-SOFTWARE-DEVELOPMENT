//* Cuando se importa un modulo en node por lo general se almacenan en una constante y generalmente se declaran con el nombre del modulo en sí, con require es como se llama a los modulos en NODE

const isOdd = require("is-odd");

//* Globals: Basicamente son un monton de modulos que vienen en node js por defecto.

// console.log(window)
console.log(global); //! JAMAS HACER EN PRODUCCIÓN

//*setTimeOut 
// const timeout = setTimeout(() => {
//   console.log(`Hola esto es un setTimeOut`)
// },2000);

// console.log(timeout)

//* setInterval() and clearInterval()
// let i = 0;
// let intervalo = console.log(setInterval(() => {
//   `Hola mundo`
//   i++
//   if(i === 5)
//   clearInterval(intervalo)
// }, 2000))

// //* setImmediate
// setImmediate(()=>{
//   console.log(`Esto es un immediate`)
// })


// console.log(process) 
// console.log(__dirname)
// console.log(__filename)


console.log("Hola mundo")
