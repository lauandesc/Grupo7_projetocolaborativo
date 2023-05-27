//
// O método .then() é usado para tratar o resultado de uma Promessa (Promise) no JavaScript.
// Ao fazer uma solicitação HTTP usando o objeto fetch, a função .then() é encadeada
// para lidar com o resultado da solicitação.
//
//
// A API fetch retorna uma Promessa que representa a resposta da solicitação HTTP.
// A Promessa é resolvida quando a resposta é recebida do servidor. Usando .then(),
// você pode fornecer uma função de retorno de chamada (callback) que será executada quando a
// Promessa for resolvida. Essa função de retorno de chamada receberá a resposta como
// argumento, permitindo que você processe os dados retornados pela solicitação.
//
//
// O uso de .then() permite que você trabalhe com a resposta de forma assíncrona,
// lidando com os dados retornados ou realizando ações com base no resultado da solicitação.
// Além disso, você pode encadear vários .then() para executar ações adicionais ou tratar erros
// com o uso de .catch().
//
//
// Em resumo, o método .then() é utilizado para receber e manipular o resultado de uma Promessa,
// como a resposta de uma solicitação HTTP, permitindo que você realize operações subsequentes
// com os dados retornados.
//
//

const divGrid = document.querySelector(".gridlivros");
const livrosporpagina = 9;

window.addEventListener("load", function () {
  console.log("A página foi totalmente carregada para esse aqui também.");
//   fetch("./JS/js-flavio/paginalivros.json")
  fetch("./JS/js-flavio/paginalivros.json")
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error("A resposta da rede não foi OK.");
    })
    .then((json) => {


      //==== capturar a página atual =====//
      const pagina = document.querySelector(".active");
      console.log(pagina.innerText);

      const indexInicial = (pagina.innerText - 1) * livrosporpagina;
      const indexFinal = indexInicial + livrosporpagina;
      console.log(indexFinal);

      for (let i = indexInicial; i < indexFinal && i < json.length; i++) {
        
        //================ renderização dos livros ==============//
        // eu poderia usar o innerHTML também e usar o display
        // block na tag promoção, o jeito abaixo é mais trabalhoso mas é mais didático

        const livro = document.createElement("div");
        livro.classList.add("livro");

        const imagemlivro = document.createElement("div");
        imagemlivro.classList.add("imagemlivroflex");

        const img = document.createElement("img");
        img.src = json[i].img;
        img.alt = json[i].alt;
        
        imagemlivro.appendChild(img);

        const titulo = document.createElement("div");
        titulo.classList.add("titulolivroflex");

        const h4 = document.createElement("h4");
        h4.innerText = json[i].titulo;

        titulo.appendChild(h4);
        
        const preco = document.createElement("div");
        preco.classList.add("precoflex");

        const precoanterior = document.createElement("p");
        const precoatual = document.createElement("p");
        const precoparcelado = document.createElement("p");

        precoanterior.classList.add("precoanterior");
        precoatual.classList.add("precoatual");
        precoparcelado.classList.add("precoparcelado");

        precoanterior.innerText = json[i].precoanterior;
        precoatual.innerText = json[i].precoatual;
        precoparcelado.innerText = json[i].precoparcelado;

        preco.appendChild(precoanterior);
        preco.appendChild(precoatual);
        preco.appendChild(precoparcelado);


        // aqui eu adicionei o botão pois não há necessidade de renderizar
        // tudo do absoluto início
        const botao = document.createElement("div");
        botao.innerHTML = `
            <button class="custom-button">
              <i class="material-icons-outlined">shopping_cart</i>
              Adicionar
            </button>
        `;

        //======== se há promoção então a tagpromocao é adicionada ========//
        const promocao = document.createElement("div");
        promocao.classList.add("tagpromocao");
        promocao.innerHTML = `
          <img src="./img_livraria/imagensdelivros/promocao.png" alt="banner de promoção">
        `;

        console.log(json[i].tagpromocao);
        if (json[i].tagpromocao == "true") {
          livro.appendChild(promocao);
        }

        livro.appendChild(imagemlivro);
        livro.appendChild(titulo);
        livro.appendChild(preco);
        livro.appendChild(botao);

        // elemento criado na linha 26 pra receber o bloco (a div) do livro
        divGrid.appendChild(livro);
        
      }
    })
    .catch((error) => {
      console.log("Error: ", error);
      //bom evitar usar o error.message por conta da linha de origem do tratamento
    });
});
