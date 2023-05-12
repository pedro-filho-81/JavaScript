// create sync prompt
const prompt = require("prompt-sync")();

let count = 1;

while(count <= 10) {

   console.log(`${count % 2 ? `${count} - *****` : `${count} - +++++++++`}`);
   
   count++;
}