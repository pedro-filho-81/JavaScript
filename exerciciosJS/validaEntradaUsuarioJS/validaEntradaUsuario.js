/*
  3.28 Valide a entrada do usuário. Modifique o programa  da Figura 3.10 para validar suas entradas. Em qualquer  entrada, se o valor inserido for diferente de 1 ou 2, continue o looping até que o usuário informe um valor correto.Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 76). Edição do Kindle. 
*/
// cria referência com o formulário Html
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one");

frm.addEventListener("submit", (e) => {

  let value = Number(frm.inValor1.value);

  if( value > 2) {
    resp1.innerHTML = `Você digitou ${value} Digite 1 ou 2.`;
    frm.inValor1.value = '';
  } else {
    resp1.innerHTML = `Você digitou ${value}`;
    frm.inValor1.value = '';
  }

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