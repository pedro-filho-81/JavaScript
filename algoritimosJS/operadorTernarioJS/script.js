// cria a referência com o formulário html
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one"); // cria ligação com o id one no html

frm.addEventListener("submit", (e) => {

   const idade = Number(frm.inValor1.value); // recebe o valor informado no formulário
 
   // condição usando o operador ternário equivalente a (if ... else)
   /*
      if(expressão verdadeira) {
         exibe isso
      } else { se expressão falsa
         exibe isso.
      }
   */
   resp1.innerHTML = idade >= 18 ? `Você é um adulto com ${idade} anos.` : `Você é um jovem com ${idade} anos.`; // se idade maior que 18 exibe Adulto se não Juvenil 

   e.preventDefault();
})
frm.addEventListener("reset", () => {
   resp1.innerHTML = ""; // limpa o campo quando o botão limpar for clicado
})