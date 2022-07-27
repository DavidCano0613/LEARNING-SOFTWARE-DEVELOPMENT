{
  //* 1.- Usar funciones expresadas con operadores ternarios para el retorno implícito
  // (Deja tu código simple, limpio y expresivo)
  //* 2.- Usar operadores ternarios concatenados e identados en lugar de if cuando este último no sea necesario.
  // (Al igual que el anterior es más fácil de leer y mantener)
  //* 3.- Hacer las validaciones necesarias al comienzo de una función y al final solucionar el problema.
  // (Deja la solución para el final y resuelve los posibles problemas primero con las validaciones)
  //* 4.- Define valores por defecto en los parámetros de una función
  // (Mantén el control de los parámetros y anticipate a posibles valores vacíos)
  //* 5.- Usar el 'return' en condicionales if y alinear en código cuando sea de una sola línea
  // (evitar las llaves si el código de la condición tiene una sola línea)
  //* 6.- Si tu condición if ya tiene un return es redundante añadir un else.
  // Evita anidar varios else if en una condición
  // (Hazlo simple y mantén el nivel sin utilizar tantos anidamientos en condiciones innecesarias)
}
//*=============================================================================================================
{
  //*EJERCICIO 1
  // Nota: Una función declarada hace un hoisting, recordar que js lo primero que lee son variables declarada con var y funciones declaradas, por lo cual se puede caer en malas practicas al usar las funciones declaradas.
  // function countcaracter(words = "") {
  //   if (!words) {
  //     console.warn("No ingresaste ninguna palabra");
  //   }else console.info(`La palabra "${words}" tiene ${words.length} carácteres`);
  // }
  // countcaracter("Hola Juan David");
  // countcaracter(prompt("Ingresa un texto"));
  // countcaracter(2);
  // countcaracter();
  //*Una forma de elegante de hacerlo
  // const Countcaracter = (word = "") =>
  //   (!word)
  //     ? console.warn("No ingresaste ninguna palabra")
  //     :(!isNaN(word))
  //     ?console.warn("Ingresaste un numero")
  //     :console.info(`La palabra "${word}" tiene ${word.length} caracteres`)
  // Countcaracter("");
  // Countcaracter("Necesito practicar");
  // Countcaracter(55);
  // Countcaracter();
  //
}
//*=============================================================================================================
{
  //* Ejercicio 2
  // const recortar = (cadena = "", longitud = undefined) =>{
  //   (!cadena)
  //     ? console.warn("No ingresaste ninguna palabra o no ingresas cuanto recortaras")
  //     :(!isNaN(cadena))
  //     ?console.warn("Ingresaste un número")
  //     :console.info(cadena.slice(1,longitud))
  // }
  // recortar("David y Daniela son novios", 1);
  // recortar("Hola david como estas", 10);
  // recortar(2,10);
  // recortar("Sami y milu");
  // recortar();
}
//*=============================================================================================================
{
  //* Ejercicio 3
  // const fseparadora = (cadena = "", separador = undefined) =>
  //   (!cadena)
  //     ?console.warn("No ingresaste ninguna palabra")
  //     :(separador === undefined)
  //       ? console.warn("No ingresaste ningun separador")
  //       :(!isNaN(cadena))
  //         ?console.error("Ingresaste un numero")
  //         :console.info(cadena.split(separador))
  // fseparadora();
  // fseparadora(25,2);
  // fseparadora("Voy a estudiar en el sena");
  // fseparadora("Voy a estudiar en el sena", "");
  // fseparadora("Voy a estudiar en el sena", " ");
}
//*=============================================================================================================
{
  //*EJERCICIO 4
  // const frepetidora = (Texto =String, veces = undefined)=>{
  //     if(!Texto) return console.error("No ingresaste ningun texto")
  //     if (veces === undefined) return console.error("No ingresaste el numero de veces")
  //     if (veces === 0) return console.error("No puedes repetir algo 0 veces");
  //     if (Math.sign(veces) === -1 ) return console.error("No se puede repetir algo negativo")
  //     for(let i=1; i <= veces; i++){
  //         console.info(`${Texto}, ${i}`)
  //   }
  // }
  // frepetidora("Hola david",5)
  // frepetidora()
  // frepetidora("Hola",0)
  // frepetidora("HOLA",-20)
}
//*=============================================================================================================
{
  //*EJERCICIO 5
  // const invertirCadena = (cadena ="") => {
  // 	(!cadena)
  // 	?console.warn(`No ingresaste una cadena`)
  // 	:console.info(cadena.split("").reverse().toString())
  // }
  // invertirCadena("Hola Juan David")
  // invertirCadena("Que mas como estas")
  // invertirCadena()
}
//*=============================================================================================================
{
  //* EJERCICIO 6
}
//*=============================================================================================================
{
  //* EJERCICIO 7
  // const palindromo = (palabra = "") => {
  //   if (!palabra) return console.warn("No ingresaste una palabra o frase");
  //   palabra = palabra.toLowerCase();
  //   let alReves = palabra.split("").reverse();
  //   return palabra == alReves
  //     ? console.info(`${palabra} es palindroma`)
  //     : console.info(`${palabra} no es palindroma`);
  // };
  // palindromo("ANA")
  // palindromo()
  // palindromo("Hello world")
}
//*=============================================================================================================
//* EJERCICIO 8

