# ¿Qué es un gestor de paquetes?

En muchos artículos hablo de las grandes cualidades de los gestores de paquetes, de cómo pueden actualizar su sistema con un clic; Instalar software sin descargar manualmente, y sin dolor eliminarlos. Comprender cómo funcionan es una pequeña e interesante pieza de un rompecabezas lleno de magia. Los gestores de paquetes también se pueden entender como una colección de herramientas, que sirven para automatizar el proceso de instalación, actualización, configuración y eliminación de paquetes de software. Permiten integrar código de terceros en tus propios proyectos, no solo se encargan de instalar una librería, si no también, configurar tu aplicación añaden archivos extra de configuración o algo que se deba hacer para conectar el proyecto con las librerías. 
Paquetes de software 
El primer concepto que nos encontramos en la mayoría de las distribuciones de Linux es el paquete, como parece que significa algo empacó. Por lo general, un paquete está compuesto de varias cosas, en su mayoría encontrará binarios, código fuente y documentación. El concepto en sí es muy simple: un único archivo que contiene el software. Pero no son sólo los paquetes que, por ejemplo, paquetes RPM pueden contener instrucciones adicionales para instalar los archivos en el sistema, o para eliminarlos, o hacer copias de seguridad de ellos en la actualización. Esencialmente paquete es un software (maletas).
Dependencias
No todos los softwares son independientes (que puede funcionar por sí sola sin instalar otro software / biblioteca), en Windows es un ejemplo notable .NET: muchas aplicaciones se basan en esta biblioteca, sin ella no se pueden ejecutar. En Linux este concepto es un poco más complicado … Muchos paquetes dependen de otros paquetes para funcionar, y por lo general requieren más de un paquete. Sin esas dependencias esos paquetes incluso pueden negarse a instalar. Lo peor de todo, es un paquete requiere el paquete que está tratando de instalar, podría tener más paquetes necesarios y así sucesivamente, creando una larga cadena de dependencia. Esto se conoce como el infierno de dependencia . Esta situación no era soportable por cualquier persona, por lo cual Gestor de paquetes de sistemas se inventó para resolver el problema. El gestor de paquete instalara la herramienta principal y todas sus dependencias, por lo tanto, el desarrollador no tiene que saber que paquetes dependen de otros paquetes para poder funcionar, si no que el gestor analiza un paquete y sabe cuales son todas sus dependencias y por lo tanto también las va a instalar para que pueda haber un correcto funcionamiento.  
Gerente de empaquetación
Ahora que ya sabe lo que es un paquete y qué dependencias son el concepto detrás de los gestores de paquetes debe ser simple. Los gestores de paquetes dependencias se resuelven y se disuelven demonios dependencia. El uso de un gestor de paquetes permitirá que un paquete se instale sin mucho esfuerzo del usuario. Pero esto no es lo único bueno de los gestores de paquetes: también mantendrá una base de datos de software instalado, al igual que el Registro de Windows. De esta manera se realiza un seguimiento de todos los programas instalados y su eliminación será más sencilla. Pero una pregunta que surge es: ¿de dónde proviene el paquete?
Repositorios
Un paquete es esencialmente un archivo, y obtenerlo a través de Internet es simple. Pero cuando utilice un gestor de paquetes, no tendrá que descargar nada manualmente. Eso es gracias a los repositorios. Los repositorios son esencialmente una ubicación de almacenamiento para los paquetes. Cuando instale una distribución Linux, su sistema vendrá con repositorios preconfigurados. Ésos contendrán los paquetes apropiados para su distribución y para su encargado del paquete. Gracias a repositorios que no tendrá que buscar a través de Internet para obtener los paquetes, y que consigue también una mayor seguridad ya que obtendrá paquetes de fuentes de confianza (repositorios que vienen junto con su distribución por lo general será lo suficientemente seguro para ser de confianza).
Es todo por hoy. La comprensión de la gestión paquete es fundamental para un administrador de sistemas, y seguramente útil para los usuarios comunes que intentan quedar superusuarios, en este artículo que tenga una mirada de lo que los gestores de paquetes hacen y lo que se pensaba para, pero hay muchos de ellos por ahí Y los comandos difieren un poco para cada uno. No temas, las instrucciones básicas son siempre similares. 🙂





