function validarFormulario() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();

    // Validar nombre y apellido (solo letras)
    const regexLetras = /^[a-zA-Z\s]{1,15}$/;
    if (!regexLetras.test(nombre)) {
        alert('Por favor, ingresa un nombre válido (solo hasta 15 letras).');
        return false;
    }
    if (!regexLetras.test(apellido)) {
        alert('Por favor, ingresa un apellido válido (solo hasta 15 letras).');
        return false;
    }
    // Validar correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
    }
    // Validar WhatsApp (solo números)
    const regexNumeros = /^\d{10,15}$/;
    if (!regexNumeros.test(whatsapp)) {
        alert('Por favor, ingresa un número de WhatsApp válido (entre 10 y 15 números unicamente).');
        return false;
    }

    // Si todas las validaciones son correctas
    return true;
}

