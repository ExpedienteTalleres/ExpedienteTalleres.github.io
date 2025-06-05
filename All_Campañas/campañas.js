document.addEventListener('DOMContentLoaded', function() {
    const yearSelect = document.getElementById('year');
    const tournamentSelect = document.getElementById('tournament');
    const searchButton = document.getElementById('searchButton');
    const warningMessage = document.getElementById('warningMessage');

    Object.keys(TORNEOS).forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });

    yearSelect.addEventListener('change', function() {
        const selectedYear = yearSelect.value;
        tournamentSelect.innerHTML = '<option value="">Selecciona un torneo</option>';
        warningMessage.style.display = 'none';

        if (selectedYear && TORNEOS[selectedYear]) {
            TORNEOS[selectedYear].forEach(fileName => {
                const option = document.createElement('option');
                option.value = fileName;
                option.textContent = fileName.replace('.html', '');
                tournamentSelect.appendChild(option);
            });
        }
    });

    searchButton.addEventListener('click', function() {
        const selectedYear = yearSelect.value;
        const selectedTournament = tournamentSelect.value;

        if (selectedYear && selectedTournament) {
            warningMessage.style.display = 'none';
            const filePath = `${selectedYear}/${selectedTournament}`;
            window.location.href = filePath;
        } else {
            warningMessage.style.display = 'block';
        }
    });

    // Si hay un año seleccionado al cargar, dispara el evento
    if (yearSelect.value) {
        yearSelect.dispatchEvent(new Event('change'));
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