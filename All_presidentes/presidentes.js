// Progress Bar
function updateProgressBar() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / docHeight) * 100
  document.getElementById("progressBar").style.width = scrollPercent + "%"
}

// Create Particles
function createParticles() {
  const container = document.getElementById("particles")
  if (!container) return

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.left = Math.random() * 100 + "%"
    particle.style.top = Math.random() * 100 + "%"
    particle.style.width = Math.random() * 15 + 5 + "px"
    particle.style.height = particle.style.width
    particle.style.animationDelay = Math.random() * 10 + "s"
    particle.style.animationDuration = Math.random() * 10 + 10 + "s"
    container.appendChild(particle)
  }
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.getElementById("navbar")
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
}

// Animate counters
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.getAttribute("data-target"))
    const duration = 2000
    const increment = target / (duration / 16)
    let current = 0

    const updateCounter = () => {
      current += increment
      if (current < target) {
        counter.textContent = Math.floor(current)
        requestAnimationFrame(updateCounter)
      } else {
        counter.textContent = target
      }
    }

    updateCounter()
  })
}

// Carousel functionality
class Carousel {
  constructor() {
    this.track = document.getElementById("carouselTrack")
    this.container = document.getElementById("carouselContainer")
    this.prevBtn = document.getElementById("prevBtn")
    this.nextBtn = document.getElementById("nextBtn")
    this.indicatorsContainer = document.getElementById("carouselIndicators")

    if (!this.track || !this.container) return

    this.cards = this.track.querySelectorAll(".presidente-card")
    this.cardWidth = 220 + 24 // card width + gap
    this.visibleCards = this.getVisibleCards()
    this.currentIndex = 0
    this.maxIndex = Math.ceil(this.cards.length / this.visibleCards) - 1

    this.init()
  }

  getVisibleCards() {
    const containerWidth = this.container.offsetWidth
    return Math.floor(containerWidth / this.cardWidth) || 1
  }

  init() {
    this.createIndicators()
    this.addEventListeners()
    this.updateButtons()
    this.updateIndicators()

    window.addEventListener("resize", () => {
      this.visibleCards = this.getVisibleCards()
      this.maxIndex = Math.ceil(this.cards.length / this.visibleCards) - 1
      this.currentIndex = Math.min(this.currentIndex, this.maxIndex)
      this.updateCarousel()
      this.createIndicators()
    })
  }

  createIndicators() {
    this.indicatorsContainer.innerHTML = ""
    const totalDots = this.maxIndex + 1

    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement("div")
      dot.className = "carousel-dot" + (i === 0 ? " active" : "")
      dot.addEventListener("click", () => this.goToSlide(i))
      this.indicatorsContainer.appendChild(dot)
    }
  }

  addEventListeners() {
    this.prevBtn.addEventListener("click", () => this.prev())
    this.nextBtn.addEventListener("click", () => this.next())

    // Touch support
    let startX = 0
    let endX = 0

    this.track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX
    })

    this.track.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX
      if (startX - endX > 50) this.next()
      if (endX - startX > 50) this.prev()
    })
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--
      this.updateCarousel()
    }
  }

  next() {
    if (this.currentIndex < this.maxIndex) {
      this.currentIndex++
      this.updateCarousel()
    }
  }

  goToSlide(index) {
    this.currentIndex = index
    this.updateCarousel()
  }

  updateCarousel() {
    const offset = this.currentIndex * this.visibleCards * this.cardWidth
    this.track.style.transform = `translateX(-${offset}px)`
    this.updateButtons()
    this.updateIndicators()
  }

  updateButtons() {
    this.prevBtn.disabled = this.currentIndex === 0
    this.nextBtn.disabled = this.currentIndex === this.maxIndex
  }

  updateIndicators() {
    const dots = this.indicatorsContainer.querySelectorAll(".carousel-dot")
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === this.currentIndex)
    })
  }
}

// Intersection Observer for destacado cards
function initDestacadoAnimations() {
  const cards = document.querySelectorAll(".destacado-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible")
          }, index * 200)
        }
      })
    },
    { threshold: 0.2 },
  )

  cards.forEach((card) => observer.observe(card))
}

// Initialize everything
document.addEventListener("DOMContentLoaded", () => {
  createParticles()
  new Carousel()
  initDestacadoAnimations()

  // Trigger counter animation when in view
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters()
          heroObserver.disconnect()
        }
      })
    },
    { threshold: 0.5 },
  )

  const heroStats = document.querySelector(".hero-stats")
  if (heroStats) heroObserver.observe(heroStats)
})

// Scroll events
window.addEventListener("scroll", () => {
  updateProgressBar()
  handleNavbarScroll()
})
