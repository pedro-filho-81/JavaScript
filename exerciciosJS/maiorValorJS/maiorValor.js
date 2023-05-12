/*
  3.24 Ache o número maior. O processo de achar o número  maior (ou seja, o máximo de um grupo de números)  é usado com frequência nas aplicações de computador.  Por exemplo, um programa que determina o vencedor  de uma disputa de vendas lerá o número de unidades  vendidas por vendedor. O vendedor que tiver vendido  mais unidades vence a disputa. Escreva um programa  em pseudocódigo e depois um programa que leia uma  série de 10 números, determine e imprima o maior dos  números. [Dica: seu programa deverá usar três variáveis  da seguinte forma]:  
  1º - contador: Um contador para contar até 10 (ou seja,   registrar quantos números foram informados e determinar quando os 10 números  foram processados)  
  2º - número: O número da entrada atual no programa  
  3º - maior: O maior número achado até o momento 
  Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 75). Edição do Kindle. 
  06/05/2023 Pedro;
*/
// create the sync prompt
const prompt = require("prompt-sync")();

// variables
let count = 1; // contador
let greaterValue = 0; // maior valor

// enquanto contador menor ou igual a 10 faça
// while count less than or equal to 10 do
while(count <= 10) {

  const value = Number(prompt("Digite um número: "));  
  
  if(value > greaterValue) {
    greaterValue = value;
  }
  count++;
}

console.log(`O maior valor é ${greaterValue}`);