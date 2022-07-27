//* POO en JavaScript

//*1) Objetos

//En js todo es un objeto
// let string = new String("Un string es un objeto")
// let numero = new Number(345)
// let objeto = new Object({})
// let boleano = new Boolean()
// let arreglo = new Array([])
// let funcion = new Function()

// console.log(string)
// console.log(numero)
// console.log(objeto)
// console.log(boleano)
// console.log(arreglo)
// console.log(funcion)

//1.1) Objeto sencillo

// const estudiante = {
//   nombre:"Juan David",
//   apellido:"Paniagua Cano",
//   id: 1000396156,
//   ocupation: "Developer",
//   married: true,
//   davidSaluda: function(){
//     console.log(`Hola soy ${this.nombre} mi cedula es ${this.id} y trabajo como: ${this.ocupation} y estoy casados: ${this.married} `)
//   }
// }

// console.log(estudiante)


//*) Recorriendo objetos

// const objeto = {
//   nombre: "jjjjj",
//   apellido: "pppp",
//   edad: 21
// }

//* Recorriendo un objeto con for in

// for(posicion in estudiante){
//   console.log(posicion)
// }


// for(indice in objeto){
//   console.log(objeto[indice])
//   console.log(objeto.nombre)
// }

//* Recorriendo un objeto con for of
// for(indice in objeto){
//   console.log(objeto[indice])
//   console.log(objeto.nombre)
// }


//* Object.keys: Muestra las propiedades de un objeto y los devulve en un arreglo
// console.log(Object.keys(objeto))
  
//* Object.values: Muestra los valores de las propiedades de un objeto y los devulve en un arreglo
// console.log(Object.values(objeto))
  
//* Object.entries: Un array por cada llave-valor del objeto
// console.log(Object.entries(objeto))



//*1.2) Objetos literales
//*Para asignar a un objeto variables que estan ya previamente definidas simplemente se pone el mombre de la variable.

//! Antes

// let nombre="Oto"
// let edad=25
// let raza="Pincher"

// const perro = {
//   name:nombre,
//   age:edad,
//   race:raza
// }

//? Como objeto literal

// const otroPerro = {
//   nombre,
//   edad,
//   raza
// }

// console.log(perro)
// console.log(otroPerro)


//todo==========================================================================================================

//*2) Objetos Basados en prototipos. 

// function Student (name,age,points,cursos) {
//   this.name = name;
//   this.age = age;
//   this.points = points;
//   this.cursos = cursos;
//   this.aprobarCurso = function(nuevoCurso){
//     this.cursos.push(nuevoCurso)
//   }
// }
// console.log(Student)

// const juanita = new Student("Juanita Paniagua",18,376,["Programacion","Estructuras de datos"]);

// console.log(juanita);

// Student.prototype.borrarCurso = function(borrar){
//     this.cursos.unshift(borrar);
// }



//* 2.1) Clases: Con azucar sintactica, javascript no esta basado en clases si no en prototipos. Los prototipos en JS con como las clases en otros lenguages de programación. 

//?Creación de una clase simple:

// class People {
//   name = 'Juan David'
//   surname = 'Paniagua'
//   age = 21
//   ocupation = 'Developer'
//   presentacion(){
//     let presentacion = `Hola soy ${this.name} mi apellido es ${this.surname} mi edad es ${age} y trabajo como ${this.ocupation}`
//     console.log(presentacion)
//   }
// }

// console.log(People)

//*Instancia
// const wilson = new People()
// console.log(wilson)


//*Creación de una clase con función constructora

// class Personas {
//   especie = "Humano";
//   constructor(name, age, ocupation, hobbies) {
//     (this.nombre = name),
//       (this.edad = age),
//       (this.ocupacion = ocupation),
//       (this.hobbies = hobbies);
//   }
//   resumenPropiedades() {
//     let propiedades = `Hola soy ${this.nombre} tengo ${this.edad} años y soy un@ ${this.ocupacion} mis hobbies son: ${this.hobbies}`;
//     return propiedades;
//   }
// }

//* Instancia de clase y paso de parámetros al constructor.

