//* Convenciones para escribir código en js
// * para_archivos_js = snake_case
// * PARACONSTANTES = UPPER_CASE
// * ParaLasClases = Upper_Camel_Case
// * paraVariablesFuncionesObjetosyPrimitivos = lowe_Camel_Case

//*Como mostrar y pedir al usuario datos por pantalla

//* Alert, Prompt, Confirm
//* Son importantes para interactuar con el usuario 
// alert("Hola mundo")
// console.log("Esto es un hola mundo en consola")
// document.write("Hola mundo en pantalla")
// prompt("Este mensaje pide un valor por pantalla")

//==============================================================================================================

//*CONSTANTES

//*Constante sin inicializar
// const NOMBRE;
// document.writeln(NOMBRE);

//*Constante normal
// const Name = "Juan David";
// document.write(Name);

//*Modificando el valor de una constante
// Name = "Daniela";
// document.write(Name)

//==============================================================================================================

//*Variables

//*Declarando y luego inicializando
// let edad;
// edad = 21;
// alert(edad);

//*Declarando e inizializando a la vez
// var age = 21;
// alert(age);

//*Mostrando una variable sin inicializar
// let documento;
// alert(documento);

//*Mostrando el ambito de las variables en JS
// console.log(window)

//Una variable en un bloque que no afecta lo que este por fuera del mismo bloque

// {
// 	let age = 26;
// 	alert(age)
// // Al estar esta variable dentro de un bloque no afecta la variable age definida previamente con var
// }

// document.write(age)

//* Declarando e inicializando multiples variables al mismo tiempo
// let user = "Estudiante", estado = "Activo", institucion="Sena";
// document.write(user, estado, institucion)

//* Buenas practicas para variables

//* Esta variable hace muchas cosas
// let nombre = "Juan David Paniagua Cano"
// nombre.split("")
// nombre.toUpperCase();
// console.log(nombre)

//* Mucho mejor
// const name = "Juan David Paniagua Cano"
// const nameMayuscula = namee.toUpperCase()
// const nameSeparado = nameMayuscula.split("")
// console.log(nameMayuscula)


//==============================================================================================================

//* Concatenación = Sirve para juntar strings 

//* Concatenación con suma

// let texto1 = "Hola", texto2 = " mundo", unidos = texto1+texto2
// document.write(unidos) 

// Concatenación de un string con un numero
// let texto = "3", number = 4, res = texto+number
// document.write(res) 

// Concatenación con template strings (es la más usada)
// let userEdad = parseInt(prompt("Ingrese su edad"))
// alert(`Usted tiene ${userEdad} y el otro año va tener ${userEdad+1}`)

//==============================================================================================================

//* Operadores aritmeticos

// let num1 = 25, num2 = 20;

//  Operador de adición
// document.write(num1+num2 +"<br>")

//  Operador de resta
// document.write(num1-num2 +"<br>")

// Operador de división
// document.write(num1/num2 +"<br>")

// Operador de multiplicación
// document.write(num1*num2 +"<br>")

// Operador exponencialización
// document.write(num1**2 +"<br>")

// Operador de incremento / a diferencia del decremento el incremento se debe guardar en otra variable para mostrarse
// res = num1++
// document.write(res +"<br>")

// Operador de decremento, simplemente se resta con -- a la variable
// document.write(num1-- +"<br>")

// Operador de porcentaje
// document.write(num1&50 +"<br>")

//Operador para poner un numero negativo

//==============================================================================================================

//*Operadores de asignación
//Para hacer un operador de asignación, simplemente se pone el signo ya sea suma resta etc y el igual = con el numero

// let asignacion = 10

// Operador de adición 
// asignacion+=2
// document.write(asignacion + "<br>")

// Operador de resta
// asignacion-=2
// document.write(asignacion + "<br>")

// Operador de multiplicación
// asignacion*=2
// document.write(asignacion + "<br>")

// Operador de división
// asignacion/=2
// document.write(asignacion + "<br>")

// Operador de exponencialización
// asignacion**=2
// document.write(asignacion + "<br>")

// Operador de el resto
// asignacion%=2
// document.write(asignacion + "<br>")


//==============================================================================================================

//*Operadores de comparación

