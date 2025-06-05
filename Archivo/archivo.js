const folders = document.querySelectorAll(".folder");
const bookList = document.getElementById("book-list");
const booksContainer = document.getElementById("books");
const categoryTitle = document.getElementById("category-title");
const backButton = document.getElementById("back-button");

const books = {
    libros: [
        { title: "Libro Centenario", author: "Gabriel Incardona", url: "centenario/centenario.html" }
    ],
    "El Grafico": [
        { title: "El Gráfico: 2605 [09-09-69]", author: "Revista El Gráfico", url: "grafico/grafico.html" },
        { title: "El Gráfico: Los 100 mejores futbolistas", author: "Revista El Gráfico", url: "libros/100-mejores-futbolistas.html" },
        { title: "El Gráfico: Historia del fútbol argentino", author: "Revista El Gráfico", url: "libros/historia-futbol-argentino.html" }
    ],
    "Los Principios": [
        { title: "Los Principios: [09-09-69]", author: "Diario"},
    ],

    "La Voz": [
        { title: "La Voz del Interior: [09-09-69]", author: "Diario"},
    ],
};

folders.forEach((folder) => {
    folder.addEventListener("click", () => {
        const category = folder.dataset.category;
        showBooks(category);
    });
});

backButton.addEventListener("click", () => {
    bookList.classList.add("hidden");
    document.querySelector(".folders").classList.remove("hidden");
});

function showBooks(category) {
    document.querySelector(".folders").classList.add("hidden");
    bookList.classList.remove("hidden");
    categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);

    booksContainer.innerHTML = "";
    books[category].forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <img src="https://api.iconify.design/lucide:book.svg" alt="Book icon">
            <div>
                <h3>${book.title}</h3>
                <p>${book.author}</p>
            </div>
        `;
        bookElement.addEventListener("click", () => {
            window.location.href = book.url;
        });

        booksContainer.appendChild(bookElement);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.explore-btn[data-url]').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const url = btn.getAttribute('data-url');
            if (url) window.location.href = url;
        });
    });
});

function toggleMobileMenu() {
            const mobileNav = document.getElementById('mobileNav');
            const isVisible = mobileNav.style.display === 'flex';
            mobileNav.style.display = isVisible ? 'none' : 'flex';
        }
        function navigateToSection(sectionName) {
    const urls = {
        "Libros de Talleres": "./Libros/libros.html",
        "El Gráfico": "./Grafico/grafico.html",
        "Audios": "./Audios/audios.html",
        "Los Principios": "./Principios/principios.html",
        "La Voz del Interior": "./Lavoz/lavoz.html"
    };

    const url = urls[sectionName];
    if (url) {
        window.location.href = url;
    } else {
        alert(`No se encontró una URL para la sección: ${sectionName}`);
    }
}
        function exploreSection(sectionName) {
            alert(`Explorando: ${sectionName}`);
        }

        function showHistory() {
            alert('Navegando a la sección de Historia del Club');
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                if (window.innerWidth <= 768) {
                    document.getElementById('mobileNav').style.display = 'none';
                }
            });
        });
        document.addEventListener('click', function(event) {
            const mobileNav = document.getElementById('mobileNav');
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            
            if (!mobileNav.contains(event.target) && !mobileToggle.contains(event.target)) {
                mobileNav.style.display = 'none';
            }
        });
        window.addEventListener('resize', function() {
            const mobileNav = document.getElementById('mobileNav');
            if (window.innerWidth > 768) {
                mobileNav.style.display = 'none';
            }
        });
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });
        window.addEventListener('scroll', function() {
            const heroLogo = document.querySelector('.hero-logo');
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            if (heroLogo) {
                heroLogo.style.transform = `translateY(${rate}px)`;
            }
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