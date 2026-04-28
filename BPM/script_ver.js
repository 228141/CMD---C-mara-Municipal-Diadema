Nome da variável que deve ser pega? Sigla Setor Solicitante (sgSetorPadrao)

SCRIPT:

var nuCpf == model.sgSetorPadrao

if (sgSetorPadrao == "CMD/E01_VER_REINALDO"){
nuCpf = "161.736.708-79";


} else if (sgSetorPadrao==="undefined"){
descricao="Olá! O seu cadastro do processo deverá ser indicado o CPF do vereador solicitante. Por favor entrar em contato com o departamento de TI";

}

var setor = sgSetorPadrao;

switch (setor) {

    case "CMD/PRE/SGL/DAF/DTI":
        nuCpf = "29466353845";
        break;
}

model.nuCpf

if (interessado === "1") {
    nuCpf = "26366353845";
}

if (interessado === "2") {
    nuCpf = "27649394859";
}

if (interessado === "3") {
    nuCpf = "213.324.658-46";
}
;

CMD/GV - Gabinete de Vereador
	SIGLA				NOME SETOR
 CMD/E01_VER_REINALDO - Gabinete do Vereador REINALDO ANTONIO MEIRA - 161.736.708-79
 CMD/E02_VER_TALABI - Gabinete do Vereador TALABI UBIRAJARA CERQUEIRA FAHEL - 119.443.048-19
 CMD/E03_VER_ZE_BLOCO - Gabinete do Vereador JOSE HUDSOMAR RODRIGUES JARDIM - 920.839.438-72
 CMD/E04_VER_CICINHO - Gabinete do Vereador CICERO ANTONIO DA SILVA - 161.714.358-80
 CMD/E05_VER_ANGELO - Gabinete do Vereador ANGELO PAULINO DA SILVA - 194.416.608-41
 CMD/E06_VER_ORLANDO - Gabinete do Vereador ORLANDO VITORIANO DE OLIVEIRA - 152.421.488-45
 CMD/E07_VER_JOSA - Gabinete do Vereador JOSEMUNDO DARIO QUEIROZ - 093.248.098-57
 CMD/E08_VER_PATTY - Gabinete da Vereadora PATRICIA FERREIRA - 136.697.978-82
 CMD/E09_VER_GILSON - Gabinete do Vereador GILSON DE MOURA BEZERRA - 355.793.148-09
 CMD/E10_VER_RODRIGO - Gabinete do Vereador RODRIGO CAPEL - 283.027.958-10
 CMD/E11_VER_LAURETO - Gabinete do Vereador LAURETO LIMA MEDRADO - 486.117.605-06
 CMD/E12_VER_COMP_SERGIO - Gabinete do Vereador SERGIO RAMOS SILVA - 194.421.018-03
 CMD/E13_VER_LUCAS - Gabinete do Vereador LUCAS ALMEIDA GOMES - 437.156.538-76
 CMD/E14_VER_JEFERSON - Gabinete do Vereador JEFERSON LEITE RIBEIRO - 317.636.358-30
 CMD/E15_VER_BOQUINHA - Gabinete do Vereador JEOACAZ COELHO MACHADO - 116.032.138-80
 CMD/E16_VER_DEQUINHA - Gabinete do Vereador JEFFERSON MARQUES DE SOUZA MOREIRA - 304.019.578-61
 CMD/E17_VER_GEL - Gabinete do Vereador GERALDO ANTONIO DA SILVA - 167.833.358-10
 CMD/E18_VER_FERNANDA - Gabinete da Vereadora FERNANDA SILVA DURAES - 411.199.358-30
 CMD/E19_VER_JUNINHO - Gabinete do Vereador FRANCISCO GONÇALVES NOGUEIRA JUNIOR - 364.569.478-12
 CMD/E20_VER_MARCIOJR - Gabinete do Vereador MARCIO PASCHOAL GIUDICIO JUNIOR - 408.576.348-28
 CMD/E21_VER_JERRY - Gabinete do Vereador JERRI DESSONE DA SILVA REGO - 139.947.628-98

----------//--------------------

var interessado = document.getElementById("interessado").value;

if (interessado == "1") {
    document.getElementById("nuCpf").value = "19441660841";
    	document.getElementById("nome_Solicitante").value = "ANGELO PAULINO DA SILVA";

    model.nuCpf = "19441660841";
    model.nome_Solicitante = "ANGELO PAULINO DA SILVA";
}

if (interessado == "2") {
    document.getElementById("nuCpf").value = "16171435880";
    document.getElementById("nome_Solicitante").value = "CICERO ANTONIO DA SILVA";

    model.nuCpf = "16171435880";
    model.nome_Solicitante = "CICERO ANTONIO DA SILVA";
}

if (interessado == "3") {
    document.getElementById("nuCpf").value = "41119935830";
    document.getElementById("nome_Solicitante").value = "FERNANDA SILVA DURAES";

    model.nuCpf = "41119935830";
    model.nome_Solicitante = "FERNANDA SILVA DURAES";
}

if (interessado == "4") {
    document.getElementById("nuCpf").value = "36456947812";
    document.getElementById("nome_Solicitante").value = "FRANCISCO GONÇALVES NOGUEIRA JUNIOR";

    model.nuCpf = "36456947812";
    model.nome_Solicitante = "FRANCISCO GONÇALVES NOGUEIRA JUNIOR";
}

