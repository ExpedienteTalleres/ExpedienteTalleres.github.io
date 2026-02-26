    // =================================================================
    //  DATOS DE IDOLOS
    //  Para agregar un nuevo idolo, simplemente agrega un nuevo objeto
    //  al array. La pagina se adapta automaticamente.
    //
    //  imagen: ruta a la imagen (ej: "images/idolo1.jpg")
    //  nombre: nombre completo del idolo
    //  descripcionCorta: texto breve para la tarjeta (2-3 lineas)
    //  descripcionLarga: texto completo para el modal
    // =================================================================
    var idolos = [
      {
        imagen: 'idolo/Salvatelli.jpg',
        nombre: 'Horacio Salvatelli',
        descripcionCorta: 'Fue miembro de la emblematíca familia que más partidos jugó en Talleres; arrancó en 1914 y se retiró en 1926. Las hizo todas.',
        descripcionLarga: 'Este hombre fue el primer futbolista cordobés preso por una actuación en un partido de fútbol. Había repartido patadas a mansalva en un clásico contra Belgrano, después de fracturar al arquero José Cardozo a los 27 minutos del segundo tiempo, la policía intervino y se llevaron detenido a Salvatelli, estuvo dos días en el calabozo, despues los directivos de en ese entonces Central Córdoba pidieron a la Liga Cordobesa que interviniera para su liberación, ante la negativa decidieron abandonar a la LCF para cualquier gestión. El episodio provocó en que meses después los albiazules se inscribieran nuevamente con su actual nombre, Club Atlético Talleres.'
      },
      {
        imagen: 'idolo/Willington.jpg',
        nombre: 'Daniel Alberto Willington',
        descripcionCorta: 'Conocido como "El Loco", Willington es considerado uno de los mejores jugadores en la historia de Talleres. Su habilidad técnica y visión de juego lo hicieron inolvidable.',
        descripcionLarga: 'Daniel Alberto Willington, nacido el 1 de septiembre de 1942, es una leyenda indiscutible del Club Atlético Talleres y del fútbol argentino en general. Apodado "El Loco" por su impredecible y genial estilo de juego, Willington es ampliamente considerado como uno de los mejores jugadores en la historia del club. Su extraordinaria habilidad técnica, combinada con una visión de juego excepcional, lo convirtieron en un mediocampista ofensivo de elite. Willington no solo era capaz de crear oportunidades de gol con pases precisos, sino que también poseía un notable instinto goleador. Su capacidad para controlar el ritmo del juego y su creatividad en el campo lo hicieron un jugador inolvidable para la afición de Talleres. A lo largo de su carrera, Willington demostró una lealtad inquebrantable al club, rechazando ofertas de equipos más grandes para continuar siendo el ídolo de la T. Su legado trasciende las estadísticas, ya que inspiró a generaciones de jugadores y dejó recuerdos imborrables en todos los que tuvieron el privilegio de verlo jugar.'
      },
      {
        imagen: 'idolo/Galvan.jpg',
        nombre: 'Luis Adolfo Galván',
        descripcionCorta: 'Es una leyenda de Talleres. Jugó 502 partidos con el club, siendo el futbolista con más presencias en su historia. Reconocido por su elegancia y solidez defensiva, fue campeón del mundo con la Selección Argentina en 1978.',
        descripcionLarga: 'Luis Adolfo Galván nació el 24 de febrero de 1948 en Fernández, Santiago del Estero. Antes de dedicarse al fútbol profesional, se recibió de maestro y ejerció la docencia en su pueblo natal. Comenzó su carrera futbolística en Independiente de Fernández y luego pasó a Unión de Santiago del Estero. En 1970, gracias a la recomendación de un amigo, se incorporó a Talleres de Córdoba, donde debutó el 19 de abril de ese año en un partido contra Argentino Peñarol. Durante sus 12 años en Talleres, Galván se destacó por su elegancia, inteligencia táctica y capacidad para anticiparse a las jugadas. Fue parte fundamental del equipo que obtuvo el subcampeonato en el Torneo Nacional de 1977 y logró múltiples títulos en la Liga Cordobesa de Fútbol. Luis Galván falleció el 5 de mayo de 2025 a los 77 años, dejando un legado imborrable en el fútbol argentino y especialmente en Talleres de Córdoba.'
      },
      {
        imagen: 'idolo/Reinaldi.jpg',
        nombre: 'José Omar Reinaldi',
        descripcionCorta: 'Conocido como "El Tata", Reinaldi es uno de los máximos goleadores en la historia de Talleres. Su habilidad para definir y su lealtad al club lo convirtieron en un ídolo indiscutido.',
        descripcionLarga: 'José Omar Reinaldi, apodado "El Tata", es una leyenda viviente del Club Atlético Talleres. Nacido el 10 de septiembre de 1962, Reinaldi dejó una huella imborrable en la historia del club. Con su excepcional habilidad goleadora, se convirtió en uno de los máximos anotadores en la historia de Talleres. Su capacidad para definir en momentos cruciales y su lealtad inquebrantable al club lo elevaron al estatus de ídolo. Reinaldi no solo era un goleador nato, sino también un líder dentro y fuera del campo, inspirando a sus compañeros y ganándose el corazón de la afición. Su compromiso con la camiseta albiazul y su contribución al éxito del equipo durante su etapa como jugador lo han convertido en un referente para las generaciones futuras de Talleres.'
      },
      {
        imagen: 'idolo/Oviedo.jpg',
        nombre: 'Miguel Ángel Oviedo',
        descripcionCorta: 'Oviedo es considerado uno de los mejores defensores en la historia de Talleres. Su liderazgo y entrega en el campo lo convirtieron en un referente para el club.',
        descripcionLarga: 'Miguel Ángel Oviedo, nacido el 12 de octubre de 1950, es una figura emblemática en la historia del Club Atlético Talleres. Reconocido como uno de los mejores defensores que ha vestido la camiseta albiazul, Oviedo se destacó por su extraordinaria capacidad defensiva, su visión táctica y su inquebrantable espíritu de lucha. Su liderazgo natural tanto dentro como fuera del campo lo convirtió en un verdadero capitán y referente para sus compañeros y para la afición. Oviedo no solo era un defensor sólido, sino también un jugador que entendía el juego de una manera única, contribuyendo significativamente a la organización del equipo. Su entrega incondicional en cada partido y su identificación con los colores del club lo elevaron al estatus de ídolo. La carrera de Oviedo en Talleres dejó un legado duradero, estableciendo un estándar de excelencia y compromiso para las futuras generaciones de defensores del club.'
      },
      {
        imagen: 'idolo/Ludueña.jpg',
        nombre: 'Luis Antonio Ludueña',
        descripcionCorta: 'Luis Antonio Ludueña, apodado "El Hacha", fue un mediocampista nacido en Córdoba en 1954. Jugó 10 años en Talleres, donde disputó 340 partidos y marcó 113 goles, convirtiéndose en uno de los máximos ídolos del club. Fue reconocido por su potencia, técnica y liderazgo.',
        descripcionLarga: 'Comenzó su carrera futbolística en el club San Lorenzo de Córdoba y, en 1973, fue adquirido por Talleres por una cifra récord para la época. Debutó en la primera división en 1975 bajo la dirección de Ángel Labruna y se consolidó como titular al año siguiente. Durante sus 10 años en Talleres, Ludueña disputó 340 partidos y anotó 113 goles, convirtiéndose en el cuarto máximo goleador histórico del club. Fue una pieza clave en el equipo que alcanzó la final del Torneo Nacional de 1977 y es recordado por haber marcado el gol del triunfo ante Argentinos Juniors en el debut de Diego Maradona en 1976. Su destacado rendimiento le valió convocatorias a la Selección Argentina dirigida por César Luis Menotti. Fue parte del equipo que disputó el Torneo Preolímpico Sudamericano en 1980, donde Argentina se consagró campeón. Sin embargo, una lesión le impidió participar en el Mundial de 1978.'
      },
      {
        imagen: 'idolo/Valencia.jpg',
        nombre: 'José Daniel Valencia',
        descripcionCorta: 'José Daniel Valencia, apodado "La Rana", fue un talentoso mediocampista ofensivo argentino nacido en Jujuy en 1955. Jugó 12 años en Talleres, donde se convirtió en ídolo y figura central del equipo. Fue campeón del mundo con la Selección Argentina en 1978 y es recordado por su elegancia y visión de juego.',
        descripcionLarga: 'José Daniel Valencia comenzó su carrera en Gimnasia y Esgrima de Jujuy. En 1975, se incorporó a Talleres de Córdoba, donde desarrolló la mayor parte de su carrera futbolística. Durante sus 12 años en el club, jugó 344 partidos y marcó 42 goles, convirtiéndose en uno de los máximos ídolos de la institución. Fue una pieza clave en el equipo que obtuvo el subcampeonato en el Torneo Nacional de 1977, tras una destacada campaña. Su habilidad para manejar ambos perfiles y su inteligencia táctica lo destacaron como un mediocampista excepcional. Su desempeño en Talleres le valió la convocatoria a la Selección Argentina, con la que disputó los Mundiales de 1978 y 1982. En el Mundial de 1978, fue titular en los primeros partidos y contribuyó al título obtenido por el equipo dirigido por César Luis Menotti.'
      },
      {
        imagen: '',
        nombre: 'Nombre Apellido',
        descripcionCorta: 'Breve descripcion del idolo que se mostrara en la tarjeta principal. Editar a mano.',
        descripcionLarga: 'Descripcion mas amplia del idolo que aparecera al hacer clic en "Leer mas". Aqui se puede incluir toda la historia, logros, anecdotas y legado del jugador. Editar a mano.'
      },
    ];

    // ===== NAVBAR SCROLL =====
    (function () {
      var navbar = document.getElementById('navbar');
      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    })();

    // ===== FADE-UP INTERSECTION OBSERVER =====
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(function (el) {
      fadeObserver.observe(el);
    });

    // ===== RENDER IDOL CARDS =====
    var gridContainer = document.getElementById('idolos-grid');
    var noResults = document.getElementById('no-results');
    var cards = [];

    var personIconSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';

    var arrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>';

    idolos.forEach(function (idol, index) {
      var card = document.createElement('div');
      card.className = 'idol-card fade-up';
      card.style.transitionDelay = (index % 8) * 80 + 'ms';
      card.setAttribute('data-name', idol.nombre.toLowerCase());
      card.setAttribute('data-index', index);

      var imgContent;
      if (idol.imagen) {
        imgContent = '<img src="' + idol.imagen + '" alt="' + idol.nombre + '" />';
      } else {
        imgContent = '<div class="idol-img-placeholder">' + personIconSVG + '</div>';
      }

      card.innerHTML =
        '<div class="idol-img-wrapper">' +
          imgContent +
        '</div>' +
        '<div class="idol-body">' +
          '<h3 class="idol-name">' + idol.nombre + '</h3>' +
          '<p class="idol-desc-short">' + idol.descripcionCorta + '</p>' +
          '<button class="idol-read-more" data-index="' + index + '">' +
            'Leer mas ' + arrowSVG +
          '</button>' +
        '</div>';

      gridContainer.appendChild(card);
      cards.push(card);

      fadeObserver.observe(card);
    });

    // ===== SEARCH FUNCTIONALITY =====
    var searchInput = document.getElementById('search-input');
    var searchBtn = document.getElementById('search-btn');
    var searchResultsInfo = document.getElementById('search-results-info');

    function performSearch() {
      var query = searchInput.value.trim().toLowerCase();

      if (!query) {
        // Show all cards
        cards.forEach(function (card) {
          card.classList.remove('hidden');
        });
        noResults.classList.remove('visible');
        searchResultsInfo.innerHTML = '';
        return;
      }

      var visibleCount = 0;
      var terms = query.split(/\s+/);

      cards.forEach(function (card) {
        var name = card.getAttribute('data-name');
        var matches = terms.some(function (term) {
          return name.indexOf(term) !== -1;
        });

        if (matches) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      if (visibleCount === 0) {
        noResults.classList.add('visible');
        searchResultsInfo.innerHTML = '';
      } else {
        noResults.classList.remove('visible');
        searchResultsInfo.innerHTML =
          'Se encontraron <span class="highlight">' + visibleCount + '</span> resultado' +
          (visibleCount !== 1 ? 's' : '') +
          ' para "' + searchInput.value.trim() + '"' +
          ' <button class="clear-search-btn" id="clear-search-btn">Limpiar</button>';

        document.getElementById('clear-search-btn').addEventListener('click', clearSearch);
      }
    }

    function clearSearch() {
      searchInput.value = '';
      cards.forEach(function (card) {
        card.classList.remove('hidden');
      });
      noResults.classList.remove('visible');
      searchResultsInfo.innerHTML = '';
    }

    searchBtn.addEventListener('click', performSearch);

    searchInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
      }
    });

    // ===== MODAL =====
    var modalOverlay = document.getElementById('modal-overlay');
    var modalContent = document.getElementById('modal-content');
    var modalCloseBtn = document.getElementById('modal-close-btn');
    var modalImgWrapper = document.getElementById('modal-img-wrapper');
    var modalName = document.getElementById('modal-name');
    var modalDesc = document.getElementById('modal-desc');

    function openModal(index) {
      var idol = idolos[index];
      if (!idol) return;

      if (idol.imagen) {
        modalImgWrapper.innerHTML = '<img src="' + idol.imagen + '" alt="' + idol.nombre + '" />';
      } else {
        modalImgWrapper.innerHTML = '<div class="modal-img-placeholder">' + personIconSVG + '</div>';
      }

      modalName.textContent = idol.nombre;
      modalDesc.textContent = idol.descripcionLarga;

      modalOverlay.classList.add('active');
      modalOverlay.classList.remove('fade-out');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      modalOverlay.classList.add('fade-out');
      setTimeout(function () {
        modalOverlay.classList.remove('active');
        modalOverlay.classList.remove('fade-out');
        document.body.style.overflow = '';
      }, 350);
    }

    // Delegate click on "Leer mas" buttons
    gridContainer.addEventListener('click', function (e) {
      var btn = e.target.closest('.idol-read-more');
      if (btn) {
        var index = parseInt(btn.getAttribute('data-index'), 10);
        openModal(index);
      }
    });

    modalCloseBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      closeModal();
    });

    // Close when clicking the overlay (outside modal-content)
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
    });