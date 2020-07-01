// EL uso De Prototype
// Un problema importante que tiene este tipo de estructura, es que cuando creamos un nuevo Objeto a partir de la clase Inventary, reservara espacio en memoria para toda las clase incluytendo atributos y metodos. con un objeto solo creado no supone mucha desventaja, pero imaginemos que creamos varios objetos con la clase inventary() los metodos de esta clase seran replicados en memoria, lo que hace ineiciente

// Pasa solucionar esto podemos hacer uso del objeto Prototype que permite que objetos de la misma clase compartan todos los metodos y no sean replicados en memoria de manera ineficiente
// La manera correcta de implementar la clase es:

function inventario (nombre) {
    this.nombre = nombre
    this.articulos = [];
};

inventario.prototype = {
    add: function (nombre, cantidad) {
        this.articulos[nombre] = cantidad;
    },
    borrar: function (nombre) {
        delete this.articulos[nombre];
    },
    cantidad: function (nombre) {
        return this.articulos[nombre]; 
    },
    getNombre: function () {
        return this.nombre;
    }
}

// De esta manera, si querem,os crear un nuevo objeto de la clase Inventario y usar sus metodos, lo podemos hacer como veiamos haciendo hasta ahora, solo que internamente sera mas eficiente el uso de memoria por parte de javascript y obtendremos una mejora en el rendimiento de nuestra aplicacion, creando de nuevo los objetos

var libros = new inventario("libros");

libros.add("La divina comedia", 9);
libros.add("El principito", 2);
libros.add("gato negro", 2);

console.log(libros);

var games = new inventario("games");

games.add("LoL", 5);
games.add("GTA V", 6);
games.add("CoD", 5);

console.log(games);

//Ya no estan replicados los metodos