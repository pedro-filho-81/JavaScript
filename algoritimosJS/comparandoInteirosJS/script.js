// cria a ligação com o formulário html
const frm = document.querySelector("form");

// CRIA A LIGAÇÃO COM OS IDs DO FORMULÁRIO
const resp1 = document.querySelector("#one");
const resp2 = document.querySelector("#two");
const resp3 = document.querySelector("#three");
const resp4 = document.querySelector("#four");
const resp5 = document.querySelector("#five");

// cria o "ouvinte" de evento, quando o botão é clicado
frm.addEventListener("submit", (e) => {

   const valor1 = frm.inValor1.value;
   const valor2 = frm.inValor2.value;

   // CONDIÇÕES
   if(valor1 > valor2) {
      resp1.innerText = `${valor1} É o maior.`;
   }

   if(valor1 < valor2) {
      resp1.innerText = `${valor2} É o maior.`;
   }

   if(valor1 == valor2) {
      resp2.innerText = "Valores iguais";
   }

   if(valor1 === valor2) {
      resp3.innerText = "Valores idênticos.";
   }

   if(valor1 >= valor2) {
      resp4.innerText = `${valor1} É maior ou igual a ${valor2}`;
   }
   if(valor1 <= valor2) {
      resp5.innerText = `${valor1} É menor ou igual a ${valor2}`;
   }
   
   e.preventDefault(); // previne a saída do formulário
   
})

// cria o "ouvinte" de evento, para quando o botão limpar for clicado
frm.addEventListener("reset", () => {
   resp1.innerText = "";
   resp2.innerText = "";
   resp3.innerText = "";
})