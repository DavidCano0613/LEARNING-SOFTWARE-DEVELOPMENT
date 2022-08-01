
  
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


//*FETCH 

//*es un mecanismo para trabajar las peticiones asincronas de una forma mas optima con promesas. Realmente, una petición usando fetch por debajo se convierte en una XHR.

//? Para trabajar con fetch se usan los siguietes pasos. 

//*1) Se llama al método fetch el cual recibe como parámetro la URL del recurso al cual se le van a pedir datos. (Normalmente una API).

//*2) Como fetch funciona con promesas su estructura se puede descomponer de la siguiente forma: El resultado de una petición fetch puede ser exitosa o rechazada. Basicamente es si se pudo acceder al recurso o no. 

//*Método then: Con then se hace la programación, en el then se debe mandar una callback que contiene la respuesta del servidor. 
//*Método catch: Para capturar el error, en caso de haberlo y poder personalizarlo si se desea. 
//*En el finally: Es para ejecutar un bloque de código independientemente de si se resuelve o no la petición.  


//*3)Una vez se haya realizado la petición y esta sea exitosa se debe convertir a JSON la respuesta dado que si no, no podemos manipular los datos. Para esto fetch tiene una función que se le pega a la response que es .json()

//*TENER EN CUENTA: Para que catch se pueda ejecutar se analiza la propiedad ok de la respuesta la cual es un boleano, esta propiedad "ok" se debe manipular de la siguiente forma: Si es true entonces puedo pasar la respuesta a json, si no se debe ejecutar el método reject de las promesas y asi caera en el catch y se podra manipular correctamente el error. Es decir, hacer el reject pasara el flujo al catch.  


