//
//
//
//
//

// ========== nome completo ============ //

const labelnomecompleto = document.getElementById("labelnomecompleto");
const inputnomecompleto = document.getElementById("nomecompleto");

const usernamenegativo = document.getElementById("username-negativo");
usernamenegativo.style.display = "none";
usernamenegativo.innerText = "X";
usernamenegativo.style.fontWeight = "bold";
usernamenegativo.style.color = "#db5a42";
const usernamepositivo = document.getElementById("username-positivo");
usernamepositivo.style.display = "none";
usernamepositivo.style.color = "green";
usernamepositivo.style.fontWeight = "bold";
usernamepositivo.innerText = "OK!";

inputnomecompleto.addEventListener("focus", (e) => {
  labelnomecompleto.classList.add("validador-popup");

  let valor = e.target.value;

  if (valor.length > 0) {
    labelnomecompleto.classList.remove("validador-popup");
  }
});

inputnomecompleto.addEventListener("blur", () => {
  if (inputnomecompleto.value === "") {
    usernamenegativo.style.display = "none";
    usernamepositivo.style.display = "none";
  }
  //   inputnomecompleto.removeAttribute("style");
  labelnomecompleto.classList.remove("validador-popup");
});

inputnomecompleto.addEventListener("input", () => {
  const valor = inputnomecompleto.value.trim();
  const partesNome = valor.split(" ");

  if (valor.length < 1) {
    labelnomecompleto.classList.add("validador-popup");
    usernamenegativo.style.display = "none";
    usernamepositivo.style.display = "none";
  } else {
    labelnomecompleto.classList.remove("validador-popup");
    validarNome();
  }
  function validarNome() {
    let validardigito = false;
    const regex = /^[a-zA-ZÀ-ÿ]+$/; //expressão regular

    for (const nome of partesNome) {
      if (nome.length < 2 || !regex.test(nome)) {
        validardigito = true;
        break;
      }
    }

    if (partesNome.length < 2 || validardigito) {
      usernamenegativo.style.display = "block";
      usernamepositivo.style.display = "none";
    } else {
      usernamenegativo.style.display = "none";
      usernamepositivo.style.display = "block";
    }
  }
});

// ======== email ============= //

const labelemailcadastro = document.getElementById("labelemailcadastro");
const inputemailcadastro = document.getElementById("emailcadastro");

inputemailcadastro.addEventListener("focus", (e) => {
  labelemailcadastro.classList.add("validador-popup");
  let valor = e.target.value;

  if (valor.length > 0) {
    labelemailcadastro.classList.remove("validador-popup");
  }
});

inputemailcadastro.addEventListener("blur", () => {
  if (inputemailcadastro.value === "") {
    emailnegativo.style.display = "none";
    emailpositivo.style.display = "none";
  }
  //   inputemailcadastro.removeAttribute("style");
  labelemailcadastro.classList.remove("validador-popup");
});

const emailnegativo = document.getElementById("email-negativo");

emailnegativo.style.display = "none";
emailnegativo.innerText = "X";
emailnegativo.style.fontWeight = "bold";
emailnegativo.style.color = "#db5a42";

const emailpositivo = document.getElementById("email-positivo");

emailpositivo.style.display = "none";
emailpositivo.style.color = "green";
emailpositivo.style.fontWeight = "bold";
emailpositivo.innerText = "OK!";

inputemailcadastro.addEventListener("input", (e) => {
  let valor = e.target.value.trim();

  if (valor.length < 1) {
    labelemailcadastro.classList.add("validador-popup");
    emailnegativo.style.display = "none";
    emailpositivo.style.display = "none";
  } else {
    labelemailcadastro.classList.remove("validador-popup");
    validarEmail();
  }

  function validarEmail() {
    //existem bibliotecas em node.js que fazem verificações nos roots de domínio padrão da internet.
    //ou seja, isso aqui é uma implementação muito básica da coisa.
    if (
      /^[A-Za-z0-9._%+-]{3,}@[a-z0-9-]{2,}\.[a-z]{2,}(?:\.[A-Za-z]{2})?$/.test(
        valor
      )
    ) {
      emailpositivo.style.display = "block";
      emailnegativo.style.display = "none";
    } else {
      emailnegativo.style.display = "block";
      emailpositivo.style.display = "none";
    }
  }
});

