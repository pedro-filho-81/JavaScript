// cria a referência com o formulários e os elementos html
const frm = document.querySelector("form")
 
// cria referência com a id one
const resp1 = document.querySelector("#one");

// cria o "ouvinte" de eventos, quando o botão submite for clicado
frm.addEventListener("submit", (e) => {

   // recebe o valor informado no campo inHoraBrasil no html
   const horasBrasil = Number(frm.inHorasBrasil.value); 

   // calcula o horário na França
   let horasFranca = horasBrasil + 5;
   
   // verifica às horas da França
   // se às horas maior que 24h
   if(horasFranca > 24) {
      // horas de França é subitraido os 24
      horasFranca -= 24;
   }

   // exibe o horário na França
   resp1.innerHTML = `Na França são: ${horasFranca.toFixed(2)}h.`;

   e.preventDefault(); // evita a saída do formulário
})

frm.addEventListener("reset", () => {
   resp1.innerHTML = ""; // limpa o campo de resposta também
})