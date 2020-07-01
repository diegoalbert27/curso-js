// Este Bucle fue una novedad que introdujo ES5, pertenece a las funciones de la clase Array de una manera secuencial. Veamos un ejemplo:

var miArray = [1, 2, 3, 4];

miArray.forEach(function (elemento, index) {
    console.log("El valor de la posicion " + index + " es: " + elemento);
});

// Imagina que quieres recorrer los valores y propiedades de un objeto de este tipo:

var libro = {
    titulo: "La vida de Diego",
    autor: "Diego",
    numPaginas: 100,
    editorial: "caracol",
    Precio: "2.23"
}
// Con forEach no puedes, porque es un metodo de la clase Array

// Esto lo puedes conseguir haciendo uso de las funciones de la clase Object: getOwnPropertyNames que devuelve un array con todas las propiedades del objeto y con el metodo ya mecionado accedes al valor. Veamos un ejmplo

var propiedades = Object.getOwnPropertyNames(libro);

propiedades.forEach(function (name) {
    var valor = Object.getOwnPropertyDescriptor(libro, name).value;
    console.log("La propiedad " + name + " contiene: " + valor);
});