// create sync prompt
const prompt = require("prompt-sync")();

// variable
let value = Number(prompt("Digite 1 ou 2: "));

// while value greater than two do
while(value > 2) {
   // data input
   value = Number(prompt("Digite apenas 1 ou 2: "));
}
// print
console.log(`Você digitou ${value}`);