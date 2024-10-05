var qtd = document.getElementById("quantidade");
var de = document.getElementById("de");
var ate = document.getElementById("ate");
var btnSortear = document.getElementById("btn-sortear");
var btnReiniciar = document.getElementById("btn-reiniciar");
var resultado = document.getElementById("resultado");

function sortear() {
    var numeroSorteado = []
    for (var i = 0; i <qtd.value; i++){
        numeroSorteado.push((Math.floor(Math.random() * (ate.value - de.value) + de.value)));
        resultado.innerText = "Numero sorteado:"+numeroSorteado;
    }
    resultado.classList.add("texto__paragrafo");
    btnReiniciar.classList.remove("container__botao-desabilitado")
    btnReiniciar.classList.add("container__botao")
}

function reiniciar() {
    qtd.value = null; 
    de.value = null; 
    ate.value = null;
    resultado.innerText = "Numero sorteado: nenhum até agora";
    resultado.classList.add("texto__paragrafo");
}