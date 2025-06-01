document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const cardWidth = 410; // ancho de la card + margen
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
});
