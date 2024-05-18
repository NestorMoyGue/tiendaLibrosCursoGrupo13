document.addEventListener("DOMContentLoaded", function() {

    function validarFormulario() {
        var nombre = document.getElementById("nombre").value;
        var email = document.getElementById("email").value;
        var mensaje = document.getElementById("mensaje").value;
        var motivo = document.getElementById("motivo").value;

        if (nombre === "" || email === "" || mensaje === "" || motivo === "") {
            alert("Por favor completa todos los campos del formulario.");
            return false;
        }

        return true;
    }

    var formularioContacto = document.getElementById("formulario-contacto");

    formularioContacto.addEventListener("submit", function(event) {
        if (!validarFormulario()) {
            console.log('se valido y se mando: '); 
        }
    });
});


function mostrarDetalles(element) {
    let detalles = element.querySelector(".detalle");
    if (detalles.style.display === "none" || detalles.style.display === "") {
        detalles.style.display = "block";
    } else {
        detalles.style.display = "none";
    }
}


document.addEventListener('DOMContentLoaded', function() {
    let libros = document.querySelectorAll('.libro_catalogo');

    libros.forEach(function(libro) {
        libro.addEventListener('click', function() {
            let detalles = libro.querySelector('.detalle');

            if (detalles.style.display === "none" || detalles.style.display === "") {
                detalles.style.display = "block";
            } else {
                detalles.style.display = "none";
            }
        });
    });
});
