//* Módulo del OS: El modulo de Node para OS me permite acceder a elementos de muy bajo nivel, y es útil en diferentes contextos.
const os = require('os')

//* Platform 
// console.log(os.platform())

//* Ultima versión de la plataforma en que se esta ejecutando
// console.log(os.release())

//*Muestra la memoria libre en bytes
// console.log("Free men: ", os.freemem())

//*
// console.log(os.totalmem())



//* Architecture
// console.log("Architecture:");
// console.log(os.arch());
// console.log("");

//* Platform
// console.log("Platform:");
// console.log(os.platform());
// console.log("");

//* Cpus
// console.log("cpus");
// console.log(os.cpus();
// console.log(os.cpus().length);
// console.log("");

//* Errores y señales del sistema
// console.log("Erros and signals of the system");
// console.log(os.constants);
// console.log("");

// *Function to convert from bytes to kbytes, mbytes and gbytes
// const SIZE = 1024;

// kb = (bytes) => {
//   return bytes / SIZE;
// };
// mb = (bytes) => {
//   return kb(bytes) / SIZE;
// };
// gb = (bytes) => {
//   return mb(bytes) / SIZE;
// };

//* Total Ram Memory
// console.log("Total Ram Memory:");
// console.log(`${os.totalmem()} bytes`);
// console.log(`${kb(os.totalmem)} kb`);
// console.log(`${mb(os.totalmem)} mb`);
// console.log(`${gb(os.totalmem)} gb`);
// console.log("");

//* Free memory we have in bytes units
// console.log("Free memory we have in kbytes units");
// console.log(`free Ram memory: ${os.freemem()} bytes`);
// console.log(`free Ram memory: ${kb(os.freemem())} kb`);
// console.log(`free Ram memory: ${mb(os.freemem())} mb`);
// console.log(`free Ram memory: ${gb(os.freemem())} mb`);
// console.log("");

//* Directory for the user root
// console.log("Directory for the user root");
// console.log(os.homedir());
// console.log("");

//* Directory for temporal files
// console.log("Directory for temporal files");
// console.log(os.tmpdir());
// console.log("");

//* Hostname of a server
// console.log("Hostname of any server");
// console.log(os.hostname());
// console.log("");

//* Actived Network interfaces right now
// console.log("Network Interfaces right now");
// console.log(os.networkInterfaces());
// console.log("");


//* Single Thread (process)
//* Este modulo es un objeto global que me permite acceder a cualquier lado, es un método que pertenece a la clase event emiter. 


// const singleThread = ()=>{
//   console.log('----------------------')
//   console.log(' EL PROCESO DE NODE JS')
//   console.log(`Id del proceso-------------${process.pid}`)
//   console.log(`Titulo del proceso----------------${process.title}`)
//   console.log(`Directorio de Node----------------${process.execPath}`)
//   console.log(`Directorio actual-----------------${process.cwd()}`)
//   console.log(`Versión de Node-------------${process.version}`)
//   console.log(`Versiones de dependencias------------${process.versions}`)
//   console.log(`Plataforma (S.O)----------------${process.platform}`)
//   console.log(`Arquitectura (S.O)---------------${process.arch}`)
//   console.log(`Tiempo activo de Node--------------${process.uptime()}`)
//   console.log(`Argumentos del proceso----------------${process.argv}`)
// }
// singleThread()



