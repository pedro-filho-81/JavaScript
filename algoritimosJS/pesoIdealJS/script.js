// cria a ligação com o formulário html
const frm = document.querySelector("form");

// CRIA A LIGAÇÃO COM OS IDs DO FORMULÁRIO
const nome = document.querySelector("p#one"); // cria ligação com id one
const altura = document.querySelector("p#two");
const sexo = document.querySelector("p#three");
const resp1 = document.querySelector("p#four");


// cria o "ouvinte" de evento, quando o botão é clicado
frm.addEventListener("submit", (e) => {

   // recebe os valores digitados pelo usuário
   const nomes = frm.inNome.value;
   const masculino = frm.inMasculino.checked;
   const alturas = Number.parseFloat(frm.inAltura.value);

   // exibe os resultados
   nome.innerHTML = `Nome: ${nomes}`;
   altura.innerHTML = `Altura: ${alturas}m`;

   if(masculino == true) {
      var pesos = 22 * Math.pow(alturas, 2);
      sexo.innerHTML = "Sexo Masculino: "; 
   } else {
      pesos = 21 * Math.pow(alturas, 2);
      sexo.innerHTML = "Sexo Feminino: "
   }  

   resp1.innerText = `${nomes} seu peso ideal é: ${pesos.toFixed(2)}Kg`;

   e.preventDefault(); // previne a saída do formulário
   
})

// cria o "ouvinte" de evento, para quando o botão limpar for clicado
frm.addEventListener("reset", () => {
   nome.innerHTML = "";
   altura.innerHTML = "";
   sexo.innerHTML = "";
   // recebe o texto vazio
   resp1.innerText = "";
})