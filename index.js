// index.js
// Aquí puedes incluir cualquier lógica JS necesaria.
// Por ejemplo, podrías controlar el envío del formulario mediante Fetch
// o integrar animaciones adicionales.

console.log("Landing cargada");

const form   = document.querySelector('form');      // o  document.getElementById('contact-form')
const estado = document.getElementById('estado');   // <p> donde aparecerá el mensaje

form.addEventListener('submit', async (e) => {
  e.preventDefault();                       // 1️⃣ detiene la redirección
  const datos = new FormData(form);

  try {
    const resp = await fetch(form.action, {  // 2️⃣ envía a Formspree vía fetch
      method: 'POST',
      body:   datos,
      headers:{ Accept:'application/json' }
    });

    if (resp.ok) {                          // 3️⃣ feedback al usuario
      form.reset();
      estado.textContent = '¡Muchas gracias! Muy pronto te contactaremos.';
      estado.style.color = '#19c37d';
    } else {
      estado.textContent = 'No se pudo enviar. Intenta de nuevo.';
      estado.style.color = '#f54545';
    }
  } catch (err) {
    estado.textContent = 'Error de red: ' + err.message;
    estado.style.color = '#f54545';
  }
});
*/
