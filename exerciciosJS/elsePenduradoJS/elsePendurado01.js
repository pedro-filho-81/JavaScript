/*
   3.31 Problema do else pendurado. Determine a saída  para cada um dos seguintes códigos quando x for 9 e y  for 11, e quando x for 11 e y for 9. O compilador ignora o  recuo em um programa em C. Além disso, o compilador  sempre associa um else com o if anterior, a menos  que seja informado de que deve proceder de outra forma pela colocação das chaves {}. Visto que, à primeira  vista, você pode não saber ao certo a que if um else  corresponde, isso é conhecido como o problema do ‘else  pendurado’. Eliminamos o recuo do código a seguir para  tornar o problema mais desafiador. [Dica: aplique as  convenções de recuo que você aprendeu.] 
   Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 76). Edição do Kindle. 
   09/05/2023
*/
// create sync prompt
const prompt = require("prompt-sync")();

let x = 9, y = 11;
console.log("A)\nx = 9, y = 11");
console.log('if(x < 10)\nif(y > 10)\nprint:');
if(x < 10)
if(y > 10)
console.log(`1 - *****`);
else
console.log(`2 - #####`);
console.log(`3 - $$$$$`);
console.log("4 - &&&&&");

x = 11, y = 9;
console.log("B)\nx = 11, y = 9");
console.log('if(x < 10)\n   if(y > 10)\nprint:');
if(x < 10) { 
   if(y > 10)
   console.log(`*****`);
} else { 
   console.log(`#####`);
   console.log(`$$$$$`);
}