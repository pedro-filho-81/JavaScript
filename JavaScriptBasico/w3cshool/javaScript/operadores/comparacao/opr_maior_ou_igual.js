/*
   <h2>O operador maior ou igual <mark> >= </mark></h2>

   <p>O operador maior ou igual <mark> >= </mark> compara os valores para saber <br>se o valor1 é maior ou igual ao valor2? se for então,<br>retorna verdadeiro; caso contrário retorna falso.</p>

   <p>Atribua 5 a variável x, e exiba <strong>true ou false</strong> <br>com base nos valores da comparação:</p>

   <p><strong>let x <mark>=</mark> 5</strong>; cria uma variável do tipo inteiro.</p>

   <pre>
   &lt;body> <code>// aqui html</code>
      &lt;!--O parágrafo com o (id="demo") vai ser alterado pelo JavaScript-->
      &lt;p id="<mark>demo</mark>">&lt;/p>

      &lt;script> <code>// aqui javascript dentro do HTml</code>
*/

   let x = 5; // declara variável do tipo inteiro

   // aqui a comparação é entre dois valores diferentes e do mesmo tipo.
   // 5 é maior ou igual a 8
   document.getElementById("demo").innerHTML = ("x é maior ou igual a 8?" + (x >= 8) ); 
   // resultado falso