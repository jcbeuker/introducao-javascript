var titulo = (document.querySelector(".titulo"));
// var titulo = (document.getElementById(".idTitulo"));
titulo.textContent = "Aparecida Nutricionista";

var paciente = (document.querySelector("#paciente_0"));
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var altura = paciente.querySelector(".info-altura").textContent;
var imc = peso / (altura * altura);

var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;
console.log (imc);