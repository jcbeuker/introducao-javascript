var titulo = (document.querySelector(".titulo"));
// var titulo = (document.getElementById(".idTitulo"));
titulo.textContent = "Aparecida Nutricionista";

var paciente = (document.querySelector("#paciente_0"));
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValida = true;

if (peso <= 0 || peso > 1000) {
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido.";
}

if (altura <= 0 || altura > 3) {
    alturaEhValida = false;
    tdImc.textContent = "Altura inválida.";
}

if (alturaEhValida && pesoEhValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}