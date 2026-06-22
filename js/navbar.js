/* ══════════════════════════════════════
   navbar.js — Scroll progress, sticky nav,
   mobile toggle, active link highlight
   Cafe & Resto EY
══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  const progressBar = document.getElementById('progress-bar');
  const navbar      = document.getElementById('navbar');
  const navToggle   = document.getElementById('navToggle');
  const navMobile   = document.getElementById('navMobile');
  const navLinks    = document.querySelectorAll('.nav-links a');
  const sections    = document.querySelectorAll('section[id]');

  /* ── Scroll progress bar + sticky shadow ── */
  window.addEventListener('scroll', () => {
    const doc = document.documentElement;
    const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
    progressBar.style.width = pct + '%';
    navbar.classList.toggle('scrolled', doc.scrollTop > 20);
    updateActiveLink();
  });

  /* ── Active nav link ── */
  function updateActiveLink() {
    let current = '';
    sections.forEach(sec => {
      if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  /* ── Mobile hamburger toggle ── */
  navToggle.addEventListener('click', () => {
    navMobile.classList.toggle('open');
    const isOpen = navMobile.classList.contains('open');
    navToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });

  /* ── Close mobile menu on link click ── */
  document.querySelectorAll('.nav-mob-link').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open');
      navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
  });

}); 