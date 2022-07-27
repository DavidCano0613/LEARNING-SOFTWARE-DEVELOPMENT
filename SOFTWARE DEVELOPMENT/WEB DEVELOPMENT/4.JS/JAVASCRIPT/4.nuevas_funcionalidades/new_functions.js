// 1)Symbols: Es un tipo de dato primitivo, fue introducido en ecmascript 2015, una vez creado su valor se mantiene privado. No se puede usar el operador new. Los simbolos permiten crear identificadores unicos. crearlos con const. El uso más cotidiando de los symbols es para crear propiedades privadas de los objetos

// const ID = Symbol("id");
// const ID2 = Symbol("id2");
// console.log(ID === ID2)
// console.log(ID,ID2)
// console.log(typeof ID,typeof ID2)

// const NOMBRE = Symbol("nombre");
// const SALUDAR = Symbol("saludar");

// const persona = {
//   [NOMBRE]: "David",
//   edad: 21,
// };

// console.log(persona);

// persona.NOMBRE = "Juan David";
// console.log(persona);
// console.log(persona.NOMBRE);
// console.log(persona[NOMBRE]);

// persona[SALUDAR] = function () {
//   console.log("Hola");
// };

// console.log(persona);
// persona[SALUDAR]();

// for (let i in persona) {
//   console.log(i);
//   console.log(persona[i]);
// }

// console.log(Object.getOwnPropertySymbols(persona));

// 2) Sets: Es similar a la estructura de un array pero de datos unicos. Size es como lenght de los sets.
//

// Creación del set
// const set = new Set([
//   1,
//   3,
//   2,
//   3,
//   4,
//   5,
//   4,
//   4,
//   "true",
//   "hola",
//   {},
//   {},
//   "true",
//   "HOLA",
// ]);

// Mostrando el set
// console.log(set);

// Otra forma
// const set2 = new Set();
// set2.add(1);
// set2.add(1);
// set2.add(2);
// set2.add(2);
// set2.add(true);
// set2.add("hola");
// set2.add({});

// Mostrando set2 y su tamaño
// console.log(set2);
// console.log(set2.size);

// console.log("Recorriendo set1");
// for (i of set) {
//   console.log(i);
// }

// console.log("Recorriendo set2");
// set2.forEach((i) => console.log(i));

// // Set pasado a array
// let arr = Array.from(set);
// console.log(arr[6]);

// Metodo delete
// set.delete("HOLA");
// console.log(set);

// Metodo has
// console.log(set.has(109));

// Set clear
// set2.clear();
// console.log(set2);

// Usar sets para el ejercicio 26

//===============================================================================================

// // Maps: Es otra nueva función que llegaron en 2015, los maps son objetos que sirven para almacenar conjuntos valores asociados a manera de objeto.

// let mapa = new Map();
// mapa.set("Nombre", "David");
// mapa.set("Apellido", "Paniagua Cano");
// mapa.set("Edad", "21");
// mapa.set("Job", "Developer");

// console.log(mapa.has("Nombre"));
// console.log(mapa);
// console.log(mapa.size);
// console.log(mapa.has("Correo"));
// console.log(mapa.get("Apellido"));
// mapa.set("Nombre", "Juan David");
// mapa.delete("Job");
// console.log(mapa);

// for (let [key, value] of mapa) {
//   console.log(`llave: ${edad}, Valor: ${value}`);
// }

// const mapa2 = new Map([
//   ["", ""],
//   ["", 7],
//   ["animal", "perro"],
//   [null, "nulo"],
// ]);

// console.log(mapa2);

// const llavesMapa2 = [...mapa2.keys()];
// const ValoresMapa2 = [...mapa2.values()];

// console.log(llavesMapa2);
// console.log(ValoresMapa2);

// Weaksets and weakmaps
// Son como una especia de hermano pequeño de los sets y de los maps. Debiles, significa que solo pueden almacenar referencias debiles, deben ser de tipo objeto.

// Iterators: Un elemento es iterable es un elemento o estructura de dato que se puede recorrer con un ciclo. Como objetos, arreglos, maps, sets, cadenas de texto, nodos del dom.
// Iterador es lo que recorre y iterable es el elemento cuyo contenido se puede recorrer.

// con una arreglo
// const iterable = [1,2,3,4,5];

