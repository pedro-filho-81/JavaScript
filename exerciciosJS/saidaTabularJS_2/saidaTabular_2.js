// create sync prompt
const prompt = require("prompt-sync")();

// variables
let count = 1;
let count2 = 3;

//  print header
console.log(`A\tA+2\tA+4\tA+6`);

// while count less then ou equal to five do
while(count <= 5) {
  // print
  console.log(`${count2*count}\t${count2*count+2}\t${count2*count+4}\t${count2*count+6}`);
  
  //increment
  count++;
} // end while