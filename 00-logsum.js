/*
https://platzi.com/cursos/npm/

1. Acerca de NPM

NPM significa Node Package Manager, y es el administrador de paquetes de JavaScript. Es el administrador "por defecto" de node.js, un entorno de ejecución que facilita la construcción de aplicaciones escalables de red, comandos de terminal y diseño desde servidores (lo que permite crear contenido web dinámico). y permite descargar, subir y conocer "paquetes". Estos paquetes son módulos y librerías de JS que sirven para dar característcas a proyectos. Esto ahorra tiempo a un programador, porque no tiene que hacer todo de cero cada vez que trabaja. Tiene un sitio web, donde se puede conocer la información de cada paquete (colaboradores, versión actual, descargas, etc.). 

4. Iniciar un proyecto

Al iniciar una nueva actividad, vamos a necesitar una carpeta donde guardar todos sus archivos. En esta actividad, es buena idea tener control de versiones, de modo que podamos revisar distintas etapas del proyecto. Otra cosa que se puede necesitar es un administrador de paquetes, como NPM. Para ello, usamos el comando "npm init". 

Este comando nos muestra la configuración necesaria y útil relacionada con todo proyecto nos permite modificarla. En particular, lo que modificamos es el archivo package.json, central en el proyecto que intentamos iniciar. El comando nos ofrece valores por defecto que podamos desear para el proyecto. Podemos interrumpir el comando con "ctrl+c". 

Lo primero que nos pide el comando es el nombre del proyecto. Luego, su versión. Después, nos pide la descripción del paquete, que está a nuestra disposición. Posterior a ello, nos pide un "entry point". Este es el archivo desde el que inicia la ejecución del proyecto. Suele tener nombres como index.js o app.js, y estar en una carpeta llamada src. 

En quinto lugar, nos pide un comando de prueba. No es obligatorio usar uno, así que se puede dejar en blanco. Después de ello, nos pide un repositorio git para el proyecto, y nos sugerirá el que ya exista si es el caso. Luego, nos pedirá unas palabras clave, que permitan describir al proyecto para que pueda ser reconocido y categorizado en la comunidad NPM. En octavo lugar, nos pide un autor del proyecto. Ahí podemos poner nuestro correo después de nuestro nombre. Con esto, concluye la creación de la configuración del proyecto.

Otra cosa que se puede hacer es usar el comando "npm init" con la opción y. Esto hace que tome los valores naturales o "por defecto" de cada parámetro que se requiera para el paquete. Estos valores se pueden alterar mediante el comando "npm set init.<nombre-de-la-configuración-deseada> <valor-deseado>"
*/
