async function crearSubs() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const whatsapp = document.getElementById('whatsapp').value;

    const datos = {
        nombre,
        apellido,
        correo,
        whatsapp
    };

    try {
        const response = await fetch('http://127.0.0.1:5500/TP18-Front/sitio/formulario.html', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Suscripción creada exitosamente');
        } else {
            const errorData = await response.json();
            alert('Error al crear la Suscripción: ' + errorData.message);
        }
    } catch (error) {
        alert('Error al conectar con el servidor');
        
    }
}