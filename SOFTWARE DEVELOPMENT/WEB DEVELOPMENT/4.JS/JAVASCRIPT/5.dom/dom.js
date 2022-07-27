//* 1) DOCUMENT OBJECT MODEL: Es una API del navegador que le permite a JavaScript manipular elementos html, selecionarlos, modificarlos y en general darles interactividad. El Dom para poder manipular los elementos html utiliza o reconoce estos por medio de nodos. RESUMEN: Para mostrar un sitio hay un proceso llamado Critical Render Path en él se crean dos árboles el DOM y el CSSOM. El Dom sera aquel que se encargará de tener todo nuestro contenido en una representación de arbol que contendrá nodos

//* Usos del Objeto document. 
//* Con la notación del punto accedemos a los nodos del DOM (POO) 
//* Para poner a hablar al navegador. 
//* Pinta lo que seleccionemos

// console.log(document)
// console.log(document.head)
// console.log(document.body)
// console.log(document)
// console.log(document)
// console.log(document)
// console.log(document)
// console.log(document)
// console.log(document)
// console.log(document)
// console.log(document)
// console.log(document)


//*DOCUMENT OBJECT MODEL 
//* NODOS: Para JavaScript las etiquetas html son objetos. Por lo cual estos podemos guardarlos en variables. Ademas estos tienen propiedades y métodos a los cuales podemos acceder o a su vez podemos crearlos nosotros mismos como desarrolladores. El arbol del dom es el como se desprende un documento html y el como el javascript interprera los diferentes elementos de un html. Existen diversos tipos de nodos los mas comunes son: 

//* 1.1) Nodo: Es una etiqueta que existe en el cuerpo del html, cómo un parrafo, un titulo, una imagen, un formulario o una lista. Existen varios tipos de nodos los más comunes en el desarrollo web son: 
//* 1.2) Document: El nodo document es el nodo raíz, a partir del cual derivan el resto de nodos. 
//* 1.3) Element: Son nodos definidos por etiquetas html. 
//* 1.4) Attribute: Los atributos de las etiquetas html también definen nodos.
//* 1.6) Text: Los textos de las etiquetas como h1 p entre otras también crean nodos.  
//* 1.5) Comentarios: Los comentarios y otros elementos como las declaraciones doctype en cabecera de los documentos html generan nodos. 

//*=============================================================================================================
 
//* 2) Métodos de selección de elementos.

//* getElementById = Selecciona un elemento por su ID

// console.log(document.getElementById('idparrafo'))
// console.log(document.getElementById('formu'))


// * querySelector = Es más lento que el getElementByI, recibe un selector valido de css

// console.log(document.querySelector('.classp'))
// console.log(document.querySelector('.cards'))
// console.log(document.querySelector('.card'))


// * querySelectorAll = Selecciona todos los que se encuentre  
// console.log(document.querySelectorAll("figure"))
// console.log(document.querySelectorAll(".card"))
// console.log(document.querySelectorAll("a"))
// console.log(document.querySelectorAll("a").length)
// console.log(document.querySelectorAll(".card")[2])
// console.log(document.querySelectorAll("#menu li"))


//*Hay una diferencia entre nodeList y un array, nodeList no tiene muchos métodos avanzados de los arrays y por ende es mejor convertir estos a arreglos, no son lo mismo pero comparten algunas propiedades y métodos en común.
// const nodeList = document.querySelectorAll("");
// const elementList = [...nodeList];

//*=============================================================================================================

//* 3) Atributos 
//* Sirve para interactuar con los atributos de las etiquetas html 
//* Hay dos maneras de llamarlos y modificarlos los atributos.
//* Convención del signo dolar: Cuando se declara una variable que tendra como valor un elemento del document se le antepone el signo del dolar $ para distinigarlas de las otras variables

// const $menu = document.getElementById('menu')
// const $parrafo = document.querySelector('.classp')
// const $card = document.querySelectorAll('.card')[2]
// const $img = document.querySelector('.imagen')
// const $input = document.querySelector('#formu')[0]

//Propiedades 
//*type 
//*name
//*value
//*className 

// console.log($input.type);
// console.log($input.name);
// console.log($input.id);
// console.log($input.placeholder);
// console.log($input.value);
// console.log($card.nodeType);
// console.log($card.name);
// console.log($card.value);
// console.log($card.className);
// console.log($parrafo.className);
// console.log($parrafo.id);
// console.log($img.src);
// console.log($img.alt);
// console.log($img.className);

//Métodos 
//*setAttribute
// $input.setAttribute("class","userInput")
// $input.setAttribute("id","idUserInput")

//*getAttribute
// console.log($input.getAttribute("class"))
// console.log($input.getAttribute("id"))

//*hasAttribute
// console.log($input.hasAttribute("class"));
// console.log($input.hasAttribute("id"));

//*removeAttribute
// $input.removeAttribute("id")
// console.log($input)

//*=============================================================================================================


//*4) Como crear elementos dinamicante: Es el como creamos nodos con JS

