const form = document.getElementById("form");
const username = document.getElementById("username");
const telefone = document.getElementById("telefone");
const quantidade = document.getElementById("quantidade");
const titulo = document.getElementById("ftitulo");
const autor = document.getElementById("autor");
const editora = document.getElementById("editora");
const estconservacao = document.getElementById("estconservacao");
const email = document.getElementById("email");
const button = document.querySelector("button");
const dialog = document.getElementsByTagName("dialog");
const botaodialog = document.getElementById("botao-dialog");
const fundotransparente = document.getElementById("fundotransparente");

// ============ Array que vai coletar todas as validações dos 10 campos ========== //
let arrayValidador = [];
let arrayFalsos = [];

function validarSelect() {
  let caixaconservacao = document.querySelector(".caixa-conservacao");
  let conservacaoimgsuccess = document.querySelector(
    ".conservacao-img-success"
  );
  let conservacaoimgerror = document.querySelector(".conservacao-img-error");
  let conservacaomsgerror = document.querySelector(".conservacao-msg-error");

  let select = document.getElementById("conserv");

  if (select.value == "") {
    // arrayFalsos.push("[arrayFalos] Select: Vazio");
    arrayFalsos.push("[Select: Vazio]");
    caixaconservacao.style.border = "3px solid #db5a5a";
    conservacaoimgerror.style.display = "block";
    conservacaomsgerror.style.display = "block";
    conservacaomsgerror.style.color = "#db5a5a";
    conservacaomsgerror.innerText = "Selecione uma opção";
    conservacaoimgsuccess.style.display = "none";
    // console.log(arrayFalsos); // =======================>>>>>>>>>>>> console - arrayFalsos
  } else if (select.value == "opcao1") {
    arrayValidador.push("[Select: Novo]");
    caixaconservacao.style.border = "3px solid #4eca64";
    conservacaoimgsuccess.style.display = "block";
    conservacaoimgerror.style.display = "none";
    conservacaomsgerror.style.display = "none";
    // console.log(arrayValidador); // =======================>>>>>>>>>>>> console - arrayValidador
  } else if (select.value == "opcao2") {
    arrayValidador.push("[Select: Usado]");
    caixaconservacao.style.border = "3px solid #4eca64";
    conservacaoimgsuccess.style.display = "block";
    conservacaoimgerror.style.display = "none";
    conservacaomsgerror.style.display = "none";
    // console.log(arrayValidador); // =======================>>>>>>>>>>>> console - arrayValidador
  } else {
    arrayValidador.push("[Select: Seminovo]");
    caixaconservacao.style.border = "3px solid #4eca64";
    conservacaoimgsuccess.style.display = "block";
    conservacaoimgerror.style.display = "none";
    conservacaomsgerror.style.display = "none";
    // console.log(arrayValidador); // =======================>>>>>>>>>>>> console - arrayValidador
  }
}

function validarTipos() {
  let caixatipos = document.querySelector(".caixa-tipos");
  let tiposimgsuccess = document.querySelector(".tipos-img-success");
  let tiposimgerror = document.querySelector(".tipos-img-error");
  let tiposmsgerror = document.querySelector(".tipos-msg-error");

  let tipos = document.getElementsByName("tipos");
  flag = false;
  let variavelTemporária = "";

  for (var i = 0; i < tipos.length; i++) {
    if (tipos[i].checked) {
      flag = true;
      variavelTemporária = tipos[i].value;
      break;
    }
  }

  if (flag) {
    if (variavelTemporária == "livro") {
      arrayValidador.push("[Tipo: Livro]");
      caixatipos.style.border = "3px solid #4eca64";
      tiposimgsuccess.style.display = "block";
      tiposimgerror.style.display = "none";
      tiposmsgerror.style.display = "none";
      // console.log(arrayValidador); // =======================>>>>>>>>>>>> console - arrayValidador
    } else {
      arrayValidador.push("[Tipo: Revista]");
      caixatipos.style.border = "3px solid #4eca64";
      tiposimgsuccess.style.display = "block";
      tiposimgerror.style.display = "none";
      tiposmsgerror.style.display = "none";
      // console.log(arrayValidador); // =======================>>>>>>>>>>>> console - arrayValidador
    }
  } else {
    // arrayFalsos.push("[arrayFalos] Tipo: Vazio");
    arrayFalsos.push("[Tipo: Vazio]");
    caixatipos.style.border = "3px solid #db5a5a";
    tiposimgerror.style.display = "block";
    tiposmsgerror.style.display = "block";
    tiposmsgerror.innerText = "Selecione uma opção";
    tiposmsgerror.style.color = "#db5a5a";
    // console.log(arrayFalsos); // =======================>>>>>>>>>>>> console - arrayFalsos
  }
}

