// cria referência com o formulário
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one");
const resp2 = document.querySelector("#two");

frm.addEventListener("submit", (e) => {

   e.preventDefault(); // evita saida do formlário
})



// limpa os campos
frm.addEventListener("reset", () => {
   resp1.innerHTML = "";
   resp2.innerHTML = "";
})