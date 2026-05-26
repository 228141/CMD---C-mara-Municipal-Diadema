var data = new Date();
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var dia = String(data.getDate()).padStart(2, '0');
var mes = data.getMonth();
var ano = data.getFullYear();
var hours = String(data.getHours()).padStart(2, '0');
var minutes = String(data.getMinutes()).padStart(2, '0');
var seconds = String(data.getSeconds());
dataAtual = "Diadema: " + dia + ' de ' + meses[mes] + ' de ' + ano +  ' - ' +  hours + ':' + minutes ;
model.data = dataAtual

//-------------------------

// PreencherCampoData

var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = dataAtual.toLocaleString('pt-BR', { month: 'long'});
var ano = dataAtual.getFullYear();


model.data = 'Diadema, ' + dia + ' de '+ mes + ' de ' + ano + '.'

//-------------------------

var ddAtual = new Date();
var dia = ddAtual.getDate();
var mes = ddAtual.getMonth();
var ano = ddAtual.getFullYear();

var meses = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

if (dia < 10) {
  dia = '0' + dia;
}

var dataFormatada = dia + ' de ' + meses[mes] + ' de ' + ano;

model.dataAtual = dataFormatada;

const dataAtual = document.getElementById("dataAtual");
if (dataAtual) {
  dataAtual.style.textAlign = "center"; // Centraliza o texto
  dataAtual.style.fontWeight = "500";   // (opcional)
  dataAtual.style.fontSize = "16px";    // (opcional)
  dataAtual.style.color = "#333";       // (opcional)
}