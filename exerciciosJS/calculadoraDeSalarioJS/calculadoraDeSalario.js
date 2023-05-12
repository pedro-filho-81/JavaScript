/*
  3.21 Calculadora de salário. Desenvolva um programa  que determine o salário semanal bruto de vários funcionários. A empresa paga ‘uma hora normal’ para cada  funcionário pelas primeiras 40 horas trabalhadas, ‘uma  hora normal e meia’ por hora trabalhada a partir de 40  horas. Você recebe uma lista de funcionários da empresa, o número de horas que cada funcionário trabalhou  na semana anterior e o valor ganho por hora de cada  funcionário. Seu programa deverá ler essas informações  para cada funcionário e determinar e exibir o salário que  cada um deverá receber. Aqui está um exemplo do diálogo de entrada/saída: Deitel, Paul; Deitel, Harvey. C  Como Programar (p. 75). Edição do Kindle.
  Pedro, 04/05/2023 
*/
// cria referência com o formulário Html
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one");
const resp2 = document.querySelector("#two");
const resp3 = document.querySelector("#three")

frm.addEventListener("submit", (e) => {

  // entrada de dados
  const horasTrabalhadas = Number(frm.inValor1.value);
  const valorDasHoras = Number(frm.inValor2.value);
  let horasExtras = 0;
  let salario = 0;

  if(horasTrabalhadas > 40) {
    horasExtras += (horasTrabalhadas - 40) * (valorDasHoras / 2)
    salario = horasTrabalhadas * valorDasHoras + horasExtras;
    resp1.innerHTML = `Salário R$ ${(salario - horasExtras).toFixed(2) }`;
    resp2.innerHTML = `Horas extras R$ ${horasExtras.toFixed(2)}`;
    resp3.innerHTML = `Sálario atual R$ ${salario.toFixed(2)}`;
  } else {
    salario = 
    resp1.innerHTML = '';
    resp2.innerHTML = `Sálario é de R$ ${(horasTrabalhadas * valorDasHoras).toFixed(2)}`;
  }

  frm.inValor1.value = '';
  frm.inValor2.value = '';
  
  (e).preventDefault(); // previna a saída do formulário
})

// limpa os campos resp
frm.addEventListener("reset", () => {
  resp1.innerHTML = '';
  resp2.innerHTML = '';
  resp3.innerHTML = '';
  resp4.innerHTML = '';
  resp5.innerHTML = '';
  resp6.innerHTML = '';
})