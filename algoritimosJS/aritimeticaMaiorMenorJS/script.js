// cria a referência co o forulário
const frm = document.querySelector("form");

// cria ligação com os elementos Html
const resp1 = document.querySelector("#one");
const resp2 = document.querySelector("#two");
const resp3 = document.querySelector("#three");
const resp4 = document.querySelector("#four");
const resp5 = document.querySelector("#five");

// cria o "ouvinte" de eventos, quando o botão submit for clicado
frm.addEventListener("submit", (e) => {

   // recebe os valores do usuário
   const valor1 = Number(frm.inValor1.value);
   const valor2 = Number(frm.inValor2.value);
   const valor3 = Number(frm.inValor3.value);

   // calcula os valores
   const soma = valor1 + valor2 + valor3;
   const media = (valor1 + valor2 + valor3) / 3;
   const mult = valor1 * valor2 * valor3;
   
   let maior = valor1;
   let menor = valor1;

   // condições maior
   if(valor2 > maior ) {
      maior = valor2;
   }
   if(valor3 > maior) {
      maior = valor3;
   }

   // condições menor valor
   if(valor2 < menor) {
      menor = valor2;
   }
   if(valor3 < menor) {
      menor = valor3;
   }
    
   // exibe resultado
   resp1.innerHTML = `A soma é ${soma}`
   resp2.innerHTML = `A média é ${media.toFixed(2)}`
   resp3.innerHTML = `O produto é ${mult}`
   resp4.innerHTML = `O menor é ${menor}`
   resp5.innerHTML = `O maior é ${maior}`

   e.preventDefault(); // evita saída do formulário
})

// cria o "ouvinte" de evento, para quando o botão limpar for clicado
frm.addEventListener("reset", () => {
   resp1.innerText = "";
   resp2.innerText = "";
   resp3.innerText = "";
   resp4.innerText = "";
   resp5.innerText = "";
   resp6.innerText = "";
   resp7.innerText = "";
   resp8.innerText = "";
   resp9.innerText = "";
   resp10.innerText = "";
})