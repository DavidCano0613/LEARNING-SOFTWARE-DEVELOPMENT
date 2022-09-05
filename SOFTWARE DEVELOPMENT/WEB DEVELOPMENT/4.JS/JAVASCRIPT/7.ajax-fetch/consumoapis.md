# AJAX :ASYNCHORONOUS JAVASCRPT & XML(today Json is used)

Todos los lenguajes de programación tienen la capacidad de leer e interpretar archivos json y xml.

**¿Que es AJAX? Es** un mecanismo que tiene JavaSript para trabajar con la asincronia y hacer peticiones a un sevidor. 

AJAX: Nace con la necesidad de hacer que el navegador web no se tenga que recargar cada vez que se hace una request al servidor. Funciona como una especie de intermediario entre el cliente y el servidor. 

En los ultimos años se trabaja con el API de FETCH, es una forma moderna de hacer AJAX. 

Para trabajar con ajax lo ideal es levantar un servidor local para usar http dado que si se abre el archivo directamente se estaria usando el protocolo file, lo cual no es ideal.  

Existen tres métodos nativos para hacer una petición ajax.

AJAX tiene algunas librerias externas como Axios (basada en promesas), etc.
## Es muy importante conocer los posibles estados de una petición asincrona.
0. Unitialized: Significa que el cliente esta apenas empezando la petición.
1. Loading: Cargando: Se estan enviado los datos al servidor.
2. Loaded: Cargado: Ya el servidor respondio al cliente pero este no tiene la info lista (renderizada)
3. Interactive: En este punto ya el motor de js tiene acceso a los datos de esta petición.
4. Complete: Cuando ya ha terminado todo este proceso y todos los datos estan listos para ser manipulados y renderizar contenido.

Como AJAX es una interacción cliente-servidor es muy importante entender los status code de una respuesta de http y sus verbos. 

## Petición AJAX con el objeto XML HTTP REQUEST pasos:
Paso 1 = Instanciar un objeto xhr.
Paso 2 = Asignación del evento y en el callback programar la lógica.
Paso 3 = Establecer el método y la URL a la cual se le pide información.
Paso 4 = Enviar la petición.

* readystatechange: Es el evento de xhr más importante y se lanza cuando detecta cualquier cambio de estado en la petición. readystate solo, son los mencionados estados de una petición ajax. 
* status: codigo de estado del servidor (200,404,etc)
* response: Lo que responde el servidor como tal, no confundir con crud booster.

---
# FETCH 
Es un mecanismo para trabajar las peticiones asincronas de una forma mas optima con promesas. Realmente, una petición usando fetch por debajo se convierte en una XHR.

Para trabajar con fetch se usan los siguietes pasos. 

Se llama al método fetch el cual recibe como parámetro la URL del recurso al cual se le van a pedir datos. (Normalmente una API).

## Como fetch funciona con promesas su estructura se puede descomponer de la siguiente forma: 

El resultado de una petición fetch puede ser exitosa o rechazada. Basicamente es si se pudo acceder al recurso o no. 

Método then: Con then se hace la programación, en el then se debe mandar una callback que contiene la respuesta del servidor. 

Método catch: Para capturar el error, en caso de haberlo y poder personalizarlo si se desea. 

En el finally: Es para ejecutar un bloque de código independientemente de si se resuelve o no la petición.  

Una vez se haya realizado la petición y esta sea exitosa se debe convertir a JSON la respuesta dado que si no, no podemos manipular los datos. Para esto fetch tiene una función que se le pega a la response que es .json()

TENER EN CUENTA: Para que catch se pueda ejecutar se analiza la propiedad ok de la respuesta la cual es un boleano, esta propiedad "ok" se debe manipular de la siguiente forma: Si es true entonces puedo pasar la respuesta a json, si no se debe ejecutar el método reject de las promesas y asi caera en el catch y se podra manipular correctamente el error. Es decir, hacer el reject pasara el flujo al catch.  

Finally: Es un método de las promesas que se ejecuta sin importan si se resuelve o no la promesa.

Conclusiones: El primer then transforma el readable stream a un objeto de json que se convierte en un objeto de js. En el segundo se hace la lógica de programación y en el catch se captura el error. Hay una forma más optima de hacer esto y es con async-await.

# AXIOS 
Es una libreria que permite hacer peticiones ajax y también funciona con promesas. 

Se puede installar con npm o con link

Para trabajar con esta libreria se debe tener en cuenta lo siguiente que no se vio en fetch y es que fetch puede recibir no solo la url si no también un objeto de configuración. En esta api de axios funciona muy similar. En este primer caso a Axios solo se le va pasar la URL. 

A diferencia de XHR y de fetch es que en AXIOS no se tiene que hacer el parseo de los datos a JSON dado que la libreria lo hace y estos vienen en la propiedad data de la respuesta. 

Axios crea un objeto de tipo error por nosotros