// con un set
// const iterable = new Set(1, 2, 3, 4, 5, 6, 6);

// con una cadena de texto

// con un map
// const iterable new map

// Se accede al iterador del iterable
// const iterador = iterable[Symbol.iterator]();
// console.log(iterable);
// console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());

// let next = iterador.next();

// while (!next.done) {
//   console.log(next.value);
//   next = iterador.next();
// }

// Generators: Es una sintaxis más sencilla para generar iteradores.

// function* iterable (){
//   yield "hola";
//   console.log("Hola Consola");
//   yield "hola 2";
//   console,log("Seguimos con más intrucciones de nuestro cdogio")
//   yield "hola 3";
//   yield "hola 4";
// }

// Proxies: Los proxies son un nuevo mecanismo que permite crear un objeto basado en un objeto literal inicial. Es como una clase pero en vez de una clase si no de un objeto literal.

// const persona = {
//   nombre: "",
//   apellido: "",
//   edad: 0,
// };

// Apartir del objeto anterior genero nuevos objetos.

// const manejador = {
//   // En el set se pone el objeto, las propiedades y sus valores
//   set(obj, prop, valor) {
//     obj[prop] = valor;
//   },
// };

// const david = new Proxy(persona, manejador);
// david.nombre = "Juan David";
// david.apellido = "Paniagua Cano";
// david.edad = 21;
// console.log(david);

// Propiedades dinamicas de los objetos: Hay momentos donde se necesita crear propiedades de manera dinámica en un objeto.

// const objUsuarios = {};
// console.log(objUsuarios);
// const usuarios = ["Jhon", "Irma", "Miguel", "David", "Daniela"];
// usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));
// console.log(objUsuarios);

// Propiedad dinamica dentro del objeto

// const objetoUsuarios = {
//   [`id_${Math.round(Math.random * 100 + 5)}`]: "Valor aleatorio",
// };

// console.log(objetoUsuarios);

// This: Normalmente hace referencia al objeto en cuestión, pero en js tiene un uso en los contextos.

// console.log(this);
// console.log(window);
// console.log(this === window);

// this.nombre = "Contexto global";
// console.log(this.nombre);

// function imprimir() {
//   console.log(this.nombre);
// }

// imprimir();

// const obj = {
//   nombre: "Context object",
//   imprimir: function () {
//     console.log(this.nombre);
//   },
// };

// const objeto2 = {
//   nombre: "Context objec2",
//   imprimir,
// };

// objeto2.imprimir();

// const obj3 = {
//   nombre: "Contexto objeto 3",
//   imprimir: () => {
//     console.log(this.nombre);
//   },
// };

// obj3.imprimir();

// De una forma
// function Persona(nombre) {
//   this.nombre = nombre;
//   // return(){
//   //   console.log(this.nombre)
//   // }
//   // Como función flecha:-
//   return () => console.log(this.nombre);
// }

// let juan = new Persona("JuanDa");
// juan();

// Call, apply, bind: Son tres métodos para manipular los scopes.

// JSON: Es una tecnología muy importante. Es un formato para el intercambio de información. Se ha convertido en un estandar. Json es como un traductor entre dos lenguajes. Cada lenguaje de programación tiene métodos para convertir los json a su sintaxis propia. 

// const json = {
//   cadena: "Jua David",
//   numero: 23,
//   booleano: true,
//   arreglo: ["correr", "programar", "cocinar"],
//   objeto: {
//     contacto: 3502480064,
//     email: david0613,
//   },
//   nulo: null,
// };
// console.log(JSON);
// console.log(json);

// El objeto json en js tiene dos métodos principales parse y stringify

// parse
// console.log(JSON.parse("Hola mundo"))
// console.log(JSON.parse("{}"))
// console.log(JSON.parse("true"))
// console.log(JSON.parse("202"))
// console.log(JSON.parse("'Hola Mundo'"))
// console.log(JSON.parse("null"))
// console.log(JSON.parse("undefined"))

// Stringify
// console.log(JSON.stringify({}))
// console.log(JSON.stringify([1,2,4]))
// console.log(JSON.stringify(false))
// console.log(JSON.stringify(undefined))
// console.log(JSON.stringify(true))
// console.log(JSON.stringify(null))
// console.log(JSON.stringify({x:2,y:3}))
// console.log(JSON.stringify(json))

// Web APIs

