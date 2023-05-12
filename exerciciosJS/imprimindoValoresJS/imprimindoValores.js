/*

*/
// cria referência com o formulário Html
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one");

frm.addEventListener("submit", (e) => {

  resp1.innerHTML = ''; // limpa a resposta

  const valor = Number(frm.inValor1.value);
  let count = 1; // counter for while

  while(count <= valor) {

    resp1.innerHTML += count + "   "; // imprive os valores

    count++; // incrementa 1 a count
  }
  frm.inValor1.value = ''; // limpa o campo

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