//*Scope: Cuando hacemos referencia a una variable js va a empezar a buscarla en el entorno mas cercano y seguira buscando en entornos mas lejanos hasta que encuentre el entorno en el cual la variable este declarada. Cada uno de estos entorno recibe el nombre de scope en js. El scope es lo que le da significado a las variables y además determina el conjunto de variables a las que se puede acceder desde una linea de código.

//* El scope depende de donde y como declaremos la variable. Con como se refiere a si se hace con var let o const y el donde se refiere a si se hace de forma global, en una función o un bloque de código. 

//* Scope léxico: El scope de cada variable se determina leyendo el código del programa, sin ejecutarlo. También se le conoco como scope estatico.

//* SCOPE VS CONTEXTO
//* Contexto: Es en donde estamos haciendo referencia a una variable. Contexto y contexto de ejecución son diferentes. Contexto se refiere al valor que tiene la variable this en algún momento de la ejecución. Cuando se habla de Scope se refiere a Contexto de ejecución o entorno que es lo que le da significado a las variables. 

//* TIPOS DE SCOPE
//* SCOPE GLOBAL: Las variables viven en un scope global, es decir, pueden ser accedidas desde cualquier parte del programa dado que estan declaradas por fuera de cualquier bloque de código y es indiferente si las declaramos con var let o const.

//* SCOPE LOCAL: Este se subdivide en dos scope de función y el scope de bloque. 
//* SCOPE DE FUNCIÓN: Las variables son accesibles dentro de todo el cuerpo de la función pero no por fuera de la misma. Si estan declaradas con var son accesibles dentro de toda la función sin impotar que bloque de código las contenga. Conclusión: Con var tenemos un scope de función


//* SCOPE DE BLOQUE: Son accesibles dentro del bloque de código donde son declaradas pero no por fuera del mismo. 

//*BLOQUE DE CÓDIGO: Es toda porción de códig oque está encerrada entre llaves: {} como un if while for o else o el mismo cuerpo de una función. Conclusión: Con var tenemos un scope de bloque.


//? ¿Cual es mejor entonces?
//* Lo mejor: Como buena practica lo mejor es declarar variables dentro del scope mas reducido posible. Pues, las variables globales son impredecibles y ademas se mantienen en memoria durante toda la ejecución del programa. Las variables locales van a estar en memoria durante la ejecución de la función o el bloque de código solamente. 


//* CADENA DE SCOPES: Es como javascript va buscando en cadena la variables hasta que la encuentre, si no lo hace mostrara el mensaje de error de que no esta definida. 