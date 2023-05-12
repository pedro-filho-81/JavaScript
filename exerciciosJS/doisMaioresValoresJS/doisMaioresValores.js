// create sync prompt
const prompt = require("prompt-sync")();

// variables
let count = 1;
let greaterValue = 0;
let secondValue = 0;

while(count <= 10) {

   // constant
   const value = Number(prompt(`Digite o ${count}º valor: `))

   if(count == 1) {
      greaterValue = value;
      secondValue = value;
   }

   // se num maior que primeiro maior
   if( value > greaterValue ) {

      // segundo recebe primeiro;
      secondValue = greaterValue;

      // primeiro maior recebe num
      greaterValue = value;

   }  // fim if externo
 
   // se o primeiro igual ao segundo e
   if( greaterValue == secondValue ) { 
      // se num menor que o primeiro
      if( value < greaterValue ) { 
         // segundo recebe número
         secondValue = value;
      }
   }

   // se num menor que o primeiro e
   if( value < greaterValue ) { 
      // num maior que o segundo
      if( value > secondValue ) {
         // segundo recebe num
         secondValue = value;
      }
   }

   count++;
} // end while

// print
console.log(`O maior valor é ${greaterValue}`);
console.log(`O segundo maior valor é ${secondValue} `);