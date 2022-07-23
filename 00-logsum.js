/*
https://platzi.com/cursos/npm/

1. Acerca de NPM

NPM significa Node Package Manager, y es el administrador de paquetes de JavaScript. Es el administrador "por defecto" de node.js, un entorno de ejecución que facilita la construcción de aplicaciones escalables de red, comandos de terminal y diseño desde servidores (lo que permite crear contenido web dinámico). y permite descargar, subir y conocer "paquetes". Estos paquetes son módulos y librerías de JS que sirven para dar característcas a proyectos. Esto ahorra tiempo a un programador, porque no tiene que hacer todo de cero cada vez que trabaja. Tiene un sitio web, donde se puede conocer la información de cada paquete (colaboradores, versión actual, descargas, etc.). 


4. Iniciar un proyecto

Al iniciar una nueva actividad, vamos a necesitar una carpeta donde guardar todos sus archivos. En esta actividad, es buena idea tener control de versiones, de modo que podamos revisar distintas etapas del proyecto. Otra cosa que se puede necesitar es un administrador de paquetes, como NPM. Para ello, usamos el comando "npm init". 

Este comando nos muestra la configuración necesaria y útil relacionada con todo proyecto nos permite modificarla. En particular, lo que modificamos es el archivo package.json, central en el proyecto que intentamos iniciar. El comando nos ofrece valores por defecto que podamos desear para el proyecto. Podemos interrumpir el comando con "ctrl+c". 

Lo primero que nos pide el comando es el nombre del proyecto. Luego, su versión. Después, nos pide la descripción del paquete, que está a nuestra disposición. Posterior a ello, nos pide un "entry point". Este es el archivo desde el que inicia la ejecución del proyecto. Suele tener nombres como index.js o app.js, y estar en una carpeta llamada src. 

En quinto lugar, nos pide un comando de prueba. No es obligatorio usar uno, así que se puede dejar en blanco. Después de ello, nos pide un repositorio git para el proyecto, y nos sugerirá el que ya exista si es el caso. Luego, nos pedirá unas palabras clave, que permitan describir al proyecto para que pueda ser reconocido y categorizado en la comunidad NPM. En octavo lugar, nos pide un autor del proyecto. Ahí podemos poner nuestro correo después de nuestro nombre. Con esto, concluye la creación de la configuración del proyecto.

Otra cosa que se puede hacer es usar el comando "npm init" con la opción y. Esto hace que tome los valores naturales o por defecto de cada parámetro que se requiera para el paquete. Estos valores se pueden alterar mediante el comando "npm set init.<nombre-de-la-configuración-deseada> <valor-deseado>"


5. Instalación de dependencias

Una de las razones principales para utilizar NPM es su capacidad de aportar código creado por otros a tu proyecto. A estas librerías que traes se les llama dependencias. Para instalar una dependencia, realizamos los siguientes pasos:

Primero, nos movemos a la "carpeta raíz" de nuestro proyecto, es decir, donde está package.json. Luego, corremos el comando "npm i" (i es un apocope de install). Dentro de este comando, hay 2 posibilidades: usar la opción "--save" o usar "--save-dev". "--save" es la que se usa por defecto, y significa que es parte fundamental del paquete, mientras que "--save-dev" lo instala de modo que sólo el desarrollador del nuevo paquete lo use, sin obligar a los usuarios a hacerlo. También se puede instalar paquetes de modo que sean opcionales. Esto se hace con la opción -O


La instalación crea una carpeta llamada "node_modules", donde se instalan los paquetes que necesita nuestro proyecto. Aunque es importante, no es bueno añadirla al repositorio, sino ponerla en el gitignore. Otra cosa que sucede al instalar un paquete es que se añade al archivo package.json, indicando su versión. Los paquetes instalados con --save-dev se almacenan en una llave distinta del JSON que los que se instalan con --save. "--save-dev" se puede reemplazar por -D, y "--save", por -S.

Los paquetes se pueden instalar a distintos niveles: global o local (aunque no sé si haya más niveles posibles). Hay paquetes que se deben instalar en alguno de los dos niveles, o no funcionarán. Un paquete que debe instalarse globalmente es el denominado "nodemon", un demonio que revisa el valor de alguna variable constantemente. 

Sin embargo, la instalación global puede verse denegada por la falta de permisos de seguridad informática. Para ello, se puede usar el comando sudo, y sucederlo con lo que queramos instalar. Pero usar sudo es una solución ad hoc. Una solución sistemática es la siguiente:
1. Crear una carpeta para instalaciones globales en el directorio ~
2. Configurar a npm para que use esta ruta para las instalaciones con el comando "npm config set prefix '~/.npm-global'"
3. Añadir la línea "export PATH=~/.npm-global/bin:$PATH" al archivo ~/.profile
4. Cargar las variables de ambiente con el comando "source ~/.profile"

Una vez hecho lo anterior, podemos instalar paquetes globalmente usando el comando "npm i -g <nombre-del-paquete>". Para ver si se instaló correctamente, podemos ver la lista con el comando "npm list -g --depth 0". --depth indica cuánto se tiene que revisar, siendo 0 una revisión poco profunda.



Vocabulario:
Demonio: servicio que corre en segundo plano dentro de nuestro sistema
*/
