/*
   3.6 Determine os valores das variáveis produto e x depois  que o cálculo a seguir for realizado. Suponha que produto e x tenham o valor 5 quando a instrução começar  a ser executada.  produto *= x++; 
   Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 71). Edição do Kindle. 
   Pedro, 01/05/2023
*/
// cria prompt sync
const prompt = require("prompt-sync")();

let produto = 5;
let x = 5;

produto *= x++;

console.log(`O produto de (produto *= x++) é ${produto}`)