//* Arrays - Arreglos
//* En este archivo se explica: Lo que es un arreglo, como se recorre, y métodos desde los sencillos hasta los más avanzados.

//* Mostrando un array unidimensional - Vector
// const ALUMNOS = ["fuan David","Daniela","Carolina","Diego"]
// console.log(ALUMNOS);

//* Mostrando la posición de un elemento en espesifico en un array unidimensional y su longitud
// console.log(ALUMNOS[1]);
// console.log(ALUMNOS.length);

//* Mostrando un array bidimensional - Matriz
// const PERSONA = ["fuan David","Paniagua",22,["Hobiies",["Programar","Efercicio","Meditar"]]];
// console.log(PERSONA[1])
// console.log(PERSONA[3])
// console.log(PERSONA[0],PERSONA[1])
// console.log(PERSONA[3][0])
// console.log(PERSONA[3][1])
// console.log(PERSONA[3][1][1])

// let numeros = [1,2,5.2,50,90,100]
// let numeros2 = [5,7,8,9,10,20,30]

// arraySumados = [numeros.concat(numeros2)]
// arraySumados2 = [...numeros,...numeros2]

// console.log(arraySumados)
// console.log(arraySumados2)

//*============================================================================================================

//*2)Metodos de arrays
// console.log(numeros)

//*1)Añade un elemento al final del array
// numeros.push("Elemento añadido")
// console.log(numeros)

//* 2)Elimina el último elemento de un array y lo devuelve
// numeros.pop()
// console.log(numeros)

//* 3)Añade un elemento al principio del array y devuelve su nueva longitud
// console.log(numeros.unshift("Elemento al incio"))
// console.log(numeros)

//* 4)Elimina el primer elemento de un array y lo devuelve
// console.log(numeros.shift())
// console.log(numeros)

//* 5)Ordena los elementos del arreglo: tiene su truco ver al final
// console.log(numeros.sort())

//* 7)Encuentra la posición de un elemento, recibe como parámetro el elemento que se va a buscar.
// console.log(numeros.indexOf(90))
// console.log(numeros.indexOf(12932))

//* 8) Split: Coge una cadena de carácteres y la convierte en un arreglo
// let nombre = "fuan David Paniagua Cano"
// console.log(nombre.split(""))
// console.log(nombre.split(" "))
// console.log(nombre.split(" ").sort())

//* 9) Splice: Este método elimina los elementos del array y permite remplezarlos con otros, ademas retorna los elementos eliminados.

// let frutas = ["Mango","Banano","Pera","Fresas","Papaya","Uvas","Cerezas"]
// console.log(frutas)

// const otroArray = frutas.splice(2,2)
// console.log(frutas)
// console.log(otroArray)

// const nuevoArreglo = frutas.splice(2,1)
// console.log(frutas)
// console.log(nuevoArreglo)

// *10) Slice: Este  método copia un array
// let frutas = ["Mango","Banano","Pera","Fresas","Papaya","Uvas","Cerezas"]
// copiaArreglo = frutas.slice()
// console.log(copiaArreglo)

// Length
// console.log(frutas.length)
// console.log(frutas['1'])

// Si se amuenta el valor de lenght
// frutas.length=5
// console.log(frutas)
// console.log((frutas[3]))

// Si se disminuye la propiedad lenght, se pueden eliminar elementos
// frutas.length=1
// console.log(frutas)

//*=============================================================================================================

//* Formas de recorrer y llenar un arreglo:

//*Efercicio
// Crear un arreglo donde se ingrese la edad de estudiantes por pantalla
// Mostrar todas las edades
// Mostrar en que posicion del arreglo se encuentra cada elemento
// Mostrar el promedio de las edad del grupo
// Crear otro arreglo y sumarlo al primer arreglo
// Crear arreglo que pida numeros y diga cuantos pares e impares hay.

// Siempre validar que los valores ingresados correspondan con el tipo de datos que se espera recibir.

// Para este caso: No se puede recibir numeros negativos ni el cero, no se puede recibir cadenas de texto booleans, tampoco se puede recibir el dato vacio. Debe ser un numero superior a cero.

