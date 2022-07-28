/*
https://platzi.com/cursos/npm/

1. Acerca de NPM

NPM significa Node Package Manager, y es el administrador de paquetes de JavaScript. Es el administrador "por defecto" de node.js, un entorno de ejecución que facilita la construcción de aplicaciones escalables de red, comandos de terminal y diseño desde servidores (lo que permite crear contenido web dinámico). y permite descargar, subir y conocer "paquetes". Estos paquetes son módulos y librerías de JS que sirven para dar característcas a proyectos. Esto ahorra tiempo a un programador, porque no tiene que hacer todo de cero cada vez que trabaja. Tiene un sitio web, donde se puede conocer la información de cada paquete (colaboradores, versión actual, descargas, etc.). 


4. Iniciar un proyecto

Al iniciar una nueva actividad, vamos a necesitar una carpeta donde guardar todos sus archivos. En esta actividad, es buena idea tener control de versiones, de modo que podamos revisar distintas etapas del proyecto. Otra cosa que se puede necesitar es un administrador de paquetes, como NPM. Para ello, usamos el comando "npm init". 

Este comando nos muestra la configuración necesaria y útil relacionada con todo proyecto nos permite modificarla. En particular, lo que modificamos es el archivo package.json, central en el proyecto que intentamos iniciar. El comando nos ofrece valores por defecto que podamos desear para el proyecto. Podemos interrumpir el comando con "ctrl+c". 

Algo importante por considerar es que, mientras que package.json indica versiones aproximadas o cercanas de un paquete, package-lock.json fija las versiones, de modo que las versiones sean fijas e iguales para todos. Por ello, es aconsejable que sea parte del control de versiones.

Lo primero que nos pide el comando es el nombre del proyecto. Luego, su versión. Después, nos pide la descripción del paquete, que está a nuestra disposición. Posterior a ello, nos pide un "entry point". Este es el archivo desde el que inicia la ejecución del proyecto. Suele tener nombres como index.js o app.js, y estar en una carpeta llamada src. 

En quinto lugar, nos pide un comando de prueba. No es obligatorio usar uno, así que se puede dejar en blanco. Después de ello, nos pide un repositorio git para el proyecto, y nos sugerirá el que ya exista si es el caso. Luego, nos pedirá unas palabras clave, que permitan describir al proyecto para que pueda ser reconocido y categorizado en la comunidad NPM. En octavo lugar, nos pide un autor del proyecto. Ahí podemos poner nuestro correo después de nuestro nombre. Con esto, concluye la creación de la configuración del proyecto.

Otra cosa que se puede hacer es usar el comando "npm init" con la opción y. Esto hace que tome los valores naturales o por defecto de cada parámetro que se requiera para el paquete. Estos valores se pueden alterar mediante el comando "npm set init.<nombre-de-la-configuración-deseada> <valor-deseado>"


5. Instalación de dependencias

Una de las razones principales para utilizar NPM es su capacidad de aportar código creado por otros a tu proyecto. A estas librerías que traes se les llama dependencias. Para instalar una dependencia, realizamos los siguientes pasos:

Primero, nos movemos a la "carpeta raíz" de nuestro proyecto, es decir, donde está package.json. Luego, corremos el comando "npm i" (i es un apocope de install). Dentro de este comando, hay 2 posibilidades: usar la opción "--save" o usar "--save-dev". "--save" es la que se usa por defecto, y significa que es parte fundamental del paquete, mientras que "--save-dev" lo instala de modo que sólo el desarrollador del nuevo paquete lo use, sin obligar a los usuarios a hacerlo. También se puede instalar paquetes de modo que sean opcionales. Esto se hace con la opción -O. Estos son menos usados aun que los  paquetes de desarrollador. Esta diferencia puede ahorrar alrededor de 40 segundos, según el caso.

La instalación crea una carpeta llamada "node_modules", donde se instalan los paquetes que necesita nuestro proyecto. Aunque es importante, no es bueno añadirla al repositorio, sino ponerla en el gitignore. Otra cosa que sucede al instalar un paquete es que se añade al archivo package.json, indicando su versión. Los paquetes instalados con --save-dev se almacenan en una llave distinta del JSON que los que se instalan con --save. "--save-dev" se puede reemplazar por -D, y "--save", por -S.

Los paquetes se pueden instalar a distintos niveles: global o local (aunque no sé si haya más niveles posibles). Hay paquetes que se deben instalar en alguno de los dos niveles, o no funcionarán. Un paquete que debe instalarse globalmente es el denominado "nodemon", un demonio que revisa el valor de alguna variable constantemente. 

Sin embargo, la instalación global puede verse denegada por la falta de permisos de seguridad informática. Para ello, se puede usar el comando sudo, y sucederlo con lo que queramos instalar. Pero usar sudo es una solución ad hoc. Una solución sistemática es la siguiente:
1. Crear una carpeta para instalaciones globales en el directorio ~
2. Configurar a npm para que use esta ruta para las instalaciones con el comando "npm config set prefix '~/.npm-global'"
3. Añadir la línea "export PATH=~/.npm-global/bin:$PATH" al archivo ~/.profile
4. Cargar las variables de ambiente con el comando "source ~/.profile"

Una vez hecho lo anterior, podemos instalar paquetes globalmente usando el comando "npm i -g <nombre-del-paquete>". Para ver si se instaló correctamente, podemos ver la lista con el comando "npm list -g --depth 0". --depth indica cuánto se tiene que revisar, siendo 0 una revisión poco profunda.

6. Instalación de dependencias con force

Es posible revisar el resultado de descargar un paquete a través del comando "npm install <package-name> --dry-run", sin realmente descargarlo.

Otra opción que tenemos con npm es descargar la versión más reciente de un paquete, con el comando "npm install <package-name> -f". Esto nos permite tener las versiones más pulidas y estudiadas de un paquete. 

Cuando no especificamos qué paquete queremos instalar, npm va a instalar todos los paquetes que registra el archivo package.json. 

Por otra parte, con el símbolo @ podemos elegir qué versión del paquete queremos descargar: "npm i package@version"

7. Cómo actualizar y eliminar paquetes.

Como NPM es un administrador de paquetes, es importante que pueda manejar las versiones y almacenamiento de paquetes. Es importante mantener las versiones más recientes de cada paquete para estar seguros de que cuentan con prácticas adecuadas de seguridad, optimización y otros pulidos importantes. Para ello, se puede revisar la lista de paquetes desactualizados a través de "npm outdate". Si queremos ver parte del proceso de npm outdate, podemos darle la opciión --dd. Por último, la actualización se lleva a cabo con "npm update". Otra forma de actualizar es usar el @, pero en vez de un número de versión, usar la palabra latest (más reciente)

Por otra parte, para eliminar un paquete, podemos utilizar el comando "npm uninstall <package>". Una particularidad del proceso de desinstalación es que se puede conservar el paquete dentro del archivo package.json a través de la bandera --no-save.

8. Package lock y el uso de los símbolos ^ y ~

Los paquetes suelen denominar sus versiones con números y puntos. El número a la derecha del segundo punto indica "patches", es decir, versiones que sólo difieren con la anterior por una pequeña reparación de errores (bugfix). El número entre ambos puntos indica actualizaciones menores, es decir, puede incluir: 
  a) adición de funcionalidades nuevas, que son compatibles regresivamente (como JS) con proyectos realizados con el paquete anteriormente. 
  b) deprecación de funciones previamente existentes, sin que ello implique que pierdan su capacidad de operar (aunque quizás de formas distintas

Por último, el número a la izquierda del punto indica cambios significativos.

NPM utiliza los símbolos sombrero (^) y "tilde" (~) en el archivo package.json para indicar las versiones que cubre un paquete. El sombrero (también llamado caret, control, exponente o cuña) indica que el proyecto funciona tanto con los patches posteriores de sus dependencias como con los cambios menores posteriores de sus dependencias. Por otra parte, la virgulilla o tilde indica que el proyecto funciona con los paraches posteriores de alguna dependencia, pero no con actualizaciones menores. Para evitar problemas de versiones posteriores, podemos eliminar del todo estos caracteres, de modo que no hayan problemas de compatibilidad inesperados. Además de estos, se pueden usar los comparativos (<, <=, >, >=) para el mismo fin. 

Además de package.json, tras la versión 5 de NPM existe el archivo package-lock.json. Este sirve para registrar las dependencias usadas y las sub-dependencias que estas puedan tener (junto a las versiones de ambas), y no suele incluir ni ^ ni ~.

Tanto package.json como package-lock.json ahorran al repositorio el peso de la carpeta node_modules, pues indican las dependencias que se tienen que descargar, sin necesidad de que GH las registre.

9. Ejecutar tareas

NPM provee a los usuarios de la capacidad de crear comandos (aunque funcionan como alias, útiles sólo dentro del proyecto). Estos se pueden correr desde la terminal vía "npm run <alias>". La definición de cada comando se da desde el archivo pakage.json, bajo el apartado de scripts. Dos alias muy comunes son test y start, por lo que los desarrolladores de NPM decidieron integrarlo, de forma que para correr estos comandos la sintaxis es "npm <alias>" (omitiendo run)

10. Solución de problemas en proyectos con NPM

Cuando trabajamos con software, es normal que haya problemas en su uso. Por ello, es bueno tener herramientas para comprender lo que pueda pasar cuando sucedan errores. En el caso de NPM, una herramienta útil es la opción "--dd", que nos indica verbalmente los procesos que esté llevando a cabo NPM. Al final del resultado de este comando, aparecerá en pantalla una línea que nos indica pa ubicación y nombre de archivo de un registro (log) de los procesos del comando en cuestión

Por otra parte, a veces los errores pueden suceder porque la carpeta node_modules tiene cache oculto. Para limpiarlo, se usa el comando "npm cache clean --force". Luego, se puede revisar el éxito del comando anterior con otro: "npm cache verify". Otro problema puede surgir cuando los archivos de node_modules están corruptos. Para ello, podemos eliminar la carpeta e instalar todos los paquetes desde cero con "rm -rf node_modules && npm install". En vez de rm -rf, se puede usar "rimraf"

11. Gestionar la seguridad en proyectos con NPM

La seguridad es responsabilidad del desarrollador. Hay que cuidar los proyectos y las dependencias que usamos. NPM nos ayuda con ello cuando instalamos (npm install) las dependencias de un proyecto: nos marca qué dependencias pueden estar desactualizadas o ser vulnerables. Otro comando de NPM que nos ayuda es "npm audit": reviando las vulnerabilidades de los paquetes que tengamos. Este comando tiene la opción --json, que convierte el output en un formato json. 

La resolución de problemas pasa, en parte, por actualizar los paquetes vulnerables. Esto se lleva a cabo con el comando "npm update <nombre-del-paquete> --depth <profundidad,-en-enteros>". Pero algo aún más general es "npm audit fix", que toma los resultados de "npm audit" y resuelve con base en ellos. Una advertencia que vale la pena hacer aquí es que "npm audit fix" puede actualizar nuestros proyectos más de lo que esperamos (más que sólo seguridad), lo que puede afectar el funcionamiento del mismo de otros modos. Es bueno revisar la documentación habitualmente

Por último, un recurso sugerido que nos ayuda a administrar la seguridad de los proyectos es el proyecto snyk (snyk.io). 

12. Crear un paquete para NPM

NPM también es una comunidad y almacén de paquetes. Por ello es importante que sepamos cómo contribuir a ella. Para preparar un paquete a NPM, empezamos por el comando "npm init". Este nos prepara nuestro archivo package.json. Después, editamos nuestro archivo de entrada o principal (main/entry point). Cuando tenemos listo ese archivo, lo exportamos como módulo. Después, desarrollamos un ejecutable que importe el módulo anterior y corra alguna función. Por último, añadimos a package.json la clave "bin", al final del archivo, cuyo valor sea un objeto con una clave que indique un nombre que le queramos dar a nuestro ejecutable. El valor de esa clave será la dirección al archivo ejecutable que hemos redactado. Un detalle que se puede agregar es si queremos que el paquete prefiera correr de modo global o no. 



Curiosidades:
Demonio: servicio que corre en segundo plano dentro de nuestro sistema
#!/usr/bin/... es una línea que se usa en archivos de JS destinados para sistemas Bash, de modo que sepan cómo ejecutarlo. (en el caso de random messages, con Node). 
Los archivos que se exportan con la siguiente sintaxis: "module.exports={<name>}" pasan como objetos para el manejo de otros scripts.
*/
