window.addEventListener('scroll',() => {
let header = document.querySelector('.cabecalho')
header.classList.toggle('scroll',window.scrollY > 500)
})