// Funcion Pasando Parametros y Devolviendo un String. PD:: "El parametro nombre funciona como contenedor de una variable".
function saludar (nombre) {
    return "Hola " + nombre + "!";
}

console.log(saludar("Diego"));

// Tambien podemos pasar parametros que se pasan a travez de argumentos a travez del Array argument SIN indicarlo en la definicion de la funcion aunque esta definicion no es muy utilizada 

function despedir () {
    var tipo = arguments[0], nombre = arguments[1];
    return tipo + ", " + nombre + "!";
}

console.log(despedir("adios", "Diego"));

// Ambito de una funcion. Por defecto, cuando estamos declarando una varible con "var" la estamos delcarando de forma global y es accesible desde cualquier parte de la aplicacion.
// Si declaramos una variable dentro de una funcion, esta variable tendra un ambito LOCAL pero si la declaramos fuera de la funcion hacia adentro, tendra un ambito global
// const crea una constante y let define el ambito de la varible donde ha sido declarada
// EJEMPLO

var valor = "GLOBAL";

function funcionLocal() {
    var valor = "Local";
    return valor;
}

console.log(valor);
console.log(funcionLocal());