if (interessado == "5") {
    document.getElementById("nuCpf").value = "16783335810";
    document.getElementById("nome_Solicitante").value = "GERALDO ANTONIO DA SILVA";

    model.nuCpf = "16783335810";
    model.nome_Solicitante = "GERALDO ANTONIO DA SILVA";
}

if (interessado == "6") {
    document.getElementById("nuCpf").value = "35579314809";
    document.getElementById("nome_Solicitante").value = "GILSON DE MOURA BEZERRA";

    model.nuCpf = "35579314809";
    model.nome_Solicitante = "GILSON DE MOURA BEZERRA";
}

if (interessado == "7") {
    document.getElementById("nuCpf").value = "31763635830";
    document.getElementById("nome_Solicitante").value = "JEFERSON LEITE RIBEIRO";

    model.nuCpf = "31763635830";
    model.nome_Solicitante = "JEFERSON LEITE RIBEIRO";
}

if (interessado == "8") {
    document.getElementById("nuCpf").value = "30401957861";
    document.getElementById("nome_Solicitante").value = "JEFFERSON MARQUES DE SOUZA MOREIRA";

    model.nuCpf = "30401957861";
    model.nome_Solicitante = "JEFFERSON MARQUES DE SOUZA MOREIRA";
}

if (interessado == "9") {
    document.getElementById("nuCpf").value = "11603213880";
    document.getElementById("nome_Solicitante").value = "JEOACAZ COELHO MACHADO";

    model.nuCpf = "11603213880";
    model.nome_Solicitante = "JEOACAZ COELHO MACHADO";
}

if (interessado == "10") {
    document.getElementById("nuCpf").value = "13994762898";
    document.getElementById("nome_Solicitante").value = "JERRI DESSONE DA SILVA REGO";

    model.nuCpf = "13994762898";
    model.nome_Solicitante = "JERRI DESSONE DA SILVA REGO";
}

if (interessado == "11") {
    document.getElementById("nuCpf").value = "92083943872";
    document.getElementById("nome_Solicitante").value = "JOSE HUDSOMAR RODRIGUES JARDIM";

    model.nuCpf = "92083943872";
    model.nome_Solicitante = "JOSE HUDSOMAR RODRIGUES JARDIM";
}

if (interessado == "12") {
    document.getElementById("nuCpf").value = "09324809857";
    document.getElementById("nome_Solicitante").value = "JOSEMUNDO DARIO QUEIROZ";

    model.nuCpf = "09324809857";
    model.nome_Solicitante = "JOSEMUNDO DARIO QUEIROZ";
}

if (interessado == "13") {
    document.getElementById("nuCpf").value = "48611760506";
    document.getElementById("nome_Solicitante").value = "LAURETO LIMA MEDRADO";

    model.nuCpf = "48611760506";
    model.nome_Solicitante = "LAURETO LIMA MEDRADO";
}

if (interessado == "14") {
    document.getElementById("nuCpf").value = "43715653876";
    document.getElementById("nome_Solicitante").value = "LUCAS ALMEIDA GOMES";

    model.nuCpf = "43715653876";
    model.nome_Solicitante = "LUCAS ALMEIDA GOMES";
}

if (interessado == "15") {
    document.getElementById("nuCpf").value = "40857634828";
    document.getElementById("nome_Solicitante").value = "MARCIO PASCHOAL GIUDICIO JUNIOR";

    model.nuCpf = "40857634828";
    model.nome_Solicitante = "MARCIO PASCHOAL GIUDICIO JUNIOR";
}

if (interessado == "16") {
    document.getElementById("nuCpf").value = "15242148845";
    document.getElementById("nome_Solicitante").value = "ORLANDO VITORIANO DE OLIVEIRA";

    model.nuCpf = "15242148845";
    model.nome_Solicitante = "ORLANDO VITORIANO DE OLIVEIRA";
}

if (interessado == "17") {
    document.getElementById("nuCpf").value = "13669797882";
    document.getElementById("nome_Solicitante").value = "PATRICIA FERREIRA";

    model.nuCpf = "13669797882";
    model.nome_Solicitante = "PATRICIA FERREIRA";
}

if (interessado == "18") {
    document.getElementById("nuCpf").value = "16173670879";
    document.getElementById("nome_Solicitante").value = "REINALDO ANTONIO MEIRA";

    model.nuCpf = "16173670879";
    model.nome_Solicitante = "REINALDO ANTONIO MEIRA";
}

if (interessado == "19") {
    document.getElementById("nuCpf").value = "28302795810";
    document.getElementById("nome_Solicitante").value = "RODRIGO CAPEL";

    model.nuCpf = "28302795810";
    model.nome_Solicitante = "RODRIGO CAPEL";
}

if (interessado == "20") {
    document.getElementById("nuCpf").value = "19442101803";
    document.getElementById("nome_Solicitante").value = "SERGIO RAMOS SILVA";

    model.nuCpf = "19442101803";
    model.nome_Solicitante = "SERGIO RAMOS SILVA";
}

if (interessado == "21") {
    document.getElementById("nuCpf").value = "11944304819";
    document.getElementById("nome_Solicitante").value = "TALABI UBIRAJARA CERQUEIRA FAHEL";

    model.nuCpf = "11944304819";
    model.nome_Solicitante = "TALABI UBIRAJARA CERQUEIRA FAHEL";
}

