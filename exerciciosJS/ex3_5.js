/*
   3.5 Combine as instruções que você escreveu no Exercício 3.4  em um programa que calcule a soma dos inteiros de 1 a  10. Use a estrutura while para realizar um loop pelas  instruções de cálculo e incremento. O loop deverá terminar quando o valor de x chegar a 11. Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 71). Edição do Kindle. 
   Pedro Filho
   01/05/2023
*/
const prompt = require("prompt-sync")();

let x = 1;
let soma = 0;

while(x < 11) {
   soma += x;
   console.log(` ${x} `)
   x++;
}

console.log(`Soma = ${soma}`);