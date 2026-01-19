window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            document.getElementById('progressBar').style.width = progress + '%';
        });

        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        const fadeElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => observer.observe(el));

        document.querySelectorAll('.match-header').forEach(header => {
            header.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const matchItem = this.closest('.match-item');
                if (!matchItem) return;
                
                const isActive = matchItem.classList.contains('active');
                
                document.querySelectorAll('.match-item.active').forEach(item => {
                    if (item !== matchItem) {
                        item.classList.remove('active');
                    }
                });
                
                // Toggle current match
                matchItem.classList.toggle('active');
            });
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        function populateYears() {
            const yearSelect = document.getElementById('year');
            const years = Object.keys(TORNEOS).sort();
            
            years.forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                yearSelect.appendChild(option);
            });
        }

        document.getElementById('year').addEventListener('change', function() {
            const year = this.value;
            const tournamentSelect = document.getElementById('tournament');
            tournamentSelect.innerHTML = '<option value="">Selecciona un torneo</option>';
            
            if (year && TORNEOS[year]) {
                TORNEOS[year].forEach(tournament => {
                    const option = document.createElement('option');
                    option.value = tournament;
                    option.textContent = tournament.replace('.html', '');
                    tournamentSelect.appendChild(option);
                });
                tournamentSelect.disabled = false;
            } else {
                tournamentSelect.disabled = true;
            }
        });

        document.getElementById('searchButton').addEventListener('click', function() {
            const year = document.getElementById('year').value;
            const tournament = document.getElementById('tournament').value;
            const warningMessage = document.getElementById('warningMessage');
            
            if (!year || !tournament) {
                warningMessage.style.display = 'block';
                return;
            }
            
            warningMessage.style.display = 'none';
            
            const fileUrl = `./${year}/${tournament}`;
            
            console.log('Intentando abrir:', fileUrl);
            window.location.href = fileUrl;
        });

        document.addEventListener('DOMContentLoaded', function() {
            populateYears();
            console.log('Campañas inicializado. Torneos disponibles:', Object.keys(TORNEOS).length);
        });