// const e = (texto ="",patron="")=>
//   (!texto)
//    ? console.warn("No ingresaste un texto")
//   :(!patron)
//     ? console.warn("No ingresaste un patrón de carácteres")
//     : console.info(texto.replace(new RegExp(patron,"ig"),""))

// e("xyz1,xyz2,xyz3","xyz")

//*=============================================================================================================
//* EJERCICIO 9

// const randomNumber = () =>{
//   console.log((Math.random()*100)+500)
// }
// randomNumber()

// const capicua = (num = 0) =>{
//   if (!num) return console.warn(`No ingresaste un número`);
//   if (typeof num !== "number") return console.error(`${num} NO es un número`)

//   num = num.toString();
//   let reves = num.split("").reverse().join("")

//   return(num === reves)
//   ?console.info(`${num} es un capicua`)
//   :console.info(`${num} no es un capicua`)

// }

// capicua(22);
// capicua(24);

//*=============================================================================================================
//* EJERCICIO 10

// const factorial = (numero)=>{
// if(numero === undefined)return console.warn(`No ingresaste ningun número`)
// if(typeof numero !== "number") return console.warn(`No ingresaste un tipo de dato numerico`)
// if(numero === 0)return console.warn(`No puedes ingresar cero`)
// if(numero <1)return console.warn(`No puedes ingresar un número negativo`)

// let factorial = 1

// for(let i=numero; i>1; i--){
//   factorial*=i;

// }
// return console.info(`El factorial de ${numero} es ${factorial}`)
// }

// factorial(5)
// factorial(0)
// factorial(-2)
// factorial("Hola")
// factorial()

//*=============================================================================================================

//* Ejercicios bucles y arrays

// const sumaNumeros = ()=>{
//   const SUMAS = [];
//   SUMAS.forEach((elemento,indice) => {
//     let resultado = 0
//     prompt(`Ingresa un número para la posición ${indice}`)
//     if(elemento === isNaN) return alert("No ingresaste un tipo de dato númerico")
//     if (elemento === undefined) return alert("No ingresaste nada")
//     resultado = resultado+elemento;
//     console.log(`El resultado de la suma es: ${resultado}`)
//   })
// }

// sumaNumeros()

// let acumulador = 0
// for(let i = 1; i<=10; i++){
//   let numeroRecibido = parseFloat(prompt(`Ingrese un numero para la posición ${i}`))
//   acumulador = acumulador + numeroRecibido
// }
// document.write(`La suma de los 10 numero recibidos es de: ${acumulador}`)

// const array=[]
// const funcion = (longitudArreglo = prompt("Ingrese la longitud del arreglo"))=>{

//   if (longitudArreglo === undefined) return console.error(`No ingresaste la longitud del arreglo`)
//   if (isNaN(longitudArreglo)) return console.error(`Ingresaste un cadena de texto`)
//   if (isNaN(longitudArreglo)) return console.error(`Ingresaste un cadena de texto`)
//   for(let i = 0; i <= longitudArreglo; i++){
//     let numero = parseFloat(prompt(`Ingrese un número ${i}`))
//     if (numero === undefined) return console.error(`No ingresaste nada`)
//     if (isNaN(numero)) return console.error(`No ingresaste un dato númerico`)
//     array[i] = numero;
//   }
// }

