function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;

    if (nombre === "" || apellido === "" || correo === "") {
        alert("Por favor completa todos los campos obligatorios.");
        return false;
    }
    return true;
}