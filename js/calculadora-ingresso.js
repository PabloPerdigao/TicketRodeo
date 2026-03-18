
//  Calcular valor total do pedido
function calcularTotal() {
  let dataShowSelecionada = dataShow.value;
  let modalidadeSelecionada = modalidadeIngresso.value;
  let setorSelecionado = setor.value;
  let qtdSelecionada = Number(qtdIngresso.value);

  if(dataShowSelecionada === "" || modalidadeSelecionada === "" || setorSelecionado === "" || isNaN(qtdSelecionada)) { 
    return alert("Por favor, preencha todos os campos para calcular o valor total.");
  }

  let valorTotal = tabelaPrecos[dataShowSelecionada][setorSelecionado][modalidadeSelecionada] * qtdSelecionada;

  document.getElementById('total').innerText = `R$ ${valorTotal.toFixed(2)}`;
}

let btnComprar = document.getElementById("btn-comprar");

btnComprar.addEventListener('click', () => {
  calcularTotal();
});


// 1 - Data & Show
let dataShow = document.getElementById("data-show");
let pedidoDataShow = document.getElementById("selecao-data-show");

dataShow.addEventListener("change", () => {
  let dataShowSelecionada = dataShow.value;

  pedidoDataShow.textContent = dataShowSelecionada.replace("20-08", "20 de Agosto - Show 1")
  .replace("21-08", "21 de Agosto - Show 2")
  .replace("22-08", "22 de Agosto - Show 3")
  .replace("23-08", "23 de Agosto - Show 4")
  .replace("24-08", "24 de Agosto - Show 5")
  .replace("25-08", "25 de Agosto - Show 6")
  .replace("26-08", "26 de Agosto - Show 7")
  .replace("27-08", "27 de Agosto - Show 8")
  .replace("28-08", "28 de Agosto - Show 9")
  .replace("29-08", "29 de Agosto - Show 10")
  .replace("30-08", "30 de Agosto - Show 11");


});


// 2 - Modalidade de Ingressso
let modalidadeIngresso = document.getElementById("tipo-entrada");
let pedidoTipoEntrada = document.getElementById("selecao-tipo-entrada");

modalidadeIngresso.addEventListener("change", () => {
  
  let modalidadeSelecionada = modalidadeIngresso.value;

  pedidoTipoEntrada.textContent = modalidadeSelecionada;
  
});

// 3 - Setor desejado
let setor = document.getElementById("setores");
let pedidoSetor = document.getElementById("selecao-setor");

setor.addEventListener("change", () => {
  
  let setorSelecionado = setor.value;

  pedidoSetor.textContent = setorSelecionado;

});

// 4 - Quantidade de Ingressos
let qtdIngresso = document.getElementById("quantidade");
let pedidoQtdIngresso = document.getElementById('selecao-quantidade');

qtdIngresso.addEventListener("change", () => {

  let qtdSelecionada = qtdIngresso.value;

  pedidoQtdIngresso.textContent = qtdSelecionada;
});







