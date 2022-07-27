//*Es una libreria que permite hacer peticiones ajax y también funciona con promesas. 

//*Se puede installar con npm o con link

//*Para trabajar con esta libreria se debe tener en cuenta lo siguiente que no se vio en fetch y es que fetch puede recibir no solo la url si no también un objeto de configuración. En esta api de axios funciona muy similar. En este primer caso a Axios solo se le va pasar la URL. 

//*A diferencia de XHR y de fetch en AXIOS no se tiene que hacer el parseo de los datos a JSON dado que la libreria lo hace y estos vienen en la propiedad data de la respuesta. 

//*Axios crea un objeto de tipo error por nosotros

// const $axios = document.getElementById("axios")
// const $fragment = document.createDocumentFragment()
// const url = "https://jsonplaceholder.typicode.com/users"

// axios
//   .get(url)
//   .then((response) => {
//     console.log(response);
//     // let data = response.data;
//     response.data.forEach(element => {
//       let $li = document.createElement("li");
//       $li.innerHTML = `El nombre es ${element.name} el correo es ${element.email} el telefono es ${element.phone} y su ciudad es: ${element.address.city}`;
//       $fragment.append($li);
//     });
//     $axios.append($fragment);
//   })
//   .catch((error) => {
//     console.log("Error", error.response);
//     let message = error.response.statusText || "Ha ocurrido un error";
//     $axios.innerHTML = `Error: ${error.response.statusText}.${message}`;
//   })
//   .finally(() => {
//     console.log(
//       `Esto se ejecutará independientemente del resultado de la Promesa Fetch`
//     );
//   });

//===========================================================================

//* AXIOS CON ASYNC - AWAIT  

// const $axiosAsync = document.getElementById("axios-async");
// const $fragment = document.createDocumentFragment();

// const getData = async () => {
//   try {
//     let response = await axios.get("https://jsonplaceholder.typicode.com/users");
//     let json = await response.data;
//     console.log(response,json);

//     json.forEach((element) => {
//       const $li = document.createElement("li");
//       $li.innerHTML = `El nombre es ${element.name} el correo es ${element.email} el telefono es ${element.phone} y su ciudad es: ${element.address.city}`;
//       $fragment.appendChild($li);
//     });
//     $axiosAsync.appendChild($fragment); 
//   } 
  
  
//   catch (error) {
//     console.log("Error", error.response);
//     let message = error.response.statusText || "Ha ocurrido un error";
//     $axiosAsync.innerHTML = `Error: ${error.response.statusText}.${message}`;
//   } finally {
//     console.log(
//       `Esto se ejecutará independientemente del resultado de la Promesa Fetch`
//     );
//   }
// };

// getData();

// axios.get("https://jsonplaceholder.typicode.com/users").then(res=>console.log(res.data)).catch(err=>console.log(err)).finally("Pase lo que pase")