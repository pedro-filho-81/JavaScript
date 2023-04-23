// cria a referência com o formulário html
const frm = document.querySelector("form");

// cria referência com o id one html
const resp1 = document.querySelector("#one");

// cria o "ouvinte" do evento, quando o botão submit é clicado
frm.addEventListener("submit", (e) => {

   // recebe o valor informado no formulário html
   const valor = Number(frm.inValor1.value);
   // calcula a raiz do valor
   const raiz = Math.sqrt(valor);

   // se a raiz for um número inteiro
   if(Number.isInteger(raiz)) {
      
      resp1.innerHTML = `A raiz quadrada de ${valor} é: <br>${raiz}, uma raiz exata;`;
   }else {
      resp1.innerHTML = `A raiz quadrada de ${valor} é: <br>${raiz.toFixed(5)}, não é uma raiz exata.`;
   }

   e.preventDefault(); // previne a saída do formulário
})

frm.addEventListener("reset", () => {
   resp1.innerHTML = ""; // limpa o campo
})