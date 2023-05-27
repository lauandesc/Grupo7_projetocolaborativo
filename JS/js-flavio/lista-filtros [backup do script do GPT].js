// Capturar a referência da section onde serão inseridas as listas
const section = document.querySelector('.filtros');

fetch('./JS/js-flavio/json.json')
  .then(response => response.json())
  .then(json => {
    // Criar um objeto para armazenar os arrays separados por nometipofiltro
    const listasPorTipo = {};

    // Iterar sobre os elementos do JSON e separá-los em arrays com base no nometipofiltro
    json.forEach(elemento => {
      const nometipofiltro = elemento.nometipofiltro;
      if (!listasPorTipo[nometipofiltro]) {
        listasPorTipo[nometipofiltro] = [];
      }
      listasPorTipo[nometipofiltro].push(elemento);
    });

    // Iterar sobre as chaves do objeto listasPorTipo
    Object.keys(listasPorTipo).forEach(nometipofiltro => {
      const lista = listasPorTipo[nometipofiltro];

      // Criar uma div para cada lista
      const divLista = document.createElement('div');
      divLista.classList.add('tipofiltro');

      // Criar um título para a lista com base no nometipofiltro
      const titulo = document.createElement('h3');
      titulo.textContent = nometipofiltro;

      // Criar uma ul para armazenar os itens da lista
      const ul = document.createElement('ul');

      // Iterar sobre os elementos da lista e criar os itens da ul
      lista.forEach(elemento => {
        const li = document.createElement('li');
        li.textContent = elemento.filtro;
        ul.appendChild(li);
      });

      // Adicionar o título e a ul à div da lista
      divLista.appendChild(titulo);
      divLista.appendChild(ul);

      // Adicionar a div da lista à section
      section.appendChild(divLista);
    });
  })
  .catch(error => {
    // Lidar com erros de requisição
    console.error(error);
  });
