//
// Informação: Os novos elementos foram adicionados dinamicamente ao
// DOM após a inicialização do código.
//
// Quando você adiciona elementos dinamicamente ao DOM, os manipuladores
// de eventos não são automaticamente associados a esses novos elementos.
// Para que a funcionalidade seja aplicada aos objetos renderizados, você
// precisa ajustar o código do evento para lidar com esses elementos.
//
// A solução é usar a delegação de eventos, onde você atribui um
// manipulador de eventos ao elemento pai estático que contém os objetos renderizados.
// Dessa forma, os eventos serão capturados quando ocorrerem nos elementos filhos, mesmo
// que tenham sido adicionados posteriormente.
//
// Você adiciona um único manipulador de eventos ao elemento container
// (o pai estático) e verifica qual elemento filho foi clicado com base na classe CSS.
// Dependendo do elemento clicado, você pode executar as ações de aumentar, diminuir a
// quantidade ou remover o item.
//
//

// ============================ declaração de variáveis

//vai receber os elementos de compre mais
let container = document.getElementsByClassName("container")[0];
console.log(container);

//eu preciso catalogar quantos itens foram removidos para exibir
//a tela de vazio
let itensRemovidos = [];

//essa variável ocorre na função atualizarresultado
//para eu contabilizar e comparar na remoção
let itensTotais = 0;

// ============================ funções

function adicionarmais(evento) {
  evento.preventDefault();
  let cartao = evento.target.parentNode.parentNode.parentNode; //técnica muito interessante para capturar um elemento em uma lista de objetos
  console.log(cartao); //importante observar qual é o nó atual da captura

  let titulo = cartao.querySelector(".titulo").innerText;
  let precoAtual = cartao.querySelector(".precoatual").innerText;

  let src = cartao.querySelector(".imagem").getAttribute("src");

  const grid = document.createElement("div");
  grid.classList.add("gridcarrinho");
  grid.innerHTML = `
      <div class="descricaoproduto">
        <div class="fundobrancodaimagem">
          <img
            src="${src}"
            alt="Imagem da capa do livro escolhido para compra."
          />
        </div>
        <div class="descricaotitulo">
          <h3>${titulo}</h3>
          <p>"The Winter is coming..."</p>
          <p>"The API is coming..."</p>
          <!-- Erro evidente na maioria das livrarias que não adicionam o peso do livro. Aqui a gente não vai ter esse erro :) -->
        </div>
      </div>
      <div class="quantidadeproduto">
        <div class="botoesquantidade">
          <a href="#" class="botaomenos">-</a>
          <div class="divquantidade">
            <input type="number" class="quantidade" value="1" min="1" />
          </div>
          <a href="#" class="botaomais">+</a>
        </div>
        <p><a href="#" class="removerlista">Remover este item</a></p>
      </div>
      <div>
        <p class="precoproduto">${precoAtual}</p>
      </div>
  `;

  // Verificar se o item já foi adicionado anteriormente
  let itensexistentes = document.getElementsByClassName("gridcarrinho");
  console.log("Quantidade de itens do carrinho: " + itensexistentes.length);
  for (let i = 0; i < itensexistentes.length; i++) {
    let item = itensexistentes[i];
    let itemTitulo = item.querySelector(".descricaotitulo h3").innerText;
    if (itemTitulo === titulo) {
      // Item duplicado encontrado, realizar ação apropriada (exibir mensagem de aviso, retornar sem adicionar novamente, etc.)
      console.log("Já foi adicionado antes.");
      return; //interrompe o loop
    }
  }

  container.appendChild(grid);

  let vazio = document.getElementById("vazio");
  vazio.style.display = "none";

  atualizarresultado();
}

