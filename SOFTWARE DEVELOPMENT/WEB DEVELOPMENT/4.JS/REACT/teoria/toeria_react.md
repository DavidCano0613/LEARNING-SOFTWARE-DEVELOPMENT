TEORÍA REACT JS

¿Que es React?
React fue creado por facebook e implementado en todas sus aplicaciones. Nace en una epoca donde el patrón MVC habia ido en caida, dado que con la exploción de las librerias JS se crea una arquitectura donde se busca poner a interactuar el front-end con el back-end por medio de la exposición de una api que envia los datos en formato json para que luego el front-end los consuma y pinte la interfaz. Nace el concepto de componente que consiste en crear bloques de código que tienen html css y js. En react se hace la programación de forma reactiva y orientada a componentes. React es una libreria y no un framework. 

-Gapsi es una herramienta de react que sirve para remplazar literalmente a wordpress con React.

VENTAJAS:
-Alto rendimiento
-Recursos abundantes
-Compatibilidad con versiones anteriores
-Estructura de componentes faciles de mantener
-Fuerte comunidad
-Documentación multi-idioma
-Flujo de datos unidireccional

DESVENTAJAS:
-Complejo
-JSX
-Necesidad de un ecosistema de muchas herramientas
-Problemas de SEO

Alredador de React js hay un monton de librerias y herramientas adicionales. 

¿CÓMO CONSTRUYERON REACT.JS?
-Declarativo: Que sea facil de leer, que con sus sintaxis ya se pueda entender.
-Basado en componentes: Component-Based, esta basado en componentes.
-Multiplataforma: Se podra usar en todas partes con unos cambios minimos.

CREATE REACT APP
Es una especie de pre configurador de react que nos ayuda a comenzar con aplicaciones con react es un empaquetador que usa react para no tener que configurar muchas cosas. Trae una serie de dependencias y configuraciones para poder empezar a crear aplicaciones con react. 

COMANDOS BASICOS DE REACT 
-npx create-react-app "nombre del proyecto": Crea un proyecto de react
-npm start: Arranca el servidor 
-npm build: Crea la carpeta build lo que genera el build es lo que se va a desplegar.
-npm test: Para ejecutar algun tipo de prueba 
-eject (No hacer esto)

ESTRUCTURA DE CARPETAS EN REACT: https://www.youtube.com/watch?v=htuBG14-zHs&ab_channel=LuisitoHabla
-src: En esta carpeta se guardan todas las carpetas que nosotros creemos es decir las que no crea create react app. 
-node modules: En esta se guardan todos los
-public: En esta carpeta se guardan
-Components: En esta carpeta se guardan todos los componentes que seran reusados a nivel de toda la app.
-Api: En esta carpeta se guardan todos los archivos ncesarios para la parte de los requests.
-pages: Aqui se crea un index.js y los diferentes componentes. 
-modules: Para separar la logica de cada sección

SINTAXIS JSX
JSX es la sintaxis que sirve para escribir código html y js es como una mezcla entre estos dos y que react tras bambalinas transpila a código react. Sin embargo, se debe tener en cuenta lo siguiente: 

-Lo importante de js es que react lo transpila y lo convierte en un componente que se puede ver en la UI.

-Hay una etiqueta muy importante y es la div con e atributo root, react identifica esta etiqueta y es en esta donde todo se renderiza. 

-Basicamente jsx consiste en embeber código js en código html (algo similar a php) y se hace poniendo { dentro de estos se pone el código js}
 
-Las etiquetas que no se cierran como img, input, entre otras, se les debe poner el cierre /. 

-Para poder poner elementos hermanos como divs debajo de articles y viceversa se debe tener un contenedor general. Debe haber un contenedor padre perse (si o si ). 

-Hay una forma de crear un padre general que se conoce como fragmento, que crea un wraper vacio, esto porque toda sintaxis jsx debe ser como un solo contenido, ya sea que se contenga en un div, section, article o el anteriormente mencionado fragmento. <></>

COMPONENTES EN REACT

¿QUÉ ES UN COMPONENTE?
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

PROPIEDADES (props)
Son valores que recibe un componente hijo de un componente padre y se agrupan en un objeto llamado props. Las props son inmutables. Pueden recibir strings, numbers, booleans, arrays, objects. functions, react elements y hasta react components.









ESTADO y CICLO DE VIDA: 
Permite cambiar el valor de una variable en función de las interacciones que hace el usuario.

REACT HOOKS
Ahora se usan los hooks


