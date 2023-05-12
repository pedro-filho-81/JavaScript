/*
   3.32 Outro problema do else pendurado. Modifique o  seguinte código para produzir a saída mostrada. Use as  técnicas de recuo apropriadas. Você pode não precisar fazer mudança alguma, além de inserir as chaves. O compilador ignora os recuos em um programa. Eliminamos  o recuo do código a seguir para tornar o problema mais  desafiador. [Nota: é possível que nenhuma modificação  seja necessária.] 
   Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 76). Edição do Kindle. 

*/

// A
let x = 5, y = 8;
console.log("A)\nx = 5, y = 8");
console.log('if(y == 8 true)\nif(x == 5 true)\nprint:');
if(y == 8)
if(x == 5)
console.log(`1 - @@@@@ exibe se true`);
else
console.log(`2 - ##### exibe se false`);
console.log("Exibe se true ou false")
console.log(`3 - $$$$$`);
console.log("4 - &&&&&");

// B
x = 8, y = 5;
console.log("\nB)\nx = 8, y = 5");
console.log('if(y == 8 false)\nif(x == 5 false)\nprint:');
if(y == 8) { 
   if(x == 5)
      console.log(`1 - @@@@@ exibe se true`);
} else { 
   console.log(`2 - ##### exibe se false`);
}
   console.log("Exibe se true ou false")
   console.log(`3 - $$$$$`);
 
// C
x = 5, y = 7;
console.log("\nC)\nx = 5, y = 7");
console.log('if(y == 8 false)\nif(x == 5 true)\nprint:');
if(y == 8) { 
   if(x == 5)
      console.log(`1 - @@@@@ exibe se true`);
} else { 
   console.log(`2 - ##### exibe se false`);
   console.log(`3 - $$$$$ exibe se false`);
   console.log("4 - &&&&& exibe se false");
}