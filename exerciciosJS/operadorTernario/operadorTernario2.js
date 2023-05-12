// create sync prompt
const prompt = require("prompt-sync")();

// variables
let row = 10; // assign ten to row
let colum; // declare colum

// while row greater than or equal one do
while(row >= 1) {
   colum = 1; // assign 1 to colum
   // while colum less than or equal ten do
   while(colum <= 10) {
      // display
      console.log(`${colum} - ${colum % 2 ? "<" : ">"}`);
      colum++; // increment 1 to colum
   } // end colum
   row--; // decrement 1 in row
} // end row