Asincronía y event loop en JavaScript 

Conceptos a tener en cuenta:

Procesamiento Single thread y Multi thread.

Operaciones de CPU: Pasan el mayor tiempo consumiendo los procesos de la CPU y Operanciones de I / O: Van a pasar la mayor parte del tiempo esperando la petición del recurso que han solicitado.

Operaciones Concurrentes: Cuando dos tareas progresan de forma simultanea.  
Operaciones Paralelas: Cuando dos tareas se ejecutan a la vez. La diferencia es que la concurrencia salta super rapido de un proceso a otro, va a una tarea la adelanta, salta a la otra la adelanta, vuelve y salta a la anterior y así sucesivamente.En cambio en el paralelismo se ejecutan a la vez al mismo tiempo, pero para eso se debe tener varios hilos. Aunque hay variantes. 

Operaciones bloqueantes y No bloqueantes: Se refiere a la fase de espera, bloqueante, no devuelve el control al hilo principal hasta que haya terminado todas sus tareas. Por otro lado no bloqueante, las tareas se ejecutan e inmediatamente devuelve el control al hilo principal se haya terminado o no. 

Operaciones Síncronas y Asíncronas: Se refiere a cuando tendra lugar la respuesta. Sincrono significa que la respuesta sucede en el presente. Asincrono, la respuesta sucede en un futuro, es decir, se ejecuta, pero no se sabe cuando va venir la respuesta. 

LIFO: Last in first out, esto tiene que ver con como se ejecutan las tareas que se apilan en el callstack en JS.

Código Síncrono Bloqueante:
Cada operación se hace de una vez bloqueando el flujo del hilo principal y este queda bloqueado mientras espera la respuesta para luego liberar recursos y pasar a la siguiente y asi sucesivamente. 


Promesas: Son objetos que representan el resultado eventual de una operación asincrona. Estas pueden tener varios estados. 
Pendiente: No se ha resuelto ni rechazado la promesa.
Resulta: La promesa se cumplio y se resuelve
Rechazada: La promesa no se cumple y se rechaza. 

Resolve y Reject son funciones que hacen ya algo predeterminado. El proposito de la función resolve es cambiar el status de la promesa de pendiente a resuelto! y el de la función reject es cambiar el status de la promesa de pendiente a rechazado. En este caso lo que el desarrollador debe hacer es indicar cuando la promesa se va considerar resuelta y cuando se va considerar rechazada. Esto se hace por medio de un condicional.

