# Landing de Contacto – Propiedades Quillay

Esta landing page responsive muestra un formulario de contacto sobre una imagen aérea de ciudad (dron) y ofrece enlaces directos a Instagram y WhatsApp.

## Estructura del proyecto

```
├── index.html      # Maquetado principal
├── index.css       # Estilos (monocromático gris)
├── index.js        # Lógica opcional (placeholder)
├── ciudad-vista-dron.jpg # Imagen de fondo (cámbiala cuando quieras)
└── README.md       # Este archivo
```

## Pasos para usar

1. **Clona** el repositorio o crea uno nuevo en GitHub y sube estos archivos.
2. Sustituye `ciudad-vista-dron.jpg` por tu propia imagen (mismo nombre o modifica la ruta en `index.css`).
3. Actualiza la URL de Formspree en el atributo `action` del formulario (`index.html`) para recibir los envíos.
4. Cambia los enlaces de Instagram y WhatsApp con tus datos reales.
5. Habilita **GitHub Pages** (branch `main` / carpeta raíz) en las settings del repo y tu landing estará pública.

## Personalización rápida

| Elemento          | Dónde cambiarlo                |
| ----------------- | ------------------------------ |
| Colores base      | `:root` en `index.css`         |
| Imagen de fondo   | `.hero` en `index.css`         |
| Texto marquee     | `.marquee p` en `index.html`   |
| Número WhatsApp   | link `wa.me` en `index.html`   |
| Usuario Instagram | link Instagram en `index.html` |

---

Hecho con ❤️ por [Icono UX](https://chat.openai.com).

