// cria referência com o formulário html
const frm = document.querySelector("form");
const resp1 = document.querySelector("#one");
const resp2 = document.querySelector("#two");
const resp3 = document.querySelector("#three");
const resp4 = document.querySelector("#four");

// cria o "ouvinte" de evento, ativado quando clicar no botão submit do formulário html
frm.addEventListener("submit", (e) => {

   // saque recebe o valor digitado
   let saque = Number(frm.inValor1.value)

   // verifica se o valor de saque é multiplo de 10
   if(saque % 10 != 0) { // se não for

      // emita um alerta
      alert("ERRO! Valor não é multiplo de 10, Tente Novamebte.");
      frm.inValor1.focus(); // focu no campo valor
      return; // retorna o valor  }
   }

   // notasDeCem recebe o inteiro da divisão 
   // do valor do saque por 100
   const notasDeCem = Math.floor(saque / 100)

   // saldo recebe o resto da divisão do valor do saque por cem
   let saldo1 = saque % 100;

   // notasDeCinquenta recebe o inteiro da 
   // divisão saldo1 por cinquenta
   const notasDeCinquenta = Math.floor(saldo1 / 50);

   // saldo2 recebe o resto da divisão de saldo1 por cinquenta
   let saldo2 = saldo1 % 50;

   // notasDeDez recebe o inteiro da 
   // divisão de saldo2 por 10
   const notasDeDez = Math.floor(saldo2 / 10)

   // saldo2 recebe o resto da divisão do saldo2 por 10
   let saldo3 = saldo2 % 10;

   if(notasDeCem > 0) { 
      resp1.innerHTML = `Notas de R$ 100,00: ${notasDeCem}`;
   }

   if(notasDeCinquenta > 0) { 
      resp2.innerHTML = `Notas de R$ 50,00: ${notasDeCinquenta}`;
   }

   if(notasDeDez > 0) { 
      resp3.innerHTML = `Notas de R$ 10,00: ${notasDeDez}`;
   }

   e.preventDefault() // evita fuga do formulário
})

frm.addEventListener("reset", () => {
   resp1.innerHTML = "";
   resp2.innerHTML = "";
   resp3.innerHTML = "";
})