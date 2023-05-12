/*
   o que o programa imprime?
*/
let x = 1, total = 0, y;

while( x <= 10) {
   y = x * x;
   console.log(` ${y}`);
   total += y;
   ++x;
}
console.log(`Total is ${total}`);