const links = document.querySelectorAll('.links-menu a');
const content = document.querySelector('.content');
const fundo = document.querySelector('.fundo');
const inicio = ` <div class="home">
<h1 class="">Barbos Burguer</h1>
<div class="barra"></div>
  <div class="homeTxt">
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
const localizacoes = `<div class="localizacoes">
<h1 class="">ACHE A BARBOS</h1>
<div class="barra"></div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d246.868218129415!2d-34.916756745644754!3d-8.112530174717495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1e575d4faa85%3A0x2fea392f06b51f09!2sR.%20Rio%20Maju%2C%2021%20-%20Ipsep%2C%20Recife%20-%20PE%2C%2051190-470!5e0!3m2!1spt-BR!2sbr!4v1692041787175!5m2!1spt-BR!2sbr" width="544" height="409" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>`;
const contatos = `<div class="contatos">
<h1 class="">fale com a barbos</h1>
<div class="barra"></div>
  <div class="contatosTxt">
    <p><strong>Telefone:</strong> (81) 1234-5678</p>
    <p><strong>E-mail:</strong> contato@barbosburguer.com</p>
    <p>
      <p><strong>Horário de funcionamento:</strong></p>
      <ul>
        <li>Segunda a sexta: 11h às 22h</li>
        <li>Sábados e feriados: 12h às 22h</li>
        <li>Domingos: 17h às 22h</li>
      </ul>
    </p>
    <p>
      <p><strong>Redes sociais:</strong></p>
      <ul>
        <li>Instagram: @barbosburguer</li>
        <li>Facebook: /barbosburguer</li>
      </ul>
    </p>
  </div>
</div>`;
const sobreNos = `<div class="sobre">
<h1 class="">Sobre a Barbos</h1>
<div class="barra"></div>
  <div class="sobreTxt">
    <p>O nosso nome Barbos vem da família Barbosa, que sempre prezou por qualidade e sabor em suas refeições. E é exatamente isso que você encontrará em nossos hambúrgueres.</p>

    <p>Entre as nossas opções de hambúrgueres simples, temos o clássico Barbos Bacon, com bacon crocante, o Barbos Burguer, com carne suculenta e queijo derretido, e o Barbos Egg, com um ovo frito perfeito.</p>
    
    <p>Para aqueles que preferem um hambúrguer mais robusto, temos os nossos hambúrgueres duplos. Experimente o Duplo Barbos Bacon, com duas porções de bacon, ou o Duplo Barbos Burguer, com carne suculenta e queijo derretido em dobro.</p>
    
    <p>
      E para os paladares mais requintados, temos os nossos hambúrgueres nobres. O Barão Barbos é preparado com carne premium, queijo brie e geleia de pimenta, enquanto o Visconde Barbos é servido com cogumelos salteados, queijo gorgonzola e rúcula fresca.
    </p>
    <p>Venha conhecer a Barbos Burguer e se deliciar com os nossos hambúrgueres artesanais, preparados com amor e tradição da família Barbosa.</p>
  </div>
</div>`;

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