//*Forma 1)
// let cantidadAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos"))
// let promedioEdades;
// let sumaEdades = 0;
// const edades = []

// for(let i =0; i<cantidadAlumnos; i++){
//   edades[i] = parseInt(prompt(`Ingrese la edad del alumno numero ${i+1}`))
//   sumaEdades = sumaEdades + edades[i]
//   promedioEdades = sumaEdades/cantidadAlumnos
// }

// console.log(`El promedio de edades de los alumnos es: ${promedioEdades} la cantidad de alumnos del grupo es de: ${cantidadAlumnos} la suma de todas las edades del grupo es de: ${sumaEdades}`)

//* Recorriendo un arreglo con for in y for of
// for(elemento of edades){
//   console.log(elemento)
// }

// for(indice in edades){
//   console.log(indice)
// }

//*) ForEach
// const alimentos = ["uva","pera","papaya",1,true];
// alimentos.forEach((elemento,indice,array) => console.log(elemento,indice,array));
// alimentos.forEach((_,indice) => {console.log(indice)});
// alimentos.forEach(i => {console.log("hola")});

// const materias = ["Algoritmos","Matematicas","Programación","Ingles","DataBases"]
// materias.forEach(i => console.log(i))
// materias.forEach(i => document.write(i + "<br>"))

//*=============================================================================================================

//*3) Métodos de arrays avanzados
//* CONCEPTOS DE MUTABLE E INMUTABLE

//? Mutable: Es modificar el estado original del array.
//? Inmutable: Genera una copia del array original por lo que se crea una referencia en memoria y el array original se mantiene como estaba. Este es el principal concepto del paradigma de programación funcional.

//*Arrays para los efemplos
// const arreglo = [1,2,3,4,5,6,3,7,8,9,3,10,1,4,2,6,6,6,10]

// const orders = [
//   {
//     customerName: "fuan David Cano",
//     customerId: 100,
//     delivered: true
//   },
//   {
//     customerName: "Alefandro Palacios",
//     customerId: 200,
//     delivered: false,
//   },
//   {
//     customerName: "Carolina Blandon",
//     customerId: 300,
//     delivered: true
//   },
//   {
//     customerName: "Wilson Paniagua",
//     customerId: 400,
//     delivered: false
//   },
//   {
//     customerName: "Nelcy Cano",
//     customerId: 500,
//     delivered: true
//   }
// ]

//* Método Map: Sirve para transformar los elementos de un array es inmutable, crea un array nuevo con los resultados de la trasformación y se obtiene el mismo número de elementos. Otra definición es que map se usa cuando apartir de un array queremos crear otro array modificado.

// const newArray = arreglo.map(item => console.log(item*item))

// const ids = orders.map(item => item.customerId)
// console.log(`Respuetas: ${ids}`)

// const taxes = orders.map(item => item.taxes = .19)

// const taxes2 = orders.map(item => {
//   return {
//     ...item,
//     tax: .19
//   }
// })

// console.log(`Respuetas: ${taxes}`)
// console.log(taxes2)
// console.log(orders)

// const idsPlus = orders.map(item => item.customerId*2)
// console.log(`Respuetas: ${idsPlus}`)

//* Método Filter: Filtra los elementos de un array, es decir crea lo elementos del array basados en una condición.

// const respuestaFilter1 = arreglo.filter(item => item <= 4)
// const respuestaFilter2 = orders.filter(item => item.delivered === false)
// console.log(respuestaFilter1)
// console.log(respuestaFilter2)

//* Método Reduce: No retorna un array, (depende) Este método consiste en coger todos o algunos elementos de un array y reducirlos a un solo elemento. Recibe dos parámetros uno es la arrow function y el otro es el estado inical, por efemplo para sacar un total, un maximo, un minimo o algo así.

// let sum = 0;
// const rtaReduce = arreglo.reduce((sum,element) => sum + element, 0)
// console.log(rtaReduce)

