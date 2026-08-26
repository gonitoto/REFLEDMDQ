// REFLED — interacción y formulario de WhatsApp

// IMPORTANTE: reemplazá este número por el WhatsApp de REFLED.
// Formato internacional, sin +, espacios ni guiones.
// Ejemplo Argentina: 5492231234567
const WHATSAPP_NUMBER = "549XXXXXXXXXX";

const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const form = document.getElementById("whatsappForm");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (WHATSAPP_NUMBER.includes("X")) {
    alert("Primero configurá el número de WhatsApp de REFLED en script.js.");
    return;
  }

  const name = document.getElementById("name").value.trim();
  const product = document.getElementById("product").value;
  const message = document.getElementById("message").value.trim();

  const text =
`Hola REFLED 👋

Mi nombre es ${name}.
Estoy interesado/a en: ${product}.

Consulta:
${message}

Quisiera recibir información y presupuesto.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
