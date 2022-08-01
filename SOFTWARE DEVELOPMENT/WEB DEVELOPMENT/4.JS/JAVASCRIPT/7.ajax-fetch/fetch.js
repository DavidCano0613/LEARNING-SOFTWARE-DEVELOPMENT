const $fetch = document.getElementById("fetch")
const $fragment = document.createDocumentFragment()
const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
.then(res => { 
  console.log(res)
    return res.ok === true ? res.json() : Promise.reject(res)
    //? return res.text() 
})
.then(json =>{
  console.log(json)
  json.forEach(element => {
    let $li = document.createElement('li')
    $li.innerHTML = `El nombre es ${element.name} el correo es ${element.email} el telefono es ${element.phone} y su ciudad es: ${element.address.city}`
    $fragment.appendChild($li)
  });
  $fetch.append($fragment)
})
.catch((err) =>{  
  console.log(err)
  let message = err.statusText || "Ocurrió en errror"; 
  $fetch.innerHTML = `${err.status}: ${message}`;
})
.finally(()=>
  console.log(`Esto se ejecutará independientemente del resultado de la Promesa Fetch`)
);

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