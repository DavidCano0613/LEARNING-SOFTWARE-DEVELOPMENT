//* JSON: JavaScript Object Notation.
//* JavaScript Object Notation o Notación de Objetos de JavaScript, es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos, mientras que para las máquinas es fácil de interpretar y generar. Todos los lenguajes de programación lo soportan y su uso es se ha convertido en un estandar para la transmición de datos por medio de una API. Antes de Json era muy usado XML hoy en día esta muerto. JSON no es exclusivo de javascript si no que puede ser usado en todos los lenguaje de programación. 

//* Sintaxis de JSON:
// Los datos deben estar agrupados dentro de llaves {}
//Los datos se escriben como pares de nombre valor "nombre" : "valor".
// Todas las claves deben ir en dobles comillas.
// La clave siempre debe tener  un valor, así sea null.
// Los datos están separados por comas.
// El ultimo elemento no puede llevar coma. 


//* Valores que acepta el formato JSON:
// Un Number (entero o de coma flotante).
// Un String (entre comillas dobles).
// Un Boolean (verdadero o falso).
// Un Array (entre corchetes).
// Un Object (entre llaves).
// Un valor nulo (null).

//* Métodos JavaScript para JSON: Nos permiten convertir datos de json a javascript y viceversa.

//* JSON.stringify(): Convierte un tipo de dato JavaScript a notación JSON.
console.log(JSON.stringify("Hola mundo"))
console.log(JSON.stringify(123))
console.log(JSON.stringify(true))
console.log(JSON.stringify(false))
console.log(JSON.stringify({}))
console.log(JSON.stringify([1,2,true,"String"]))
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
const user = {
  name: "Juan",
  lastname: "Paniagua",
  edad:21,
  hobbies: ["Comer","Salir","Pasear","Dormir"]
};

console.log(JSON.stringify(user));


// //* JSON.parse(): Analiza una notación JSON y la convierte en un tipo de dato JS.
console.log(JSON.parse("{}"))
console.log(JSON.parse("true"))
console.log(JSON.parse("false"))
console.log(JSON.parse("350"))
console.log(JSON.parse("3.5"))
console.log(JSON.parse("[1,2,3,true]"))
console.log(JSON.parse("null"))
console.log(JSON.parse("undefined"))