// ======== senha ============= //

const labelsenhacadastro = document.getElementById("labelsenhacadastro");
const inputsenhacadastro = document.getElementById("senhacadastro");
const forcasenha = document.getElementById("forcasenha");
const senhapositivo = document.getElementById("senha-positivo");
const senhanegativo = document.getElementById("senha-negativo");
const fraco = document.querySelector(".fraco");
const medio = document.querySelector(".medio");
const forte = document.querySelector(".forte");
// console.log(senhanegativo)

senhapositivo.innerText = "OK!";
senhapositivo.style.color = "green";
senhapositivo.style.fontWeight = "bold";
senhapositivo.style.display = "none";

senhanegativo.innerText = "X";
senhanegativo.style.fontWeight = "bold";
senhanegativo.style.color = "#db5a42";
senhanegativo.style.display = "none";

forcasenha.innerText = "";
fraco.style.display = "none";
medio.style.display = "none";
forte.style.display = "none";

inputsenhacadastro.addEventListener("input", (e) => {
  let valor = e.target.value;

  labelsenhacadastro.classList.remove("validador-popup");

  console.log(valor);

  //existem bibliotecas em node.js que fazem verificações nos roots de domínio padrão da internet.
  //ou seja, isso aqui é uma implementação muito básica da coisa.
  if (valor.length == 0) {
    forcasenha.innerText = "";
    fraco.style.display = "none";
    medio.style.display = "none";
    forte.style.display = "none";
    senhapositivo.display = "none";
    senhapositivo.innerText = "";
    senhanegativo.display = "none";
    senhanegativo.innerText = "";
    labelsenhacadastro.classList.add("validador-popup");
  } else if (valor.length == 1 || valor.length == 2) {
    forcasenha.style.color = "red";
    forcasenha.innerText = "Fraca";
    fraco.style.display = "block";
    medio.style.display = "none";
    forte.style.display = "none";
    senhanegativo.style.display = "block";
    senhanegativo.innerText = "X";
    // senhapositivo.innerText = "";
    senhapositivo.style.display = "none";
  } else if (valor.length <= 6) {
    console.log("senha fraca");
    forcasenha.style.color = "red";
    forcasenha.innerText = "Fraca";
    fraco.style.display = "block";
    medio.style.display = "none";
    forte.style.display = "none";
    senhapositivo.style.display = "block";
    senhapositivo.innerText = "OK!";
    senhanegativo.style.display = "none";
  } else if (valor.length > 6 && valor.length <= 12) {
    console.log("senha media");
    forcasenha.style.color = "#FAC70F";
    forcasenha.innerText = "Média";
    fraco.style.display = "block";
    medio.style.display = "block";
    forte.style.display = "none";
    senhapositivo.style.display = "block";
    senhapositivo.innerText = "OK!";
    senhanegativo.style.display = "none";
    // senhanegativo.style.display = "block";
    // senhapositivo.style.display = "none";
  } else if (valor.length > 12) {
    console.log("Senha forte");
    forcasenha.style.color = "green";
    forcasenha.innerText = "Forte";
    fraco.style.display = "block";
    medio.style.display = "block";
    forte.style.display = "block";
    senhapositivo.style.display = "block";
    senhapositivo.innerText = "OK!";
    senhanegativo.style.display = "none";
  }
});

inputsenhacadastro.addEventListener("focus", (e) => {
  labelsenhacadastro.classList.add("validador-popup");
  let valor = e.target.value;

  if (valor.length > 0) {
    labelsenhacadastro.classList.remove("validador-popup");
  }
});

inputsenhacadastro.addEventListener("blur", () => {
  if (inputsenhacadastro.value === "") {
    senhanegativo.style.display = "none";
    senhapositivo.style.display = "none";
  }
  inputsenhacadastro.removeAttribute("style");
  labelsenhacadastro.classList.remove("validador-popup");
});

const visibilidade = document.getElementById("visibilidade");

visibilidade.addEventListener("click", function () {
  if (inputsenhacadastro.type === "password") {
    inputsenhacadastro.type = "text";
    visibilidade.innerText = "visibility";
  } else {
    inputsenhacadastro.type = "password";
    visibilidade.innerText = "visibility_off";
  }
});
