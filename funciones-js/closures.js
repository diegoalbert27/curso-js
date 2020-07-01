// Los Closures o funciones cierre son un Patron de diseño muy utilizado en JS 

// FUNCIOMES COMO OBJETOS 

var saludar = function (nombre) {
    return "Hola " + nombre + "!";
}

// FUNCIONES ANIDADAS. Las funciones anidadas pueden tener otra funciones dentro de ellas, produciendo nuevos ambitos para las variables definidas dentro de cada una. y para acceder desde el exterior a las funciones internas, tenemos que invocarlas con el operador doble parentesis "()()"
// EJEMPLO 

var a = "valor 1";

function global () {
    var b = "valor 2";
    function local () {
        var c = "valor 3";
        return a + b + c;
    }
    return local();
}

// FUNCION CIERRE O CLOSURE
// Es una funcion que encapsula una serie de variables y definiciones locales que unicamente seran accesibles si son devueltas con el operador return.
// JS al no tener una definicion de clases como tal (como por ejemplo JAVA, aunque en la version ECMASCRIPT6 esto cambia un poco este patron de creacion de closures hace posible modularizar nuestro codigo y crear algo parecido a las clases).

//EJEMPLO

var miContador = (function () {
    _contador = 0; // Por Convencion, a las variables con un '_' delant
    
    function incrementar () {
        return _contador++;
    }
    
    function descrementar () {
        return _contador--;
    }

    function valor () {
        return _contador;
    }
    
    return {
        incrementar: incrementar,
        descrementar: descrementar,
        valor: valor
    }

})();

// Funciones como Clases
/** 
 * Un CLosure es como una clase, la principal diferencia es que una clase la principal diferencia es que una
 * Clase tendra un constructor que cumple el mismo cometido que en el closure, al crear un objeto a partir 
 * de una clase debemos usar el parametro new y si es un closure, al inicializar un nuevo objeto, se le pasa 
 * lo que le devuelve la funcion cierre. Veamos un ejemplo de la misma funcion, codificada como clase y como closure y como se crearia sus objetos.
*/

// EJEMPLO 

function inventario (nombre) {
    var _nombre = nombre;
    var _articulos = {};

    function add (nombre, cantidad) {
        _articulos[nombre] = cantidad;
    }

    function borrar (nombre) {
        delete _articulos[nombre];
    }

    function cantidad (nombre) {
        return _articulos[nombre];
    }

    function name () {
        return _nombre;
    }

    return {
        add: add,
        borrar: borrar,
        cantidad: cantidad,
        name: name
    }
}

var libros = inventario("libros");

libros.add("Angular", 3);
libros.add("JS", 5);
libros.add("Node.JS", 6);

// Ahora veamos como seria esto mismo pero codificado como clase

function inventary (nombre) {
    this.nombre = nombre;
    this.articulos = [];

    this.add = function (nombre, cantidad) {
        this.articulos[nombre] = cantidad;
    }

    this.borrar = function (nombre) {
        delete this.articulos[nombre];
    }

    this.cantidad = function (nombre) {
        return this.articulos[nombre];
    }

    this.getNombre = function () {
        return this.nombre;
    }
}

//Una vez definida la clase, crear objetos a partit de ella e invocar a sus metodos sera asi:

var libros = new inventary('Libros');

libros.add("La Divina Comedia", 8);

// Esta forma de codificar las funciones como clases se conoce como factory Pattern o template functions.