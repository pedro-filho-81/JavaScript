/*
   3.7 Escreva instruções em C que:  
   a) leiam a variável inteira x com scanf.  
   b) leiam a variável inteira y com scanf.  
   c) inicializem a variável inteira i em 1.  
   d) inicializem a variável inteira potência em 1.  
   e) multipliquem a variável potência por x e atribua o  resultado à potência.  
   f) incrementem a variável i em 1.  
   g) testem i para verificar se ele é maior ou igual a y na  condição de uma estrutura while.  
   h) exibam a variável inteira potência com printf.
   Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 71). Edição do Kindle. 
   Pedro, 01/05/2023
*/
// cria referência como formulário html
const frm = document.querySelector("form"); 

const resp1 = document.querySelector("#one"); // ligação com o id one do html

frm.addEventListener("submit", (e) => {

   // entrada de dados
   const x = Number(frm.inValor1.value);
   const y = Number(frm.inValor2.value);

   // variáveis
   let i = 1; // contador while
   let potencia = 1; // calcula a potência

   // enquanto i menor ou igual a y faça 
   while(i <= y) {
      // calcula a potência de x
      potencia *= x;
      // incrementa o contador i em 1
      i++;
   } // final while

   // exibe o resultado
   resp1.innerHTML = `A potência de ${x} elevado a ${y} é ${potencia}<br>`;

   // limpa os campos
   frm.inValor1.value = "";
   frm.inValor2.value = "";

   e.preventDefault(); // evita saída do formulário
})

// limpa os campos do resultado ao clicar no botão limpar
frm.addEventListener("reset", () => {
   resp1.innerHTML = "";
   resp2.innerHTML = "";
   resp3.innerHTML = "";
})