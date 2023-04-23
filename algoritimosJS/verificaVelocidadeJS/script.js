/*
   b) Elaborar um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave” – conforme ilustra a Figura 4.8.Iepsen, Edécio Fernando. Lógica de Prograação e Algoritmos com JavaScript - 2ª Edição (p. 123). Novatec Editora. Edição do Kindle. 
*/

// cria referência com o formulário
const frm = document.querySelector("form");

// cria elo com 
const resp1 = document.querySelector("#one");
const resp2 = document.querySelector("#two");

// cria o "ouvinte" de evento, adicionado quando o botão é clicado
frm.addEventListener("submit", (e) => {

   const valorPermitido = Number(frm.inValor1.value);
   const valorCondutor = Number(frm.inValor2.value);

   if(valorCondutor <= valorPermitido) {
      resp1.innerHTML = `${valorCondutor}Km/h - Velocidade Permitida: Sem multa.`;
   } else {
      resp1.innerHTML = `${valorCondutor}Km/h - Velocidade Não Permitida: mULTADO!`;
   }

   resp2.innerHTML = "Use sempre cinto de segurança.";

   e.preventDefault(); // evita saida do formulário
})

frm.addEventListener("reset", () => {
   resp1.innerHTML = "";
   resp2.innerHTML = "";
})