// let num = 10, numDos = 5

// Operador de igual a 
// document.write(num == numDos +"<br>") 

// Operador extrictamente igual a
// document.write(num === numDos +"<br>") 

// Operador diferente a 
// document.write(num != numDos +"<br>") 

// Operador extrictamente diferente a 
// document.write(num !== numDos +"<br>") 

// Operador mayor que 
// document.write(num > numDos +"<br>") 

// Operador menor que
// document.write(num < numDos +"<br>") 

// Operador mayor o igual que
// document.write(num >= numDos +"<br>") 

// Operador menor o igual que 
// document.write(num <= numDos +"<br>") 


//==============================================================================================================

//* OPERADORES LOGICOS o booleanos

//* && Significa Y || Significa O ! Sinifica NOT

// a = true
// b = false

// Ejemeplo And 
// afirmacion1 = a&&b 


//Ejemplo Or
// afirmacion1 = a||b 


//Ejemplo Not 
// let num = false;
// alert(!num)


//*=====================================ESTRUCTURAS DE CONTROL DE FLUJO=========================================

//* CONDICIONALES

// edad = parseInt(prompt("Ingrese su edad: "))
// if (edad > 0 && edad <18){
// 	document.write("Eres menor de edad")
// } else if (edad >=18 && edad <100){
// 	document.write("Eres mayor de edad")
// } else {
// 	document.write(`La edad ${edad} no es una edad lógica, el valor debe estar entre 1 y 100`)
// }


//*OPERADOR TERNARIO
// Sintaxis
//(condición) ? verdadera : falsa

// let card = prompt("Ingrese si su tarjeta es de debito o credito");
// (card === "Debito" || card === "debito")
// ?alert("Tienes una tarjeta debito, no tiene interes")
// :alert("Tienes una tarjeta de credito, pagas interes");
// document.write(card);

//* Ejemplo
// const saludo = esDeDia => "dia" || "Dia" ?console.log("es de dia"):console.log("es de noche")
// saludo("dia");

//*Consideraciones: No usar ternarios si se deben anidar condiciones. 

//*Switch Case
// Primero que todo se define una variable
// Switch (El nombre de la variable)
// Case (El valor que toma esa variable)
// Break (Se sale del switch una vez haya caido en un case, ejemplo
// si el Switch tiene 5 casos posibles y fue verdadero en el caso 3 
// ya no valida los dos siguientes si no que simplemente termina, pues la condición
// ya se cumplio.)
// Default (En caso de que ningun caso se cumpla PERO NINGUNO entonces 
// que ejecute lo que queramos)
// Esta variable puede tomar 8 valores diferentes (Casos) entonces esta
// estructura sirve para multiples casos que puede tomar una variable

// let dia = parseInt(prompt("Ingrese un numero del 0 al 6"))

// switch (dia) {
// 	case 0:
// 		console.log("Domingo")
// 		break;
// 	case 1:
// 		console.log("Lunes")
// 		break;
// 	case 2:
// 		console.log("Martes")
// 		break;
// 	case 3:
// 		console.log("Miercoles")
// 		break;
// 	case 4:
// 		console.log("Jueves")
// 		break;
// 	case 5:
// 		console.log("Viernes")
// 		break;
// 	case 6:
// 		console.log("Sabado")
// 		break;
// 	default:
// 		console.log("El dia no existe")
// 		break;
// }

// =============================================================================================================

//* BUCLES O CICLOS

//* 1) Bucle while
// let contador = 1;
// while (contador <= 10 ) {
// 	console.log(contador);
//   contador++;
// } 

// Sentencia break
// let numero = 1;
// while (numero <= 20 ) {
//   console.log(numero)
//   numero+=1;
//   if (numero === 10) {
//    break;
//   }
// }


//* 2) Bucle Do while
//  do {
// console.log("Do while" + contador);
// contador++;
// } while (contador < 10)


//* 3) Bucle for 
// for (let nota = 1; nota <= 5 ; nota++) {
// 	document.write(`Tu nota es ${nota} <br>`)
// }



//* 4) For in / For of Se crea una varible que recorre y se pone el in o el of
// la variable que se declara en cada iteración va atrapar lo que se encuentre en el arreglo u objeto

