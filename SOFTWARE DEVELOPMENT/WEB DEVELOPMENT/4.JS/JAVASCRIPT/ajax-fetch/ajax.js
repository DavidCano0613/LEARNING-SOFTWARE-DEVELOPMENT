//* AJAX :ASYNCHORONOUS JAVASCRPT & XML(today Json is used)

//*Todos los lenguajes de programación tienen la capacidad de leer e interpretar archivos json y xml.

//*¿Que es AJAX? Es un mecanismo que tiene JavaSript para trabajar con la asincronia y hacer peticiones a un sevidor. 

//* AJAX: Nace con la necesidad de hacer que el navegador web no se tenga que recargar cada vez que se hace una request al servidor. Funciona como una especie de intermediario entre el cliente y el servidor. 

//*En los ultimos años se trabaja con el API de FETCH, es una forma moderna de hacer AJAX. 

//*Para trabajar con ajax lo ideal es levantar un servidor local para usar http dado que si se abre el archivo directamente se estaria usando el protocolo file, lo cual no es ideal.  

//*Existen tres métodos nativos para hacer una petición ajax.

//*AJAX tiene algunas librerias externas como Axios(basada en promesas), etc.

//*Es muy importante conocer los posibles estados de una petición asincrona.

//*1.Unitialized: Significa que el cliente esta apenas empezando la petición.
//*2.Loading: Cargando: Se estan enviado los datos al servidor.
//*3.Loaded: Cargado: Ya el servidor respondio al cliente pero este no tiene la info lista (renderizada)
//*4.Interactive: En este punto ya el motor de js tiene acceso a los datos de esta petición.
//*5.Complete: Cuando ya ha terminado todo este proceso y todos los datos estan listos para ser manipulados y renderizar contenido.

//*Como AJAX es una interacción cliente-servidor es muy importante entender los status code de una respuesta de http y sus verbos. 


//================================================================================================================================ 

//* Petición AJAX con el objeto XML HTTP REQUEST pasos:
//* Paso 1 = Instanciar un objeto xhr.
//* Paso 2 = Asignación del evento y en el callback programar la lógica.
//* Paso 3 = Establecer el método y el endpoint(URL a la cual se le pide información).
//* Paso 4 = Enviar la petición.

//*readystatechange: Es el evento de xhr más importante y se lanza cuando detecta cualquier cambio de estado en la petición. readystate solo, son los mencionados estados de una petición ajax. 
//*status: codigo de estado del servidor(200,404,etc)
//*response: Lo que responde el servidor como tal, no confundir con crud booster.
  
// //?Paso1
// const xhr = new XMLHttpRequest(),
// $render = document.getElementById("ajax-xhr"),
// $fragment = document.createDocumentFragment();

// console.log(xhr);

// //?Paso2
// xhr.addEventListener("readystatechange",(e) => {
//   if (xhr.readyState !== 4) return null;
//   console.log(xhr);

//   if (xhr.status >= 200 && xhr.status < 300) {
//     console.log("Petición éxitosa");
//     //   console.log(xhr.responseText);

//     let json = JSON.parse(xhr.responseText);
//     console.log(json);
//     json.forEach((el) => {
//       const $li = document.createElement("li");
//       $li.textContent =  `${el.name} -- ${el.email} -- ${el.phone}`;
//       $fragment.append($li);
//     });
//     $render.append($fragment);
//   } else {
//     console.log("Error");
//       let message = xhr.statusText || "Ocurrió un error";
//       $render.innerHTML = `Error ${xhr.status}: ${message}`;
//   }
//   console.log("Este mensaje cargará sea exitosa o no la petición");
// });

// //?Paso3
// xhr.open("GET","https://jsonplaceholder.typicode.com/users");

// //?Paso3 de forma local 
// // xhr.open("GET", "assets/users.json");

// //?Paso4
// xhr.send();



