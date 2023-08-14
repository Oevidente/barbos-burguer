const links = document.querySelectorAll('.links-menu a');
const content = document.querySelector('.content');
const fundo = document.querySelector('.fundo');
const inicio = ` <div class="sobre">
<h1 class="">Barbos Burguer</h1>
<div class="barra"></div>
<div class="sobreTxt">
  <p>Se você está procurando uma experiência gastronômica única e autêntica, precisa conhecer a Barbos Burguer - uma hamburgueria artesanal que oferece um sabor incomparável em cada mordida.
    A Barbos Burguer é uma empresa familiar que se dedica a produzir hambúrgueres artesanais de alta qualidade, utilizando apenas os melhores ingredientes disponíveis no mercado. O nome da hamburgueria vem de Barbosa, sobrenome da família proprietária do negócio, que tem uma longa tradição na arte da culinária.</p>
</div>
</div>`;
const promocoes = `<div class="promos">
<h1 class="">PROMOS BARBOS</h1>
<div class="barra"></div>
  <div class="promosTxt">
    <div class="promosLista">
      <ul class="comboLista">
        <li>Combo Simples: Barbos Burguer + batata frita + refrigerante </li>
        <li>Combo Duplo: Duplo Barbos Bacon + batata frita + refrigerante</li>
        <li>Combo Nobre: Barão Barbos + batata frita + refrigerante </li>
        <li>Combo Mix: Barbos Egg + Duplo Barbos Burguer + batata frita + refrigerante</li>
      </ul>
      <ul class='valores'>
        <li>R$18,90</li>
        <li>R$24,90</li>
        <li>R$22,90</li>
        <li>R$37,90</li>
      </ul>
    </div>
  </div>
</div>`;
const localizacoes = ``;
const contatos = ``;
const sobreNos = '<h1>Sobre nós</h1><p>Conteúdo da página Sobre nós aqui.</p>';

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const page = link.textContent;
    switch (page) {
      case 'Início':
        content.innerHTML = inicio;
        if (fundo.classList.contains('fundo2')) {
          fundo.classList.remove('fundo2');
          fundo.classList.add('fundo');
        }
        break;
      case 'Promoções':
        content.innerHTML = promocoes;
        if (fundo.classList.contains('fundo')) {
          fundo.classList.remove('fundo');
          fundo.classList.add('fundo2');
        }
        break;
      case 'Localizações':
        content.innerHTML = localizacoes;
        if (fundo.classList.contains('fundo2')) {
          fundo.classList.remove('fundo2');
          fundo.classList.add('fundo');
        }
        break;
      case 'Contatos':
        content.innerHTML = contatos;
        if (fundo.classList.contains('fundo')) {
          fundo.classList.remove('fundo');
          fundo.classList.add('fundo2');
        }
        break;
      case 'Sobre nós':
        content.innerHTML = sobreNos;
        if (fundo.classList.contains('fundo2')) {
          fundo.classList.remove('fundo2');
          fundo.classList.add('fundo');
        }
        break;
    }
  });
});