// let array =["David","Paco","Daniela","Wilson"]

//* Con For Of se obtiene el valor de un objeto o elemento de un arreglo en cada iteración
// for (let i of array){
// 	console.log(i)
// }

//*  Con for in se obtiene el indice del elemento que se encuentre en dicha iteración, esto se usa más para objetos, conocer sus posiciones y operar con estos.
// for (let i in array){
// 	console.log(i)
// }


//==============================================================================================================

//*FUNCIONES

//*En JavaScript tenemos 3 formas de crear funciones:

//* 1)Funciones declaradas = Por el hoisting se pueden llamar antes de ser declaradas, MALA PRACTICA
// saludar()
// function saludar () {
// 	console.log("Hola mundo");
// }

//* 2) Funciones expresadas = consiste en asignar a una variable una función
// const gretings = function (){
// 	console.log("Hola que mas papa");
// }
// gretings()

//*Función con parametros
// function suma (num1,num2) {
// 	let res = num1 + num2;
// 	console.log(res);
// }

// suma(340,160)

//* 3) Funciones flecha 
// const restar = (num1,num2) =>{
// let res=num1+num2
// document.write(res)
// }
// restar(2,5)

//* Cuando se tiene un solo parámetro y una sola linea de código.
// const decirName = name => document.write(`Hola ${name}`)
// decirName("Juan David Paniagua Cano")

//* Otro ejemplo
// const dividir = (num1,num2) => console.log(num1/num2)
// dividir(20,5)

//*  Con varias lineas de código 
// const verificarEdad = (edad = parseInt(prompt("Ingrese su edad: "))) =>{
// 	(edad >= 18)
// 	?document.write(`Eres mayor de edad tienes ${edad}`)
// 	:document.write(`Eres menor de edad tienes ${edad}`)
// }
// verificarEdad()


//* 6) Función con parámetro por defecto
// function saludar (nombre){
//     nombre = nombre || "desconocido";
//     console.log(`hola ${nombre}`)
//     saludar("david")
//     saludar();

//* 7) Funciones anónimas autoejecutables
// Es una función en la cual se engobla todo el código que se quiere ejecutar. 
// No se les da un nombre, de ahí a que son anonimas, solo de le dan las instrucciones que va a ejecutar. 
// Nota: Con estas funciones si es necesario poner punto y coma al final. 

//* Error a proposito
// function(){
//     document.write("Hola")
// }

//* Correcta función anonima autoejecutable
// (function(){})()
// (
// () => {
//     document.write("Hola, soy una función anonima autoejecutable")
// } ) ();

// alert("hola")

//==============================================================================================================

//*MANEJO DE ERRORES con Try catch

//* Sintaxis 
// try{aquí va el código a evaluar} 
// catch(error){Captura el error que se encuentre en el try} 
// finally{Siempre se ejecutará al final de un bloque try-catch}

// try {
//   let numero = "Hola";
//   if(isNaN(numero)){
//     throw new Error("El caracter introducido no es un Número")
//   } console.log(numero*numero)
// } 
// catch (Error) {
//   console.log(`Se produjo el siguiente error: ${Error}`)
// }


//==============================================================================================================

//*Destructuración: Es una herramienta añadida apartir de EMS6, permite obtener los valores de los arreglos y objetos y asignarlos a variables. Nota: Para arreglos corchetes para objetos llaves

//*Array 
// const numeros = [1.5,2.8,3.4]

//*Sin destructuración
// let num1 = numeros[0];
// let num2 = numeros[1];
// let num3 = numeros[2];
// console.log(num1,num2,num3);

//*Con destructuración
// const [one,two,three] = numeros;
// console.log(one,two,three);

// //*Objeto
// const person = {
// 	nombre: "Maria",
// 	surname: "Munoz",
// 	age: 26,
// 	ocupation: "Seller",
// }

// Sin destructuración
// const userName = person.nombre;
// const userLastName = person.surname;
// const userEdad = person.age
// const userOcu = person.ocupation
// console.log(userName,userLastName,userEdad,userOcu)

