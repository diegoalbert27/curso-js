// La definicion como una clase a cambiado ES6 aporta un azucar sintactio para declarar una clase como la mayoria de los lenguajes de programacion orientadas a objetos, pero por debajo sigue siendo una funcion prototipal.
// El ejemplo anterior del inventario, transormado a ES6 seria tal que asi

class inventario {
    constructor(nombre) {
        this.nombre = nombre;
        this.articulo = [];
    }

    add (nombre, cantidad) {
        this.articulo[nombre] = cantidad;
    }

    borrar (nombre) {
        delete this.articulo[nombre];
    }

    cantidad (nombre) {
        return this.articulo[nombre];
    }

    getNombre () {
        return this.nombre;
    }
}

// Utilizando la palabra reservada class creamos una clase que sustituye a la funcion constructora anterior. despues los metodos de la clase inventario

var libros = new inventario("libros");

libros.add("Angular", 5);
libros.add("React", 7);
libros.add("Biblia", 8);

console.log(libros);

// Aplicando Herencia de una forma muy sencilla 

class vehiculo {
    constructor(tipo, nombre, ruedas){
        this.tipo = tipo;
        this.nombre = nombre;
        this.ruedas = ruedas;
    }

    getRuedas () {
        return this.ruedas;
    }

    arrancar () {
        console.log(`Arrancando el ${this.nombre}`);
    }

    aparcar () {
        console.log(`Aparcar el ${this.nombre}`);
    }
}

// Podemos Heredar con la clase reservada extends y con super() llamamos al constructor de la clase que hereda.
// Por ejemplo coche

class coche extends vehiculo {
    constructor(nombre) {
        super("coche", nombre, 4);
    }
}

// Si ahora creamos un nuevo objeto coche podemos utilizar los metodos de la clase Vehiculo

let fordFocus = new coche("fordFocus");
console.log(fordFocus.getRuedas());
fordFocus.arrancar();
fordFocus.aparcar();