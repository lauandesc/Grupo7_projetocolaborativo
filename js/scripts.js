const botoesQuantidade = document.querySelectorAll('.botoesquantidade');

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