
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    window.addEventListener('scroll', function() {
      const scrolled = window.scrollY;
      if (heroImage) {
        heroImage.style.transform = 'scale(1.1) translateY(' + scrolled * 0.3 + 'px)';
      }
    });

    const heroContent = document.querySelector('.hero-content');
    document.addEventListener('mousemove', function(e) {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      if (heroContent) {
        heroContent.style.transform = 'translateY(0) translateX(' + moveX + 'px) translateY(' + moveY + 'px)';
      }
    });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.nav-card').forEach(card => {
      observer.observe(card);
    });

    const sectionObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-header').forEach(header => {
      header.style.opacity = '0';
      header.style.transform = 'translateY(30px)';
      header.style.transition = 'all 0.8s ease';
      
      const headerObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });
      
      headerObserver.observe(header);
    });

    document.querySelectorAll('.ano-card').forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(40px)';
      card.style.transition = `all 0.6s ease ${index * 0.15}s`;
      
      const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });
      
      cardObserver.observe(card);
    });

    const escudosFrame = document.querySelector('.escudos-frame');
    if (escudosFrame) {
      escudosFrame.style.opacity = '0';
      escudosFrame.style.transform = 'scale(0.95)';
      escudosFrame.style.transition = 'all 0.8s ease';
      
      const escudosObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'scale(1)';
          }
        });
      }, { threshold: 0.1 });
      
      escudosObserver.observe(escudosFrame);
    }

    const escudosCaption = document.querySelector('.escudos-caption');
    if (escudosCaption) {
      escudosCaption.style.opacity = '0';
      escudosCaption.style.transform = 'translateY(20px)';
      escudosCaption.style.transition = 'all 0.6s ease 0.3s';
      
      const captionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });
      
      captionObserver.observe(escudosCaption);
    }