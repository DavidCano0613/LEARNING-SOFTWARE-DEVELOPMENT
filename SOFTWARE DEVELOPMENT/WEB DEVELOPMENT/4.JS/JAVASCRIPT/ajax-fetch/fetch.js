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

// const $fetch = document.getElementById("fetch")
// const $fragment = document.createDocumentFragment()
// const url = "https://jsonplaceholder.typicode.com/users"

// fetch(url)
// .then(res => { 
//   console.log(res)
//     if (res.ok === true){
//         return  res.json()
//     } 
//     else {
//         return Promise.reject(res)
//     }
//     //? return res.text() 
// })
// .then(json =>{
//   console.log(json)
//   json.forEach(element => {
//     let $li = document.createElement('li')
//     $li.innerHTML = `El nombre es ${element.name} el correo es ${element.email} el telefono es ${element.phone} y su ciudad es: ${element.address.city}`
//     $fragment.appendChild($li)
//   });
//   $fetch.append($fragment)
// })
// .catch((err) =>{  
//   console.log(err)
//   let message = err.statusText || "Ocurrió en errror"; 
//   $fetch.innerHTML = `${err.status}: ${message}`;
// })
// .finally(()=>
//   console.log(`Esto se ejecutará independientemente del resultado de la Promesa Fetch`)
// );

//*Finally: Es un método de las promesas que se ejecuta sin importan si se resuelve o no la promesax


//*Conclusiones: El primer then transforma el readable stream a un objeto de json que se convierte en un objeto de js. En el segundo se hace la lógica de programación y en el catch se captura el error. Hay una forma más optima de hacer esto y es con async-await. 

//=================================================================================



//*API FETCH CON ASYNC-AWAIT 

//*Al trabajar con funciones asincronas utilizamos el bloque try - catch. 

//*En el try pondremos en una variable la peticion y le diremos que espere con await (await significa que va esperar a que esto ejecute para que el programa o en este caso la función pueda continuar con lo que sigue. )

//*No se puede hacer la validación del ok, pero se puede hacer con un readyState como en XHR

// const $fetchAsync = document.getElementById("async-await")
// const $fragment = document.createDocumentFragment()

// async function getData(){
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     let json = await res.json();
//     console.log(res,json)

//     //*Throw new error solo puede retornar textos 

//     // if(!res.ok)throw new Error("")

//     //*Throw es un return que manda el flujo del programa al catch 
//     if(res.ok === false) throw{ status: res.status, statusText: res.statusText}

//     json.forEach((element) => {
//       let $li = document.createElement("li");
//       $li.innerHTML = `El nombre es: ${element.name} el correo es: ${element.email} el telefono es: ${element.phone} y su ciudad es: ${element.address.city}`;
//       $fragment.append($li);
//     });

//     $fetchAsync.append($fragment);
//   } 
  
//   catch(error){
//     let message = error.statusText || "Ocurrio un error";
//     $fetchAsync.innerHTML = message;
//   } 
  
//   finally{
//      console.log(`Esto se ejecutará independientemente del resultado de la Promesa Fetch`)
//   }

// }

// getData()