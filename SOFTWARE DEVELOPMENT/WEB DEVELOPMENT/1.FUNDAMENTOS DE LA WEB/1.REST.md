<!-- # Para titulos
## Jearquia
### Jerarquia
#### Jerarquia

**Para texto en negrita**
_Para texto en cursiva_

[Para una web](https://platzi.com/home)
![Para una imagen](./)

\*para escapar

>Para citar

### Para listar
*Lista
*Lista
*Lista
*Lista

1.Lista
2.Lista
3.Lista
4.Lista

### divisiones
---
*** -->

# Aplicaciones y sitios web 
Las aplicaciones o paginas que funcionan en la web son sistemas que funcionan sobre la infraestructura del internet, esto permite que diversas maquinas distribuidas a través del mundo se puedan comunicar. Para realizar esta tarea las computadorass asumen un rol en el **modelo cliente-servidor**.

## MODELO CLIENTE-SERVIDOR
La arquitectura cliente-servidor es un modelo de diseño de software en el que las tareas se reparten entre los proveedores de recursos o servicios, llamados **servidores**, y los demandantes, llamados **clientes**. Un cliente realiza peticiones a otro programa, el servidor, quien le da respuesta.
![](./CLIENTE-SERVIDOR.webp)

## ROL DE CLIENTE: 
El cliente es un dispositivo, generalmente una computadora, un celular o tableta el cual pide o solicita recursos los cuales son necesarios para visualizar algun tipo de contenido o para realizar alguna tarea en la maquina del cliente.

## ROL DE SERVIDOR: 
La maquina con el rol de servidor suelen ser **computadoras bastante poderosas** las cuales estan en _data-centers_ estas maquinas estan a la espera que las peticiones de los clientes para asi servir (_de ahí su nombre_) la información, contenido o lo que sea que el cliente necesite. Esta información esta guardada en los discos duros de estos servidores. Es importante resaltar que _un servidor también puede asumir el rol de cliente_ ante otros servidores, dado que un servidor también puede solicitar recursos a otros servidores.

## ¿Pero como se comunican estos?
Entender el como se comunica un cliente con un servidor es un proceso complejo que para poder comprenderlo completamente es necesario profundizar un poco en temas de redes. Sin embargo, se pueden cubrir los conceptos básicos para trabajar en desarrollo. 

## MODELO OSI: 
Es un estándar de interconexión de sistemas que se compone de 7 capas.

La capa de aplicación es la que se usa en programación ya que es en la que se encuentran los principales protocolos para comunicar los sistemas como http.
![](./modeloosi.png)

## HTTP:
**Es el protocolo mas extendido a la hora de comunicar maquinas:** Para comunicar cualquier cosa se debe establecer un lenguaje o un medio de comunicación el cual entiendan ambas cosas. El protocolo http es concretamente un estándar de la capa de aplicación que permite que haya comunicación entre servidores y clientes. 

El protocolo http contiene ciertas funciones que definen funcionalidad de capas inferiores(sesión y presentación).

![](./protocolohttp.png)


## URLS: 
Las urls son el mecanismo que utiliza **http** para indicar una series de parámetros que necesitan los clientes para comunicarsen con los servidores en la siguiente imagen se descompone por partes como suele estar _estructurada una url_: 

![](./url.png)
![](./urldehttp.png)


## PETICIÓN o SOLICITUD: 
Las urls se transforman por debajo en peticiones que tienen una estructura mucho más detallada de que es lo que necesita hacer el cliente contra el servidor. 

![](./peticion.png)


## RESPUESTA:
La respuesta es lo que: valga la redundancia responde la maquina con el rol de servidor. Estas respuestas también tienen una estructura y se introduce otro componente llamado códigos de estado (_Http Status Codes_) que son códigos informativos de que es lo que paso en el servidor cuando se le hizo esa petición por parte del cliente. 
![](./respuesta.png)

## Códigos de estado de respuesta HTTP:
1. Respuestas informativas (100–199),
2. Respuestas satisfactorias (200–299),
3. Redirecciones (300–399),
4. Errores de los clientes (400–499),
5. Errores del servidor (500–599).
![](./C%EF%BF%BDdigos-Estado-Http.jpeg)


## IMAGEN RESUMIDA DE HTPP:
![](./HTTP.webp)

---

## ¿Cómo es el flujo del desarrollo de una aplicación web?
![Flujo de desarrollo de una app web](./flujo-desarrollo-de-una-ppweb.png)







































