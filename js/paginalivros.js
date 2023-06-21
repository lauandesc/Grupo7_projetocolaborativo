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

function renderizacaoFiltro() {
  // Capturar a referência da section onde serão inseridas as listas
  const section = document.querySelector(".filtros");

  // "load" ocorre quando a página foi completamente carregada.
  // remover isso depois e adicionar na implementação dos livros.
  window.addEventListener("load", function () {
    console.log("A página foi totalmente carregada.");

    fetch("/json/filtro.json")
      // .then((response) => response.json())
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Falha na requisição de filtro.json.");
      })
      .then((json) => {
        console.log(json);

        const listasPorTipo = {};

        //O objetivo dessa iteração é separar em arrays com base no nometipofiltro
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
          // console.log(listasPorTipo[nometipofiltro]);
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
              return 0; //esse return 0 significa que não há distinção entre eles em termos de classificação
            });
          }

          // o console abaixo exibe os objetos separados e filtrados (baseados)
          // pelo nometipofiltro
          // console.log(lista);

          // esse console log exibe a lista baseada em nometipofiltro
          // console.log(nometipofiltro);

          const divLista = document.createElement("div");
          divLista.classList.add("tipofiltro");

          //título para a lista com base no nometipofiltro
          const titulo = document.createElement("h3");
          titulo.textContent = nometipofiltro;

          const ul = document.createElement("ul");

          lista.forEach((elemento) => {
            const li = document.createElement("li");

            const input = document.createElement("input");
            input.type = "checkbox";
            input.id = elemento.idinput;
            input.name = elemento.idinput;
            input.value = elemento.idinput;

            const link = document.createElement("a");
            link.href = "#";
            link.textContent = elemento.filtro;
            // link.innerText = elemento.filtro;

            li.appendChild(input);
            li.appendChild(link);

            ul.appendChild(li);
          });

          // Adiciona o título e a ul à div da lista
          divLista.appendChild(titulo);
          divLista.appendChild(ul);

          // Adiciona a div da lista à section
          section.appendChild(divLista);
        });

        //=============== EVENTO DE ESCUTA DO CHECKBOX =======================//
        // json.forEach((elemento) => {
        // console.log(elemento.idinput);

        // Seleciona o elemento checkbox pelo Id
        // let checkbox = document.getElementById(elemento.idinput);
        // let checkboxes = document.querySelectorAll("input[type=checkbox]");

        // console.log(checkboxes);
        // Adiciona o eventListener para o evento 'change'
        // checkbox.addEventListener("change", function () {
        // Código a ser executado quando o estado do checkbox mudar
        //   let gridlivros = document.querySelector(".gridlivros");
        //   if (checkbox.checked) {
        //     console.log("O checkbox está marcado.");
        // console.log(checkbox.checked);
        //     gridlivros.style.display = "none";
        //   } else {
        //     console.log("O checkbox está desmarcado.");
        // console.log(checkbox.value);
        //     gridlivros.style.display = "grid";
        //   }
        // });
        // });
      })
      .catch((error) => {
        // Lidar com erros de requisição
        // console.error(error);
        console.log("Error:", error);
      });
  });
}

// ========================== LIVROS =========================== //

