// index.js
// Aquí puedes incluir cualquier lógica JS necesaria.
// Por ejemplo, podrías controlar el envío del formulario mediante Fetch
// o integrar animaciones adicionales.

console.log("Landing cargada");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();                  // evita el comportamiento por defecto
    const datos = new FormData(form);

    try {
      const resp = await fetch(form.action, {
        method: "POST",
        body: datos,
        headers: { Accept: "application/json" },
      });

      if (resp.ok) {
        form.reset();
        alert("Gracias por escribirnos, muy pronto te contactaremos");
      } else {
        alert("Hubo un problema al enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch (err) {
      alert("Error de red: " + err.message);
    }
  });
});
*/