Gestores de paquetes: Conclusiones y resumen
¿Qué son?
En primer lugar, se debe definir que son los paquetes: Un paquete es un conjunto de ficheros que se agrupan y que puede instalar y eliminar como conjunto. 
-Los paquetes son un conjunto de archivos o software que sirve como herramienta adicional o librería en un proyecto.
-Los gestores de paquetes son una herramienta que permiten mantener esas librerías actualizadas, instalarlas, eliminarlas, entre otras cosas. A través de simples comandos.
-Algunos paquetes requieren de otros para funcionar lo cual se conoce como dependencia.
-Los comandos varían de acuerdo al sistema gestor de paquetes que se esté utilizando.
-Los gestores de paquetes resuelven las dependencias, es decir, saben que paquetes requieren otros para funcionar y por lo tanto también los instalan y los gestionan.
-Agrupan paquetes según su función. 

NPM
NPM es el gestor de paquetes para JavaScript. Con npm puedes encontrar, compartir y reutilizar paquetes creado por otros desarrolladores para de esa forma facilitar cierta parte del proceso de desarrollo. Puedes usar npm para instalar, compartir y distribuir código, gestionar dependencias en tus proyectos, así como recibir comentarios de otras personas.
Las dependencias pueden ser actualizadas y optimizadas desde el terminal. Además, puedes crear proyectos con archivos de dependencias y versiones que son directamente cargadas desde el archivo package.json file que es creado en cada proyecto.



¿Cómo funciona el Node Package Manager?
Esta herramienta funciona de dos formas:
Como un repositorio ampliamente utilizado para la publicación de proyectos Node.js de código abierto. Lo que significa que es una plataforma en línea donde cualquiera puede publicar y compartir herramientas escritas en JavaScript.
Como una herramienta de línea de comandos que ayuda a interactuar con plataformas en línea, como navegadores y servidores. Esto ayuda a instalar y desinstalar paquetes, gestionar versiones y gestionar las dependencias necesarias para ejecutar un proyecto.
Para usarlo, debes instalar node.js, ya que están desarrollados de forma agrupada. 
PARA SABER MAS SOBRE NPM VISITAR:  https://www.hostinger.co/tutoriales/que-es-npm























NOTAS NPM:
A la hora de iniciar un proyecto es fundamental iniciar un proyecto con un gestor de paquetes para dejar una configuración de nuestro entorno de desarrollo.

No había entendido del todo la parte de las dependencias opcionales. Investigué un poco y tiene todo el sentido del mundo.
Son las dependencias que aportan algo extra al proyecto pero que no son necesarias para que el proyecto funcione. Por lo que si su instalación falla por cualquier motivo el proyecto es totalmente funcional.
.
Un ejemplo de esto es si quieres decorar los logs en la consola, puedes agregar un paquete como chalk que te ayudará a lograrlo. El proyecto va a funcionar igual asi los logs no estén decorados, por lo que este sería un paquete opcional.

Importancia de package lock y versionado 

Los scripts son comandos que podemos establecer para poder ejecutar desde la consola 

En NPM se pueden encontrar diferentes errores. 
Sería recomendable primero intentar solucionar con npm audit fix y lo que no se solucione lo actualizamos de a uno?
Podemos revisar las vulnerabilidades de nuestro proyecto con:
npm audit
En caso de tener vulverabilidades, se recomienda usar el comando:
npm audit fix
Y en caso de que esto no lo solucione, podemos ir actualizandolos de uno en uno.

Ejecutar el comando para saber donde estoy ubicado
pwd
mkdir random-messages
cd random-messages/
git init
npm init


Dependencias 

Dependencia de desarrollo vs dependencia de producción 
Es cualquier archivo que usa el proyecto ya sea en la fase de desarrollo o en la fase de producción. 
En función de eso se tienen dos entornos, el de desarrollo y el de producción. 
Las dependencias de terceros como REACT se ponen en el package.json 


https://www.hostinger.co/tutoriales/que-es-npm
https://docs.npmjs.com/cli/v8/configuring-npm/package-json
https://docs.npmjs.com/cli/v8/configuring-npm/package-json
https://snyk.io/
https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally
https://medium.com/noders/t%C3%BA-yo-y-package-json-9553929fb2e3