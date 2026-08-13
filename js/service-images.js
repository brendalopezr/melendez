document.addEventListener('DOMContentLoaded', () => {
  const files = [
    'capacidad-diseno.jpg', 'capacidad-fabricacion.jpg',
    'capacidad-despiece.jpg', 'capacidad-optimizacion.jpg',
    'capacidad-armado.jpg', 'capacidad-personalizados.jpg',
    'capacidad-presupuestos.jpg', 'capacidad-integral.jpg'
  ];

  document.querySelectorAll('.service-media').forEach((media, index) => {
    if (media.tagName === 'IMG') return;
    const image = document.createElement('img');
    image.className = 'service-media';
    image.src = `img/servicios/${files[index]}`;
    image.alt = media.getAttribute('aria-label') || '';
    image.loading = 'lazy';
    image.decoding = 'async';
    media.replaceWith(image);
  });
});
