# ¿Qué son y para que se usan los Frameworks front-end?

## WEBSITES VS WEB APPS
Cuando se pasa de hacer sitios o **paginas web** a hacer **aplicaciones web** se usan los frameworks. El proposito de una aplicación web es generar contenido que sea dinamico: **Dinamico** significa que es cambiante y renderiza contenido en función del usuario y el momento en el tiempo en que el usuario este usando la APP. 
Por lo tanto, una APLICACIÓN WEB es una app compleja que tiene lógica y muchas funcionalidades que permiten a los usuarios hacer diversas tareas. 

---

## COPY-PASTE
Cuando una aplicación empieza a crecer se crean diversas paginas, las cuales tienen headers, sections, footers y otro montón de elementos que se repiten. Por lo cual, se tiene que copiar y pegar ese código y si se hacen cambios en un header o footer se tiene que ir uno por uno a cambiar todo. Lo cual es muy ineficiente porque si se tienen 30 headers o 30 footers eso sería un gran problema. Con JavaScript y las funciones del lenguaje se puede ejecutar código las veces que sea necesario sin tener que volver a escribir una y otra vez.

---

# PARADIGMA DE LOS COMPONENTES
## ¿QUÉ SON LOS COMPONENTES?
Consiste en crear bloques de código reutilizables (similar a las funciones) solo que estos componentes tienen la particularidad de que mezclan el código HTML CSS Y JS. Un componente se puede entender como un bloque de lego. 
Que cuando se arman generan la app completa. Los componentes pueden ser cualquier tipo de elemento html, estos por si solos no sirven, por lo tanto, se usa algo que se conoce como 
## "COMPOSICIÓN DE COMPONENTES"
Consiste en tomar varios componentes diferentes y unirlos de tal manera que formen otro componente mas grande. Es decir, un componente puede ser formado a partir de otros componentes. 



##  COMO ESTRUCTURAR UN COMPONENTE
¿Cuando se debe convertir un elemento en un componente y como se hace la composición de componentes? 

## Construcción de un componente.
Siempre se busca crear componentes desde lo mas grande a lo mas pequeño y por el camino se van definiendo los componentes que se van necesitando. 

## REACTIVIDAD Y CICLO DE VIDA.

### REACTIVIDAD
Es es un paradigma Front-end que sigue dos lineamenientos:
#### **Responsive:¨** 
Es resiliente, la app sabe que hacer ante todos los escenarios incluso errores. 
### **Escalable:**
La aplicación debe poder crecer y no tener problemas para soportar una alta concurrencia.

### Message Driven | Arquitectura basada en emisores de mensajes: 
Se basa en la asincronía para enviar y recibir mensajes, es un patrón de 
subscripción y se usan observadores. Muchos de los frameworks de js funcionan así en su interior. 

## CICLO DE VIDA: Estado y Render

### ¿Qué es el estado?
Es el lugar donde se guarda la información reactiva de los componentes, son variables a las que nos subscribimos para recibir una actualización cada vez que cambian sus valores. Con el estado se prepara para reaccionar. 

### Renderizado
Es el proceso por el cual el codigo html pasa a ser elementos visibles en el navegador "DOM" hay diversas estretegias de renderizado. 

### Virtual DOM
Sirve para crear una copia del DOM para no tener que renderizar toda la pagina, esto es ineficiente. 
Por lo tanto, nace la idea de en vez de crear copias del DOM, una es un minivirtual dom para el componente
que lo requiere o directamente no hacerlo si no simplemente ir y actualizar el dom, esto son estrategias de render. 
 
## Que es el ciclo de vida
El flujo en el front-end con frameworks JS es el siguiente:
- Se crean componentes.
- Los componentes tienen un estado.
- Con alguna estrategia de render se renderizan esos componentes.
- El usuario interactua con la app y en función de eso
- Se modifica el estado del componente
- Cuando se modifica el estado se vuelve a renderizar actualizando la información que pidio el usuario
 
## Atomic desing

---

# ECOSISTEMA DE HERRAMIENTAS DE JAVASCRIPT.
## Empaquetadores ó Modules bundlers: 
Hacen que el navegador cargue todo de forma mas optima. 
* Webpack
* Parcel
* Rollup

## Transpiladores: 
Transforman el código JavaScript
* Babel: Nos permite usar el js "del futuro" en todos los navegadores.
* TypeScript: Nuevo lenguaje de programación creado apartir de JS con tipado fuerte.

## Herramientas para UI: 
Son para crear vistas y componentes para la interacción con los usuarios.
* React
* Vue
* Svelte

## Preprocesadores CSS
-Sass 
-Less 
-Stylus

## CSS in JS
Es la forma de escribir css con JavaScript. 
* Styled Components
* Emotion

## Routers: 
Son la forma en que hacemos la navegación de la APP 
- React Router 

## Frameworks: 
Todo en uno
- Angular

## Entornos de desarrollo: 
Son un grupo de librerias ya configuradas 
se pueden elegir desde la consola que librerias quiero, que empaquetadores, entre otros para poder trabajar. 
* Create react app
* Vue CLI
* Svelte CLI
* Polymer CLI 
* Whatever CLI 

## Herramientas para el manejo del estado
- Redux
- XState MobX

## Consumo de datos
- REST:API 
- GraphQL 










