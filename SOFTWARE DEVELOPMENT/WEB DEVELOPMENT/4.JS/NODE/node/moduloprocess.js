//*PROCESOS EN NODE JS 
//*Que es un proceso? Un proceso es una operación que arranca un programa en el sistema , es decir en el ordenador. Process viene dentro de los modulos globales. 

//*Los usos más comunes del process
// console.log(process)

//*Matar un proceso: Esto sirve para matar ciertos procesos antes de que ocurran y luego matar el proceso. Se suele escuchar un evento y matar el proceso. 
// console.log("Hola")
// console.exit()
// console.log("Adios")

//*Da acceso a variables de entorno. Son variables dinamicas que alteran el funcionamiento en función de la maquina y el contexto en el que se este ejecutando un proceso. 
// console.log(console.env)

// process.on('beforeExit',()=>{
//   console.log("El proceso va a terminar")
// })

// //*exit hace que nos desconectemos del event loop.  
// process.on("exit",()=> {
//   console.log("El proceso acabó");
// });

// process.on('uncaughtException',(err,origen)=>{
//   console.log('Vaya se nos ha olvidado capturar un error')
//   console.log(err)
// })

// functionquenoexiste()

// console.log("Esto si el error no se ejecuta, sale")