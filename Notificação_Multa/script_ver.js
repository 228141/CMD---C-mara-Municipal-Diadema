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