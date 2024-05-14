const botaoMostrarProjeto = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')
let mostrando = false;

botaoMostrarProjeto.addEventListener('click', () => {
  projetosInativos.forEach(projetoInativo => projetoInativo.classList.toggle('ativo'))
  mostrando = !mostrando
  botaoMostrarProjeto.textContent = mostrando?'Ocultar': 'Mostrar Mais';
})
