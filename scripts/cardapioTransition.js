let cardapio = document.querySelector('.cardapio');
let produtos = null;

cardapio.addEventListener('mouseenter', abreMenu);
function abreMenu() {
  if (!produtos) {
    produtos = document.createElement('div');
    produtos.className = 'produtos';
    produtos.innerHTML = `<div class="simples">
    <h3>Simples:</h3>
    <div class="burguers">
      <p>Barbos Bacon
        Barbos Burguer
        Barbos Egg</p>
      <p>R$12,90
        R$10,90
        R$11,90
      </p>
    </div>
  </div>

  <div class="duplos">
    <h3>Duplos:</h3>
    <div class="burguers">
      <p>Duplo Barbos Bacon
        Duplo Barbos Burguer </p>
      <p>R$16,90
        R$15,90</p>
    </div>
  </div>

  <div class="nobres">
    <h3>Nobres:</h3>
    <div class="burguers">
      <p>Barão Barbos
        Viscondee Barbos</p>
      <p>R$18,90
        R$17,90</p>
    </div>
  </div>`;

    cardapio.appendChild(produtos);
    produtos.style.opacity = '0';

    setTimeout(() => {
      produtos.style.opacity = '1';
      let h3Elements = produtos.getElementsByTagName('h3');
      let pElements = produtos.getElementsByTagName('p');
      for (let h3 of h3Elements) {
        h3.style.opacity = '1';
      }
      for (let p of pElements) {
        p.style.opacity = '1';
      }
      cardapio.style.transitionDelay = '0.6s';
    }, 600);
    produtos.style.height = 'stretch';
  }
}
// function corrigeH2() {
//   produtos.style.height = 'stretch';
//   cardapio.style.transitionDelay = '0s';
//   cardapio.style.position = ' absolute';
//   cardapio.style.top = ' 100px';
//   cardapio.style.right = ' 0';
//   cardapio.style.width = ' 93px';
//   cardapio.style.height = ' 26px';
//   cardapio.style.display = ' flex';
//   cardapio.style.flexDirection = ' column';
//   cardapio.style.justifyContent = ' center';
//   cardapio.style.alignItems = ' flex-start';
//   cardapio.style.flexShrink = ' 0';
//   cardapio.style.background = ' var(--red-300)';
//   cardapio.style.color = ' var(--orange-100)';
//   cardapio.style.fontFamily = ' var(--sugo)';
//   cardapio.style.borderRadius = ' 8px 0px 0px 8px';
//   cardapio.style.padding = ' 16px 25px';
//   cardapio.style.transition =
//     ' width 0.6s ease-in-out, height 0.6s ease-in-out';
// }
cardapio.addEventListener('mouseleave', fechaMenu);
function fechaMenu() {
  if (produtos) {
    produtos.style.opacity = '0';
    setTimeout(() => {
      produtos.style.height = '0px';
    }, 600);
    setTimeout(() => {
      cardapio.removeChild(produtos);
      produtos = null;
    }, 1200);
  }
}
