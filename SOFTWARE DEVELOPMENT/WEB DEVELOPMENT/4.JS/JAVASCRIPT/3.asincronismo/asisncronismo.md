# Asincronía y event loop en JavaScript 

## Conceptos a tener en cuenta:

Procesamiento Single thread y Multi thread.

Operaciones de CPU: Pasan el mayor tiempo consumiendo los procesos de la CPU y Operanciones de I / O: Van a pasar la mayor parte del tiempo esperando la petición del recurso que han solicitado.

Operaciones Concurrentes: Cuando dos tareas progresan de forma simultanea.  
Operaciones Paralelas: Cuando dos tareas se ejecutan a la vez. La diferencia es que la concurrencia salta super rapido de un proceso a otro, va a una tarea la adelanta, salta a la otra la adelanta, vuelve y salta a la anterior y así sucesivamente.En cambio en el paralelismo se ejecutan a la vez al mismo tiempo, pero para eso se debe tener varios hilos. Aunque hay variantes. 

Operaciones bloqueantes y No bloqueantes: Se refiere a la fase de espera, bloqueante, no devuelve el control al hilo principal hasta que haya terminado todas sus tareas. Por otro lado no bloqueante, las tareas se ejecutan e inmediatamente devuelve el control al hilo principal se haya terminado o no. 

Operaciones Síncronas y Asíncronas: Se refiere a cuando tendra lugar la respuesta. Sincrono significa que la respuesta sucede en el presente. Asincrono, la respuesta sucede en un futuro, es decir, se ejecuta, pero no se sabe cuando va venir la respuesta. 

LIFO: Last in first out, esto tiene que ver con como se ejecutan las tareas que se apilan en el callstack en JS.

Código Síncrono Bloqueante:
Cada operación se hace de una vez bloqueando el flujo del hilo principal y este queda bloqueado mientras espera la respuesta para luego liberar recursos y pasar a la siguiente y asi sucesivamente. 


---
# PROMESAS

Son un objeto especial de JavaScript que representan el resultado eventual de una operación asincrona. Esto significa que existe un código que va realizar una tarea la cual conlleva cierto tiempo (el cual es desconocido en la mayoria de casos) y por lo tanto si existe **Otro código que depende del que esta siendo ejecutado de forma asincrona**. 

### Las promesas se pueden descomponer de la siguiente forma:

1. Acciones = Código asincrono de la promesa.
2. Consumidor = El código que espera el resultado de esa operación asincrona, en otras palabras el resultado de la promesa.
3. Resultado = Resuelta o Rechazada.

### Sintaxis de una promesa
Las promesas reciben 3 pametros, resolve,reject y una función de tipo callback que dentro de su cuerpo contiene las acciones de la promesa. 

## Estados de una promesa 
Las promesas pueden tener varios estados y estos indican que esta pasando o que paso con la promesa. 
Las promesas tienen unas propiedades internas las cuales se conocen como estado de la promesa y son:

* Pendiente: No se ha resuelto ni rechazado la promesa.
* Resuelta: La promesa se cumplio y se resuelve.
* Rechazada: La promesa no se cumple y se rechaza. 

Estas propiedades son _callbacks_ que se llaman cuando se resuelva o rechaze la promesa. 

Una promesa solo tiene un resultado final posible: o se resuelve o se rechaza y se acabo, es decir solo se resuelve una vez o solo se rechaza una vez, por lo tanto se debe tener cuidado y usar estas propiedades una sola vez.


## Resolve y Reject 
**Resolve y Reject** son funciones que hacen ya algo predeterminado. 

>El proposito de la función Resolve es cambiar el estatus de la promesa de pendiente a resuelto! 

>El proposito de la función Reject es cambiar el estatus de la promesa de pendiente a rechazado! 

El desarrollador debe establecer cuando la promesa se va considerar resuelta o rechazada. Esto se hace por medio de un condicional.


## Then, Catch y Finally

Por otro lado las promesas tienen unos métodos los cuales son _then, catch y finally_ estos pueden entenderse como el consumidor _(código que espera el resultado de la promesa)_ es decir es el que sufre las consecuencias del resultado de esa promesa(recordando que esta puede ser satisfactoria o no.)

>Then se ejecuta cuando el resultado de la promesa es positivo (recibe lo que se mande en el resolve).

>Catch se ejecuta cuando el resultado es negativo (recibe lo que se mande en el reject del reject)

> Finally es código que se ejecuta independiente de si la promesa de resolvio o se rechazo. 

----

# ASYNC / AWAIT 

