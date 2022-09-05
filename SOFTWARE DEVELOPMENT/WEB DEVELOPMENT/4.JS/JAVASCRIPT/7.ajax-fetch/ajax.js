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
//     console.log(xhr.status);
//     console.log(xhr.responseText);
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

// // ?Paso3
// xhr.open("GET","https://jsonplaceholder.typicode.com/users");

// // ?Paso3 de forma local 
// // xhr.open("GET", "../../JSON/objeto.json");

// // ?Paso4
// xhr.send();




