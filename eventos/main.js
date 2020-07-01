// Manejando Eventos 
// Asociamos a un elemento de la web el evento
let target = document.querySelector("#respuesta");

target.addEventListener('click', onClickHandler, false);

// Funcion que manejara el evento
function onClickHandler (e) {
    e.preventDefault();
    console.log(e);
}

// Propagacion de eventos 
// En el siguente ejemplo vamos escuchar el evento click en el elemento header que contiene un h1 y un h2 

let header = document.querySelector("header");

header.addEventListener('click', function (e) {
    console.log('Has Clickado', e.target.nodeName);
    e.stopPropagation(); // para evitar que se propague de abajo hacia a arriba
});

// Si clicamos dentro de los nodos del header mostrara los elementos h1 y h2 
// Aunque estemos escuchando el elemento header, tenemos acceso a todos los nodos que se encuentran dentro de el.

// Ahora imaginemos que tambien añadimos un escuchador de enventos al documento raiz document como el siguente:

document.addEventListener('click', function (e) {
    console.log('Has clickado en el documento');
});

// Cuando Hagamos click en cualquier parte de la pagina, nos mostrara el mensaje del documento. Pero si clikeamos en una parte del header tendremos los dos mensajes por consola

// Si queremos mantener el escuchador ne el document pero cuando hagamos click en header no salte el otro evento, podemos hacer uso de e.stopPropagation(), para evitar que se porpague de abajo a arriba.

// Patrón PubSub
// Vamos a crear un closure llamado PubSub donde donde tendremos 2 funciones, la funcion subscribe donde escucharemos los eventos, y la funcion publish que los pblicara 

let pubsub = (function () {
    // Este Objeto actura como cola de todos los eventos que se 
    // Produzcan. Los guardara con el nombre del evento como clave 
    // y su valor sera un array con todas las funciones callback encoladas.
    let suscriptores = {};

    function EventObject () {};

    function subscribe (event, callback) {
        // Si no existe el evento, creamos el objeto y el array de callbacks
        // y lo añadimos 
        if (!suscriptores[event]) {
            let suscriptorArray = [callback];
            suscriptores[event] = suscriptorArray;

            // Si existe, añadimos al array de callback la funcion pasada por parametro
        } else {
            suscriptores[event].push(callback);
        }
    }

    function publish (event, data) {
        // Si el evento existe, recorremos su array de callbacks y los 
        // ejecutamos en orden.
        var eventObject = new EventObject();
        eventObject.type = event;

        if (data) {
            eventObject.data = data;

            // NOTA: Cuando un objeto es instansiado, se debe de utilizar la notacion de objeto y no la de arreglos para manipular las propiedades y cuando ya el objeto existe para agragar propiedades se debe de usar la notacion de arreglos 
        }

        if (suscriptores[event]) {
            suscriptores[event].forEach(function (callback) {
                callback(eventObject);
            });
        }
    }

    function getSub () {
        return suscriptores;
    }

    return {
        // Los metodos publicados que devolvemos seran pub y sub
        pub: publish,
        sub: subscribe,
        getSub
    };
}());

pubsub.sub('miEvento', function(e) {
    console.log('miEvento ha sido lanzado!');
});

pubsub.sub('miEvento', function(e) {
    console.log('otro evento ha sido lanzado');
});

pubsub.pub('miEvento');

console.log(pubsub.getSub());

// Con Datos PubSub
pubsub.sub('miOtroEvento', function (e) {
    console.log('miOtroEvento ha sido lanzado, y contiene: ', e.data.misDatos);
});

pubsub.pub('miOtroEvento', {
    misDatos: 'Estos son mis datos'
});

// Escuchando evento Click
document.body.addEventListener('click', function (e) {
    manejador(e);
    let color = 'rgb(' + Math.floor((Math.random() * 255)) + ',';
    color += Math.floor((Math.random() * 255)) + ',';
    color += Math.floor((Math.random() * 255)) + ')';
    document.body.style.backgroundColor = color;
    console.info('Nuevo Color', color);
});

// Lanzar un evento Manualmente con .dispatcheEvent()
let lanzadorEventos = new Event('click');
document.body.dispatchEvent(lanzadorEventos);

// Manejador de eventos
function manejador (evento) {
    console.log("-----------------------------")
    console.log("Type: "+evento.type); // Tipo
    console.log("Bubbles: "+evento.bubbles);
    console.log("Cancelable: "+evento.cancelable);
    console.log("CurrentTarget: ", evento.currentTarget);
    console.log("DefaultPrevented: "+evento.defaultPrevented);
    console.log("EventPhase: "+evento.eventPhase);
    console.log("Target: ", evento.target);
    console.log("TimeStamp: "+evento.timeStamp);
    console.log("IsTrusted: "+evento.isTrusted); // true - Usuario
    console.log("=============================")
}
// Example: manipulacion de variable con notacion de arreglos
let persona = {};

function agregarNombre (clave, valor) {
    if (!persona[clave]) {
        nombreValor = [valor];
        persona[clave] = nombreValor;
    }
}

agregarNombre('nombre', 'Diego');
console.log(persona);