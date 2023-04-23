/*
   Questionário: a) Elaborar um programa que leia um número. Informe se ele é par ou ímpar. Faça com o if... else... tradicional e, após, tente criar a condição com o operador ternário.  Para os exercícios, foi utilizada uma figura padrão, mas você pode substituí-la caso tenha interesse. <br>
   Iepsen, Edécio Fernando. Lógica de Programação e Algoritmos com JavaScript - 2ª Edição (p. 123). Novatec Editora. Edição do Kindle.
*/
// cria referência com o formulário
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one");
const resp2 = document.querySelector("#two");

frm.addEventListener("submit", (e) => {

   const valor = Number(frm.inValor1.value); // recebe o valor do formulario

   if(valor % 2 == 0) { // verifica se é par e
      // exibe essa resposta
      resp1.innerHTML = `Usando if...else: ${valor} é PAR.`;
   } else { // se falso
      // exibe essa 
      resp1.innerHTML = `Usando if...else: ${valor} é ÍmPAR.`;
   }

   // USANDO O OPERADOR TERNÁRIO
   resp2.innerHTML = (valor % 2 == 0) ? `Usando " ? : ": ${valor} é PAR.` : `Usando ? : ${valor} é Ímpar`;
   
   e.preventDefault(); // evita saída do formulário
})

// limpa os campos
frm.addEventListener("reset", () => {
   resp1.innerHTML = "";
   resp2.innerHTML = "";
})