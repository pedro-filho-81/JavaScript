/*
   3.34 Quadrado de asteriscos vazio. Modifique o programa que você escreveu no Exercício 3.33 para que ele  exiba um quadrado vazio. Por exemplo, se seu programa ler um tamanho 5, ele deverá exibir 
   Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 77). Edição do Kindle.  
   11/5/2023 Pedro
*/

// create sync prompt
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one");

frm.addEventListener("submit", (e) => { 

   let row = 1;
   let colum = 1;
   let vazio = 1;

   // data input
   const valor = Number(frm.inValor1.value);
   
   // clear field
   resp1.innerHTML = "";

   // first line
   while(colum <= valor) { // linha 1
      resp1.innerHTML += "*"; 
      colum++;
   }

   // pula linha
   resp1.innerHTML += "<br>";

   // primeiro asterisco
   while(row <= valor - 2) { 

      resp1.innerHTML += "*";

      // linha vazia
      while (vazio <= valor - 2) {
         resp1.innerHTML += " "
         vazio++;
      }

      // últmo asterisco e pula linha
      resp1.innerHTML += "*<br>";

      // limpa campo = clear field
      frm.inValor1.value = '';
      vazio = 1; // inicializa vazio
      colum = 1; // inicializa coluna
      row++; // incrementa linha
   } // end while row

   // last line
   while(colum <= valor) { // linha 1
      resp1.innerHTML += "*"; 
      colum++;
   }

   e.preventDefault();
})