   /*
      Atribua 5 a variável x, exiba <strong>true ou false</strong> com base nos valores e no tipo da variável da comparação:

      <strong>let x <mark>=</mark> 5</strong>; cria uma variável do tipo inteiro.

      &lt;body> <code>// aqui html</code>
      
      &lt;!--Os parágrafos com o (id="demo") vão ser alterados pelo JavaScript-->
   
      &lt;p id="<mark>demo</mark>">&lt;/p>
      &lt;p id="<mark>demo2</mark>">&lt;/p>
      &lt;p id="<mark>demo3</mark>">&lt;/p>

      &lt;script> <code>// aqui javascript dentro do HTml</code>
   */
   let x = 5; // declara variável do tipo inteiro

   // aqui a comparação é entre dois valores diferentes e do mesmo tipo.
   document.getElementById("demo").innerHTML = ("x é idêntico a 8 ?" + (x === 8) );

   // aqui a comparação é entre dois valores iguais e do mesmo tipo.
   document.getElementById("demo2").innerHTML = ("x é idêntico a 5? " + (x === 5) );

   // aqui a comparação é entre um valor inteiro e uma string
   // o operador <mark>===</mark> compara o valor e  tipo da variável.
   // o valor 5 inteiros é idêntico a 5 string resultado é false, Não são idênticos.
   document.getElementById("demo3").innerHTML = ("x é idêntico a 5? " + (x === "5") );