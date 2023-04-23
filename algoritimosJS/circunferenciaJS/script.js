/*
   <h4>Questionário: 2.20 Diâmetro, circunferência e área de um círculo.  Escreva um programa que leia o raio de um círculo e  informe o diâmetro, a circunferência e a área do círculo.  Utilize o valor constante 3,14159 para p. Realize cada  um desses cálculos dentro das instruções printf e use o especificador de conversão %f. [Nota: neste capítulo,  discutimos apenas constantes e variáveis inteiras. No Capítulo 3, discutiremos os números em ponto flutuante,  ou seja, valores que podem ter pontos decimais.] 
   Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 42). Edição do Kindle. 
   Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 41). Edição do Kindle. </h4><br>
*/

// cria a referência com o formulário
const frm = document.querySelector("form");

// cria referência com os campos do formulário
const resp1 = document.querySelector("#one")
const resp2 = document.querySelector("#two")
const resp3 = document.querySelector("#three");
const resp4 = document.querySelector("#four");

frm.addEventListener("submit", (e) => {

   // constante
   const PI = 3.14159;

   // variáveis que recebem os valores do formulário
   const raio = Number.parseFloat(frm.inValor1.value);
   const diametro = raio * 2;
   const circunferencia = 2 * PI * raio;
   const area = PI * (Math.pow(raio, 2))

   // exibe valores
   resp1.innerHTML = `Raio da circunferência = ${raio.toFixed(2)}`;
   resp2.innerHTML = `Diâmetro = ${diametro.toFixed(2)}`;
   resp3.innerHTML = `Circunferência = ${circunferencia.toFixed(2)}`;
   resp4.innerHTML = `Área = ${area.toFixed(2)}`;

   e.preventDefault(); // evita saída do formulário
})

// cria o "ouvinte" de evento, para quando o botão limpar for clicado
frm.addEventListener("reset", () => {
   resp1.innerText = "";
   resp2.innerText = "";
   resp3.innerText = "";
   resp4.innerText = "";
   resp5.innerText = "";
   resp6.innerText = "";
   resp7.innerText = "";
   resp8.innerText = "";
   resp9.innerText = "";
   resp10.innerText = "";
})