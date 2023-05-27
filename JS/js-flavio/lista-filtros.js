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

// ========================== FILTROS =========================== //

function filtro() {
  // Capturar a referência da section onde serão inseridas as listas
  const section = document.querySelector(".filtros");

  // "load" ocorre quando a página foi completamente carregada.
  // remover isso depois e adicionar na implementação dos livros.
  window.addEventListener("load", function () {
    console.log("A página foi totalmente carregada.");

    fetch("./JS/js-flavio/filtro.json")
      // .then((response) => response.json())
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("A resposta da rede não foi OK.");
      })
      .then((json) => {
        //esse json pode se chamar dados, qualquer coisa.
        // Criar um objeto para armazenar os arrays separados por nometipofiltro
        const listasPorTipo = {};

        // Iterar sobre os elementos do JSON e separa em arrays com base no nometipofiltro
        json.forEach((elemento) => {
          const nometipofiltro = elemento.nometipofiltro;
          if (!listasPorTipo[nometipofiltro]) {
            //se true, o array não foi criado
            listasPorTipo[nometipofiltro] = []; //o array será atribuído à propriedade nometipofiltro no objeto listasPorTipo
          }

          listasPorTipo[nometipofiltro].push(elemento);

          // O trecho de código listasPorTipo[nometipofiltro].push(elemento); adiciona o objeto
          // elemento a um array específico dentro do objeto listasPorTipo.
          //
          // Supondo que listasPorTipo seja um objeto e nometipofiltro seja uma chave existente
          // nesse objeto, o código irá recuperar o array associado a essa chave e adicionar o
          // elemento a esse array utilizando o método push().
          //
          // Essa linha de código é útil para agrupar objetos em arrays com base em uma
          // determinada propriedade ou categoria. No caso, o objeto elemento está sendo
          // adicionado ao array correspondente ao valor de nometipofiltro.

          // console.log(listasPorTipo);
          console.log(listasPorTipo[nometipofiltro]);
        });

        // Object.keys(listasPorTipo).forEach((nometipofiltro)
        // Itera sobre as chaves (nometipofiltro) do objeto listasPorTipo.
        //
        // nometipofiltro é o parâmetro que representa cada chave do objeto listasPorTipo
        // à medida que o loop forEach percorre o array de chaves. Você pode nomear esse
        // parâmetro como desejar, pois ele representa cada chave individualmente durante
        // a iteração.
        //

        Object.keys(listasPorTipo).forEach((nometipofiltro) => {
          const lista = listasPorTipo[nometipofiltro];

          // Ordenar a lista com base no campo 'filtro' exceto tiponomefiltro Ano
          if (nometipofiltro !== "Ano") {
            lista.sort((a, b) => {
              if (a.filtro < b.filtro) return -1;
              if (a.filtro > b.filtro) return 1;
              return 0; //esse return 0 significa que não há distinção entre eles em termos de classificação.
            });
          }

          // o console abaixo exibe os objetos separados e filtrados (baseados)
          // pelo nometipofiltro
          // console.log(lista);

          // esse console log exibe a lista baseada em nometipofiltro
          // console.log(nometipofiltro);

          // Criar uma div para cada lista
          const divLista = document.createElement("div");
          divLista.classList.add("tipofiltro"); // Adicionar a classe 'tipofiltro'

          // Criar um título para a lista com base no nometipofiltro
          const titulo = document.createElement("h3");
          titulo.textContent = nometipofiltro;

          // Criar uma ul para armazenar os itens da lista
          const ul = document.createElement("ul");

          // Iterar sobre os elementos da lista e criar os itens da ul
          lista.forEach((elemento) => {
            const li = document.createElement("li");

            // Criar o input
            const input = document.createElement("input");
            input.type = "checkbox";
            input.id = elemento.idinput;
            input.name = elemento.idinput;
            input.value = elemento.idinput;

            // Criar o link (tag <a>)
            const link = document.createElement("a");
            link.href = "#";
            link.textContent = elemento.filtro;
            // link.innerText = elemento.filtro;

            // Adicionar o input e o link ao item da lista
            li.appendChild(input);
            li.appendChild(link);

            // Adicionar o item da lista à ul
            ul.appendChild(li);
          });

          // Adiciona o título e a ul à div da lista
          divLista.appendChild(titulo);
          divLista.appendChild(ul);

          // Adiciona a div da lista à section
          section.appendChild(divLista);
        });

        //=============== EVENTO DE ESCUTA DO CHECKBOX =======================//
        json.forEach((elemento) => {
          // console.log(elemento.idinput);

          // Seleciona o elemento checkbox pelo Id
          let checkbox = document.getElementById(elemento.idinput);
          // let checkboxes = document.querySelectorAll("input[type=checkbox]");

          // console.log(checkboxes);
          // Adiciona o eventListener para o evento 'change'
          checkbox.addEventListener("change", function () {
            // Código a ser executado quando o estado do checkbox mudar
            let gridlivros = document.querySelector(".gridlivros");
            if (checkbox.checked) {
              console.log("O checkbox está marcado.");
              // console.log(checkbox.checked);
              gridlivros.style.display = "none";
            } else {
              console.log("O checkbox está desmarcado.");
              // console.log(checkbox.value);
              gridlivros.style.display = "grid";
            }
          });
        });
      })
      .catch((error) => {
        // Lidar com erros de requisição
        // console.error(error);
        console.log("Error:", error);
      });
  });
}

// ========================== LIVROS =========================== //

function livros() {
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

        const indexInicial = (pagina.innerText - 1) * livrosporpagina;
        const indexFinal = indexInicial + livrosporpagina;

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

          if (json[i].tagpromocao == "true") {
            livro.appendChild(promocao);
          }

          livro.appendChild(imagemlivro);
          livro.appendChild(titulo);
          livro.appendChild(preco);
          livro.appendChild(botao);

          divGrid.appendChild(livro);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        //bom evitar usar o error.message por conta da linha de origem do tratamento
      });
  });
}

filtro();
livros();