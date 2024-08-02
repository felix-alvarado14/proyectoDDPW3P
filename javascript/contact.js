// Selecciona el formulario
const form = document.querySelector('form');

// Maneja el evento de envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario
    
    // Obtiene los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Muestra una alerta con los datos del formulario
    alert(`Nombre: ${name}\nCorreo Electrónico: ${email}\nMensaje: ${message}`);
    
    // Limpia el formulario después de mostrar la alerta
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