//* Con destructuración 
//* NOTA: Las variables deben llamarse igual que las propiedades del objeto se puede cambiar como se ve en la variable nombre la cual se cambiara a name
// const {nombre:name,surname:apellido,age,ocupation} = person;
// console.log(name,apellido,age,ocupation);

//==============================================================================================================




//*Parametros REST: Son una forma de virtualmente ir agregando parámetros infinitos a una función o a un arreglo, se debe poner ...
// function sumar (a,b, ...c){
// 	let resultado = a+b;
//     c.forEach(n =>resultado += n);
// return resultado
// }

// console.log(sumar(1,2));
// console.log(sumar(1,2,3));
// console.log(sumar(1,2,3,4));
// console.log(sumar(1,2,3,4,5));
// console.log(sumar(1,2,3,4,5,6,));
// console.log(sumar(1,2,3,4,5,6,7));

// const usuario = (...datos)=>{console.log(datos)}
// usuario("Juan David","Paniagua Cano",21,"Programmer","Happy",true)

//* Operador spread: Cuando una expresión se tenga que expandir en situaciones donde se tengan multiples situaciones o variables se pueda hacer. 
//* En un arreglo donde se reciben nuevos numeros para no hacer push, se puede usar el spread operator. 

// const array1 = [1,2,3,4,5],
// array2 = [6,7,8,9,10]

//* Se tendra así un arreglo de dos posiciones
// const arr3 = [array1,array2]
// console.log(array1,array2,arr3);

//*  Con spread operator, se tendra un solo arreglo
// const array3 = [...array1,...array2];
// console.log(array3)

//==============================================================================================================

//* OBJETO CONSOLE: El objeto Console provee acceso a la consola de depuración de los navegadores

//* Algunos métoos utiles en la consola.

// console.log(console);
// console.error("This is a mistake");
// console.warn("This is a warning");
// console.info("This a info message")
// console.log("This what we have been doing in our app");
// console.log(window);
// console.log(document);
// console.dir(window);
// console.dir(document);

// Grupos en consola
// console.group("Practicas de david");
// console.log("curso de html")
// console.log("curso de css")
// console.log("curso de js")
// console.log("curso de node js")
// console.log("curso de bases de datos")
// console.groupEnd();

// console.table(Object.entries(console).sort());
// console.clear()

// Formas de mostrar variables concatenadas con texto en consola
// let nombre = "David", apellido = "Paniagua", Edad = 21; 
// console.log(`Hola me llamo ${nombre} ${apellido} y tengo ${Edad} años`);
// console.log(`Hola me llamo %s %s y tengo %d años`,nombre,apellido,Edad)

//* To Know how long my code is late

// console.time("Cuanto tiempo tarda mi codigo en ejecutarse")
// const arreglo = Array(1000000);

// for(let i = 0; i < arreglo.length; i++){
// 	arreglo[i] = i;
// }

// console.timeEnd("Cuanto tiempo tarda mi codigo")
 
// for(let i = 0; i <= 100; i++){
// 	console.count("Codigo for")
// 	console.log(i);
// }

// let x = 0, y = 1
// pruebaXY = "Se espera que X siempre sea menor que Y"

// console.assert(x<y,{x,y,pruebaXY});


//==============================================================================================================
//* OBJETO WINDOW: Es el que permite controlar y manipular la ventana del navegador

// Algunos métodos utiles en la consola.
// Alert y prompt son dos por ejemplo. 

// confirm("Esto es una confirmación")
// open()
// close()

//==============================================================================================================

//* OBJETO DATE: El objeto date en js nos permite manipular fechas a diferencia de los objetos anteriores el bojeto date require instanciarse. 

//* Métodos para el objeto date
// console.log(Date());
// let fecha = new Date();
// console.log(fecha);
// console.log(fecha.getFullYear())
// console.log(fecha.getDate())
// console.log(fecha.getDay())
// console.log(fecha.getMonth())
// console.log(fecha.getHours())
// console.log(fecha.getMinutes())
// console.log(fecha.getSeconds())
// console.log(fecha.getMilliseconds())
// console.log(fecha.toString())
// console.log(fecha.toDateString())
// console.log(fecha.toLocaleDateString());
// console.log(fecha.toLocaleTimeString());
// console.log(fecha.getTimezoneOffset());
// console.log(fecha.getUTCDate());
// console.log(fecha.getUTCHours());
// console.log(Date.now());

