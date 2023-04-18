// cria a ligação com o formulário
const frm = document.querySelector("form");

// cria a ligação com ids no html
const soma = document.querySelector("#one");
const diferenca = document.querySelector("#two");
const produto = document.querySelector("#three");
const cociente = document.querySelector("#four");
const resto = document.querySelector("#five");

// cria o "ouvinte" para o evento, quando clicar no botão
frm.addEventListener("submit", (e) => {

   // entrada de dados
   const valor1 = Number(frm.inValor1.value); // recebe o primeiro valor
   const valor2 = Number(frm.inValor2.value); // recebe o segundo valor

   // exibe os resultados
   soma.innerText = `A soma entre ${valor1} e ${valor2} é ${valor1 + valor2}`;

   diferenca.innerText = `A diferença entre ${valor1} e ${valor2} é ${valor1 - valor2}`;

   produto.innerHTML = `O produto entre ${valor1} e ${valor2} é ${valor1 * valor2}`;
   
   cociente.innerText = `A divisão entre ${valor1} e ${valor2} é ${valor1 / valor2}`;

   resto.innerText = `O resto da divisão entre ${valor1} e ${valor2} é ${valor1 % valor2}`;

   e.preventDefault(); // previne a saida do formulário
})