// funcion()

//*=============================================================================================================

//*Ejercicios digital house

//*Edad 21
// const edad = (age) => {
//   if(age >= 100 || age < 1 ){
//     console.error("Invalida");
//   } else{
//     if (age >= 21) {
//       console.log("Felicidades por llegar a la mayoria de edad");
//     }
//     if (age < 18) {
//      console.warn("Eres menor bro lo siento no puedes entrar vete a dormir");
//     }
//     if (age % 2 !== 0) {
//       console.log("Sabias que tu edad es impar");
//     }
//   }
// };

// edad(21);
// edad(28);
// edad(16);
// edad(17);
// edad(0);
// edad(400)

//*Total a pagar
// const totalAPagar = (vehiculo,litrosConsumidos) => {
//   let consumoVehiculo = 0;
//   let añadirCuenta = 0;
//   let totalAPagar = 0;
//   if(vehiculo === "coche"){
//   consumoVehiculo = 86;
//   }
//   if(vehiculo === "moto"){
//   consumoVehiculo = 70;
//   }
//   if(vehiculo === "autobus"){
//   consumoVehiculo = 55;
//   }
//   if(litrosConsumidos >= 0 && litrosConsumidos <=25){
//     añadirCuenta = 50;
//   }
//   if(litrosConsumidos >25){
//     añadirCuenta = 25;
//   }
//   totalAPagar = litrosConsumidos*consumoVehiculo+añadirCuenta;
//   return console.log(`El total a pagar es de: ${totalAPagar}`)
// }

// totalAPagar("coche",74)
// totalAPagar("coche",20)
// totalAPagar("moto",54)
// totalAPagar("moto",21)
// totalAPagar("autobus",26)

//*Sandwiches
// const tiendaSandwiches = (
//   basePan,
//   pan,
//   queso = false,
//   tomate = false,
//   lechuga = false,
//   cebolla = false,
//   mayonea = false,
//   mostaza = false

// ) => {
//   let base = 0,
//     tipoPan = 0,
//     adiciones = 0,
//     totalPagar = 0,
//     totalAdiciones = 0
//   switch (basePan) {
//     case "Pollo":
//       base = 150;
//       break;
//     case "Carne":
//       base = 150;
//       break;
//     case "Veggie":
//       base = 150;
//       break;
//     default:
//       console.log("Base invalida")
//       break;
//   }
//   switch (pan) {
//     case "Blanco":
//       tipoPan = 50;
//       break;
//     case "Negro":
//       tipoPan = 60;
//       break;
//     case "Sin gluten":
//       tipoPan = 75;
//       break;
//     default:
//       console.log("Base invalida")
//       break;
//   }
//   if(queso){
//     adiciones = 20
//     totalAdiciones = totalAdiciones + adiciones
//   }
//   if(tomate){
//     adiciones = 15
//     totalAdiciones = totalAdiciones + adiciones

//   }
//   if(lechuga){
//     adiciones = 10
//     totalAdiciones = totalAdiciones + adiciones

//   }
//   if(cebolla){
//     adiciones = 15
//     totalAdiciones = totalAdiciones + adiciones

//   }
//   if(mayonea){
//     adiciones = 5
//     totalAdiciones = totalAdiciones + adiciones

//   }
//   if(mostaza){
//     adiciones = 5
//     totalAdiciones = totalAdiciones + adiciones

//   }
//   totalPagar = base+tipoPan+totalAdiciones;
//   return console.log(`El total a pagar es: ${totalPagar}`)

// };

// tiendaSandwiches("Pollo","Negro",true,true)

//*Extra bonus

// const randomNumber = (numero) => {
//   let random = Math.round((Math.random()*10))
//   if(numero === random){
//    return `Felicidades has adivinado el numero`
//   }else{
//      return `!Animos! el numero ingresado: ${numero} el que era ${random}`;
//   }
// }

// console.log(randomNumber(3));

// const openParachute = (speed,height) =>{
//   if(speed < 1000 && (height >2000 && height<3000)){
//     return `You can open the Parachute`
//   }
//   return `You can't open the Parachute`;

// }
// console.log(openParachute(900,2400))

//*CICLOS
// const numeros = (numero) =>{
//   for (let i = 0; i<=10; i++) {
//         console.log(numero+i)
//   }
// }
// numeros(15)

