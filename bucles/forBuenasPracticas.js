// Es comun que en nuestros desarrollo utilicemos este tipo de bucle a menudo, por ejemplo para recorrer un arrays. Si tomamos unas consideraciones en cuenta, podemos hacer progrmas mas eficientes. Por ejemplo, un bucle de ete tipo:
console.time("test");
var objeto = {
    unArray: new Array(1000)
};

for (var i = 0; i < objeto.unArray.length; i++) {
    objeto.unArray[i] = "Hola!";
}
console.timeEnd("test");
// Tiene varios puntos, donde perdemos redimiento. el primero de ellos es comprobar la longitud del array dentro de la definicion del bucle for.Esto hace que en cada iteraccion estemos comprobando la longitud y son pasos que podemos ahorrarnos y que haran mas eficiente la ejecucion. lo ideal es cachear este valor en una variable, ya que no va a cambiar.
console.time("test");
var longitud = objeto.unArray.length;

for (var i = 0; i < longitud; i++) {
    objeto.unArray[i] = "Adios!";
}
console.timeEnd("test");
// Otra optimizacion que podemos hacer es cachear tambien el acceso al array dentro del objeto grandesCitas, De esta manera no ahorramos un paso en cada iteraccion al acceder al interior del bucle, a la larga son varios milisegundos que salvamos y efecta al rendimiento.
console.time("test");
var unArray = objeto.unArray;

for (var i = 0, length = unArray.length; i < length; i++) {
    unArray[i] = "Como estas?";
}
console.timeEnd("test");
// Como se puede comprobar, es mas rapido de la ultima manera