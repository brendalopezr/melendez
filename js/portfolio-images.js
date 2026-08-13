document.addEventListener('DOMContentLoaded', () => {
  const files = [
    'espacio-cocina.jpg', 'espacio-ropero.jpg', 'espacio-oficina.jpg',
    'espacio-entretenimiento.jpg', 'espacio-dormitorio.jpg', 'espacio-clinica.jpg'
  ];
  const titles = [...document.querySelectorAll('.gallery-item')].map(item => item.dataset.title);
  const lightboxImage = document.querySelector('.lb-image');
  const lightboxTitle = document.querySelector('.lightbox h3');

  const updateLightbox = () => {
    const index = titles.indexOf(lightboxTitle?.textContent || '');
    if (index >= 0 && lightboxImage) {
      lightboxImage.style.backgroundImage = `url('img/galeria/${files[index]}')`;
      lightboxImage.style.backgroundPosition = 'center';
      lightboxImage.style.backgroundSize = 'cover';
    }
  };

  document.querySelectorAll('.gallery-item').forEach((item, index) => {
    item.addEventListener('click', () => {
      if (lightboxImage) {
        lightboxImage.style.backgroundImage = `url('img/galeria/${files[index]}')`;
        lightboxImage.style.backgroundPosition = 'center';
        lightboxImage.style.backgroundSize = 'cover';
      }
    });
  });

  document.querySelectorAll('.lb-prev,.lb-next').forEach(button =>
    button.addEventListener('click', () => setTimeout(updateLightbox, 0))
  );
  document.addEventListener('keyup', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') setTimeout(updateLightbox, 0);
  });
});
