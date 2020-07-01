// Ademas de forEach, tenemos el bucle ForIn con este tipo de bucles podemos iterar entre las propiedades de un objeto de una manera mas sencilla, que a la vista ateriormente. La sintaxis es for (key in object) siendo key el valor de la propiedad, Como siempre veamos un Ejemplo Practico 

var libro = {
    titulo: "La divina comedia",
    autor: "Dante",
    numPaginas: 555,
    precio: "10.2"
};

for (prop in libro) {
    console.log("La Propiedad " + prop + " contiene: " + libro[prop]);
}

// Itera sobre todas las propiedades de un objeto, en un orden arbitrario.
function mostrarPropiedades (objeto, nombreObjeto) {
    var resultado = "";
    for (i in objeto) {
        resultado += nombreObjeto + ". " + i + " " + objeto[i] + "\n";
    }
    return resultado;
}

console.log(mostrarPropiedades(libro, "libro"));