document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('carousel');
    const cardWidth = 410; 
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const btnHamb = document.querySelector('.menu_hamburguesa');
    const navLista = document.querySelector('.nav__ul');
    const closeBtn = document.querySelector('.close-menu');

    btnHamb.addEventListener('click', () => {
        navLista.classList.add('active');
        btnHamb.classList.add('hide');
        closeBtn.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        navLista.classList.remove('active');
        btnHamb.classList.remove('hide');
        closeBtn.classList.remove('show');
    });
});