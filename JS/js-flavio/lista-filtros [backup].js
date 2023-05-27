// objeto criado para ser consumido na página HTML quando o javascript for carregado

// const objetoLivros = [
//     {
//         tipoFiltro: "filtrodepartamentos",
//         nomeTipoFiltro: "Departamentos",
//         filtro: "Auto-Ajuda",
//     },
//     {
//         tipoFiltro: "filtrodepartamentos",
//         nomeTipoFiltro: "Departamentos",
//         filtro: "Biografia",
//     },
//     {
//         tipoFiltro: "filtrodepartamentos",
//         nomeTipoFiltro: "Departamentos",
//         filtro: "Contos",
//     },
//     {
//         tipoFiltro: "filtrodepartamentos",
//         nomeTipoFiltro: "Departamentos",
//         filtro: "Culinária",
//     },
//     {
//         tipoFiltro: "filtrodepartamentos",
//         nomeTipoFiltro: "Departamentos",
//         filtro: "Esportes",
//     },
//     {
//         tipoFiltro: "filtrodepartamentos",
//         nomeTipoFiltro: "Departamentos",
//         filtro: "Religião",
//     },
//     {
//         tipoFiltro: "filtrodepartamentos",
//         nomeTipoFiltro: "Departamentos",
//         filtro: "Psicologia",
//     },
//     {
//         tipoFiltro: "filtroeditora",
//         nomeTipoFiltro: "Editora",
//         filtro: "Bertrand Brasil",
//     },
//     {
//         tipoFiltro: "filtroeditora",
//         nomeTipoFiltro: "Editora",
//         filtro: "Compainha das Letras",
//     },
//     {
//         tipoFiltro: "filtroeditora",
//         nomeTipoFiltro: "Editora",
//         filtro: "Grande Área",
//     },
//     {
//         tipoFiltro: "filtroeditora",
//         nomeTipoFiltro: "Editora",
//         filtro: "Intrínseca",
//     },
//     {
//         tipoFiltro: "filtroeditora",
//         nomeTipoFiltro: "Editora",
//         filtro: "Harper Collins",
//     },
//     {
//         tipoFiltro: "filtroeditora",
//         nomeTipoFiltro: "Editora",
//         filtro: "Penguim",
//     },
//     {
//         tipoFiltro: "filtroautor",
//         nomeTipoFiltro: "Autor",
//         filtro: "Agatha Christie",
//     },
//     {
//         tipoFiltro: "filtroautor",
//         nomeTipoFiltro: "Autor",
//         filtro: "Charles Dickens",
//     },
//     {
//         tipoFiltro: "filtroautor",
//         nomeTipoFiltro: "Autor",
//         filtro: "George R.R. Martin",
//     },
//     {
//         tipoFiltro: "filtroautor",
//         nomeTipoFiltro: "Autor",
//         filtro: "Jane Austen",
//     },
//     {
//         tipoFiltro: "filtroautor",
//         nomeTipoFiltro: "Autor",
//         filtro: "J.K. Rowling",
//     },
//     {
//         tipoFiltro: "filtroautor",
//         nomeTipoFiltro: "Autor",
//         filtro: "Matt Haig",
//     },
//     {
//         tipoFiltro: "filtroautor",
//         nomeTipoFiltro: "Autor",
//         filtro: "Martí Perarnau",
//     },
//     {
//         tipoFiltro: "filtroautor",
//         nomeTipoFiltro: "Autor",
//         filtro: "Nassim Nicholas Taleb",
//     },
//     {
//         tipoFiltro: "filtroano",
//         nomeTipoFiltro: "Ano",
//         filtro: "2023",
//     },
//     {
//         tipoFiltro: "filtroano",
//         nomeTipoFiltro: "Ano",
//         filtro: "2022",
//     },
//     {
//         tipoFiltro: "filtroano",
//         nomeTipoFiltro: "Ano",
//         filtro: "2021",
//     },
//     {
//         tipoFiltro: "filtroano",
//         nomeTipoFiltro: "Ano",
//         filtro: "2020",
//     },
//     {
//         tipoFiltro: "filtroano",
//         nomeTipoFiltro: "Ano",
//         filtro: "2019",
//     },
//     {
//         tipoFiltro: "filtroano",
//         nomeTipoFiltro: "Ano",
//         filtro: "2018",
//     },
//     {
//         tipoFiltro: "filtroano",
//         nomeTipoFiltro: "Ano",
//         filtro: "2017",
//     },
//     {
//         tipoFiltro: "filtroano",
//         nomeTipoFiltro: "Ano",
//         filtro: "2016",
//     },
// ];

