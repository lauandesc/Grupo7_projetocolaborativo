const inputQuantidade = document.querySelector('.botoesquantidadeb input.quantidade');
const btnMenos = document.querySelector('.botoesquantidadeb a.btn-menos');
const btnMais = document.querySelector('.botoesquantidadeb a.btn-mais');

// adiciona o evento de clique ao botão de menos
btnMenos.addEventListener('click', function(event) {
  event.preventDefault();
  if (inputQuantidade.value > 1) {
    inputQuantidade.value--;
  }
});

// adiciona o evento de clique ao botão de mais
btnMais.addEventListener('click', function(event) {
  event.preventDefault();
  inputQuantidade.value++;
});

// adiciona o evento de input ao input de quantidade
inputQuantidade.addEventListener('input', function(event) {
  const newValue = parseInt(event.target.value);
  if (isNaN(newValue) || newValue < event.target.min) {
    event.target.value = inputQuantidade.value;
  }
});