# REACT JS

## ¿Que es React?
React fue creado por facebook e implementado en todas sus aplicaciones. Nace en una epoca donde el patrón MVC habia ido en caida, dado que con la exploción de las librerias JS se crea una arquitectura donde se busca poner a interactuar el front-end con el back-end por medio de la exposición de una **RESTFUL-API** que envia los datos en formato json para que luego el front-end los consuma y pinte la interfaz. Nace el concepto de componente que consiste en crear bloques de código que tienen html css y js. 
En react se hace la programación de forma reactiva y orientada a componentes. React es una libreria y no un framework. 


## VENTAJAS:
- Alto rendimiento.
- Recursos abundantes.
- Compatibilidad con versiones anteriores.
- Estructura de componentes faciles de mantener.
- Fuerte comunidad.
- Documentación multi-idioma.
- Flujo de datos unidireccional.
- Alredador de React js hay un monton de librerias y herramientas adicionales. 


## DESVENTAJAS:
- Complejo.
- JSX es una sintaxis algo confusa.
- Necesidad de un ecosistema de muchas herramientas.
- Problemas de SEO.

## ¿CÓMO CONSTRUYERON REACT.JS?
- Declarativo: Que sea facil de leer, que con sus sintaxis ya se pueda entender.
- Basado en componentes: Component-Based, esta basado en componentes.
- Multiplataforma: Se podra usar en todas partes con unos cambios minimos.

## CREATE REACT APP
Es una especie de pre-configurador de **React** que nos ayuda a comenzar con aplicaciones de React es un empaquetador que usa React para no tener que configurar muchas cosas. Trae una serie de dependencias y configuraciones para poder empezar a crear aplicaciones con React. 

## COMANDOS BASICOS DE REACT 
- npx create-react-app "nombre del proyecto": Crea un proyecto de React.
- npm start: Arranca el servidor.
- npm build: Crea la carpeta build lo que genera el build es lo que se va a desplegar.
- npm test: Para ejecutar algun tipo de prueba 
-eject (No hacer esto)

## ESTRUCTURA DE CARPETAS EN REACT: 
https://www.youtube.com/watch?v=htuBG14-zHs&ab_channel=LuisitoHabla

- SRC: En esta carpeta se guardan todas las carpetas que nosotros creemos es decir las que no crea create react app. 
- NODE MODULES: En esta se guardan todos los
- PUBLIC: En esta carpeta se guardan
- COMPONENTS: En esta carpeta se guardan todos los componentes que seran reusados a nivel de toda la app.
- API: En esta carpeta se guardan todos los archivos ncesarios para la parte de los requests.
- PAGES: Aqui se crea un index.js y los diferentes componentes. 
- MODULES: Para separar la logica de cada sección.

---

# SINTAXIS JSX
JSX es la sintaxis que sirve para escribir código html y js es como una mezcla entre estos dos y que react tras bambalinas transpila a código react. Sin embargo, se debe tener en cuenta lo siguiente: 


- > Basicamente JSX consiste en embeber código JS en código HTML (algo similar a php) y se hace poniendo {} {dentro de estos se pone el código js}

- >JSX no es HTML

- >Lo importante de JSX es que React lo transpila y lo convierte en un componente que se puede ver en la UI.

- >Hay una etiqueta muy importante y es la DIV con el atributo ROOT, React identifica esta etiqueta y es en esta donde todo se renderiza. 
 
- > Las etiquetas html que no se cierran como: img, input, entre otras, se les debe poner el cierre />. 

- >Siempre debe haber un contenedor PADRE. Para poder poner elementos hermanos como divs debajo de articles y viceversa se debe tener un contenedor general. Debe haber un contenedor padre perse (si o si ). 

- >Hay una forma de crear un padre general que se conoce como fragmento, que crea un wraper vacio, esto es debido a que toda sintaxis JSX debe ser como un solo contenido, ya sea que se contenga en un div, section, article o el anteriormente mencionado fragmento. <></>

---
# COMPONENTES EN REACT

