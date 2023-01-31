      /*      
         programa vai passar os valores 
         para a id da tag <p> do HTmL

         a regra é uma id exclusiva,
         ou seja, não pode ter mais de uma ID
         com o mesmo nome.

         <p>Declara variável igual</p>
         <p id="igual"></p>
         <p id="igual2"></p>
         <p id="maisIgual"></p>
         <p id="menosIgual"></p>
         <p id="menosIg"></p>
         <p id="multi"></p>
         <p id="multi2"></p>
         <p id="divide"></p>
         <p id="divide2"></p>
         <p id="resto"></p>
         <p id="resto2"></p>
      */

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

      document.getElementById("divide").innerHTML = "igual <mark>/=</mark> 2; // igual divide por 2";

      document.getElementById("divide2").innerHTML = "igual vale <mark>=</mark> " + (igual / 2) + " // igual / 2";

      document.getElementById("resto").innerHTML = "resto %= 2" + (65 % 2);