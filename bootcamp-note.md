# Aprendiendo __markdown__  #
## menu ##
1. definición
1. Sintaxis
1. ejemplo

### definición ###
> Aunque en realidad Markdown también se considera un lenguaje que tiene la finalidad de permitir crear contenido de una manera sencilla de escribir, y que en todo momento mantenga un diseño ~~legible~~, así que para simplificar puedes considerar *Markdown* como un método de escritura. (*https://markdown.es/*)

### Sintaxis ###
1.  pequeña lista de los *markdown* mas usados _ejemplo:_
  1. **Negrita**  `**text**`
  1. ~~tachado~~  `~~text~~`
  1. *cursiva* `*text*`
  1. link `[title](http://)`
  1. H1 `# text #`
  1. H2 `## text ##`
  1. H3 `### text ###`


1. para añadir una foto desde **markdown** `![foto](http://..)`
### Ejemplo ###
1. :tada:
![markdown](https://maxcdn.icons8.com/iOS7/PNG/512/Programming/markdown-512.png)
# Aprendiendo __Git__  #
## menu ##
1. definición
1. comando con su definición

### definición ###
**Git** es un sistema de control de versiones que usan los desarrolladores diseñado por __Linus Torvalds__

### comandos con su definición ###
1. **git init** creamos un nuevo repositorio (local)
1. **git statis** inspeciona el contenido de working directory y staging area
1. **git add** añadimos archivos de working directory al staging area
1. **git dif** muestra las diferencias entre el working directory y el staging area
1. **git commit** almacenar permanentemente los cambios de los archivo para subir al repositorio
1. **git log** mostrar toda la lista del historial de los
1. **git checkout HEAD filename** descarta los cambios en el working directory
1. **gir reset HEAD filename** elimina los cambios en el archivo en el staging area
1. **git branch** lista todos los branch del directorio

# Aprendiendo __CSS__  #
## menu ##
1. definición
1. Recomendaciones
1. ejemplo

### definición ###
Resultado de imagen de css
Hojas de estilo en cascada (o CSS, siglas en inglés de Cascading Stylesheets) es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.

### Especificidad ###
La Especificidad gana a la cascada es un valor que adquieren los selectores y que determinan que reglas CSS (o estilos) se aplican a un elemento cuando existen conflictos


### pseudo clases ###
`:hover` cuando se pasa el cursor por ensima del elemento
`:active` Cuando se hace click
`:visited` un enlace al que ya se visito
`:focus` un campo de formulario seleccionado
`:empty` selecciona elementos vacios
`:not()` selecciona a los elementos que no coincidan con el selector pasado como parametro
`:selection` para aplicar estilos a la seleccion
`:target` selecciona el destino de un enlace interno

### Recomendaciones ###
mantenér el código :
* ordenado
* simple
* sin repeticiones

`!importan` siempre gana sobre Especificidad
`!importan > Especificidad > cascada`
### ¿Como se calcula la Especificidad ? ###
* Etiquetas                 **: 1**
* Clases y pseudoclases     **: 10**
* Id                        **: 100**
* Estilos en linea          **: 1000**

### em ###
*em* Son la unidad relativa por excelencia, y a veces resulta confuso entenderla. Por definición un em es igual al valor del font-size del elemento al que pertenece. Si el elemento que contiene una propiedad en em no tiene un font-size definido, lo heredará del padre, o del primer ancestro con font-size declarado – si ninguno tiene font-size declarado, tomará el del HTML: 100% -Si un elemento tiene un font-size declarado, todo otro valor dado en em en ese mismo elemento equivale a ese *font-size:*.

`1em ` equivale a `14px`
`list-style-type:` sirve para cambiar el estilo a las viñetas en el listado

# Aprendiendo Javascript #

## menu ##
 * defininición
 * DOM
 * closure function
 * consejos
 * eventos

### definición ###
> La sintaxis es muy similar a otros lenguaje como Java y C, normas basicas que definen la sintaxis de **javascript** son las siguientes:
* *No se tiene en cuenta los espacios en blanco y las nuevas líneas*
* *Se distinguen las mayúsculas y minúsculas*
* *No se define el tipo de las variables*
* *No es necesario terminar cada sentencia con el caácter de punto y coma*
* *Se pueden incluir comentarios*
##### fuente: #####
 [librosweb.es](http://librosweb.es/libro/javascript/)

### DOM ###
:tada:
Transforma todos los documentos HTML en un conjunto de elementos  llamados _nodos_ que están interconectados y que representan los contenidos de las páginas web y las relaciones entre ellos. Por su aspecto, la unión de todos se llama _"árbol de nodos"_

![arbol de nodos](img/arbol_nodos.gif)
***
__fuente :__ [librosweb](http://librosweb.es/libro/javascript/capitulo_5/arbol_de_nodos.html)
### closure function ###
El consepto es *clausurar* el contexto en el que se ejecuta una función,
_ejemplo :_
```javascript
  function externa(x){
    var variable = 3;

    function interna(y){
      console.log(x + y + (++variable));
    }ta
    interna(10);
  }
  externa(2);
```
`> 16`
### consejos ###
* Usar `===` para comparar objetos, igualdad estricta
* mostar una ventana emergente solicitando la edad: `var age = prompt("cual es tu edad")`
* para escribir javascript dentro de un string `yo tengo ${age} años`
* Retorna el primer valor falso si existe `a && a.texto && a.edad`, hacer comprobaciones de carga de información
* Retorna el primer valor verdadero si existe `a || a.text || a.edad`
* El comando `let` a diferencia de `const`, permite reasignar
* para testear se usa `console.assert(suma(2,5) == 7, "esto debe ser verdad")`
* para pasar por valor un objeto se usa
``` javascript
var persona = Object.assign({},{nombre: "miller", apellido: "ossa"})
```

### Manejadores de eventos y variable this ###

En los eventos, se puede utilizar la variable *this* para referirse al elemento HTML que ha provocado el evento.
dentro del cpodigo de un evento, javascript crea automáticamente la variable *this*, que hace referencia al elemento XHTML que ha provocado el evento.

# Aprendiendo locaStorage   #
* es un objecto al que se le asigna un valor para almacenar datos,( es una mini base de datos en lado del cliente), los datos almacenasdos en localStorage no tienen fecha de expiración, los datos almacenados en sessionStorage son eliminados cuando finaliza la sesion de navegación - lo cual ocurre cuando se cierra el navegador
```javascript
localStorage.setItem('miGato', 'Juan');
```
###  A tener en cuenta ###
* limite del locaStorage 5 Mb
* localStorage funciona con clave, valor
* localStorage lo almacena con string

### JSON ###
* `JSON.stringify(valor[,remplazo[, espacio]])`
El valor será convertido a una cadena JSON ,
*stringify* convierte tal como escribi a un string,
__definicion MDN__ El método JSON.stringify() convierte un valor dado en javascript a una cadena  JSON, opcionalmente reemplaza valores si es especificada la función de remplazo, o si se especifican las propiedades mediante un array de reemplazo.

# Modulos #
## Comportamiento objectos mediante módulos ##
> Comportamiento super importante de Components.utils.import es que los módulos son cacheados cuando se cargan e importaciones posteriores no recargan una nueva versión del módulo, sino que usan la version cacheada anteriormente. Esot significa que un módulo dado será compartido cuando sea importado varias veces. Cualquier modificacion a datos, objectos o funciones estarán disponibles en cualquier alcance (scope) que haya importado el módulo. Por ejemplo, si el módulo de ejemplo fue importado en dos alcances (scope) diferentes de javascript, los cambios en un alcance(scope) seŕan visibles desde el otro alcance(scope)

_Alcance(Scope)1:_
```javascript
Components.utils.import("resource://app/modules/my_module.jsm");

alert(bar.size + 3);  // muestra "6"

bar.size = 10;
```
_Alcance(scope)2:_
```javascript
Components.utils.import("resource://app/modules/my_module.jsm");

alert(foo());         // muestra "foo"
alert(bar.size + 3);  // muestra "13"
```
* javascript pone arriba las funciones
* si son declaradas como const no se pueden pueden llamar antede de definirlas

### _ejemplo patrón del módulo revelador_ ###   
```javascript
var miModuloRevelador = (function () {
    var nombre = "Juan Ramos",
        saludo = "Hola !";

	// Función privada
    function imprimirNombre() {
        console.log("Nombre:" + nombre);
    }

	// Función pública
    function asignarNombre(nuevoNombre) {
        nombre = nuevoNombre;
    }

    // Revelar accesos públicos (opcionalmente con otros nombres)
    return {
        setName: asignarNombre,
        greeting: saludo
    };
})();

miModuloRevelador.setName("Carlos");
```
## tips ##
* const solo se permite modificar si es objectos
* let es visible dentro del la funcion definida
* Debes tener en cuenta que la variable no está recibiendo la función directamente, sino más bien el resultado de ejecutar la función, es decir, el objeto que se devuelve a través del return de la función anónima.

## Common JS ##
 * es el remplazo de _patrón del módulo revelador_, ejemplos de estos son browserify

## npm ##
* npm public -> para publicar paquete en añadido en las dependencias
* en node-modules -> se guarda el proyecto que descarga de internet
## animaciones CSS 3D##
* transform-style: preserve-3d  -> al padre para cambiar contenido a sus hijos
* perspective: 600px;
# promesas #
> **ejemplo :** Supongamos que vamos a comprar comida a un restaurante de comida rápida, cuando terminamos de pagar por nuestra comida nos dan un ticket con un número, cuando llamen a ese número podemos entonces ir a buscar nuestra comida.

>Ese ticket que nos dieron es nuestra promesa, ese ticket nos indica que eventualmente vamos a tener nuestra comida, pero que todavía no la tenemos. Cuando llaman a ese número para que vayamos a buscar la comida entonces quiere decir que la promesa se completó. Pero resulta que una promesa se puede completar correctamente o puede ocurrir un error, ¿Qué error puede ocurrir en nuestro caso? Por ejemplo puede pasar que el restaurante no tenga más comida, entonces cuando nos llamen con nuestro número pueden pasar dos cosas.

1. Nuestro pedido se resuelve y obtenemos la comida.
1. Nuestro pedido es rechazado y obtenemos una razón del por qué.
[fuente](https://platzi.com/blog/que-es-y-como-funcionan-las-promesas-en-javascript/)

```javascript
const ticket = getFood();

ticket
	.then(food => eatFood(food))
	.catch(error => getRefund(error));
```
## metodos de promice ##
Las promesas se crean usando un constructor llamado Promise y pasándole una función que recibe dos parámetros, _resolve_ y _reject_, que nos permiten indicarle a esta que se resolvió o se rechazó.

```javascript
const promise = new Promise(function (resolve, reject){
	const number = Math.floor(Math.random() * 10);

	setTimeout(
		() => number > 5
			? resolve(number)
			: reject(new Error('Menor a 5')),
		1000
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));
```
### tiene 3 estados ###
1. Pendiente
1. Resuleta
1. Rechazada

# webpack #
Su utilidad reside en la fragmentación de código: no todas las partes de una webapp requieren todo el código JavaScript, por eso se __encarga de cargar sólo las partes necesarias en cada petición.__
* exportar funciones con la palabra _export_ al inicio
*export default* exporta la funcion declarada por defecto

* permite hacer código asyncronico
