// Validación del formulario
const form = document.getElementById('registroForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const contrasena = document.getElementById('contrasena').value;

    // Aquí puedes enviar los datos al servidor o realizar otras acciones
    console.log('Nombre:', nombre);
    console.log('Email:', email);
    console.log('Contraseña:', contrasena);
});
