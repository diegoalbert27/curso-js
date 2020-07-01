// Promesas ES& Objeto Nativo Promise 
        // Es un Objeto que sirve para reserva el resultado de una operacion futura.
        // Este resultado Llega a traves de una operacion asincrona como puede ser una peticion http o una lectura de ficheros, que son operaciones no instantaneas, que requieren de un tiempo

        // Ejemplo con callback
        // Cargar Estilos
        function loadCss (url, callback) {
            let elem = window.document.createElement('link');
            elem.rel = "stylesheet";
            elem.href = url;
            window.document.head.appendChild(elem);
            callback();
        }

        loadCss('style.css', function (err) {
            if (err) {
                console.log(err);
            }
            console.log('Estilos Cargados');
        });

        // Ahora con Promesas
        // Cargar Estilos
        function cssCargar (url) {
            var promise = new Promise(
                function resolve (resolve, reject) {
                    let elem = window.document.createElement('link');
                    elem.rel = "stylesheet";
                    elem.href = url;
                    window.document.head.appendChild(elem);
                    resolve();
                }
            );
            return promise;
        }

        let promise = cssCargar('main.css');
        promise
        .then(function () {
            console.log('Estilos Cargados');
        })
        .catch(function (err) {
            console.log(err);
        });

        // Funcion de division Utilizando Promesa
        function dividir (num1, num2) {
            let promise = new Promise(
                function resolve (resolve, reject) {
                    if (num2 === 0) {
                        // Utilizamos reject para los errores
                        reject(new Error('Dividir entre ceros es Infinito'));
                    } else {
                        resolve(num1/num2);
                    }
                }
            );
            return promise;
        }

        let promesa = dividir(5, 4);
        promesa
        .then(function (res) {
            console.log('La division es', res);
        })
        .catch(function (err) {
            console.log(err);
        });

        // Utilizando la funcion fetch() para AJAX
        const contenido = document.getElementById("contenido");
        let template = ``;
        fetch('usuario.json')
        .then(response => {
            return response.json();
        })
        .then (elemento => {
            const contenido = document.getElementById("contenido");
            let template = ``;
            let propiedades = Object.getOwnPropertyNames(elemento.personas);
            propiedades.forEach(name => {
                let valor = Object.getOwnPropertyDescriptor(elemento.personas, name).value;
                template += `
                <ul>
                    <li>${valor.username}</li>
                </ul>
                `;
            });
            contenido.innerHTML = template;
        });