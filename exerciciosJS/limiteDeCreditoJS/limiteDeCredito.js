/*
  3.18 Calculadora de limite de crédito. Desenvolva um  programa em C que determine se um cliente de uma  loja de departamentos excedeu seu limite de crédito. Os  seguintes fatos estão disponíveis para cada cliente:  
  a) Número de conta.  
  b) Saldo no início do mês.  
  c) Total de todos os encargos desse cliente nesse mês.  
  d) Total de todos os créditos aplicados à conta desse  cliente nesse mês.  
  e) Limite de crédito autorizado. 
  Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 74). Edição do Kindle.
  Pedro,04/05/2023 
*/
// cria referência com o formulário Html
const frm = document.querySelector("form");
const resp1 = document.querySelector("#one");
const resp2 = document.querySelector("#two");
const resp3 = document.querySelector("#three");
const resp4 = document.querySelector("#four");
const resp5 = document.querySelector("#five");

frm.addEventListener("submit", (e) => {

  // entrada de dados
  let conta = Number(frm.inValor1.value);
  let saldoInicial = Number(frm.inValor2.value);
  let encargos = Number(frm.inValor3.value);
  let totCredito = Number(frm.inValor4.value);
  let limiteCredito = Number(frm.inValor5.value);

  // calcular
  let novoSaldo = (saldoInicial + encargos - totCredito);

  // se novoSaldo maior que limite de crédito
  if(novoSaldo > limiteCredito) {
    // exibe resultados
    resp1.innerHTML = `Nº. da conta: ${conta}`;
    resp2.innerHTML = `Limite de crédito R$ ${limiteCredito.toFixed(2)}`;
    resp3.innerHTML = `Saldo R$ ${novoSaldo.toFixed(2)}`;
    resp4.innerHTML = "<strong>Atenção:</strong> Limite de crédito ultrapassado."
  }

  (e).preventDefault(); // previna a saída do formulário
})

// limpa os campos resp
frm.addEventListener("reset", () => {
  resp1.innerHTML = '';
  resp2.innerHTML = '';
  resp3.innerHTML = '';
  resp4.innerHTML = '';
  resp5.innerHTML = '';
})