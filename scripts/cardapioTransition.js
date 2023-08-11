const cardapio = document.querySelector('.cardapio');
const produtos = document.querySelector('.produtos');

cardapio.addEventListener('mouseover', () => {
  produtos.classList.add('show');
});

cardapio.addEventListener('mouseout', () => {
  produtos.classList.remove('show');
});