// const cincoYveinte = () =>{
//   for (let i = 5; i <= 20; i += 3) {
//     console.log(i)

//   }
// }

// cincoYveinte()

// const sumatoria = () =>{
//   let acum = 0
//   for (let i = 0; i <= 100; i++) {
//     acum = acum + i
//   }
//   console.log(acum)
// }
// sumatoria()

//*Arrays ejercicios digital house

// let peliculas = []
// let calificaciones = []

// const guardarPelicula = () => {
//     let longitud = prompt("Type the length: ")
//     for(let i = 0; i < longitud; i++){
//         let pelicula = prompt("Type a movie: ").toUpperCase()
//         peliculas.push(pelicula)
//     }
//     console.log(peliculas)
// }

// const $agregarPelicula = document.getElementById("agregar");
// $agregarPelicula.addEventListener("click",guardarPelicula);

// const eliminarPelicula = () => {
//      let peliculaEliminada = peliculas.pop()
//      console.log(peliculaEliminada)
// }

// const $quitarPelicula = document.getElementById("quitar");
// $quitarPelicula.addEventListener('click', eliminarPelicula);

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// const compareScores = (array1,array2) => {
//     for(let i = 0; i < array2.lenght; i++){
//         (array1[i] === array2[i])
//         ? console.log(`La pelicula tiene la misma calificación en europa y asia`)
//         : console.log(`La pelicula tiene una calificación diferente`)

//     }
// }

// compareScores(asiaScores,euroScores)

//*Array inverso
// const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arregloInverso = arreglo.reverse();
// console.log(arreglo);
// console.log(arregloInverso);

//*Ejercicios de objetos

//la lista de clientes.

// let arrayCuentas = [
//   {
//     nroCuenta: 5486273622,
//     tipoDeCuenta: "Cuenta Corriente",
//     saldoEnPesos: 27771,
//     titularCuenta: "Abigael Natte",
//   },
//   {
//     nroCuenta: 1183971869,
//     tipoDeCuenta: "Caja de Ahorro",
//     saldoEnPesos: 8675,
//     titularCuenta: "Ramon Connell",
//   },
//   {
//     nroCuenta: 9582019689,
//     tipoDeCuenta: "Caja de Ahorro",
//     saldoEnPesos: 27363,
//     titularCuenta: "Jarret Lafuente",
//   },
//   {
//     nroCuenta: 1761924656,
//     tipoDeCuenta: "Cuenta Corriente",
//     saldoEnPesos: 32415,
//     titularCuenta: "Ansel Ardley",
//   },
//   {
//     nroCuenta: 7401971607,
//     tipoDeCuenta: "Cuenta Unica",
//     saldoEnPesos: 18789,
//     titularCuenta: "Jacki Shurmer",
//   },
// ];

//*Ejercicio programa

//*Declaración de arrays y variables
// let edades = [11,12,15,18,25,22,10,33,18,5]
// let menoresA18 = []
// let mayoresA18 = []
// let igualesA18 = []
// let arrayCon1Sumado = []
// let promedioEdades = 0
// let acumuladoEdades = 0
// let edadMinimaArray;
// let maxArray

// //*Función que valida
// const validarArreglo = (edades)=>{
//   for (let i=0; i <= edades.length-1; i++) {

//     //*Esta variable guarda cada elemento del array que va recorriendo el for
//     let posicion = edades[i]

//     //*AcumuladoEdades acumula cada elemento del array edades
//     acumuladoEdades = acumuladoEdades + edades[i];

//     arrayCon1Sumado.push(edades[i]+1)

//     if (posicion < 18) {
//       menoresA18.push(posicion);
//     }

//     else if(posicion >= 18 ){
//       mayoresA18.push(posicion);
//     }

//     else if(posicion === 18){
//       igualesA18.push(posicion)
//     }

//   }

//   //*Math tiene métodos para trabajar con matematicas en JavaScript, edadMinima y max se les pasa el arreglo con el spread operator y calcula el maximo y el edadMinimaimo del array
// edadMinimaArray = Math.min(...edades)
// maxArray = Math.max(...edades)

// promedioEdades = acumuladoEdades / edades.length;

