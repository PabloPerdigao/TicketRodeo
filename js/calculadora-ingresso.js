// Calcular ingresso com base nas opções selecionadas pelo usuário

// 1 - Data & Show
let dataShow = document.getElementById("data-show");
let pedidoDataShow = document.getElementById("selecao-data-show");

dataShow.addEventListener("change", () => {
  let valorDataShow = Number(dataShow.value);
  let nomeDataShow = dataShow.selectedOptions[0].textContent;

  pedidoDataShow.innerText = nomeDataShow;

  console.log("Valor da data/show selecionada:", valorDataShow);
});


// 2 - Modalidade de Ingressso

let modalidadeIngresso = document.getElementById("tipo-entrada");
let pedidoTipoEntrada = document.getElementById("selecao-tipo-entrada");

modalidadeIngresso.addEventListener("change", () => {

  let valorModalidade = Number(modalidadeIngresso.value);

  let nomeModalidade = modalidadeIngresso.selectedOptions[0].textContent;

  pedidoTipoEntrada.innerText = nomeModalidade;
  console.log("Valor da modalidade de ingresso selecionada:", valorModalidade);
});

// 3 - Setor desejado
let setor = document.getElementById("setores");
let pedidoSetor = document.getElementById("selecao-setor");

setor.addEventListener("change", () => {
  let valorSetor = Number(setor.value);
  let nomeSetor = setor.selectedOptions[0].textContent;
  pedidoSetor.innerText = nomeSetor;
  console.log("Valor do setor selecionado:", valorSetor);
});

// 4 - Quantidade de Ingressos

let qtdIngresso = document.getElementById("quantidade");
let pedidoQtdIngresso = document.getElementById('selecao-quantidade');

qtdIngresso.addEventListener("change", () => {
  let valorQtdIngresso = Number(qtdIngresso.value);
  pedidoQtdIngresso.innerText = valorQtdIngresso;
  console.log("Quantidade de ingressos selecionada:", valorQtdIngresso);
});



//  Calcular valor total do pedido
let valorTotal = document.getElementById("total");


function calcularValorTotal() {
  let valorDataShow = Number(dataShow.value);
  let valorModalidade = Number(modalidadeIngresso.value);
  let valorSetor = Number(setor.value);
  let valorQtdIngresso = Number(qtdIngresso.value);
  let total = (valorDataShow + valorModalidade + valorSetor) * valorQtdIngresso;
  valorTotal.innerText = `R$ ${total.toFixed(2)}`;
  console.log("Valor total calculado:", total);
  return total;
}

let btnComprar = document.getElementById('btn-comprar');

btnComprar.addEventListener('click', (calcularValorTotal));
