//*10)EVENTOS 

//*Un evento es una acción que ocurre dentro de una aplicación. Estos desencadenan ciertos procesos por parte del programa, el cual reacciona a estos eventos por medio de funciones previamente programadas. Estas funciones se llaman funciones que manejan eventos o escuchadores de eventos porque estan ahí esperando a que cuando el usuario haga determinada interacción se ejecute una función. 

//* Manejadores de eventos: Son el mecanismo que existe en JS para poder controlar las acciones del usuario y definir ciertos comportamientos en el documento en función de dichos eventos que hace el usuario. Las funciones que se ejecutan en un evento se conocen como EventHandler. 

//* El listener es el evento que escucha.
//* El código que se ejecuta cuando ocurre este evento se conoce como Event handlers (manejadores de eventos)
//* En JavaScript existen 3 formas de crear este mecanismo.

//* Para ver una lista de los eventos visitar: 
//https://developer.mozilla.org/es/docs/Web/Events

//============================================================================================================= 



//*FORMAS DE CREAR EVENTOS 

//* Evento con boton onclick, hoy en día es considero como una muy mala practica ya que implica tener que mezclar código html y js.  

// function alerta (){
//   alert("Hola esto es una alerta con onclick")
//   console.log(Event) //*Es un objeto especial, precisamente el evento en cuestión.
// }

//* Como Event handler: Tiene el problema de que solo se le puede asignar una función, a veces es necesario que un elemento html ejecute varios eventos.
// const alerta = () => alert("Hola esto es una alerta como manejador semantico")
// const $evento = document.getElementById("evento")
// $evento.onclick = alerta;

//* Como Event listener: Es la forma mas recomendada actualmente, permite ejecutar multiples funciones.

const alerta=()=>alert("Hola esto es una alerta")
const $eventoMultiple = document.getElementById("eventoMultiple")
$eventoMultiple.addEventListener("click",alerta)

// $eventoMultiple.addEventListener("click",(evento) => {
//   console.log(evento)
//   console.log(evento.type)
//   console.log(evento.target)
// })


//*NOTA: De forma nativa, cuando dentro de un evento pasamos una función (la eventHandler) esta solo puede recibir un parámetro y este es el evento como tal y no se le pueden pasar mas.

//============================================================================================================= 



//*Eventos con parámetros: En algunas ocasiones se necesita pasar parámetros al eventHandler. No esta permitido por el DOM aunque hay un truco para hacerlo: //* Como eventHandler se le pasa una función anonima que ejecuta a la otra función. 

// const saludar=(name="desconocido")=>{
//     alert(`Hola ${name}`)
//     console.log(Event)    
//     console.log(Event.type)
//     console.log(Event.target)    
// }

// let nombre = prompt("Type your name: ")
// $eventoMultiple.addEventListener("click",()=>saludar(nombre))
 

//============================================================================================================= 


//*Remover un evento: Elimina un evento, pero se debe tener en cuenta lo siguiente: Para poder hacer esto, se debe crear otro boton que remueva el evento, 

// const $eventoRemover = document.getElementById('evento-remover')

// const removerDobleClick=(e)=>{
//     alert(`Removiendo el evento de ${e.type} de ${e.target}`)
//     console.log(e)
//     $eventoRemover.removeEventListener('click',removerDobleClick);
//     $eventoRemover.disabled=true;
// }

// $eventoRemover.addEventListener('click',removerDobleClick)

//============================================================================================================= 

//* FLUJO DE LOS EVENTOS

//* Una vez que un evento se origina tiene una propagación a lo largo del arbol del dom. Esa fase de propagación se da desde el elemento mas interno hasta el elemento mas externo o padre mas superior y esto se conoce por defecto como fase burbuja, aunque también existe la fase de captura. 

//*Hay dos formas de propagar un evento en burbuja o captura.
//*Fase de burbuja: dejandolo por defecto o con false explicitamente.
//*Fase de captura: se debe activar el valor a true.

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
console.log($divsEventos)

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  // e.stopPropagation()
}

// $divsEventos.forEach((div) => {
//   //* Fase de burbuja
//   // div.addEventListener("click", flujoEventos);
//   //* addEventListener recibe otro parámetro el cual es true/false: false es por defecto y es la fase de burbuja.
//   // div.addEventListener("click", flujoEventos, false);
//   //* Fase de captura
//   // div.addEventListener("click", flujoEventos, true);
//   // div.addEventListener("click", flujoEventos, {
//   //   capture: false,
//   // //   //*Para que se ejecute una sola vez.
//   //   once: true,
//   // });
// });

//============================================================================================================= 

//*stopPropagation y preventDefault.

//* Van a haber ocasiones en las que no se require que un evento se propague ya sea en burbuja o captura. Por lo cual contar con mecanismos que puedan detener la propagación de un evento resultan muy utiles. Esto se hace con el método stopPropagation() y este se pone dentro de la función manejadora.

//*Ciertos elementos del dom tienen un comportamiento o eventos por default.  

//*El método event.preventDefault: Lo que hace es cancelar la acción que tiene por defecto el elemento. 

// const $linkEventos = document.querySelector(".eventos-flujo a")

// $linkEventos.addEventListener("click",e => {
//   alert("Hola")
//   e.preventDefault();
// })

//============================================================================================================= 

//* Delegación de eventos: Delegar eventos en JS es una forma más elegante y optima de manejar la propagación de los eventos en el DOM. Es así como librerias y frameworks manejan el tema de los eventos. 

//*Una buena practica es generar todos los eventos en el nodo document y luego crear el event handler buscando cual es el elemento que genera el evento y pegarle la programación a ese elemento. 

//*También se evita la propagación al usar la delegación.

// document.addEventListener("DOMContentLoaded",()=>{
//   console.log("El documento se ha cargado.")
// });

// document.addEventListener("click",(evento)=>{
//   console.log(`Click en ${evento.target}`)

//   if(evento.target.matches(".eventos-flujo div")){
//     flujoEventos(evento)
//   }

//   if(evento.target.matches(".eventos-flujo a")){
//     alert("Hola le diste click a la etiqueta a que esta dentro de los 3 divs")
//     evento.preventDefault()
//   };
// })

// console.log($divsEventos);


//*El evento de envio de formulario es de lo más comunes

// const $formulario = document.getElementById('formu')
// const enviarForm  = (evento) => {
//   evento.preventDefault()
//   console.log(evento)
//   console.log(evento.target)
//   console.log(evento.target.nombreUser)
//   const {nombreUser,emailUser,passwordUser} = evento.target;
//   console.log(nombreUser.value,emailUser.value,passwordUser.value)
//   if(nombreUser.value.lenght === 0) alert("El nombre no ha sido ingresado")
// }

// $formulario.addEventListener("submit",enviarForm)



