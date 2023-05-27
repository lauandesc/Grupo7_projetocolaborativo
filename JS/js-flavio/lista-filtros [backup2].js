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


const filtros = document.querySelector(".filtros");
const tipoFiltro_ = document.querySelector(".tipofiltro");
const ul = document.querySelector(".listafiltro");

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

    // console.log(json[i]);
    // break;
    function fnfiltros (parametro) {
        console.log(parametro);
        for (let j = 0; j < json.length; j++) {
            console.log(json[j].nometipofiltro);
            if (json[j].nometipofiltro == parametro) {
                ul.innerHTML += `
                    <li>
                        <input
                            type="checkbox"
                            id="${json[j].idinput}"
                            name="${json[j].idinput}"
                            value="${json[j].idinput}"
                        />
                        <a href="#">
                            ${json[j].filtro}
                        </a>
                    </li>
                `;
            }
        }
        console.log(ul);
    };

    fnfiltros("Departamentos");
    fnfiltros("Editora");
})
.catch(error => {
    // Lidar com erros de requisição
    console.error(error);
});

// console.log(objetoLivros);

// for (let i = 0; i < ; i++ ) {
//   const article = document.createElement("article");
//   article.innerHTML = `
    // <div class="filtroeditora">
    //     <h3>Editora</h3>
    //     <ul>
    //         <li>
    //             <input
    //                 type="checkbox"
    //                 id="bb-filtro"
    //                 name="bb-filtro"
    //                 value="bb-filtro"
    //                 />
    //             <a href="#">
    //                 Bertrand Brasil
    //             </a>
    //         </li>
    //     </ul>
    // </div>
//   `;
//   main.appendChild(article);
// }