//*En variables se crean los elementos con create element. 

//* Se establecen los atributos que requieran las etiquetas 



//*) Como agregar nodos: Existen varios métodos para agregar nodos a otros nodos.

//Todos estos métodos necesitan la referencia es decir donde se van a poner y segundo reciben lo que van a poner. Al momento de hacer referencia a un elemento ya sea que se vaya a poner remplazar o eliminar se puede hacer uso del dom Trasversing.

// const $parrafo = document.createElement('p')
// const $texto = document.createTextNode(
//   "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries");
// const $titulo = document.createElement('h1')
// const $textoH1 = document.createTextNode('Esto es un titulo H1');


//*appendChild(hijoaañadir):
// $parrafo.appendChild($texto)
// document.body.appendChild($parrafo)


//*append(unhijo,otrohijo,otrohijo):Se pueden agregar varios nodos y no es necesario usar textNode.

// $titulo.append($textoH1)
// document.body.append($titulo,$parrafo)

//*elemento.replaceChild(nuevonodo,nodoaremplazar)
// const $nuevoParrafo = document.createElement('p')
// $nuevoParrafo.textContent = 'Este parrafo va a remplazar al anterior como ejemplo de uso del replaceChild'

// document.body.replaceChild($nuevoParrafo,$parrafo)

//*element.insertBefore

// const $span = document.createElement('span')
// $span.textContent = "Hola soy una SPAN"
// document.body.insertBefore($span,$titulo);

// const $domCapturado = document.querySelector(".manejodeldom");
// document.body.insertBefore($span,$domCapturado);


//*elemento.clodeNode(true)
// const $nodoClonado = $span.cloneNode(true)

//*Formas avanzadas de agregar 
//* .insertAdjacent: Es el mas complejo pero mas poderoso y flexible

//* .insertAdjacentHTML(position, html)
//* .insertAdjacentElement(position, el)
//* .insertAdjacentText(position, text)

//* Posiciones:
//* beforebegin(hermano anterior)
//* afterbegin(primer hijo)
//* beforeend(ultimo hijo)
//* afterend(hermano siguiente)

const $formulario = document.getElementById('formu')
console.log($formulario)
const $h3 = document.createElement('h3')
$h3.textContent = "HOLA SOY UN H3";

// document.body.appendChild($h3)
// $formulario.insertAdjacentElement("beforebegin",$h3)
// $formulario.insertAdjacentElement("afterbegin",$h3)
// $formulario.insertAdjacentElement("beforeend",$h3)
// $formulario.insertAdjacentElement("afterend",$h3)
// $formulario.insertBefore($h3,$formulario.children[2])


//*Eliminación de nodos
//*removeChild() 
//*document.remove() 
// document.body.removeChild($h3)
// $h3.remove()


//*Otras formas de agregar  
//*Texto y html: Sirve para interactuar con las etiquetas textuales de html. 
// const $parrafo = document.getElementById("idparrafo")
// console.log($parrafo)
// const text = 'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.' 


//* Insertan HTML
// $parrafo.textContent = `Hola mundo`;
// $parrafo.innerHTML=text;

//*Devuelve el html
// $parrafo.outerHTML = text;


//*No recomendable, no hace parte del estandar
// $parrafo.innerText = text;


//*=============================================================================================================

//*Ejemplo de creación de varios elementos 

// const $estaciones = ["Primavera","Verano","Otoño","Invierno"]
// const $ul = document.createElement('ul')

// $estaciones.forEach(estacion =>{
//   const $li = document.createElement('li')
//   $li.textContent = estacion
//   $ul.appendChild($li)
// })

// document.body.append($ul)


//* Fragmentos: Son una forma más optima de insertar elementos en el dom, porque se guardan los elementos en memoria, y luego se golpea al dom con una sola inserción.

// const meses = [
//     "Enero",
//     "Febrero",
//     "Marzo",
//     "Abril",
//     "Mayo",
//     "Junio",
//     "Julio",
//     "Agosto",
//     "Septiembre",
//     "Octubre",
//     "Noviembre",
//     "Diciembre",
// ]

// const $meses = document.createElement("ol")
// const $fragmento = document.createDocumentFragment();
// meses.forEach((item) => {
//   const $mes = document.createElement("li");
//   $mes.textContent = item;
//   $fragmento.appendChild($mes);
// });

// $meses.appendChild($fragmento);
// document.body.appendChild($meses);


//*=============================================================================================================
 
//* 7) Trasversing: Recorriendo el DOM: Son una serie de propiedades para poder recorrer los nodos del DOM. 

//* Todos estos métodos son para los elementos (nodos de tipo etiqueta). Hay 12 nodos diferentes, consultarlos en la MDN, este método es para los nodos de tipo elemento solamente. 
//* Para recorrer el DOM se cuenta con los siguientes métodos. 

// const $cards = document.querySelector(".cards")
// console.log($cards)

