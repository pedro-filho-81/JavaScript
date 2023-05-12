/*
   3.33 Quadrado de asteriscos. Escreva um programa que  leia o lado de um quadrado e depois exiba esse quadrado a partir de asteriscos. Seu programa deverá funcionar  para quadrados de todos os tamanhos de lado entre 1 e  20. Por exemplo, se o programa ler um tamanho 4, ele  deverá exibir. 
   Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 77). Edição do Kindle. 
   11/5/2023 Pedro
*/

// create sync prompt
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one");

frm.addEventListener("submit", (e) => { 

   let row = 1;
   let colum = 1;
   let asterisco = '';

   const valor = Number(frm.inValor1.value);

   resp1.innerHTML = "";

   while(row <= valor) { 
      // while
      while(colum <= valor) {
         resp1.innerHTML += "* "; 
         colum++;
      }  
      resp1.innerHTML += "<br>"
      frm.inValor1.value = '';
      colum = 1;
      row++;
   }
   e.preventDefault();
})