//https://www.youtube.com/watch?v=BWPUSXzSWA8
// ========= enviando para JSON (ideia de POST)============
// const jsonData = JSON.stringify(objetoLivros);
// console.log(jsonData);
// console.log(typeof jsonData);

// ============== importar e converter JSON em objeto (ideia de GET) ===================
// const objData = JSON.parse(jsonData);
// objData.map((pessoa) => {
//  console.log(pessoa.nome);
// });

//https://www.youtube.com/watch?v=XmCrArtfjaQ
// const json = require('./js/js-flavio/json.json');
// console.log(json);
// json.forEach(post => console.log(post.filtro));

// =========== testando API (funciona) =============
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// fetch('./js/js-flavio/json.json')
//       .then(response => response.json())
//       .then(json => console.log(json))

const filtros = document.querySelector('.filtros');
const tipoFiltro_ = document.querySelector('.tipofiltro');

fetch('./js/js-flavio/json.json')
.then(response => response.json())
.then(json => { 

    // Quando você chama response.json(), o próprio método já realiza a 
    // análise do JSON e retorna uma Promise que resolve com o objeto/array 
    // JavaScript correspondente ao JSON.

    console.log(json); // Exibe o JSON convertido em objeto/array

    // itera sobre os elementos usando forEach
    json.forEach(element => {
        console.log(element.tipofiltro);
        console.log(element.nometipofiltro);
        console.log(element.filtro);
        console.log(element.idinput);
        console.log('-----');
    });

    let conteudoHTML = '';

    for (let i = 0; i < json.length; i++) {

        const elemento = json[i];

        console.log(elemento);

        //a ideia depois é criar filtros, adicionar esses filtros em classes e jogar no HTML
        //dessa maneira será possível renderizar um bloco inteirinho de HTML
        if (elemento.tipofiltro == "tipofiltro") {
            
            conteudoHTML += `
                <div class="${elemento.tipofiltro}">
                    <h3>${elemento.nometipofiltro}</h3>
                    <ul>
            `;

            for (let j = 0; j < elemento.nometipofiltro.length; j++) {
                const elementosFilho = json[j];
                
                if (elementosFilho.nometipofiltro == "Departamentos") {
                    conteudoHTML += `
                        <li>
                            <input
                                type="checkbox"
                                id="${elementosFilho.idinput}"
                                name="${elementosFilho.idinput}"
                                value="${elementosFilho.idinput}"
                            />
                            <a href="#">
                                ${elementosFilho.filtro}
                            </a>
                        </li>
                    `;
                }
            }

            conteudoHTML += `
                    </ul>
                </div>
            `;

            break;             

        }
    }

        tipoFiltro_.innerHTML = conteudoHTML;

})
.catch(error => {
    // Lidar com erros de requisição
    console.error(error);
});

// console.log(objetoLivros);

// for (let i = 0; i < ; i++ ) {
//   const article = document.createElement("article");
//   article.innerHTML = `
//     <div class="filtroeditora">
//         <h3>Editora</h3>
//         <ul>
//             <li>
//                 <input
//                     type="checkbox"
//                     id="bb-filtro"
//                     name="bb-filtro"
//                     value="bb-filtro"
//                     />
//                 <a href="#">
//                     Bertrand Brasil
//                 </a>
//             </li>
//         </ul>
//     </div>
//   `;
//   main.appendChild(article);
// }