//   //*Impresión por consola de las soluciónes.
//   console.log(`Array de las edades menores a 18: ${menoresA18}`);
//   console.log(`Array de las edades mayores o iguales a 18: ${mayoresA18}`);
//   console.log(`Array de las edades iguales a 18: ${igualesA18}`);
//   console.log(`El valor edadMinimaimo del arreglo edades: ${edadMinimaArray}`);
//   console.log(`El valor maximo del arreglo edades: ${maxArray}`);
//   console.log(`El promedio de las edades es de: ${promedioEdades}`);
//   console.log(`El array sumado con 1 es: ${arrayCon1Sumado}`);

//}

//*LLamado a la función.
// validarArreglo(edades)

//*Cuentas
// const arrayCuentas = [
//   {
//     titular: "Arlene Barr",
//     estaHabilitada: false,
//     saldo: "$3.253.40",
//     edadTitular: 33,
//     tipoCuenta: "sueldo",
//   },

//   {
//     titular: "Roslyn Torres",
//     estaHabilitada: false,
//     saldo: "$3.229.45",
//     edadTitular: 27,
//     tipoCuenta: "sueldo",
//   },

//   {
//     titular: "Cleo Lopez",
//     estaHabilitada: true,
//     saldo: "$1.360.19",
//     edadTitular: 34,
//     tipoCuenta: "corriente",
//   },
//   {
//     titular: "Daniel Malone",
//     estaHabilitada: false,
//     saldo: "$3.627.12",
//     edadTitular: 30,
//     tipoCuenta: "sueldo",
//   },
//   {
//     titular: "Ethel Leon",
//     estaHabilitada: true,
//     saldo: "$1.616.52",
//     edadTitular: 34,
//     tipoCuenta: "sueldo",
//   },
//   {
//     titular: "Harding Mitchell",
//     estaHabilitada: true,
//     saldo: "$1.408.68",
//     edadTitular: 25,
//     tipoCuenta: "corriente",
//   },
// ];

//* El método filter de los arrays recorre el array por cada elemento (por cada objeto en este caso) verifica una condición y si esta se cumple retorna un nuevo array con los elementos (ojetos en este caso) que cumplen la condición

//*Para encontrar el más joven se puede usar el método array.reduce() sin embargo para este caso se puede usar el tipico for

// const validaciones = (array) => {

//   let lessThan30 = array.filter((elemento) => elemento.edadTitular < 30);
//   let moreThan30 = array.filter((elemento) => elemento.edadTitular >= 30);
//   let equalTo30 = array.filter((elemento) => elemento.edadTitular === 30);
//   let eachTypeOfAccount = array.map((elemento) => elemento.tipoCuenta)
//   let enabled = array.filter((elemento) => elemento.estaHabilitada === true )
//   let disabled = array.filter((elemento) => elemento.estaHabilitada === false);

//   let edadMinima = arrayCuentas[0].edadTitular
//   let saldoMinimo = arrayCuentas[0].saldo
//   let saldoMaximo = arrayCuentas[0].saldo
//   let objetoedadminima;

// for(let i = 0; i < arrayCuentas.length; i++){

//   if(edadMinima > arrayCuentas[i].edadTitular){
// edadMinima = arrayCuentas[i].edadTitular
//     objetoedadminima = arrayCuentas[i]
//   }

//   if(saldoMinimo > arrayCuentas[i].saldo){
//     saldoMinimo = arrayCuentas[i].saldo
//   }

//   if(saldoMaximo < arrayCuentas[i].saldo){
//     saldoMaximo = arrayCuentas[i].saldo
//   }
// }

// console.log(edadMinima)
// console.log(objetoedadminima)
// console.log(`El saldo minimo es de: ${saldoMinimo}`)
// console.log(`El saldo maximo es de: ${saldoMaximo}`)

//   console.log(lessThan30)
//   console.log(moreThan30)
//   console.log(equalTo30)
//   console.log(eachTypeOfAccount)
//   console.log(enabled)
//   console.log(disabled)

// }

// validaciones(arrayCuentas)

//*Ejercicio 1
// const numeroDoble = (numero) =>{
//   return numero*2
// }
// console.log(numeroDoble(4))

// const multiplicacion = (num1,num2)=>{
//   return num1*num2
// }
// console.log(multiplicacion(5,10))

// const division = (num1,num2) =>{
//   if(num1 === 0 || num2 ===0){
//     console.error("No es posible dividir entre 0")
//   } else{
//     return num1/num2
//   }
// }

