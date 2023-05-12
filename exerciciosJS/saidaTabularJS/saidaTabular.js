// create sync prompt
const prompt = require("prompt-sync")();
let count = 1;
console.log(`N\t10*N\t100*N\t1000*N`);
while(count <= 10) {
  console.log(`${count}\t${count*10}\t${count*100}\t${count*1000}`);
  count++;
}