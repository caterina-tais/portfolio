// JavaScript para mejorar la interactividad, como el hover en las tarjetas de los proyectos
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});
