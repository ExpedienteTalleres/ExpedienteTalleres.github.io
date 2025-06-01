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
        tournamentSelect.innerHTML = '';

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
            const filePath = `${selectedYear}/${selectedTournament}`;
            window.location.href = filePath;
        } else {
            warningMessage.style.display = 'none';
        }
    });
});