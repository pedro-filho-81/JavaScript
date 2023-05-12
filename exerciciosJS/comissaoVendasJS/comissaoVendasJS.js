
// cria referência com o formulário Html
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one");

frm.addEventListener("submit", (e) => {

  // variável
  const vendas = Number(frm.inValor1.value);

  // calcula o salário
  const salario = vendas * (9 / 100) + 200;

  // exibe o valor
  resp1.innerHTML = `O pagamento é de R$ ${salario.toFixed(2)}`;

  frm.inValor1.value = '';

   (e).preventDefault(); // previna a saída do formulário
})

// limpa os campos resp
frm.addEventListener("reset", () => {
  resp1.innerHTML = '';
  resp2.innerHTML = '';
  resp3.innerHTML = '';
  resp4.innerHTML = '';
  resp5.innerHTML = '';
  resp6.innerHTML = '';
})