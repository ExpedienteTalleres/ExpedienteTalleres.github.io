
    // =================================================================
    //  DATOS DE LA LINEA DEL TIEMPO
    //
    //  Para agregar un nuevo evento, agrega un objeto al array.
    //  Hay 3 tipos de card:
    //
    //  TIPO 1 - "imagen": Card con imagen, titulo, fecha y descripcion (opcional)
    //    { tipo: 'imagen', imagen: 'ruta.jpg', titulo: '...', fecha: '...', descripcion: '...' }
    //
    //  TIPO 2 - "partido": Card de partido de futbol (sin imagen)
    //    { tipo: 'partido', titulo: '...', fecha: '...', descripcion: '...', equipoLocal: '...', equipoVisitante: '...' }
    //
    //  TIPO 3 - "articulo": Card con imagen, titulo, fecha, descripcion breve y boton "Leer mas"
    //    { tipo: 'articulo', imagen: 'ruta.jpg', titulo: '...', fecha: '...', descripcion: '...', descripcionCompleta: '...' }
    //
    // =================================================================

    var timeline = [
      {
        tipo: 'imagen',
        imagen: '',
        titulo: 'Fundacion del Club',
        fecha: '12 de Octubre, 1913',
        descripcion: 'Un grupo de jovenes del barrio Talleres funda el Club Atletico Talleres de Cordoba, dando inicio a una historia que marcaria para siempre el futbol argentino.'
      },
      {
        tipo: 'partido',
        titulo: 'Primer Partido Oficial',
        fecha: '15 de Marzo, 1914',
        descripcion: 'Talleres disputa su primer encuentro oficial en la Liga Cordobesa, marcando el comienzo de su rica historia deportiva.',
        equipoLocal: 'Talleres',
        equipoVisitante: 'Juniors'
      },
      {
        tipo: 'articulo',
        imagen: '',
        titulo: 'Primer Titulo de la Liga Cordobesa',
        fecha: '20 de Noviembre, 1920',
        descripcion: 'Talleres conquista su primer campeonato de la Liga Cordobesa, sembrando las semillas de una tradicion ganadora.',
        descripcionCompleta: 'Talleres conquista su primer campeonato de la Liga Cordobesa en una temporada memorable. El equipo dirigido por los primeros referentes del club demostro una superioridad notable a lo largo del torneo, ganando la mayoria de sus partidos y consagrandose de manera invicta. Este titulo marco el inicio de una era dorada en el futbol cordobes y establecio a Talleres como uno de los clubes mas importantes de la provincia. La celebracion se extendio por todo el barrio y quedo grabada como el primer gran logro de la institucion.'
      },
      {
        tipo: 'imagen',
        imagen: '',
        titulo: 'El Viejo Estadio',
        fecha: '1925',
        descripcion: 'Se inaugura la primera cancha propia del club, un hito fundamental para el crecimiento de la institucion y la consolidacion de su identidad barrial.'
      },
      {
        tipo: 'partido',
        titulo: 'Clasico Historico vs Belgrano',
        fecha: '8 de Junio, 1933',
        descripcion: 'Un clasico cordobes que quedo en la memoria colectiva. Talleres se impone de forma contundente ante su eterno rival en una jornada epica.',
        equipoLocal: 'Talleres',
        equipoVisitante: 'Belgrano'
      },
      {
        tipo: 'articulo',
        imagen: '',
        titulo: 'Ascenso a Primera Division',
        fecha: '10 de Diciembre, 1974',
        descripcion: 'Talleres logra el tan ansiado ascenso a la Primera Division del futbol argentino.',
        descripcionCompleta: 'Tras anos de lucha en las categorias inferiores, Talleres finalmente logra el ascenso a la Primera Division del futbol argentino. Este logro represento el sueno cumplido de toda una generacion de hinchas que soñaban con ver a su club en la elite. El plantel liderado por jugadores que se convirtieron en idolos consiguio una campaña historica que culmino con el ascenso en una noche inolvidable. Miles de hinchas invadieron la cancha para celebrar un momento que cambiaria para siempre la historia del club. A partir de alli, Talleres se posiciono como un equipo competitivo a nivel nacional.'
      },
      {
        tipo: 'imagen',
        imagen: '',
        titulo: 'Nacional 1977',
        fecha: '15 de Diciembre, 1977',
        descripcion: 'Talleres se consagra campeon del Nacional 1977, el primer gran titulo a nivel nacional que consagro al club como potencia del futbol argentino.'
      },
      {
        tipo: 'partido',
        titulo: 'Final del Nacional 1977',
        fecha: '12 de Diciembre, 1977',
        descripcion: 'La final que quedo grabada en la historia. Talleres se corona campeon en una noche magica que cambio para siempre la identidad del club.',
        equipoLocal: 'Talleres',
        equipoVisitante: 'Racing'
      },
      {
        tipo: 'articulo',
        imagen: '',
        titulo: 'La Copa de Oro 1980',
        fecha: '22 de Junio, 1980',
        descripcion: 'Otro titulo para las vitrinas. Talleres conquista la Copa de Oro y reafirma su grandeza.',
        descripcionCompleta: 'La Copa de Oro 1980 represento otro capitulo glorioso en la historia de Talleres. En un torneo que reunio a los mejores equipos del pais, el plantel albiazul demostro caracter, jerarquia y una entrega fuera de lo comun. Cada partido fue una batalla, y los jugadores dejaron todo en la cancha para darle otra alegria al pueblo tallarin. La final fue un espectaculo de futbol, garra y emocion. Las calles de Cordoba volvieron a vestirse de fiesta y los hinchas demostraron una vez mas que Talleres es pueblo, sentimiento y una forma de vida que trasciende lo deportivo.'
      },
      {
        tipo: 'imagen',
        imagen: '',
        titulo: 'Construccion del Kempes',
        fecha: '1978',
        descripcion: 'El Estadio Mario Alberto Kempes se convierte en la casa de las grandes gestas de Talleres, un escenario donde se viven las emociones mas intensas.'
      },
      {
        tipo: 'partido',
        titulo: 'Victoria ante River en el Monumental',
        fecha: '14 de Septiembre, 1999',
        descripcion: 'Una victoria historica en cancha de River Plate que demostro la garra y el caracter del equipo cordobes en la elite del futbol argentino.',
        equipoLocal: 'River Plate',
        equipoVisitante: 'Talleres'
      },
      {
        tipo: 'articulo',
        imagen: '',
        titulo: 'El Retorno a Primera - 2016',
        fecha: '14 de Noviembre, 2016',
        descripcion: 'Tras anos en el ascenso, Talleres vuelve a Primera Division generando una explosion de alegria sin precedentes.',
        descripcionCompleta: 'El 14 de noviembre de 2016 quedo marcado a fuego en la historia de Talleres. Despues de varios anos luchando en las categorias del ascenso, el club finalmente logro el retorno a la Primera Division del futbol argentino. La campana en la B Nacional fue extraordinaria, con un equipo solido que fue de menor a mayor. El dia del ascenso, la ciudad de Cordoba se paralizo. Mas de 250.000 personas salieron a las calles en la caravana mas multitudinaria de la historia del club. Familias enteras, abuelos que habian visto la gloria del 77, padres que sufrieron el descenso y jovenes que soñaban con ver a Talleres en Primera, se unieron en un festejo que duro dias. Fue el renacer de un gigante dormido.'
      },
      {
        tipo: 'imagen',
        imagen: '',
        titulo: 'Copa Argentina 2019',
        fecha: '20 de Diciembre, 2019',
        descripcion: 'Talleres conquista la Copa Argentina 2019, uno de los titulos mas emotivos de la historia reciente del club.'
      },
      {
        tipo: 'partido',
        titulo: 'Semifinal Copa Argentina 2019',
        fecha: '10 de Diciembre, 2019',
        descripcion: 'Un triunfo clave que abrio las puertas a la final de la Copa Argentina. Talleres demostro que estaba destinado a levantar el trofeo.',
        equipoLocal: 'Talleres',
        equipoVisitante: 'Gimnasia LP'
      },
      {
        tipo: 'articulo',
        imagen: '',
        titulo: 'Talleres en Copas Internacionales',
        fecha: '2022',
        descripcion: 'El club representa a Cordoba en la escena internacional, compitiendo en la Copa Libertadores de America.',
        descripcionCompleta: 'La clasificacion de Talleres a la Copa Libertadores de America represento un hito historico para el club y para todo el futbol cordobes. Competir contra los mejores equipos de Sudamerica fue un sueno hecho realidad para millones de hinchas. El plantel se preparo con profesionalismo y entrega, enfrentando rivales de enorme jerarquia en escenarios miticos del continente. Cada partido en la Libertadores fue una fiesta, tanto en casa como de visitante, donde la hinchada tallarina se hizo presente con una pasion que asombro a propios y extranos. La experiencia internacional elevo el prestigio del club y abrio las puertas a una nueva era de ambicion y crecimiento para Talleres de Cordoba.'
      },
      {
        tipo: 'imagen',
        imagen: '',
        titulo: 'La T en lo mas Alto',
        fecha: '2024',
        descripcion: 'Talleres sigue escribiendo su historia, consolidado como uno de los clubes mas grandes e importantes del futbol argentino contemporaneo.'
      }
    ];

    var calendarSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>';
    var imageSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>';
    var footballSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    var arrowSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';

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

    var track = document.getElementById('timeline-track');

    timeline.forEach(function (item, index) {
      var el = document.createElement('div');
      el.className = 'timeline-item fade-in';
      el.style.transitionDelay = (index * 100) + 'ms';

      var cardHTML = '';

      if (item.tipo === 'imagen') {
        var imgContent;
        if (item.imagen) {
          imgContent = '<img src="' + item.imagen + '" alt="' + item.titulo + '" />';
        } else {
          imgContent = '<div class="card-image-placeholder">' + imageSVG + '</div>';
        }

        cardHTML =
          '<div class="timeline-card">' +
            '<div class="card-image-wrapper">' +
              '<span class="card-type-badge">Momento</span>' +
              imgContent +
            '</div>' +
            '<div class="card-body">' +
              '<div class="card-date">' + calendarSVG + '<span>' + item.fecha + '</span></div>' +
              '<h3 class="card-title">' + item.titulo + '</h3>' +
              (item.descripcion ? '<div class="card-divider"></div><p class="card-desc">' + item.descripcion + '</p>' : '') +
            '</div>' +
          '</div>';

      } else if (item.tipo === 'partido') {
        cardHTML =
          '<div class="timeline-card match-card">' +
            '<div class="card-body">' +
              '<div class="match-icon-header">' +
                footballSVG +
                '<span class="match-badge">Partido</span>' +
              '</div>' +
              '<div class="card-date">' + calendarSVG + '<span>' + item.fecha + '</span></div>' +
              '<h3 class="card-title">' + item.titulo + '</h3>' +
              '<div class="match-score">' +
                '<div class="match-team"><span class="match-team-name">' + item.equipoLocal + '</span></div>' +
                '<span class="match-vs">vs</span>' +
                '<div class="match-team"><span class="match-team-name">' + item.equipoVisitante + '</span></div>' +
              '</div>' +
              '<div class="card-divider"></div>' +
              '<p class="card-desc">' + item.descripcion + '</p>' +
            '</div>' +
          '</div>';

      } else if (item.tipo === 'articulo') {
        var imgContent;
        if (item.imagen) {
          imgContent = '<img src="' + item.imagen + '" alt="' + item.titulo + '" />';
        } else {
          imgContent = '<div class="card-image-placeholder">' + imageSVG + '</div>';
        }

        cardHTML =
          '<div class="timeline-card">' +
            '<div class="card-image-wrapper">' +
              '<span class="card-type-badge">Articulo</span>' +
              imgContent +
            '</div>' +
            '<div class="card-body">' +
              '<div class="card-date">' + calendarSVG + '<span>' + item.fecha + '</span></div>' +
              '<h3 class="card-title">' + item.titulo + '</h3>' +
              '<div class="card-divider"></div>' +
              '<p class="card-desc">' + item.descripcion + '</p>' +
              '<button class="read-more-btn" data-index="' + index + '">' +
                'Leer mas ' + arrowSVG +
              '</button>' +
            '</div>' +
          '</div>';
      }

      var dotHTML =
        '<div class="timeline-dot-wrapper">' +
          '<div class="timeline-dot"></div>' +
          '<div class="timeline-dot-pulse"></div>' +
        '</div>';

      var dateLabel = '<span class="timeline-date-label">' + item.fecha + '</span>';

      el.innerHTML = cardHTML + dotHTML + dateLabel;
      track.appendChild(el);

      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.15, root: document.getElementById('timeline-wrapper') });
      obs.observe(el);

      fadeObserver.observe(el);
    });

    function updateTimelineCardSlot() {
      var cards = track.querySelectorAll('.timeline-card');
      if (!cards.length) return;

      var maxCardHeight = 0;
      cards.forEach(function (card) {
        if (card.offsetHeight > maxCardHeight) {
          maxCardHeight = card.offsetHeight;
        }
      });

      track.style.setProperty('--timeline-card-slot', Math.ceil(maxCardHeight + 24) + 'px');
    }

    track.querySelectorAll('.timeline-card img').forEach(function (img) {
      if (!img.complete) {
        img.addEventListener('load', updateTimelineCardSlot);
      }
    });

    updateTimelineCardSlot();

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(updateTimelineCardSlot);
    }

    window.addEventListener('load', updateTimelineCardSlot);

    var timelineResizeTimer = null;
    window.addEventListener('resize', function () {
      clearTimeout(timelineResizeTimer);
      timelineResizeTimer = setTimeout(updateTimelineCardSlot, 120);
    });

    var wrapper = document.getElementById('timeline-wrapper');
    var progressBar = document.getElementById('scroll-progress-bar');

    // Mouse wheel scrolling disabled to force navigation only by dragging or arrows

    wrapper.addEventListener('scroll', function () {
      var maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      var pct = maxScroll > 0 ? (wrapper.scrollLeft / maxScroll) * 100 : 0;
      progressBar.style.width = pct + '%';
    });

    document.getElementById('scroll-left').addEventListener('click', function () {
      wrapper.scrollBy({ left: -420, behavior: 'smooth' });
    });

    document.getElementById('scroll-right').addEventListener('click', function () {
      wrapper.scrollBy({ left: 420, behavior: 'smooth' });
    });

    var isDragging = false;
    var startX = 0;
    var scrollStart = 0;

    wrapper.addEventListener('mousedown', function (e) {
      isDragging = true;
      startX = e.pageX - wrapper.offsetLeft;
      scrollStart = wrapper.scrollLeft;
      wrapper.style.cursor = 'grabbing';
    });

    wrapper.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      e.preventDefault();
      var x = e.pageX - wrapper.offsetLeft;
      var walk = (x - startX) * 1.5;
      wrapper.scrollLeft = scrollStart - walk;
    });

    wrapper.addEventListener('mouseup', function () {
      isDragging = false;
      wrapper.style.cursor = 'grab';
    });

    wrapper.addEventListener('mouseleave', function () {
      isDragging = false;
      wrapper.style.cursor = 'grab';
    });

    var overlay = document.getElementById('modal-overlay');
    var modalInner = document.getElementById('modal-inner');
    var modalClose = document.getElementById('modal-close');

    track.addEventListener('click', function (e) {
      var btn = e.target.closest('.read-more-btn');
      if (!btn) return;

      var idx = parseInt(btn.getAttribute('data-index'), 10);
      var item = timeline[idx];
      if (!item || item.tipo !== 'articulo') return;

      var imgContent;
      if (item.imagen) {
        imgContent = '<div class="modal-image-wrapper"><img src="' + item.imagen + '" alt="' + item.titulo + '" /></div>';
      } else {
        imgContent = '<div class="modal-image-wrapper"><div class="modal-image-placeholder">' + imageSVG + '</div></div>';
      }

      modalInner.innerHTML =
        imgContent +
        '<div class="modal-body">' +
          '<div class="modal-date">' + calendarSVG + '<span>' + item.fecha + '</span></div>' +
          '<h2 class="modal-title">' + item.titulo + '</h2>' +
          '<div class="modal-divider"></div>' +
          '<p class="modal-desc">' + item.descripcionCompleta + '</p>' +
        '</div>';

      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    modalClose.addEventListener('click', function () {
      closeModal();
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeModal();
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    function closeModal() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