function renderizacaoLivros() {
  const divGrid = document.querySelector(".gridlivros");
  const livrosporpagina = 9;

  window.addEventListener("load", function () {
    console.log("A página foi totalmente carregada para esse aqui também.");
    //   fetch("./json/paginalivros.json")
    fetch("/json/paginalivros.json")
      .then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Falha na requisição de paginalivros.json.");
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

          if (json[i].titulo.length > 40) {
            let titulomenor = json[i].titulo.slice(0, 40);
            if (titulomenor[39] == " ") {
              titulomenor = titulomenor.slice(0, 39);
            }
            titulomenor += "...";
            h4.innerText = titulomenor;
          } else {
            h4.innerText = json[i].titulo;
          }
          // let titulomenor = json[i].titulo;
          // h4.innerText = titulomenor;

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
          <img src="/img/imagensdelivros/promocao.png" alt="banner de promoção">
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

// ========================== FILTRANDOLIVROS =========================== //

function filtrandoLivros() {
  window.addEventListener("load", function () {
    console.log("A página carregou aqui também.");

    //preciso capturar a paginacao aqui pois o filtro remove a paginação. Resolver isso num futuro não tão distante.
    const paginacaocentralizado = document.querySelector(
      ".paginacaocentralizado"
    );

    const filtro = "/json/filtro.json";
    const livros = "/json/paginalivros.json";

    Promise.all([fetch(filtro), fetch(livros)])
      .then(function (responses) {
        return Promise.all(
          responses.map(function (response) {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Falha na requisição:", response.status);
            }
          })
        );
      })
      .then(function (data) {
        const filtro = data[0];
        const livros = data[1];

        const divGridPrincipal = document.querySelector(".gridlivros");
        const section = document.querySelector(".livros");
        const checkboxes = document.querySelectorAll(
          ".tipofiltro input[type='checkbox']"
        );

        checkboxes.forEach((checkbox) => {
          checkbox.addEventListener("change", function () {
            divGridPrincipal.style.display = "none";

            //Importante limpar a seção antes de adicionar os livros filtrados
            section.innerHTML = "";

            const gridLivrosFiltrados = document.createElement("div");
            gridLivrosFiltrados.classList.add("gridlivros");

            checkboxes.forEach((checkbox) => {
              if (checkbox.checked) {
                const filtroSelecionado = filtro.find(
                  (item) => item.idinput === checkbox.id
                );
                if (filtroSelecionado) {
                  livros.forEach((livro) => {
                    if (
                      filtroSelecionado.filtro === livro.categoria ||
                      filtroSelecionado.filtro === livro.editora ||
                      filtroSelecionado.filtro === livro.autor ||
                      filtroSelecionado.filtro === livro.ano
                    ) {
                      const livroDiv = document.createElement("div");
                      livroDiv.classList.add("livro");

                      let titulomenor = "";

                      if (livro.titulo.length > 40) {
                        titulomenor = livro.titulo.slice(0, 40); //slice - limita até 40 caracteres
                        if (titulomenor[39] === " ") {
                          //[39] é usado para acessar o caractere na posição 39 da string
                          titulomenor = titulomenor.slice(0, 39);
                        }
                        titulomenor += "...";
                        livro.titulo = titulomenor;
                      }

                      livroDiv.innerHTML = `
                        <div class="imagemlivroflex">
                          <img src="${livro.img}" alt="${livro.alt}">
                        </div>
                        <div class="titulolivroflex">
                          <h4>${livro.titulo}</h4>
                        </div>
                        <div class="precoflex">
                          <p class="precoanterior">${livro.precoanterior}</p>
                          <p class="precoatual">${livro.precoatual}</p>
                          <p class="precoparcelado">${livro.precoparcelado}</p>
                        </div>
                        <div>
                          <button class="custom-button">
                            <i class="material-icons-outlined">shopping_cart</i>
                            Adicionar
                          </button>
                        </div>
                      `;

                      gridLivrosFiltrados.appendChild(livroDiv);
                    }
                  });
                }
              } else {
                // Verificar se todos os checkboxes estão desmarcados
                const chBoxes = document.querySelectorAll(
                  ".tipofiltro input[type='checkbox']"
                );
                let allUnchecked = true;
                chBoxes.forEach((checkbox) => {
                  if (checkbox.checked) {
                    allUnchecked = false;
                    return;
                  }
                });

                console.log(allUnchecked);
                if (allUnchecked) {
                  // location.reload();

                  // paginacaocentralizado.style.display = "block";
                  console.log(paginacaocentralizado);

                  gridLivrosFiltrados.remove();

                  divGridPrincipal.style.display = "grid";
                  // section.insertBefore(divGridPrincipal, section.firstChild);

                  section.appendChild(divGridPrincipal);
                  section.appendChild(paginacaocentralizado);
                }
              }
            });

            section.appendChild(gridLivrosFiltrados);

            // esse console mostra todas as capturas feitas de checkbox
            // console.log(gridLivrosFiltrados);
          });
        });
      })
      .catch(function (error) {
        console.error("Erro:", error);
      });
  });
}

renderizacaoFiltro();
renderizacaoLivros();
filtrandoLivros();
