function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const whatsapp = document.getElementById('whatsapp').value;
    const genero = document.getElementById('genero').value;
    const denguePositivo = document.getElementById('denguePositivo').value;
    const suscripciones = document.getElementsByName('suscripcion').value;
       
    // Validar campos obligatorios
      
    if (nombre === '' || apellido === '' || correo === '' || whatsapp === '' || genero === '' || denguePositivo === ''|| sintomas === ''|| suscripcion === '' ) {
      alert('Por favor, completa todos los campos obligatorios.');
       return false;
        }
    
      
     
   // Validar correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexCorreo.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return false;
        }
    
    // Validar número de WhatsApp (debe tener entre 10 y 15 dígitos)
        const regexWhatsApp = /^\d{10,15}$/;
        if (!regexWhatsApp.test(whatsapp)) {
            alert('Por favor, ingresa un número de WhatsApp válido (entre 10 y 15 dígitos).');
            return false;
        }
    
    // Si todas las validaciones son correctas
        return true;
    }