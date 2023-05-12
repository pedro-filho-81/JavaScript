/*
   3.4 Escreva uma instrução em C que possibilite realizar as  seguintes tarefas:  
   a) declarar variáveis soma e x para que sejam do tipo  int.  
   b) inicializar variável x em 1.  
   c) inicializar variável soma em 0.  
   d) somar variável x à variável soma e atribuir o resultado à variável soma.  
   e) imprimir 'A soma é:' seguido pelo valor da variá-  vel soma. 
   Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 71). Edição do Kindle. 
*/
// cria prompt sync
const prompt =require("prompt-sync")();

let soma = 0;
let x = 1;

soma += x;

console.log(`Soma = ${soma}`);