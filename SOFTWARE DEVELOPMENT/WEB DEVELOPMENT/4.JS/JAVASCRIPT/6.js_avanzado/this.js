//* Tipos de binding: Son las distintas maneras que tiene js para determinar que valores va tomar this dentro de una función.

//* Contexto: Es el objeto que esta ejecutando una función en un momento específico. 

//* Contexto de ejecución: Tiene que ver con la pila de ejecución.

//* Asignar el valor que va tomar this cuando se ejecute la función.


//*Lexical binding
//*



//*New binding
//*



//*Explicit binding
//*


//*Implicit binding
//* Se produce cuando invocamos al método de un objeto. 


//*Default binding 
// 'use strict';
// function quienSoy(){
//     console.log(`Hola, yo soy:`,this);
// }
// function quienSoy2(){
//     console.log(`Hola, yo soy:`,window);
// }
// quienSoy()
// quienSoy2()

//*¿Cómo sabe qué enlazamiento aplicar?
//*Comó fue escrita la función
//*Modificaciones desde la creación
//*El lugar de invocación (call site)

// function getName(){
//     console.log(`Mi nombre es: ${this}`)
// }

function getName() {
  console.log(`Mi nombre es: ${this.nombre}`);
}

getName()
    
const david = {
    nombre: "Juan Daid Paniagua Cano"
}

david.getName()