
// CAPTURA DOS ELEMENTOS 

let btnComprar = document.getElementById("btn-comprar");

let finalizarPedido = document.getElementById("finalizar-pedido");

let dataShow = document.getElementById("data-show");
let pedidoDataShow = document.getElementById("selecao-data-show");

let modalidadeIngresso = document.getElementById("tipo-entrada");

let pedidoTipoEntrada = document.getElementById("selecao-tipo-entrada");

let setor = document.getElementById("setores");
let pedidoSetor = document.getElementById("selecao-setor");

let qtdIngresso = document.getElementById("quantidade");
let pedidoQtdIngresso = document.getElementById("selecao-quantidade");

let spanTotal = document.getElementById("total");


//  CALCULO E VALIDAÇÃO
function calcularTotal() {
  let dataShowSelecionada = dataShow.value;
  let modalidadeSelecionada = modalidadeIngresso.value;
  let setorSelecionado = setor.value;
  let qtdSelecionada = Number(qtdIngresso.value);

  if (
    dataShowSelecionada === "" ||
    modalidadeSelecionada === "" ||
    setorSelecionado === "" ||
    isNaN(qtdSelecionada) ||
    qtdSelecionada <= 0
  ) {
    return alert("Por favor, preencha todos os campos corretamente para realizar o pedido.");
  }

  let valorTotal = tabelaPrecos[dataShowSelecionada][setorSelecionado][modalidadeSelecionada] * qtdSelecionada;

  spanTotal.innerText = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;

  validarCampos(valorTotal);
}

function validarCampos(valorDaCompra) {
  if (valorDaCompra > 0) {
    finalizarPedido.disabled = false; 
    return alert("Ingressos selecionados com sucesso! Você pode finalizar seu pedido.");
  } else {
    finalizarPedido.disabled = true; 
    return alert("Nenhum pedido adicionado. Por favor, escolha os ingressos para finalizar o pedido.");
  }
}


//  EVENTOS BOTOES
btnComprar.addEventListener("click", calcularTotal);

finalizarPedido.addEventListener('click', () => {
  alert('Compra realizada com sucesso, esperamos você no Barretão 2026!');
});


// ATUALIZAÇÃO DO RESUMO PEDIDO
dataShow.addEventListener("change", () => {
  let dataShowSelecionada = dataShow.value;

  pedidoDataShow.textContent = dataShowSelecionada
    .replace("20-08", "20 de Agosto - Show 1")
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

modalidadeIngresso.addEventListener("change", () => {
  pedidoTipoEntrada.textContent = modalidadeIngresso.value;
});

setor.addEventListener("change", () => {
  pedidoSetor.textContent = setor.value;
});

qtdIngresso.addEventListener("change", () => {
  pedidoQtdIngresso.textContent = qtdIngresso.value;
});