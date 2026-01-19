const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    if (navbar) navbar.classList.add("scrolled")
  } else {
    if (navbar) navbar.classList.remove("scrolled")
  }
})

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

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

document
  .querySelectorAll(
    ".historia, .directiva-box, .quote-box, .highlight-box, .sanctions-box, .final-statement, .image-frame, .timeline-item",
  )
  .forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })

const hero = document.querySelector(".hero")
const heroContent = document.querySelector(".hero-content")

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY
  if (scrollY < window.innerHeight) {
    if (heroContent) {
      heroContent.style.transform = `translateY(${scrollY * 0.3}px)`
      heroContent.style.opacity = 1 - scrollY / window.innerHeight
    }
  }
})

const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-links a")

window.addEventListener("scroll", () => {
  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150
    const sectionHeight = section.offsetHeight

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

const timelineItems = document.querySelectorAll(".timeline-item")

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 200)
      }
    })
  },
  { threshold: 0.5 },
)

timelineItems.forEach((item) => {
  item.style.opacity = "0"
  item.style.transform = "translateY(30px)"
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  timelineObserver.observe(item)
})

console.log(" Club Atlético Talleres - Historia cargada correctamente")
