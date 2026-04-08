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