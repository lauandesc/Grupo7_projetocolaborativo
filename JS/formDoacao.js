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

function validarSelect() {
  var select = document.getElementById("conserv");
  var opcaoSelecionada = select.options[select.selectedIndex].value;

  if (opcaoSelecionada === "") {
    alert("Selecione o estado de conservação!");
    return false;
  }
}

function validarCampo() {
  var opcoes = document.getElementsByName("tipos");
  var selecionado = false;

  for (var i = 0; i < opcoes.length; i++) {
    if (opcoes[i].checked) {
      selecionado = true;
      break;
    }
  }

  if (selecionado) {
    /*alert("Campo de seleção de rádio está marcado!");*/
  } else {
    alert("Campo tipos não está selecionado!");
  }
}

button.addEventListener("click", validarCampo);
button.addEventListener("click", validarSelect);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

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
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(username);
  }
  if (emailValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(email, "Preencha esse campo");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email inválido");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(email);
  }
  if (telefoneValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(telefone, "Preencha esse campo");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(telefone);
  }

  if (quantidadeValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(quantidade, "Preencha esse campo");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(quantidade);
  }

  if (tituloValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(titulo, "Preencha esse campo");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(titulo);
  }

  if (autorValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(autor, "Preencha esse campo");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(autor);
  }

  if (editoraValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(editora, "Preencha esse campo");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(editora);
  }

  if (estconservacaoValue === "") {
    // mostrar erro
    // add classe
    setErrorFor(estconservacao, "Preencha esse campo");
  } else {
    // adicionar a classe de sucesso
    setSuccessFor(estconservacao);
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
  return /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
    email
  );
}
// Adicionado Modal Dialog
const modal = document.querySelector("dialog");
const buttonClose = document.querySelector("dialog button");

button.onclick = function () {
  modal.showModal();
};

buttonClose.onclick = function () {
  modal.close();
};

// Selecione o formulário pelo ID
var formulario = document.getElementById("form");

// Adicione um ouvinte de evento para o envio do formulário
form.addEventListener("submit", function (event) {
  // Verifique todos os campos do formulário
  var campos = form.querySelectorAll("input");

  for (var i = 0; i < campos.length; i++) {
    if (!campos[i].value) {
      // Se algum campo estiver vazio, exiba uma mensagem de erro e impeça o envio do formulário
      event.preventDefault();
      alert(
        "Por favor, preencha todos os campos antes de enviar o formulário."
      );
      return;
    }
  }

  // Todos os campos estão preenchidos, o formulário pode ser enviado
  alert("Formulário enviado com sucesso!");
});