// console.log(division(450,15))
// console.log(division(0,0))
// console.log(division(0,5))
// console.log(division(3,0))

//*Ejercicio 2
// let ciclista = {
//   nombre:"Maria Daniela",
//   apellido:"Muñoz Palacio",
//   edad:17,
//   tieneBici:true
// }

//* !Adicional! , función que llena el objeto
// let ciclista = {
//   nombre: null,
//   apellido: null,
//   edad: null,
//   tieneBici: null
// }

// const llenarobjeto=(objeto,nombre,apellido,edad,tieneBicicleta)=>{
//   objeto.nombre = nombre;
//   objeto.apellido = apellido;
//   objeto.edad = edad;
//   objeto.tieneBici = tieneBicicleta;

// }

// llenarobjeto(ciclista,"Daniela","Muñoz",17,true)

// const montarBici=(objeto)=>{
//   if(objeto.edad >= 18 && objeto.tieneBici === true){
//     return 'Puede competir'
//   }
//   else if(objeto.edad < 18 && objeto.tieneBici === true){
//     return 'Puede competir, pero con un adulto acompañante'
//   }
//   else{
//     return 'No puede competir'
//   }
// }

// console.log(montarBici(ciclista))

//*Ejercicio 3

// let competidores = [];

// let competidor1 = {
//   nombre: "Juan",
//   edad: 42,
//   kilometrosRecorridos: 80,
// };
// let competidor2 = {
//   nombre: "Sofia",
//   edad: 22,
//   kilometrosRecorridos: 90,
// };
// let competidor3 = {
//   nombre: "Maria",
//   edad: 45,
//   kilometrosRecorridos: 70,
// };

//*Arreglo antes de ser llenado con los objetos
// console.log(competidores)

//*Arreglo despues de ser llenado con los objetos
// competidores.push(competidor1,competidor2,competidor3)
// console.log(competidores)

//*Adicional: Funcion que agrega objetos al arreglo
// const agregarCompetidor=(competidor)=>{
//   competidores.push(competidor)
// }

// let competidor4 = {
//   nombre: "Denila",
//   edad: 27,
//   kilometrosRecorridos: 80,
// };

// agregarCompetidor(competidor4)
// console.log(competidores)

//*Función que agrega 100km a cada objeto
// const competencia100Km = (array)=>{
//   for(let i = 0; i < array.length; i++ ){
//     array[i].kilometrosRecorridos += 100;
//   }
//   console.log(competidores)
// }

// competencia100Km(competidores)

//*ALGORITMOS

//*Fizz 2 formas de hacerlo.

//*1

// const algoritmoFizz = () => {
//   for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0) {
//       console.log(`${i} Fizz`);
//       continue;
//     }
//     if (i % 5 === 0) {
//       console.log(`${i} Buzz`);
//       continue;
//     }
//     if (i % 15 === 0) {
//       console.log(`${i} FizzBuzz`);
//       continue;
//     } else {
//       console.log(i);
//     }
//   }
// };

//*2

// let i = 0;

