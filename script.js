// ============================================
// REFLED - Configuración
// ============================================
// El número está basado en el contacto visible
// en las imágenes enviadas. Si querés cambiarlo,
// reemplazalo por el número de WhatsApp en formato
// internacional, sin +, espacios ni guiones.
const WHATSAPP_NUMBER = "5492235630264";

const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const whatsappForm = document.querySelector("#whatsappForm");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

whatsappForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const mirror = document.querySelector("#mirror").value;
  const light = document.querySelector("#light").value;
  const size = document.querySelector("#size").value.trim() || "No especificadas";
  const message = document.querySelector("#message").value.trim() || "Quiero recibir asesoramiento.";

  const text =
`Hola REFLED! 👋

Soy ${name}.
Estoy interesado/a en: ${mirror}
Iluminación: ${light}
Medidas aproximadas: ${size}

Mi consulta:
${message}

¡Gracias!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
