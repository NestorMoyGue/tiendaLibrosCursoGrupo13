document.addEventListener("DOMContentLoaded", function () {
    let formularioContacto = document.getElementById("formulario-contacto");

    function validarFormulario() {
        let telefono = document.getElementById("telefono").value;
        let nombre = document.getElementById("nombre").value;
        let email = document.getElementById("email").value;
        let mensaje = document.getElementById("mensaje").value;

        let esTelefono = estelefono(telefono);
        if (nombre === "" || email === "" || mensaje === "") {
            mostrarAlerta("Error", "Por favor completa todos los campos del formulario.", "danger");
            return false;
        }
        if (!esTelefono) {
            mostrarAlerta("Error", "Por favor ingrese un número de teléfono válido", "danger");
            console.log('estelefono? ', esTelefono);
            return false;
        }

        return true;
    }

    formularioContacto.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado de envío del formulario
        if (!validarFormulario()) {
            console.log('no se validó y no se envió');
        } else {
            console.log('se validó y se envió');
            conexionBackendAPI()
                .then(() => {
                    // En caso de éxito
                    mostrarMensajeExito();
                })
                .catch(() => {
                    // En caso de error
                    mostrarAlerta("Error", "Hubo un error al procesar tu solicitud. Por favor, inténtalo de nuevo más tarde.", "danger");
                });
        }
    });

    function mostrarAlerta(titulo, mensaje, tipo) {
        // Eliminar alerta existente si la hay
        let alertaExistente = document.querySelector('.alert');
        if (alertaExistente) {
            alertaExistente.remove();
        }

        // Crear elemento de alerta
        let alerta = document.createElement("div");
        alerta.classList.add("alert", `alert-${tipo}`, "mt-3");
        alerta.textContent = `${titulo}: ${mensaje}`;

        // Insertar la alerta después del formulario
        formularioContacto.parentNode.insertBefore(alerta, formularioContacto.nextSibling);
    }

    function mostrarMensajeExito() {
        // Crea un elemento de párrafo para mostrar el mensaje de éxito
        let mensajeExito = document.createElement("p");
        mensajeExito.textContent = "¡Hemos recibido tu contacto exitosamente!";

        // Inserta el mensaje justo antes del formulario
        formularioContacto.parentNode.insertBefore(mensajeExito, formularioContacto);

        // Opcional: podrías ocultar el formulario después de mostrar el mensaje
        formularioContacto.style.display = "none";
    }
});

function estelefono(numero) {
    // Expresión regular para verificar que es un teléfono válido
    const telefonoValido = /^\+\d+$/;
    return telefonoValido.test(numero);
}

function conexionBackendAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let fail = Math.random() > 0.5;
            if (fail) {
                reject("Error: fallo irrecuperable");
            } else {
                resolve("Finalización satisfactoria");
            }
        }, 2000);
    });
}