// const daniela = new Personas("Daniela Muñoz",27,"developer",["Leer","Dormir","Cocinar","Bailar",false])
// console.log(daniela.ocupacion)
// console.log(daniela.resumenPropiedades())

//*Principio : ROR (recieve an object return an object)

// class Personas {
//   constructor({
//     name,
//     age,
//     cursosAprobados
//   }) {
//     this.name = name,
//     this.age = age
//     this.cursosAprobados = cursosAprobados
//   }
// }

// const miguel = new Personas({
//   xcursosAprobados:["Analitica de datos","Estadistica"],
//   age:28,
//   name:"Miguel"

// });

// console.log(miguel)




//* Creación de propiedades de forma dinamica
 






//todo==========================================================================================================


//*3) Métodos estaticos: Un método estatico se puede ejecutar sin la necesidad de instanciar la clase

//* Métodos getters y setters: Son métodos especiales que nos permiten establecer y obtener valores de atributos de nuestra clase.


//todo==========================================================================================================

//*)Abstracción

// class Course{
//   constructor({
//     name,
//     classes = [],
//   }){
//     this.name = name;
//     this.classes = classes;
//   }
// }

// const programacionWeb = new Course({
//   name:"Curso de programación web",
//   classes:["Curso de html","Curso de css","Curso de JavaScript"]
// })


// const programacionBasica = new Course({
//   name:"Curso de programación básica",
//   classes:["Curso de la terminal","Curso de algoritmos","Curso de estructuras de datos"]
// })

// const cursoDataAnalytics= new Course({
//   name:"Curso de analitica de datos",
//   classes:["","",""]
// })


// class LearningPath{
//   constructor({
//     name,
//     courses = []
//   }){
//     this.name = name,
//     this.courses = courses

//   }
// }


// const escuelaWeb = new LearningPath({
//   name: "Escuela de desarrollo web",
//   courses: [],
// });
// const escuelaData = new LearningPath({
//   name: "Escuela de analitica de datos",
//   courses: [],
// });

// const escuelaVideoJuegos = new LearningPath({
//   name: "Escuela de desarrollo de videojueggos",
//   courses: [],
// });



//todo==========================================================================================================
//*) Encapsulación.

//*Esconder atributos métodos para que solo sean manipulados desde la clase y no desde fuera. 

//?Forma 1 Getters y Setters

// class LearningPath{
//   constructor({
//     name,
//     courses = []
//   }){
//     this._name = name,
//     this.courses = courses
//   }
//   get name(){
//     return this._name
//   }
//   set name(newName){
//     if(newName !== isNaN()){
//       console.error("Ojo con eso papi")
//     } else{

//       this._name = newName
//     }
//   }
// }


// const escuelaIgles = new LearningPath({
//   name: "Escuela de ingles",
//   courses: [],
// });

//?Namespaces
//?Object.defineProperties
//?ModulosES6

//todo==========================================================================================================

//*)Herencia

// class Students{
//   constructor(name,age,points,email,password){
//     this.name=name;
//     this.age=age;
//     this.points=points;
//     this.email=email;
//   }

//   saludo(){
//     console.log(`Hola soy ${this.nombre}`)
//   }

//   login(email,password){
//     if(this.email === email && this.password === password){
//       return true 
//     } else{
//       return false
//     }

//   }
// }

// class FreeStudents extends Students{
//   constructor(propsPadre,){
//     super(propsPadre)
//   }

// }

// class BasicStudents extends Students {
//   constructor(propsPadre) {
//     super(propsPadre);
//   }
// }

// class ExpertStudents extends Students {
//   constructor(propsPadre) {
//     super(propsPadre);
//   }
// }



//todo==========================================================================================================

//*) Polimorfismo



















//todo==========================================================================================================


//*) Array de objetos
// const personas = [
//   {
//     name: "david",
//     ocupation: "developer",
//     age: 21,
//     gustos: ["comida","deportes","programar"]

//   },
//   {
//     name: "daniela",
//     surname: "palacio",
//     ocupation: "manager",
//     age: 26,
//     gustos: ["comida","redes sociales","ingles"]

//   },
//   {
//     name: "wilson",
//     surname: "vidales",
//     ocupation: "deliver",
//     age: 43,
//     gustos: ["comida","deportes","dormir"]

//   }
// ]
