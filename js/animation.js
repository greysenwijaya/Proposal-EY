/* ══════════════════════════════════════
   animations.js — Scroll reveal (fade-in)
   menggunakan Intersection Observer API
   Cafe & Resto EY
══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  /* Tandai bahwa JS berhasil load — CSS animasi reveal hanya aktif jika ini ada */
  document.documentElement.classList.add('js-loaded');

  const revealEls = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        /* stagger: setiap elemen dalam satu batch delay 60ms */
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => observer.observe(el));

}); 