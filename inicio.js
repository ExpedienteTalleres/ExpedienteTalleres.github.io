
const additionalQuotes = [
    { text: "El orgullo cordobés" },
    { text: "Amor del pueblo" },
    { text: "Locura que enamora mi ciudad" },
    { text: "Aguante Matador" },
    { text: "Que culiado este Talleres" },
    { text: "La hinchada más fiel de Córdoba" },
    { text: "La pesadilla de los giles" },
    { text: "Desde siempre y para siempre, con vos estaré " },
    { text: "Solo entiende mi locura quien comparte mi pasión" },
    { text: "Historia, pasión y pueblo" }
];

function animateCard(card) {
    card.classList.add('animate');
    setTimeout(() => {
        card.classList.remove('animate');
    }, 600);
}

function generateRandomQuote() {
    const randomQuote = additionalQuotes[Math.floor(Math.random() * additionalQuotes.length)];
    const quoteElement = document.getElementById('randomQuote');
    quoteElement.classList.remove('show');
    setTimeout(() => {
        quoteElement.innerHTML = `"${randomQuote.text}"`;
        quoteElement.classList.add('show');
    }, 250);
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.getElementById('randomQuote').classList.add('show');
    }, 1000);
});

document.querySelectorAll('.quote-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
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