//*Hijos 
// console.log($cards.children)
// console.log($cards.children[0])
// console.log($cards.children[1])
// console.log($cards.children[2])
// console.log($cards.firstElementChild)
// console.log($cards.lastElementChild)

//*Padres
// console.log($cards.parentElement)
// console.log($cards.parentNode) 

//* Hermanos
// console.log($cards.previousElementSibling)
// console.log($cards.nextElementSibling)

//*?CLOSEST MIRA HACIA EL PADRE 
// console.log($cards.closest('body'))
// console.log($cards.closest('main'))
// console.log($cards.closest('div')) //! no hay ningun div 
// console.log($cards.closest('figure')) //! No hay una figure hacia afuera
// console.log($cards.children[3].closest('section'))
// console.log($cards.children[3].closest('figure'))
// console.log($cards.children[3].closest('p'))
// console.log($cards.children[3].closest('h2'))


//*=============================================================================================================
 
//* 8) Interacción con los estilos css con Js: Es la forma en la cual creamos estilos através de JavaScript 
//* El navegador siempre mapea las medidas en PX.
//*En Javascript un - significa una resta numerica por lo cual para interactuar con el css se usa el lowerCamelCase a la hora de manipular las propiedades. background-color (en css) b ackgroundColor(en js)

// const $estilos = document.querySelector(".link-down")

//*Para obtener los estilos podemos hacerlo por medio de la notación del punto o por medio de getAttribute.
// console.log($estilos.style)
// console.log($estilos.style.backgroundColor)
// console.log($estilos.style.color)
// console.log($estilos.style.padding)
// console.log($estilos.getAttribute("style"))
// console.log(window.getComputedStyle($estilos))


// *Para establecer estilos se puede hacer de la siguiente manera:


//* Con la notación del punto 
// $estilos.style.width = "90%"
// $estilos.style.display = "block"
// $estilos.style.textAlign = "center"
// $estilos.style.padding = "1rem"
// $estilos.style.borderRadius = ".5rem"

//*Con setProperty 
// $estilos.style.setProperty("text-decoration","none")
// $estilos.style.setProperty("display","block")
// $estilos.style.setProperty("padding","32px")
// $estilos.style.setProperty("text-align","center")


//*Clases CSS
//*Para manipular las clases con el DOM tenemos que usar algo diferente a lo visto anteriormente, dado que class es una palabra reservada de JS para trabajar con las clases en POO. 


//*className:Permite acceder al valor del atributo class del elemento seleccionado.
//*classList: Es un objeto especial que tiene el navegador que tiene aspecto de arreglo. Este devuelve una lista de todas las clases 
//*classList.add: Permite añadir una o varias clases al elemento.
//*classList.remove: Permite remover una o varias clases
//*classList.toggle: Permite poner y quitar a la vez. Es decir si la tiene se la quita y si no la tiene se la pone. 
//*classList.replace: Recibe la clase a remplazar y la clase por la que va ser remplazada.
//*classList.contains: Retorna un bolean

// const $card = document.querySelector(".card");
// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// console.log($card.className);
// console.log($card.classList);
// $card.classList.remove("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45", "rotate-135");
// $card.classList.add("opacity-80", "sepia");
// $card.classList.remove("opacity-80", "sepia");
// $card.classList.toggle("opacity-80", "sepia");

//*Variables CSS - Custom Properties CSS

// const $html = document.documentElement
// const $body = document.body
// const $head = document.head

// console.log($html)
// console.log($body)
// console.log($head)

// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
// let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")
// console.log(varDarkColor,varYellowColor)

// $body.style.backgroundColor = varDarkColor
// $body.style.color = varYellowColor;

//*=============================================================================================================
 
//*9) Templates HTML: Son etiquetas html que son como un machote. Son otra forma de interactuar con el dom No se renderizan en el dom, es solo para tener como un modelo a seguir, son como las clases en POO. 

// const $cards = document.querySelector(".cards")
// const $template = document.getElementById("template-id").content
// const $fragment= document.createElementFragment()

// const $cardContent = [
//   {
//     title: "Tecnología",
//     img: "https://placeimg.com/200/200/tech",
//   },
//   {
//     title: "Animales",
//     img: "https://placeimg.com/200/200/animals",
//   },
//   {
//     title: "Arquitectura",
//     img: "https://placeimg.com/200/200/arch",
//   },
//   {
//     title: "Gente",
//     img: "https://placeimg.com/200/200/people",
//   },
//   {
//     title: "Naturaleza",
//     img: "https://placeimg.com/200/200/nature",
//   }
// ]

// $cardContent.forEach( el =>{
//   $template.querySelector("img").setAttribute("src",el.img);
//   $template.querySelector("img").setAttribute("alt",el.title);
//   $template.querySelector("figcaption").textContent = el.title;
//   //*Para clonar un nodo de ese template  
//   let $clone = document.importNode($template,true);
//   $fragment.appendChild($clone);
// });

// $cards.appendChild($fragment);

//?=============================================================================================================

