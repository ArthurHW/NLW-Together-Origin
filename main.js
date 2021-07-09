// Menus mobile
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('#header nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// Adicionar sombra no header
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

// Adicionar sombra no header
function addShadowToHeader() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// Carousel com swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

//  Rolagem suave
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 300,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text, 
  #about .image, #about .text, 
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
`,
  { interval: 100 }
)

// Botão voltar para o topo
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', () => {
  addShadowToHeader()
  backToTop()
})