// const itemsReduce = arreglo.reduce((obf,item)=>{
//   if(!obf[item]){
//     obf[item] = "*";
//   } else{
//     obf[item] = obf[item] + "*"
//   }
//   return obf
// },{})

// console.log(itemsReduce)

// const respuesta3 = orders
// .map(item => item.delivered)
// .reduce((obf,item)=>{
//   if(!obf[item]){
//     obf[item] = 1;
//   } else{
//     obf[item] = obf[item] + 1
//   }
//   return obf
// },{})

// console.log(respuesta3)

//* Método Some: Evalua si un elemento del array cumple una condición y retorna un booleano
// const rtaSome = arreglo.some(item => item % 2 ===0)
// console.log(rtaSome)

// const rtaSomeDelivered = orders.some(item => item.delivered)
// console.log(rtaSomeDelivered)

//* Método Every: Todos los elementos deben cumplir con la condición, es el contrario de some y también retorna un booleanos

// const respuesta = arreglo.every(item => item >= 5)
// const respuesta2 = arreglo.every(item => item <= 30)
// const respuesta3 = orders.every(item => item.delivered === false)
// const respuesta4 = orders.every(item => item.delivered === true)
// console.log(respuesta,respuesta2,respuesta3,respuesta4)

//* Método Find: Solo va retornar un obfeto, es similar a filter pero devuelve es un obfeto que cumple con la condición y solo devuelve un elemento, el primero que coincida.

// const rta = arreglo.find(item => item===10)
// const rta2 = orders.find(item => item.customerId === 200)
// const rta3 = arreglo.findIndex(item => item ===10)
// const rta4 = orders.findIndex(item => item.customerId === 200)
// console.log(rta,rta2,rta3,rta4)

//* Método Includes: Verifica si un elemento esta incluido en un array y retorna un booleano

// const rta = arreglo.includes(10)
// console.log(rta)

//* Método foin: Une los elementos de dos arreglo

// const elementos = ['Fire','Aire','Water']
// const rta = elementos.foin('-')
// console.log(rta)
// const title = 'Curso de manipulación de arreglos'
// console.log(title.split(' ').foin('-'))

//* Método Concact: Es inmutable, une dos arrays

// const elements = [1,1,2,2]
// const elements2 = [3,3,4,4]
// const newArray = [...elements] //* Usar spread operator
// const rta = elements.concat(elements2)
// console.log(rta)

//*============================================================================================================

//*Matrices

// const matriz = [
//   [1,2,3,4,5,1],
//   [6,7,8,9,7,1],
//   [10,9,5,1,3,1],
// ]

// console.log(matriz[1].length)

//*Recorriendo por fila

// for(let f = 0; f < matriz.length; f++){
//   for(let c = 0; c < matriz[f].length; c++ ){
//     console.log(matriz[f][c])
//   }
// }

//*Recorriendo por columna

// let mice = [
//   ["lucas","camila","pedro"],
//   ["juan","luisa","null"]
// ]

// for(let i = 0; i < mice.length; i++){
//   console.log(mice[1][1])

// }

// mice[1][2] = "jerry";
// console.log(mice[1][2])

// for(let f = 0; f < mice.length; f++){
//   for(let c = 0; c < mice[f].length; c++){
//     console.log(`Hola soy ${mice[f][c]}`)

//   }
// }

//* Ejercicios de matrices
// let numeros = [
//   [10, 3, 2, 1, 4, 7],
//   [5, 5, 10, 100, 4],
//   [5, 125, 10, 1020, 4],
//   [5, 5, 5097, 100, 4]
// ]

// let acumulador = 0;

// for(let f = 0; f < numeros.length; f++){
//   for(let c = 0; c < numeros[f].length; c++){
//     num = numeros[f][c]
//     if(num >= 10 && num <1000){
//       acumulador +=num
//     }
//   }
// }

// console.log(acumulador)


//* Método FLAT Y FLATMAP: Sirve para manipular arreglos bidimensionales, flat recibe como parámetro la profundidad es decir de cuantos arreglos existen.


// const matriz = [
//   [1,2,3,4,5,1],
//   [6,7,8,9,7,1],
//   [10,9,5,1,3,1],
// ]


