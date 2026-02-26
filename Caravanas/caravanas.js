
    var caravanas = [
      {
        fecha: '15 de Septiembre, 1974',
        torneo: 'Nacional',
        ubicacion: 'Estadio Presidente Perón (El Cilindro de Avellaneda)',
        convocatoria: '+20.000 personas',
        descripcion: 'El día que Talleres fue local en Avellaneda, fue un "Cordobazo". Una marea albiazul invadió Buenos Aires para enfrentar a River Plate demostrando que la pasión cordobesa no conoce fronteras.',
        imagen: 'TalleresVsRiver/foto1.jpeg'
      },
      {
        fecha: '03 de Noviembre, 1974',
        torneo: 'Nacional',
        ubicacion: 'Estadio ubicado en el Parque Independencia',
        convocatoria: '+10.000 personas',
        descripcion: 'En la imagen, el arquero de Newell´s viendo como Fachetti hace el 1-1 en un partido historico donde Talleres quedó muy cerca de la clasificación.',
        imagen: 'TalleresVsNewells/foto1.jpeg'
      },
      {
        fecha: '30 de Noviembre, 1975',
        torneo: 'Nacional',
        ubicacion: 'En el actual León Kolbowski en Villa Crespo',
        convocatoria: '+15.000 personas',
        descripcion: '"Córdoba se hizo país en Buenos Aires", éste día Talleres le proporcino un 3-0 al Club Atlético Atlanta clasificando a la ronda final del Nacional.',
        imagen: 'TalleresVsAtlanta/foto1.jpeg'
      },
      {
        fecha: '14 de Noviembre, 1976',
        torneo: 'Nacional',
        ubicacion: 'Estadio ubicado en el Parque Independencia',
        convocatoria: '+10.000 personas',
        descripcion: 'Una costumbre copar el estadio de Newell´s, ese dia los hinchas albiazules festejaron la punta absoluta en la zona "D".',
        imagen: 'TalleresVsNewells/foto2.jpeg'
      },
      {
        fecha: '12 de Diciembre, 1976',
        torneo: 'Nacional',
        ubicacion: 'Santa Fe',
        convocatoria: '10.000 personas',
        descripcion: 'La "T" consiguió el empate sobre el final frente a Colón del partido con un gol de Cherini y de esta forma logró la clasificación a las fases finales del torneo.',
        imagen: 'TalleresVsColon/foto1.jpeg'
      },
      {
        fecha: '19 de Diciembre, 1976',
        torneo: 'Nacional',
        ubicacion: 'Estadio Dr. Camilo Cichero (hoy La Bombonera)',
        convocatoria: '20.000 personas',
        descripcion: 'En la imagen, el acompañamiento de los hinchas que coparon las miticas tribunas de La Bombonera para jugar frente a River Plate.',
        imagen: 'TalleresVsRiver2/foto1.jpeg'
      },
      {
        fecha: '20 de Enero, 1978',
        torneo: 'Nacional',
        ubicacion: 'Estadio Independiente (la Doble Visera)',
        convocatoria: '15.000 personas',
        descripcion: 'Talleres logró empatar un controversial encuentro en el primer partido de la final por el Nacional 1977 contra Independiente.',
        imagen: 'TalleresVsIndependiente/foto1.jpeg'
      },
      {
        fecha: '30 de Diciembre, 1978',
        torneo: 'Nacional',
        ubicacion: 'Estadio Independiente (la Doble Visera)',
        convocatoria: '15.000 personas',
        descripcion: 'Está vez el seguimiento de los hinchas fue igual a la final del torneo anterior pero está vez por la semifinal del Nacional 1978.',
        imagen: 'TalleresVsIndependiente/foto2.jpeg'
      },
      {
        fecha: '14 de Octubre, 1979',
        torneo: 'Nacional',
        ubicacion: 'Estadio ubicado en el Parque Independencia',
        convocatoria: '10.000 personas',
        descripcion: 'Talleres puntero e invicto empataba contra Newell´s Old Boys 1-1 con gol de Guerini a los 47min.',
        imagen: 'TalleresvsNewells/foto3.jpeg'
      },
      {
        fecha: '8 de Diciembre, 2021',
        torneo: 'Copa Argentina',
        ubicacion: 'Estadio Único Madre de Ciudades',
        convocatoria: '15.000 personas',
        descripcion: 'La primera final de un torneo nacional despues de 43 años, el acompañamiento fue acorde a la sitaución.',
        imagen: 'TalleresVsBoca/foto1.jpeg'
      },
      {
        fecha: '26 de Octubre, 2022',
        torneo: 'Copa Argentina',
        ubicacion: 'Estadio Marcelo Bielsa',
        convocatoria: '20.000 personas',
        descripcion: 'Una multitud viajó a Rosario para presenciar como Talleres frente a Banfield, ingresaba por segundo año consecutivo a la final de la Copa Argentina.',
        imagen: 'TalleresVsBanfield/foto1.jpeg'
      },
      {
        fecha: '30 de Octubre, 2022',
        torneo: 'Copa Argentina',
        ubicacion: 'Estadio Malvinas Argentinas',
        convocatoria: '35.000 personas',
        descripcion: 'La mayor convocatoria de la historia del fútbol cordobes, más de 30mil almas viajaron a Mendoza.',
        imagen: 'TalleresVsPatronato/foto1.jpeg'
      },
    ];

    var recaudaciones = [
      {
        titulo: 'Década 1961-1970',
        badge: '9 años',
        talleres: 3,
        belgrano: 1,
        instituto: 2
      },
      {
        titulo: 'Década 1970-1980',
        badge: '10 años',
        talleres: 3,
        belgrano: 1,
        instituto: 2
      },
      {
        titulo: 'Década 1982-1990',
        badge: '8 años',
        talleres: 78.089,
        belgrano: 52.402,
        instituto: 42.470
      },
      {
        titulo: 'Década 1990-1999',
        badge: '10 años',
        talleres: 121.005,
        belgrano: 85.008,
        instituto: 39.960
      },
    ];

    var cameraSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="12" cy="13" r="4"/><line x1="2" y1="2" x2="4" y2="4"/></svg>';

    function formatMoney(num) {
      return '$' + num.toLocaleString('es-AR');
    }

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

    var caravanasList = document.getElementById('caravanas-list');

    var locationSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
    var peopleSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';

    caravanas.forEach(function (car, index) {
      var card = document.createElement('div');
      card.className = 'caravana-card fade-up';
      card.style.transitionDelay = (index * 80) + 'ms';

      var imgContent;
      if (car.imagen) {
        imgContent = '<img src="' + car.imagen + '" alt="Caravana ' + car.fecha + '" />';
      } else {
        imgContent = '<div class="caravana-card-img-placeholder">' + cameraSVG + '</div>';
      }

      card.innerHTML =
        '<div class="caravana-card-img">' + imgContent + '</div>' +
        '<div class="caravana-card-body">' +
          '<p class="caravana-card-number">Caravana N.&deg; ' + (index + 1) + '</p>' +
          '<h3 class="caravana-card-fecha">' + car.fecha + '</h3>' +
          '<p class="caravana-card-torneo">' + car.torneo + '</p>' +
          '<div class="caravana-card-meta">' +
            '<span class="caravana-card-meta-item">' + locationSVG + ' ' + car.ubicacion + '</span>' +
            '<span class="caravana-card-meta-item">' + peopleSVG + ' ' + car.convocatoria + '</span>' +
          '</div>' +
          '<div class="caravana-card-divider"></div>' +
          '<p class="caravana-card-desc">' + car.descripcion + '</p>' +
        '</div>';

      caravanasList.appendChild(card);
      fadeObserver.observe(card);
    });

    var recaudacionesGrid = document.getElementById('recaudaciones-grid');
    var arrowUpSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';
    var arrowDownSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';

    recaudaciones.forEach(function (rec, index) {
      var values = [
        { name: 'Talleres', amount: rec.talleres },
        { name: 'Belgrano', amount: rec.belgrano },
        { name: 'Instituto', amount: rec.instituto }
      ];

      var maxVal = Math.max(rec.talleres, rec.belgrano, rec.instituto);
      var minVal = Math.min(rec.talleres, rec.belgrano, rec.instituto);

      var group = document.createElement('div');
      group.className = 'recaudacion-group fade-up';
      group.style.transitionDelay = (index * 100) + 'ms';

      var teamsHTML = '';
      values.forEach(function (team) {
        var cls = '';
        var indicatorHTML = '';

        if (team.amount === maxVal) {
          cls = ' highest';
          indicatorHTML = '<span class="recaudacion-team-indicator up">' + arrowUpSVG + ' Mayor</span>';
        } else if (team.amount === minVal) {
          cls = ' lowest';
          indicatorHTML = '<span class="recaudacion-team-indicator down">' + arrowDownSVG + ' Menor</span>';
        }

        teamsHTML +=
          '<div class="recaudacion-team">' +
            '<p class="recaudacion-team-name">' + team.name + '</p>' +
            '<p class="recaudacion-team-amount' + cls + '">' + formatMoney(team.amount) + '</p>' +
            indicatorHTML +
          '</div>';
      });

      group.innerHTML =
        '<div class="recaudacion-group-header">' +
          '<h3 class="recaudacion-group-title">' + rec.titulo + '</h3>' +
          '<span class="recaudacion-group-badge">' + rec.badge + '</span>' +
        '</div>' +
        '<div class="recaudacion-teams">' + teamsHTML + '</div>';

      recaudacionesGrid.appendChild(group);
      fadeObserver.observe(group);
    });

    var totalTalleres = 0;
    var totalBelgrano = 0;
    var totalInstituto = 0;

    recaudaciones.forEach(function (rec) {
      totalTalleres += rec.talleres;
      totalBelgrano += rec.belgrano;
      totalInstituto += rec.instituto;
    });

    var totals = [
      { name: 'Talleres', amount: totalTalleres },
      { name: 'Belgrano', amount: totalBelgrano },
      { name: 'Instituto', amount: totalInstituto }
    ];

    var maxTotal = Math.max(totalTalleres, totalBelgrano, totalInstituto);
    var minTotal = Math.min(totalTalleres, totalBelgrano, totalInstituto);

    var totalsContainer = document.getElementById('totals-container');
    var totalsCard = document.createElement('div');
    totalsCard.className = 'recaudacion-totals fade-up';

    var totalsTeamsHTML = '';
    totals.forEach(function (team) {
      var cls = 'mid';
      if (team.amount === maxTotal) cls = 'highest';
      else if (team.amount === minTotal) cls = 'lowest';

      var barPercent = (team.amount / maxTotal * 100).toFixed(1);

      totalsTeamsHTML +=
        '<div class="recaudacion-totals-team">' +
          '<p class="recaudacion-totals-team-name">' + team.name + '</p>' +
          '<p class="recaudacion-totals-team-amount ' + cls + '">' + formatMoney(team.amount) + '</p>' +
          '<div class="recaudacion-totals-bar-wrapper">' +
            '<div class="recaudacion-totals-bar ' + cls + '" style="width: 0%;" data-target-width="' + barPercent + '%"></div>' +
          '</div>' +
        '</div>';
    });

    totalsCard.innerHTML =
      '<div class="recaudacion-totals-header">' +
        '<h3 class="recaudacion-totals-title">Recaudacion Total</h3>' +
        '<span class="recaudacion-totals-label">Acumulado</span>' +
      '</div>' +
      '<div class="recaudacion-totals-teams">' + totalsTeamsHTML + '</div>';

    totalsContainer.appendChild(totalsCard);
    fadeObserver.observe(totalsCard);

    // Animate bars when they come into view
    var barObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var bars = entry.target.querySelectorAll('.recaudacion-totals-bar');
          bars.forEach(function (bar, i) {
            setTimeout(function () {
              bar.style.width = bar.getAttribute('data-target-width');
            }, i * 200 + 300);
          });
          barObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    barObserver.observe(totalsCard);