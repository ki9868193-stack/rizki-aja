// Smooth scroll untuk navigasi
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Tombol "Hubungi Saya" di hero section
document.getElementById("btn-contact").addEventListener("click", () => {
  document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
});

// Form submit event
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Terima kasih! Pesan kamu sudah terkirim 🚀");
  e.target.reset();
});