// while (i < 100) {
//   i++;
//   if (i % 3 === 0) {
//     console.log(`${i}Fizz`);
//     continue;
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`);
//     continue;
//   } else if (i % 15 === 0) {
//     console.log(`${i} FizzBuzz`);
//     continue;
//   } else {
//     console.log(i);
//   }
// }

//*2

// const indiceArreglo = (array,indice) => {
//     return array[indice]
// }

// let arreglo = [1, "cadena", false, {}, 345];
// let indice = 3

// console.log(funcion(arreglo,indice))
// console.log(funcion([234,"Hola mundo",false,["Otro array"],{name:"objeto"}],4))

//*3

// const diasMes = (mes) => {
//     switch (mes) {
//         case 1:
//             return `El mes ${mes} tiene 31 dias`

//         case 2:
//             return `El mes ${mes} tiene 28 dias`;

//         case 3:
//             return `El mes ${mes} tiene 31 dias`;
//         case 4:
//             return `El mes ${mes} tiene 30 dias`;
//         case 5:
//             return `El mes ${mes} tiene 31 dias`;
//         case 6:
//             return `El mes ${mes} tiene 30 dias`;
//         case 7:
//             return `El mes ${mes} tiene 31 dias`;
//         case 8:
//             return `El mes ${mes} tiene 31 dias`;
//         case 9:
//             return `El mes ${mes} tiene 30 dias`;
//         case 10:
//             return `El mes ${mes} tiene 31 dias`;
//         case 11:
//             return `El mes ${mes} tiene 30 dias`;
//         case 12:
//             return `El mes ${mes} tiene 31 dias`;

//         default:
//             break;
//     }
// }

// console.log(diasMes(4))
// console.log(diasMes(2))
// console.log(diasMes(10))

//*Otra forma

// const mesDias = (mes) => {
//     if(mes === 2) return `El mes ${mes} tiene 28 dias`;
//     if(mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12 ) return `El mes ${mes} tiene 31 dias`;
//     if(mes === 4 || mes === 6 || mes === 9 || mes === 11) return `El mes ${mes} tiene 30 dias`
//     return
// }

// console.log(mesDias(2))
// console.log(mesDias(12))
// console.log(mesDias(6))
// console.log(mesDias(5))
// console.log(mesDias(9))

//*4
// const reverseNumber = (n) =>{
//     let convertedNumber = n.toString().split("").reverse().join("")
//     return parseInt(convertedNumber)
// }

// console.log(reverseNumber(1234))

//*5

// const array = [
//   3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99,
//   100,
// ];
// const repetidos = [];

// const repetidosArray = (arreglo) => {
//   for (let i = 0; i < arreglo.length; i++) {
//     for (let j = i+1; j < arreglo.length; j++) {
//       if (arreglo[i] === arreglo[j]) {
//         repetidos.push(arreglo[j]);
//       }
//     }
//   }
//   return repetidos
// };

// console.log(repetidosArray(array));

//*PARCIAL 2 IMPERATIVA

//*
//*
//*

let paises = [
  {
    nombre: "Argentina",
    continente: "Sudamerica",
    copaMundial: true,
  },
  {
    nombre: "Colombia",
    continente: "Sudamerica",
    copaMundial: false,
  },
  {
    nombre: "Uruguay",
    continente: "Sudamerica",
    copaMundial: true,
  },
  {
    nombre: "Chile",
    continente: "Sudamerica",
    copaMundial: false,
  },
  {
    nombre: "Brasil",
    continente: "Sudamerica",
    copaMundial: true,
  },
  {
    nombre: "Suiza",
    continente: "Europa",
    copaMundial: false,
  },
  {
    nombre: "España",
    continente: "Europa",
    copaMundial: true,
  },
  {
    nombre: "Suecia",
    continente: "Europa",
    copaMundial: false,
  },
  {
    nombre: "Francia",
    continente: "Europa",
    copaMundial: true,
  },
];

//*Ejercicio 1

// function buscarCampeon (array,continente){
//   let campeonesDelMundo = [];
//   for(let i = 0; i < array.length; i++){
//     if(array[i].continente === continente && array[i].copaMundial === true){
//       campeonesDelMundo.push(array[i])
//     }
//   }
//   return campeonesDelMundo;
// }

// console.log(buscarCampeon(paises,"Europa"))

//*Ejercicio 2
let numeros = [10, 16, 140, 3, 7, 201, 5, 44, 57, 53];

function bubleSort(array, tipoDeOrden) {
  let aux;
  if (tipoDeOrden === "ASC") {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j + 1] < array[j]) {
          aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
        }
      }
    }
  } else if (tipoDeOrden === "DESC") {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j + 1] > array[j]) {
          aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
        }
      }
    }
  } else {
    return `Párametro invalido`;
  }
  return array;
}

console.log(numeros);
console.log(bubleSort(numeros, "ASC"));

//*Ejercicio 3
let matriz = [
  [15, 4, 31],
  [22, 8, 34],
  [42, 7, 27],
  [33, 2, 54],
  [21, 1, 35],
];

function recorrerColumna(matriz) {
  for(let i = 0; i < matriz.length; i++) {
    matriz[i][1] = matriz[i][1] * 2;
  }
  return matriz;
}

// console.log(recorrerColumna(matriz))

function multiplos(matriz) {
  let acum = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] % 3 === 0 && matriz[i][j] % 2 !== 0) {
        acum = acum + matriz[i][j];
      }
    }
  }
  return acum;
}

console.log(multiplos(matriz))
