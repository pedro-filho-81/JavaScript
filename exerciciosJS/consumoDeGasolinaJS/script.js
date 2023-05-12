
// cria referência com o formulário Html
const frm = document.querySelector("form");

const resp1 = document.querySelector("#one");
const resp2 = document.querySelector("#two");
const resp3 = document.querySelector("#three");
const resp4 = document.querySelector("#four");
const resp5 = document.querySelector("#five");

let totalConsumo = 0;
let totalKmRodados = 0;
let totalAbastecimento = 0;
let consumo = 0;
let count = 1;

frm.addEventListener("submit", (e) => {
 
  // variáveis
  let abastecimento = Number(frm.inValor1.value);
  let kmRodados = Number(frm.inValor2.value);

  while(abastecimento > 0) {   

    // calcula
    consumo += (kmRodados / abastecimento);
    totalConsumo += consumo;
    totalKmRodados += kmRodados;
    totalAbastecimento += abastecimento;
    
    resp1.innerHTML = `Consumo ${consumo.toFixed(6)} km/l`;

    //exibe resultado
    resp2.innerHTML = `Você rodou: ${totalKmRodados.toFixed(6)} km`;
    resp3.innerHTML = `Consumo total = ${totalConsumo.toFixed(6)} km/l`;
    resp4.innerHTML = `Colocou de combustível: ${totalAbastecimento.toFixed(2)} litros`;
    resp5.innerHTML = `Abasteceu = ${count} vezes.`;
    
    frm.inValor2.value ='';
    frm.inValor1.value = '';

    // variáveis
    abastecimento = Number(frm.inValor1.value);
    kmRodados = Number(frm.inValor2.value);

    count++; // contador
  } // final while

  (e).preventDefault(); // previna a saída do formulário
})

// limpa os campos resp
frm.addEventListener("reset", () => {
  resp1.innerHTML = '';
  resp2.innerHTML = '';
  resp3.innerHTML = '';
  resp4.innerHTML = '';
  resp5.innerHTML = '';
  
  totalConsumo = 0;
  totalKmRodados = 0;
  totalAbastecimento = 0;
  count = 1;
}) 