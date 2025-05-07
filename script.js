document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1200, once: true });
  });
  
  const menuBtn = document.getElementById('menuBtn');
  const overlay = document.getElementById('overlayNav');
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  