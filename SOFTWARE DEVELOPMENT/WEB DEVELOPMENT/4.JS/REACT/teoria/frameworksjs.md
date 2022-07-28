# ¿Qué son y para que se usan los Frameworks front-end?

WEBSITES VS WEB APPS
Cuando se pasa de hacer sitios o paginas web a hacer aplicaciones web se usan los frameworks. El proposito de una aplicación web es generar contenido que sea dinamico: Dinamico significa que es cambiante y renderiza contenido en función del usuario y el momento en el tiempo en que el usuario este usando la APP. 
Por lo tanto, una aplicación web es una app compleja que tiene lógica y muchas funcionalidades que permiten a los usuarios hacer diversas tareas. 

Jquery esta muerto porque hoy en día JS puede hacer lo que hacia Jquery.

COPY-PASTE
Cuando una aplicación empieza a crecer se crean diversas paginas, las cuales tienen headers, sections, footers y otro montón de elementos que se repiten pero tienen algunas variaciones. Por lo cual, se tiene que copiar y pegar ese código y se hacen cambios en ese header o en ese footer. Lo cual es muy ineficiente porque si se tienen 30 headers o 30 footers y se quiere hacer un cambio a TODOS se tiene que ir header por header o footer por footer uno a uno a cambiar lo que se tenga que cambiar. Con JavaScript y las funciones del lenguaje se puede ejecutar código las veces que sea necesario sin tener que volver a escribir una y otra vez.

PARADIGMA DE LOS COMPONENTES
¿QUÉ SON LOS COMPONENTES?
Consiste en crear bloques de código reutilizables (similar a las funciones) solo que estos componentes tienen la particularidad de que mezclan el código HTML CSS Y JS. Un componente se puede entender como un bloque de lego. 
Que cuando se arman generan la app completa. Los componentes pueden ser cualquier tipo de elemento html, estos por si solos no sirven, por lo tanto, se usa algo que se conoce como "COMPOSICIÓN DE COMPONENTES", consiste en tomar varios componentes diferentes y unirlos de tal manera que formen otro componente mas grande. Es decir, un componente puede ser formado a partir de otros componentes. 

COMO ESTRUCTURAR UN COMPONENTE
¿Cuando se debe convertir un elemento en un componente y como se hace la composición de componentes? 

¿Como construir un componente?
Siempre se busca crear componentes desde lo mas grande a lo mas pequeño y por el camino se van definiendo los componentes que se van necesitando. 

¿Qué es la reactividad y ciclo de vida?
Cada framework de js usa una sintaxis diferente para crear componentes y tambien pueden utilizar diferentes componente de rendering. 

La reactividad es es un paradigma Front-end que sigue dos lineamenientos:
Responsive: Es resiliente, nuestra app sabe que hacer ante todos los escenarios incluso errores. 
Escalable: La aplicación debe poder crecer y no tener problemas para soportar una alta concurrencia.

Message Driven | Arquitectura basada en emisores de mensajes: Se basa en la asincronía para enviar y recibir mensajes, es un patrón de 
subbscrión y se usan observadores. Muchos de los frameworks de js funcionan así en su interior. 

CICLO DE VIDA
Estado y render
¿Qué es el estado?
Es el lugar donde vamos a guardar la información reactiva de nuestros componentes, son variables a las que nos subscribimos para recibir una actualización cada vez que cambian sus valores. Con el estado se prepara para reaccionar. 

Renderizado
Es el proceso por el cual el codigo html pasa a ser elementos visibles en el navegador "DOM" hay diversas estretegias de renderizado. 

1.Virtual DOM
Sirve para crear una copia del DOM para no tener que renderizar toda la pagina, esto es ineficiente. 
Por lo tanto, nace la idea de en vez de crear copias del DOM, una es un minivirtual dom para el componente
que lo requiere o directamente no hacerlo si no simplemente ir y actualizar el dom, esto son estrategias de render. 
 
Que es el ciclo de vida
El flujo en el front-end con frameworks JS es el siguiente:
-Se crean componentes
-Los componentes tienen un estado
-Con alguna estrategia de render se renderizan esos componentes
-El usuario interactua con la app y en función de eso
-Se modifica el estado del componente
-Cuando se modifica el estado se vuelve a renderizar actualizado con la información que pidio el usuario
 
Que es atomic desing
Diferencias entre Librerías vs Frameworks 
Framework: Caja de herramientas.
Librería: Herramienta

ECOSISTEMA DE HERRAMIENTAS EN JAVASCRIPT
Empaquetadores Ó Modules bundlers: Hacen que el navegador cargue todo de forma mas optima. 
-Webpack
-Parcel
-Rollup

Transpilador: Transforman el código JavaScript
-Babel: Nos permite usar el js "del futuro" en todos los navegadores.
-TypeScript: Nuevo lenguaje de programación creado apartir de JS con tipado fuerte.

Herramientas para UI: Son para crear vistas y componentes para la interacción con los usuarios.
-React
-Vue
-Svelte

Preprocesadores CSS
-Sass 
-Less 
-Stylus

CSS in JS
Es la forma de escribir css con JavaScript. 
-Styled Components
-Emotion

Routers: Son la forma en que hacemos la navegación de la APP 
-React Router 

Frameworks: Todo en uno
-Angular

Entornos de desarrollo: Son un grupo de librerias ya configuradas 
se pueden elegir desde la consola que librerias quiero, que empaquetadores,
entre otros para poder trabajar. 
-Create react app
-Vue CLI
-Svelte CLI
-Polymer CLI 
-Whatever CLI 

Manejo del estado
-Redux
-XState MobX

Consulta de datos
-REST:API O GraphQL 










