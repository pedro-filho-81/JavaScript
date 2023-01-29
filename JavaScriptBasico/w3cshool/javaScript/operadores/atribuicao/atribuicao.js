// variáveis
let igual = 10; // igual recebe 10

// document respostas
document.getElementById("igual").innerHTML = "let igual <mark>=</mark> " + igual + " // igual recebe 10";

document.getElementById("igual2").innerHTML = "igual <mark>+=</mark> 5; // igual soma 5";

document.getElementById("maisIgual").innerHTML = "igual vale <mark>=</mark> " + (igual + 5) + " // igual vale 5 + 10";
igual += 5;

document.getElementById("menosIgual").innerHTML = "igual <mark>-=</mark> 2; // igual subtrai 2";
      
document.getElementById("menosIg").innerHTML = "igual vale <mark>=</mark> " + (igual - 2) + " // igual vale 15 - 2";
igual -= 2;

document.getElementById("multi").innerHTML = "igual <mark>*=</mark> 5; // igual multiplica por 5";

document.getElementById("multi2").innerHTML = "igual vale <mark>=</mark> " + (igual * 5)+ " // igual vale 13 * 5";
igual *= 5;