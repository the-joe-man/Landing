// index.js
// Controla el envío del formulario para evitar la redirección a Formspree
// y mostrar un mensaje de confirmación dentro de la misma página.

console.log("Landing cargada");

document.addEventListener("DOMContentLoaded", () => {
  const form    = document.querySelector("form");          // <form>
  const estado  = document.getElementById("estado");       // <p id="estado">
  const gracias = document.getElementById("gracias");      // <p id="gracias"> (opcional)

  form.addEventListener("submit", async (e) => {
    e.preventDefault();                                     // 1️⃣ Detiene la redirección
    const datos = new FormData(form);

    try {
      const resp = await fetch(form.action, {               // 2️⃣ Envía a Formspree vía fetch
        method: "POST",
        body:   datos,
        headers:{ Accept: "application/json" }             // Pedimos JSON para que Formspree no redirija
      });

      if (resp.ok) {                                        // 3️⃣ Feedback al usuario
        form.reset();
        estado.textContent = "¡Enviado! 
        Muy pronto te contactaremos.";
        estado.style.color = "#19c37d";

        // — opcional — reemplazar formulario por mensaje grande
        // form.style.display = "none";
        // gracias.style.display = "block";
      } else {
        estado.textContent = "Ups… no se pudo enviar. Intenta de nuevo.";
        estado.style.color = "#f54545";
      }
    } catch (err) {
      estado.textContent = "Error de red: " + err.message;
      estado.style.color = "#f54545";
    }
  });
});

