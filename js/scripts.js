const botoesQuantidade = document.querySelectorAll('.botoesquantidade');

// Pega todos os links "Remover este item"
const linksRemover = document.querySelectorAll('.removerlista');

// Itera pelos links e adiciona um evento de clique em cada um
for (let i = 0; i < linksRemover.length; i++) {
  linksRemover[i].addEventListener('click', function(event) {
    // Impede o comportamento padrão do link
    event.preventDefault();
    // Remove o elemento pai do link, ou seja, a div class gridcarrinho
    this.parentElement.parentElement.parentElement.remove();
  });
}

botoesQuantidade.forEach(botaoQuantidade => {
  const btnMenos = botaoQuantidade.querySelector('.btn-menos');
  const btnMais = botaoQuantidade.querySelector('.btn-mais');
  const inputQuantidade = botaoQuantidade.querySelector('.quantidade');

  btnMenos.addEventListener('click', () => {
    if (inputQuantidade.value > 1) {
      inputQuantidade.value--;
    }
  });

  btnMais.addEventListener('click', () => {
    inputQuantidade.value++;
  });

  inputQuantidade.addEventListener('change', () => {
    if (inputQuantidade.value < 1) {
      inputQuantidade.value = 1;
    }
  });
});