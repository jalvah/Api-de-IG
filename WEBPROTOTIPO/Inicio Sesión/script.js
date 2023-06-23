/*// Obtener el formulario y agregar un evento de escucha para el envío
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores de usuario y contraseña
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Mostrar una alerta con los valores ingresados
  alert(`Usuario: ${username}\nContraseña: ${password}`);
});
*/
// Obtener referencia al formulario de inicio de sesión
const loginForm = document.getElementById('login-form');

// Manejar el evento de envío del formulario
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de usuario y contraseña
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validar el usuario y contraseña (ejemplo)
  if (username === 'usuario' && password === 'contraseña') {
    // Redireccionar a la página principal
    window.location.href = '../PantallaPrincipal/home.html';
  } else {
    alert('Credenciales incorrectas. Intente nuevamente.');
  }
});