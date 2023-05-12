/*
   3.14 Escreva uma única instrução em pseudocódigo que indique cada um dos seguintes comandos:  
   a) Apresente a mensagem 'Digite dois números'.  
   b) Atribua a soma das variáveis x, y e z à variável p.  
   c) A seguinte condição deve ser testada em uma estrutura de seleção if…else: o valor atual da variável  m é maior que o dobro do valor atual da variável v.  d) Obtenha valores para as variáveis s, r e t pelo teclado. 
   Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 73). Edição do Kindle. 
   Pedro, 02/05/2023
*/

// cria referência com o formulário Html
const frm = document.getElementById("form");

const resp1 = document.querySelector("#one");

frm.addEventListener("submit", (e) => {

   // variáveis
   const x = Number(frm.inValor1.value);
   const y = Number(frm.inValor2.value);
   const z = Number(frm.inValor3.value);

   let p = x + y + z;

   (e).preventDefault(); // previna a saída do formulário
})

frm.addEventListener("reset", () => {
  resp1.inValor1.value = '';
  resp2.inValor2.value = '';
  resp3.inValor3.value = '';
})