//* Con flat

// const respuesta = matriz.flat()
// console.log(`La respuesta con flat es ${respuesta}`)

//* Con flatMap
// const users = [
// {userid: 1, username: "Tom", attributes: ["Nice","Attractive"]},
// {userid: 2, username: "David", attributes: ["Talktavi","Rude"]},
// {userid: 3, username: "Ana", attributes: ["Humble","Generous"]}
// ]

// const respuesta = users.map( item => item.attributes).flat()
// console.log(respuesta)

// const respuesta2 = users.flatMap(user => user.attributes)
// console.log(respuesta2)

// const calendars = {
//   primaryCalendar: [
//     {
//       startDate: new Date(2021, 1, 1, 15),
//       endDate: new Date(2021, 1, 1, 15, 30),
//       title: "Cita 1",
//     },
//     {
//       startDate: new Date(2021, 1, 1, 17),
//       endDate: new Date(2021, 1, 1, 18),
//       title: "Cita 2",
//     },
//   ],
//   secondaryCalendar: [
//     {
//       startDate: new Date(2021, 1, 1, 12),
//       endDate: new Date(2021, 1, 1, 12, 30),
//       title: "Cita 2",
//     },
//     {
//       startDate: new Date(2021, 1, 1, 9),
//       endDate: new Date(2021, 1, 1, 10),
//       title: "Cita 4",
//     },
//   ],
// };

// const respuesta1 = Obfect.keys(calendars)
// const respuesta2 = Obfect.values(calendars)
// const respuesta3 = Obfect.values(calendars).flat()
// const respuesta4 = Obfect.values(calendars).flatMap(item => {
// console.log(`Item ${item}`)
//   return item.map(date => date.startDate)
// })
// console.log(respuesta1)
// console.log(respuesta2)
// console.log(respuesta3)
// console.log(respuesta4)

//*============================================================================================================

//* EJEMPLO FINAL MUTABLES E INMUTABLES
//* Delete

// const products = [
//   { title: 'Pizza', price: 121, id: '🍕' },
//   { title: 'Burger', price: 121, id: '🍔' },
//   { title: 'Hot cakes', price: 121, id: '🥞' },
//   { title: 'Hot cakes', price: 125, id: '🥞' },
// ];

// const myProducts = [];

// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(100));

// const productIndex = products.findIndex(item => item.id === '🍔')

// if (productIndex !==-1){
//   myProducts.push(products[productIndex])
//   products.splice(productIndex,1)
// }

// console.log("products", products);
// console.log("myProducts", myProducts);
// console.log("-".repeat(100));

// //* update

// const productsV2 = [
//   { title: 'Pizza', price: 121, id: '🍕' },
//   { title: 'Burger', price: 121, id: '🍔' },
//   { title: 'Hot cakes', price: 121, id: '🥞' },
// ];

// const update = {
//   id: '🥞',
//   changes:{
//     price: 200,
//     description: 'Deliciso'
//   }
// }

// const productIndex2 = productsV2.findIndex(item => item.id === update.id)
// productsV2[productIndex2] = {
//   ...productsV2[productIndex2],
//   ...update.changes,
// }
// console.log(productsV2)

//*============================================================================================================

//* Algoritmos de ordenamiento

// let array = [6, 5, 3, 1, 8, 7, 2, 4];

// for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array.length-1; j++) {
//     if (array[j] > array[j + 1]) {
//       let aux = array[j];
//       array[j] = array[j + 1];
//       array[j + 1] = aux;
//     }
//   }
// }

// console.log(array);

//* Sort: Ordena el array y es mutable
// const months = ['March','fanuary','April','fune','December','September']
// const numbers = [10,2,6,21,31,40,7,1,9,11]
// const words = [
//   "réservé",
//   "premier",
//   "commu niqué",
//   "café",
//   "adieu",
//   "éclair",
//   "banana",
// ];
// console.log(months.sort())
// console.log(numbers.sort((a,b) => a - b))
// console.log(words.sort())
