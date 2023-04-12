INTRODUCCIÓN AL DESPLIEGUE DE APLICACIONES. 


1. Apps Monolíticas: En los 90’s surgieron lenguajes como PHP y Perl, los cuales permitian desarrollar aplicaciones de una forma fácil y rápida. donde se mezclaba código HTML con código PHP para consultas a la base de datos, etc. La desventaja de esto era que se tenía mucha disponibilidad del archivo (si una linea de código fallaba se podía romper toda la aplicación). Con el paso de los años esto se fue mejorando, separando el HTML y el CSS de los archivos PHP mediante el uso de motores de templating, se dejaba la lógica en otros archivos PHP y las consultas a la Base de Datos mediante ORMs. Esto mejoró un poco la estructura de la aplicación, sin embargo teníamos el problema de tener toda la aplicación en un solo servidor. Cuando algo fallaba en el servidor, esto hacía que toda la aplicación dejara de funcionar.
Con el paso de los años se empezó a buscar un concepto llamado “bajo acoplamiento, alta cohesión”, que básicamente consiste en separar componentes de las aplicaciones no solo a nivel lógico sino a nivel físico, será mucho mejor.


# Bajo acoplamiento y alta cohesión 

2. Microservicios: Los microservicios son un enfoque para el desarrollo de aplicaciones en el que una aplicación se construye como un conjunto de servicios modulares (es decir, módulos / componentes débilmente acoplados). Cada módulo apoya un objetivo comercial específico y utiliza una interfaz simple y bien definida para comunicarse con otros conjuntos de servicios. En lugar de compartir una sola base de datos como en la aplicación Monolitica, cada microservicio tiene su propia base de datos. Tener una base de datos por servicio es esencial si desea beneficiarse de los microservicios, ya que garantiza un acoplamiento flexible. Cada uno de los servicios tiene su propia base de datos. Además, un servicio puede utilizar el tipo de base de datos que mejor se adapte a sus necesidades.

# Despliegue en servicios frontend
# Despliegue de Bases de datos
# Despliegue en servicios backend

## Despliegue en GitHub Pages 
Se crea un repo con el nombre de tu cuenta .github.io se suben los archivos se ahce push y eso genera el link

## Despliegue usando Surge
https://surge.sh/

usar dos comandos 
 npm install --global surge
 surge
 generado : https://spooky-wound.surge.sh/


Como dato importante, GitHub pages solo acepta páginas estáticas, es decir, sin backend, es por eso que se suelen usar API’s para despliegues aquí:D!


## Despliegue usando Netlify 






El despliegue de una aplicación LAMP (Linux, Apache, Mysql, PHP) puede ser de los más conocidos y populares dado la popularidad de php y mysql Cuando empezaron a aparecer las aplicaciones web .

Existen varias formas de desplegar, estas son las más comunes:

Hosting compartido: la fórmula más popular es comprar un servicio de hosting donde te proveen de una interfaz web llamada Cpanel donde puedes crear tu base de datos mysql, subir tus archivos php por ftp o administrador web y tener tu app en minutos.

Hosting gratuito: Algunas empresas proveen hosting gratuito a cambio de que se integre publicidad en tus scripts php o de acceder a la información de tu sitio, sin embargo estas tienden a tener interfaces web menos amigables para subir archivos de la aplicación y la base de datos.

Usar un VPS: utilizando plataformas como Digital Ocean, se puede crear un droplet (forma en que llaman a los VPS en esta empresa), para tener acceso SSH y poder instalar php,mysql, apache y lo que se necesite para instalar la aplicación web, puede tomar más tiempo en configurar todo, y el vps se debe administrar por la persona, a cambio, se gana acceso total al servidor para modificar php, mysql, y realizar tareas de gestión, o escalamiento de la aplicación.

JOTL
OracleJava.jpg
Por otra parte, en el mercado también es muy popular el stack de la empresa Oracle JOTL (Java, Oracle, Tomcat, Linux) dado el soporte y la fama que tiene Oracle de tener el sistema de base de datos más robusto, y esto sumado con Java que es un lenguaje de programación multiplataforma: funciona para hacer aplicaciones de escritorio, aplicaciones web, aplicaciones móviles para Android, etc.

Estas son las formas más comunes para desplegar una aplicación JOTL.

Usar una plataforma como servicio: Se puede utilizar una PaaS - Platform As A Service, como es el caso de heroku, que se encarga del despliegue de la aplicación y se puede hacer un despliegue más rápido, pero se pierde el control sobre el servidor.

Usar una Infraestructura como servicio: IaaS o Infrastructure As a Service, son empresas como AWS de Amazon, Cloud Platform de Google, Azure de microsoft o incluso IBM cloud, estas ofrecen un control mayor sobre la infraestructura, desde los servidores VPS, red, Backups, disponibilidad, escalabilidad, seguridad entre otras ventajas, sin embargo requieren de un conocimiento en manejo de infraestructuras para poder configurar todas estas opciones.

Usar infraestructura propia: Algunas empresas prefieren disponer de una infraestructura propia, esto se conoce como on-premises, entre la razones y ventajas para este tipo de infraestructura están:
Privacidad del código fuente o aplicación, ya que este se encontrará local y no en servidores en una nube a los que terceros podrían acceder.

La segunda razón es por latencia, dado que un datacenter en la misma ciudad podrá ofrecer mejores tiempos de respuesta que uno en otro País o continente.

Finalmente por control, ya que las empresas que adoptan esto, tienen control total sobre la infraestructura física (no sólo la lógica como ocurre con las IaaS).

Como desventajas principales están: Disponibilidad física, si el lugar donde está el datacenter sufre un incendio, terremoto o cualquier situación que afecte el lugar, podría perderse el acceso físico a la información y/o a la red.

Costo, mientras la computación en la nube ofrece precios competitivos por horas, escalamiento dinámico y otros temas que parecen casi automáticos, en los entornos on-premise los costos pueden ser mayores dado que se debe costear servidores, racks de almacenamiento, el datacenter donde se almacenará la información, la energía, internet, seguridad, y demás costos asociados.

Existen muchas opciones para desplegar aplicaciones de este tipo, cada una tiene ventajas y desventajas, depende del tipo de proyecto la opción a seleccionar.

Nota: En el Stack de Java y Oracle también se puede intercambiar Apache Tomcat con GlassFish u otros, incluso en la parte de sistema operativo, cambiando Linux por Windows server.