# ¿QUÉ ES UN COMPONENTE?
Un componente en react js al igual que en los demas frameworks. Son bloques de UI que estan compuestos por html css y javascript. En react js un componente puede tener estado o no. El flujo de los datos no es bidireccional. 

Antes de empezar a trabajar con componentes es muy importante aprender a indetificarlos. Para esto podemos hacernos una serie de preguntas cuando veamos alguna interfaz de usuario. ¿Que elementos se repiten dentro de la UI? ¿Que elementos cumplen una función en espesifico?

Function App(): Es el componente principal en react y esta en alrchivo App.js y es apartir de esa función donde se inicia toda la lógica de la aplicación. Los componentes se crean y se exportan o se ponen (se mandan a llamar en la funcion app)

El objeto props es el objeto que tiene las propiedades del componente.
El componente lo ideal es exportalo 
El componente tiene apariencia de etiqueta html

HAY DOS FORMAS DE CREAR COMPONENTES CON REACT:

1.USANDO CLASES: Se usaban clases en JavaScript que extienden de la clase React.
Component. Dentro de ese código se crea html y js, babel convierte ese código es lo que se conoce como JSX.
-Un componente de clase debe tener por defautl su método render()

2.USANDO FUNCIONES: Se introduce el concepto de los hooks y es que react regreso a las bases de js que es permitir crear componentes por medio de Funciones.

---
## PROPIEDADES (props)
Son valores que recibe un componente hijo de un componente padre y se agrupan en un objeto especial llamado props. Las props son inmutables (recordar el concepto de mutabilidad e inmutabilidad). Pueden recibir:
* strings, 
* numbers, 
* booleans, 
* arrays, 
* objects. 
* functions, 
* React elements y hasta React components.


---

# ESTADO y CICLO DE VIDA: 
El estado son un conjunto de variables que tiene un componente en un momento determinado dentro del flujo de una aplicación.

El estado define como se modifica un componente es decir que valores tiene el componente en determinado momento de la aplicación.

El estado permite cambiar el valor de una variable en función de las interacciones que hace el usuario.

## Caracteristicas del estado: 
1. **Es inmutable**
2. **No se puede modificar directamente**
3. **Es asincrono**

No se puede modificar el estado directamente para eso React tiene un método setState() que atualiza el estado.

El estado en React tiene una sola via de comunucación y es de los elementos padres a los elementos hijos. 

El estado en términos más sencillo es un **objeto** que contiene esas propiedades (variables) ya mencionadas. 

El estado de un componente padre se le puede pasar a un componente hijo

con this.state se crea el estado en los componentes de clase
setState permite modificar el estado

### Ciclo de vida de los componentes:
1. Montado
2. Actualizacion 
3. Desmontaje

---
# RENDERIZADO DE COMPONENTES CONDICIONAL

Se suele usar el operador ternario y funciona en convinación con el estado. 

---
# RENDERIZADO DE ELEMENTOS

En react cuando se renderizan elementos de tipo estructuras de datos como arrays u objetos es muy importante 
asignarle a estos un id, pues esto ayuda a react a que en su virtual dom tenga una referencia exacta de donde se encuentra
ese elemento que tiene que renderizar. Esto se hce añadiendo a la etiqueta el atributo key este no va al dom como tal si no al virtual dom

# EVENTOS EN REACT JS

El concepto de evento en React JS se mantiene al igual que en JS y los demas frameworks. Son acciones que ocurren en el sistema y desencadenan cierta programación.

Su sintaxis es muy similar al como se asignan eventos en html. 

En React la forma de establecer elementos esta en función de si se trata de un componente **funcional** o de **clase**


## Comportamiento de los eventos en un componente de clase: 

Hacer el bindeo desde el ocnstructor para que todas las instancias del metodo ya tengan enlazado el this de la clase

Para el que por ahí no entiende. Es que en el onClick en realidad no estamos llamando la función sumar, sino que estamos llamando la propiedad sumar que está en el constructor que esa si almacena a la función enlazando el this mediante el bind.
Corregirme si me equivoco

## Properties Initializers

## Eventos Nativos, Sintéticos y Personalizados


## Comunicación entre componentes



# CICLO DE VIDA DE LOS COMPONENTES 