function atualizarresultado() {
  
  let itens = document.getElementsByClassName("gridcarrinho");

  let subtotal = 0;
  itensTotais = itens.length;
  console.log(itens.length); //quantidade de itens do carrinho

  for (let i = 0; i < itens.length; i++) {
    let quantidade = itens[i].getElementsByClassName("quantidade")[0];
    let precoproduto = itens[i].getElementsByClassName("precoproduto")[0];

    let quantidadeConvertido = parseInt(quantidade.value);
    let precoConvertido = parseFloat(
      precoproduto.innerText.replace("R$", "").replace(",", ".")
    );
    subtotal += quantidadeConvertido * precoConvertido;
  }

  if (itensTotais == 0) {
    let container = document.querySelector(".container");
    let vazio = document.getElementById("vazio");
    vazio.style.display = "flex";
    container.appendChild(vazio);
  }

  let subtotalHTML = document.getElementById("subtotal");
  subtotalHTML.innerText = "R$" + subtotal.toFixed(2).replace(".", ","); //converter o valor calculado de volta em string no HTML

  let entregaHTML = document.getElementById("entrega");
  let entregaConvertida = parseFloat(
    entregaHTML.innerText.replace("R$", "").replace(",", ".")
  );

  let totalHTML = document.getElementById("total");
  let total = subtotal + entregaConvertida;

  if (subtotal == 0) {
    total = 0;
  }

  totalHTML.innerText = "R$" + total.toFixed(2).replace(".", ","); //converter o valor calculado de volta em string no HTML

  let quantidadetotaltitulo = document.getElementById("quantidadetotaltitulo");
  quantidadetotaltitulo.innerText = itens.length;

  let item = document.getElementById("item");
  item.innerText = itens.length;

}

function acrescentar(evento) {
  evento.preventDefault(); //impede o rebote do botão
  let quantidadeElement =
    evento.target.parentNode.getElementsByClassName("quantidade")[0];
  let quantidade = parseInt(quantidadeElement.value);
  quantidadeElement.value = quantidade + 1;
  atualizarresultado();
}

function diminuir(evento) {
  evento.preventDefault();
  let quantidadeElement =
    evento.target.parentNode.getElementsByClassName("quantidade")[0];
  let quantidade = parseInt(quantidadeElement.value);

  if (quantidade > 1) {
    quantidadeElement.value = quantidade - 1;
    atualizarresultado();
  }
}

function removeritem(evento) {
  evento.preventDefault();

  let item = evento.target.parentNode.parentNode.parentNode;

  item.parentNode.removeChild(item);
  console.log(item.length);

  atualizarresultado();

  itensRemovidos.push(item);

  console.log(itensRemovidos.length);
}

// ============================ chamando os eventos

//vídeo importante explicando o evento de target que recebe o o clique https://www.youtube.com/watch?v=v0sOvnhK_qQ
//pai estático, delegação de eventos
container.addEventListener("click", function (event) {
  if (event.target.classList.contains("botaomais")) {
    acrescentar(event);
  } else if (event.target.classList.contains("botaomenos")) {
    diminuir(event);
  } else if (event.target.classList.contains("removerlista")) {
    removeritem(event);
  }
});

let botaoadicionarmaisproduto = document.getElementsByClassName(
  "adicionarmaisproduto"
);

for (let i = 0; i < botaoadicionarmaisproduto.length; i++) {
  botaoadicionarmaisproduto[i].addEventListener("click", adicionarmais);
}

//================================ Carrossel ======================================//

function setupCarrossel() {
  const scroll = document.getElementById("scroll"); // id da div container que recebe os botões clicáveis
  const botaoEsquerda = document.querySelector(".anterior");
  const botaoDireita = document.querySelector(".proximo");

  // quantidade de pixels para rolar por vez
  const scrollAmount = 410;

  let scrollDirection = 1; // 1 para a direita, -1 para a esquerda
  let scrollTimer; //Variável para armazenar o ID do temporizador

  const scrollLeft = () => {
    // evento.preventDefault();
    scroll.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    // evento.preventDefault();
    scroll.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
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

  botaoEsquerda.addEventListener("click", scrollLeft);
  botaoDireita.addEventListener("click", scrollRight);

  startAutoScroll();
}

// ================ Chamando as funções

// Chamar a função inicialmente para exibir o subtotal correto

setupCarrossel();
atualizarresultado();