function checkInputs() {
  const usernameValue = username.value.trim();
  const telefoneValue = telefone.value.trim();
  const quantidadeValue = quantidade.value.trim();
  const tituloValue = titulo.value.trim();
  const autorValue = autor.value.trim();
  const editoraValue = editora.value.trim();
  const estconservacaoValue = estconservacao.value.trim();
  const emailValue = email.value.trim();

  if (usernameValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(username, "Preencha esse campo");
    arrayFalsos.push("[Username: Vazio]");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(username);
    arrayValidador.push("[Username: Preenhcido]");
  }
  if (emailValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(email, "Preencha esse campo");
    arrayFalsos.push("[Email: Vazio]");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email inválido");
    arrayFalsos.push("[Email: Inválido]");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(email);
    arrayValidador.push("[Email: Preenhcido]");
  }
  if (telefoneValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(telefone, "Preencha esse campo");
    arrayFalsos.push("[Telefone: Vazio]");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(telefone);
    arrayValidador.push("[Telefone: Preenhcido]");
  }

  if (quantidadeValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(quantidade, "Preencha esse campo");
    arrayFalsos.push("[Quantidade: Vazio]");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(quantidade);
    arrayValidador.push("[Quantidade: Preenhcida]");
  }

  if (tituloValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(titulo, "Preencha esse campo");
    arrayFalsos.push("[Título: Vazio]");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(titulo);
    arrayValidador.push("[Título: Preenhcido]");
  }

  if (autorValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(autor, "Preencha esse campo");
    arrayFalsos.push("[Autor: Vazio]");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(autor);
    arrayValidador.push("[Autor: Preenhcido]");
  }

  if (editoraValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(editora, "Preencha esse campo");
    arrayFalsos.push("[Editora: Vazio]");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(editora);
    arrayValidador.push("[Editora: Preenhcido]");
  }

  if (estconservacaoValue == "") {
    // mostrar erro
    setErrorFor(estconservacao, "Adicione a foto");
    arrayFalsos.push("[Conservação: Vazio]");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(estconservacao);
    arrayValidador.push("[Conservação: Preenhcido]");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^[A-Za-z0-9._%+-]{3,}@[a-z0-9-]{2,}\.[a-z]{2,}(?:\.[A-Za-z]{2})?$/.test(
    email
  );
}

// ======================================== MANIPULANDO APENAS O SUBMIT ======================= //
function botaoEnviar() {
  button.addEventListener("click", function (e) {
    // e.preventDefault();

    validarTipos();
    validarSelect();
    checkInputs();

    console.log("Falsos: " + arrayFalsos);
    console.log("Válidos: " + arrayValidador);

    if (arrayFalsos.length > 0) {
      e.preventDefault();
      alert("Revise as informações.");
      console.log("Revise as informações.");
    } else {
      console.log("Obrigado pela doação!");
      alert("Obrigado pela doação!");
    }

    arrayFalsos = [];
    arrayValidador = [];
  });
}

// ======================================== MANIPULANDO O FORMULÁRIO ======================= //

function envioFormulário() {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    validarTipos();
    validarSelect();
    checkInputs();

    console.log("Falsos: " + arrayFalsos);
    console.log("Válidos: " + arrayValidador);

    if (arrayFalsos.length > 0) {

      //esse botão de fechar mensagem já está com display none,
      //mas adicionei aqui, você pode usá-lo pra aparecer trocando para "block"
      botaoay = "nodialog.style.displne";
      fundotransparente.style.display = "block";
      dialog[0].innerText = "Revise as informações.";
      dialog[0].classList.add("dialog"); //adiciona a classe css ao alerta, a classe já está com display:block

      //temporizador de 4 segundos pra remover a janela transparente
      setTimeout(function () {
        dialog[0].classList.remove("dialog"); //remove a classe css ao alerta, a classe vai receber display:none
        fundotransparente.style.display = "none";
      }, 4000); //4 segundos

      // alert("Revise as informações.");
      console.log("Revise as informações.");
    } else {
      //esse botão de fechar mensagem já está com display none,
      //mas adicionei aqui, você pode usá-lo pra aparecer trocando para "block"
      botaodialog.style.display = "none";
      fundotransparente.style.display = "block";
      //importante colocar a mensagem aqui, pois quando há uma tentativa, o
      //segundo envio mostraria a mensagem: "Revise as informações."
      dialog[0].innerText = "Obrigado, em breve retornaremos o contato!!";

      dialog[0].classList.add("dialog"); //adiciona a classe css ao alerta, a classe já está com display:block

      console.log("Obrigado pela doação!");
      // alert("Obrigado pela doação!");

      //temporizador de 4 segundos pra remover a janela transparente
      setTimeout(function () {
        dialog[0].classList.remove("dialog"); //remove a classe css ao alerta, a classe vai receber display:none
        fundotransparente.style.display = "none";
        form.submit(); // ===========================>>>>>>>>>>>>>>>>>>> envio do formulário!
      }, 4000); //4 segundos
      
      // form.reset(); // =====================>>>>>> caso queira resetar o formulário (completo ou não) após clicar no botão enviar
    }

    arrayFalsos = []; //resetando o array
    arrayValidador = []; //resetando o array
  });
}

envioFormulário();
