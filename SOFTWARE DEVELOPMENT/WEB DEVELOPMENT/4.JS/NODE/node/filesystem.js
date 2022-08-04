//* Módulo filesystem: Este módulo permite manipular archivos en el sistema operativo, es bastante importante porque cuando se esta trabajando con servidores se necesita interactuar con los archivos del sistema.

const fs = require('fs')

//*Tiene varios métodos pero los principales son


//*FESWRITEFILE 
// fs.writeFile('./texto.txt','Hola esto es una archivo desde el  modylo file system',(err)=>{
// if(err){
//     console.log(err)
// } else{
//     console.log(`Archivo creado`)
// }
// })

// fs.readFile('./archivo.txt', (err,data)=>{
//   if(err){
//     console.error(`El error encontrado fue ${err}`)
//   } else {
//     console.log(data.toString())
//   }
// })

//* Unlink
// fs.unlink('./archivo.txt', (err,data)=>{
//   if(err){
//     console.error(`El error encontrado fue ${err}`)
//   } else {
//     console.log("Se ha borrado el archivo")
//   }
// })

//* Try Catch: Cuando sepamos que una función puede ser propensa a caer en un error podemos meterla dentro de un try catch 

//*Error sincrono 
// function otraFuncion(){
//   serompe();
// }

// function serompe(){
//   return 3 + z
// }

// try {
//   otraFuncion();
// } catch(err){
//   console.error('Algo ha salido mal revisar')
//   console.log(err.message)
//   console.log('Pero no pasa nada lo hemos capturado')
// }




