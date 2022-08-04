//* Datos almacenados vs datos en memoria: La diferencia radica en que los datos almacenados de forma permanente son los que estan en el disco duro y los datos almacenados en memoria son los que estan en la ram. A nivel de hardware la ram y la CPU se comunican de una forma mucho más rapida de lo que lo hace el disco duro con la CPU. Lo malo que tienen los discos duros es que los tiempos de lectura y escritura con ficheros son muy lentos. Usar la memoria ram como mecanismo para mover información de un lado a otro es mucho más eficiente y es ahí donde entran los Buffers y los Streams. 



//* Buffers: Un buffer es una tira de bityes. Es un espacio en la memoria (en general RAM) que almacena datos binarios. En el lado del back-end es muy recurrente hacer uso del FS. Se pueden ver como un arreglo de un buffer, dentro de un buffer se pueden manipular varios objetos como los sockets. Para acceder a estos espacios de memoria se usa la clase Buffer que es como una secuencia de entero de forma similar a una matriz en JavaScript.


// let buffer = Buffer.alloc(1);
// let buffer = Buffer.from([1,4,5,6]);
// let buffer = Buffer.from("Hola")


// console.log(buffer)
// console.log(buffer.toString())

// let abc = Buffer.alloc(26);

// console.log(abc)

// for(let i = 0; i < 26; i++){
//   abc[i] = i + 97
// }

// console.log(abc.toString());


//* Streamns: Son como el paso de datos de un lado a otro. 


