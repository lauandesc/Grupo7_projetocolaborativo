//
//
//
//
//
//

console.log(document);

//================================ Carrossel ======================================//

const escrita = document.getElementById("escrita"); // id da div container que recebe os botões clicáveis
const cadernos = document.getElementById("cadernos"); // id da div container que recebe os botões clicáveis
const bolsas = document.getElementById("bolsas"); // id da div container que recebe os botões clicáveis
const outrosmateriais = document.getElementById("outrosmateriais"); // id da div container que recebe os botões clicáveis

const escritabotaoesquerda = document.querySelector(".escritabotaoesquerda");
const escritabotaodireita = document.querySelector(".escritabotaodireita");

const cadernosbotaoesquerda = document.querySelector(".cadernosbotaoesquerda");
const cadernosbotaodireita = document.querySelector(".cadernosbotaodireita");

const bolsasmochilasbotaoesquerda = document.querySelector(".bolsasmochilasbotaoesquerda");
const bolsasmochilasbotaodireita = document.querySelector(".bolsasmochilasbotaodireita");

const outrosmateriaisbotaoesquerda = document.querySelector(".outrosmateriaisbotaoesquerda");
const outrosmateriaisbotaodireita = document.querySelector(".outrosmateriaisbotaodireita");

function rodarCarrossel(carrossel, esquerda, direita, velocidade) {

  // quantidade de pixels para rolar por vez
  const scrollAmount = velocidade;

  let scrollDirection = 1; // 1 para a direita, -1 para a esquerda
  let scrollTimer; //Variável para armazenar o ID do temporizador

  const scrollLeft = () => {
    // evento.preventDefault();
    carrossel.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    // evento.preventDefault();
    carrossel.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const startAutoScroll = () => {
    scrollTimer = setInterval(() => {
      if (scrollDirection === 1) {
        scrollRight();
        scrollDirection = -1;
      } else {
        scrollLeft();
        scrollDirection = 1;
      }
    }, 7000); // 7 segundos
  };

  //para interromper o scroll basta chamar essa função
  // const stopAutoScroll = () => {
  //   clearInterval(scrollTimer);
  // };

  esquerda.addEventListener("click", scrollLeft);
  direita.addEventListener("click", scrollRight);

//   startAutoScroll();
}

// ================ Chamando as funções

// Chamar a função inicialmente para exibir o subtotal correto

rodarCarrossel(escrita, escritabotaoesquerda, escritabotaodireita, 420);
rodarCarrossel(cadernos, cadernosbotaoesquerda, cadernosbotaodireita, 420);
rodarCarrossel(bolsas, bolsasmochilasbotaoesquerda, bolsasmochilasbotaodireita, 560);
rodarCarrossel(outrosmateriais, outrosmateriaisbotaoesquerda, outrosmateriaisbotaodireita, 570);
