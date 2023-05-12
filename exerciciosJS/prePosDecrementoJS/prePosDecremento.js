/*
  3.22 Pré-incrementando versus pós-incrementando.  Escreva um programa que demonstre a diferença entre  pré-decrementar e pós-decrementar usando o operador  de decremento --. <br>
  Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 75). Edição do Kindle. 
*/
// cria referência com o formulário Html
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one");
const resp2 = document.querySelector("#two");
const resp3 = document.querySelector("#three");
const resp4 = document.querySelector("#four");
const resp5 = document.querySelector("#five");

frm.addEventListener("submit", (e) => {

  let valor1 = Number(frm.inValor1.value);
  let valor2 = Number(frm.inValor2.value);
  let count1 = 0;
  let count2 = 0;

  resp1.innerHTML = `Pré-decremento exemplo (--5) = 4`;
  resp2.innerHTML = `Pós-decremento exemplo (5--) = 5`;
  resp3.innerHTML = `O Pré-decremento de --${valor1} é igual a ${--valor1}`;
  resp4.innerHTML = `O Pós-decremento de ${valor2}-- é igual a ${valor2--}`;

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