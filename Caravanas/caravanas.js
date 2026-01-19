// Navbar scroll effect
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Create floating particles in hero
function createParticles() {
  const particlesContainer = document.getElementById("particles")
  if (!particlesContainer) return

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 10 + 5}px;
      height: ${Math.random() * 10 + 5}px;
      animation-delay: ${Math.random() * 15}s;
      animation-duration: ${Math.random() * 10 + 10}s;
    `
    particlesContainer.appendChild(particle)
  }
}

createParticles()

// Intersection Observer for caravana cards
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15,
}

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

document.querySelectorAll(".caravana-card").forEach((card) => {
  cardObserver.observe(card)
})

// Counter animation for stats
function animateCounter(element, target) {
  const duration = 2000
  const start = 0
  const startTime = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    const current = Math.floor(start + (target - start) * easeOut)

    if (target >= 1000) {
      element.textContent = current.toLocaleString("es-AR")
    } else {
      element.textContent = current
    }

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll("[data-target]")
        counters.forEach((counter) => {
          const target = Number.parseInt(counter.dataset.target)
          animateCounter(counter, target)
        })
        statsObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

// Observe hero stats
const heroStats = document.querySelector(".hero-stats")
if (heroStats) {
  statsObserver.observe(heroStats)
}

// Observe stats section
const statsSection = document.querySelector(".stats-section")
if (statsSection) {
  statsObserver.observe(statsSection)
}

// Parallax effect for hero section
const hero = document.querySelector(".hero")
const heroContent = document.querySelector(".hero-content")

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY
  if (scrollY < window.innerHeight && heroContent) {
    heroContent.style.transform = `translateY(${scrollY * 0.4}px)`
    heroContent.style.opacity = 1 - scrollY / (window.innerHeight * 0.8)
  }
})

// Detail items hover animation
document.querySelectorAll(".detail-item").forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.05}s`
})

// Add tilt effect to caravana images
document.querySelectorAll(".caravana-image").forEach((image) => {
  image.addEventListener("mousemove", (e) => {
    const rect = image.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 20
    const rotateY = (centerX - x) / 20

    image.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  })

  image.addEventListener("mouseleave", () => {
    image.style.transform = "perspective(1000px) rotateX(0) rotateY(0)"
  })
})

// Typing effect for quote
const quoteText = document.querySelector(".main-quote p")
if (quoteText) {
  const originalText = quoteText.textContent
  let isVisible = false

  const quoteObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          isVisible = true
          quoteText.textContent = ""
          let i = 0

          function typeWriter() {
            if (i < originalText.length) {
              quoteText.textContent += originalText.charAt(i)
              i++
              setTimeout(typeWriter, 50)
            }
          }

          typeWriter()
        }
      })
    },
    { threshold: 0.5 },
  )

  quoteObserver.observe(quoteText)
}

// Stats cards stagger animation
const statsCards = document.querySelectorAll(".stats-card")
const statsCardsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 150)
      }
    })
  },
  { threshold: 0.3 },
)

statsCards.forEach((card) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(30px)"
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  statsCardsObserver.observe(card)
})


window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / docHeight) * 100
  scrollProgress.style.width = `${scrollPercent}%`
})

console.log("Club Atlético Talleres - Caravanas Históricas cargada correctamente")
