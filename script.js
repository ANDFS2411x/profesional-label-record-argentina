document.addEventListener('DOMContentLoaded', () => {
  // Inicializar AOS (Animate On Scroll)
  AOS.init({ 
    duration: 1200, 
    once: true 
  });
  
  // Menú hamburguesa
  const menuBtn = document.getElementById('menuBtn');
  const overlay = document.getElementById('overlayNav');
  const menuLinks = document.querySelectorAll('#overlayNav a');
  
  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    overlay.classList.toggle('open');
  });
  
  // Cerrar menú al hacer clic en un enlace
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('open');
      overlay.classList.remove('open');
    });
  });
  
  // Manejo mejorado de video para iOS
  const handleVideo = () => {
    const video = document.getElementById('bg-video');
    
    // Si no hay video, salir
    if (!video) return;
    
    // Función para intentar reproducir el video
    const attemptPlay = () => {
      video.play()
        .then(() => {
          console.log('Video reproducido correctamente');
          // Quitar los event listeners una vez que el video esté reproduciéndose
          document.removeEventListener('touchstart', attemptPlay);
          document.removeEventListener('click', attemptPlay);
        })
        .catch(err => {
          console.log('No se pudo reproducir el video automáticamente:', err);
        });
    };
    
    // Establecer fuente de respaldo si la original falla
    video.addEventListener('error', () => {
      console.log('Error en el video original, cambiando a fuente de respaldo');
      // Cambiar a una fuente de respaldo si la original falla
      video.src = "https://assets.mixkit.co/videos/preview/mixkit-abstract-glowing-network-connections-25073-large.mp4";
      attemptPlay();
    });
    
    // Intentar reproducir inmediatamente
    attemptPlay();
    
    // Escuchar interacciones del usuario para intentar reproducir el video
    document.addEventListener('touchstart', attemptPlay, { once: true });
    document.addEventListener('click', attemptPlay, { once: true });
  };
  
  // Ejecutar la función de manejo de video
  handleVideo();
});