// let cumplededavid = new Date();
// console.log(cumplededavid);

// let fechaDa = new Date(2019,6,21)
// console.log(fechaDa)

//==============================================================================================================

//* OJETO MATH: Es un objeto que permite usar operaciones matematicas en js
//* Al ser un metodo estatico debes poner siempre math en el parentesis o math. y el metodo que se va a usar.

//* Objeto math
// console.log(Math);

//* Math.abs Nos devuelve el valor absoluto de un numero
// console.log(Math.abs(-7.8));
// console.log(Math.abs(-9.70909));

//* Math-ceil Sirve para redondear a el entero siguiente
// console.log(Math.ceil(7.8));

//* Math.floor Sirve para redondear al entero anterior
// console.log(Math.floor(7.8));

//* Math.round Sirve para redondear al entero mas cercano
// console.log(Math.round(7.623939));
// console.log(Math.round(7.423939));

//* Math.sqrt Este metodo sirve para sacar raíz cuadrada
// console.log(Math.sqrt(81));

//* Math.pow Este metodo sirve para elevar a una potencia
// console.log(Math.pow(2,5));

//* Math.sign Simplemente da referencia a si un numero es negativo o positivo
// console.log(Math.sign(-7.8)); // Incida con un -1 si es negativo si es positivo devuelve un 1
// console.log(Math.sign(7.8))

//*El metodo random dara un valor aleatorio entre 0 y 1 
// Para establecer hasta donde quiero que sea el conjunto de aleatorios, se multiplica 
// console.log(Math.random());
// console.log(Math.random()*30);
// console.log(Math.random()*500);
// console.log(Math.random()*20000);
// console.log(Math.random(Math.random()*1000));


//==============================================================================================================

//*OPERADOR CORTOCIRCUITO
//*Funciona poniendo dos condiciones ya sea el operador logico con OR o el AND

// Cortocircuito con OR:
//  El or nos sirve para cuando el valor de la izquierda en la expresion siempre pueda 
// validar True, es el valor que se cargara por defecto.

// EJEMPLOS CON OR
// console.log("Cadena de texto"||"Valor de la derecha")
// console.log(21||"Valor de la derecha")
// console.log(true||"Valor de la derecha")
// console.log([]||"Valor de la derecha")
// console.log({}||"Valor de la derecha")
// console.log(false||"Valor de la derecha")
// console.log(undefined||"Valor de la derecha")
// console.log(NaN||"Valor de la derecha")
// console.log(null||"Valor de la derecha")
// console.log(-2||"Valor de la derecha")
// console.log(0||"Valor de la derecha")
// console.log(""||"Valor de la derecha")

// Cortocircuito con AND:
// El and nos sirve para cuando el valor de la izquierda en la expresion siempre pueda 
// validar False, es el valor que se cargara por defecto.

// console.log("------------------------------------------------------------------")

// EJEMPLOS CON AND 
// console.log("Cadena de texto"&&"Valor de la derecha")
// console.log(21 &&"Valor de la derecha")
// console.log(true&&"Valor de la derecha")
// console.log([]&&"Valor de la derecha")
// console.log({}&&"Valor de la derecha")
// console.log(false&&"Valor de la derecha")
// console.log(undefined&&"Valor de la derecha")
// console.log(NaN&&"Valor de la derecha")
// console.log(null&&"Valor de la derecha")
// console.log(-2&&"Valor de la derecha")
// console.log(0&&"Valor de la derecha")
// console.log(""&&"Valor de la derecha")

//==============================================================================================================

//* Expresiones regulares
// Una expresión regular es una secuencia de carácteres que forman un patrón de busqueda, se usa principalmente en la busqueda de cadenas de texto.

// Todos los lenguajes de programación las tienen.
// Puede servir para validar una ID
// Puede servir para validar un correo


// Dos formas de hacerlo 

// 1. Con función constructora

// let cadena = "lorem ipsum"
// let expReg = new RegExp("lorem","");
// let expReg2 = /lorem/;
// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));

//==============================================================================================================


//* Fin Conceptos básicos JS





















