
// cria referência com o formulário Html
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one");

frm.addEventListener("submit", (e) => {

  // variáveis
  const valorPrincipal = Number(frm.inValor1.value);
  const taxa = Number(frm.inValor2.value);
  const tempo = Number(frm.inValor3.value) ;
  const juros = valorPrincipal * (taxa / 100) * tempo / 365;

  // exibe resultado
  resp1.innerHTML = `O valor dos juros é de R$ ${juros.toFixed(2)}`;

  frm.inValor3.value = '';
  frm.inValor2.value = "";
  frm.inValor1.value = "";
  
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