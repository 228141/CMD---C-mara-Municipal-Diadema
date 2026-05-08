//Atual - versão 13

model.concatena = "INDICAÇÃO \n\n" + model.descricao + "\n" + model.numeroColab

// atualização descrição 
var nomeClassificacao = "(Descreva aqui sua solicitação de forma resumida)";

if (model.colab == 1) {
    model.descricao =
        "Indicação. Conforme COLAB nº " + 
        model.numeroColab + "\n" + 
        nomeClassificacao;
}
else if (model.colab == 2) {
    model.descricao =
        "Indicação. Não consta nº de COLAB. \n" + 
        nomeClassificacao;
}

//Atualização teste

var nomeClassificacao = model.classificacao;

if (model.classificacao == 1) {
    nomeClassificacao = "24º BPM - POLICIAMENTO";
}
else if (model.classificacao == 2) {
    nomeClassificacao = "ABAIXO ASSINADO";
}
else if (model.classificacao == 3) {
    nomeClassificacao = "AUDIÊNCIA PÚBLICA";
}
else if (model.classificacao == 4) {
    nomeClassificacao = "AUTORIZAÇÃO PARA USO DE VEÍCULO OFICIAL";
}
else if (model.classificacao == 5) {
    nomeClassificacao = "CETESB - POLUIÇÃO [PEDIR FISCALIZAÇÃO ]";
}
else if (model.classificacao == 6) {
    nomeClassificacao = "CMD - CÂMARA MUNICIPAL (PRESIDÊNCIA OU MESA)";
}
else if (model.classificacao == 7) {
    nomeClassificacao = "CMD - PEDIDO DE INFORMAÇÕES AO PRESIDENTE DA CÂMARA";
}
else if (model.classificacao == 8) {
    nomeClassificacao = "COMGÁS - MANUTENÇÃO";
}
else if (model.classificacao == 9) {
    nomeClassificacao = "COMUNICAÇÃO";
}
else if (model.classificacao == 10) {
    nomeClassificacao = "CORRESPONDECIAS DIVERSAS";
}
if (model.colab == 1) {
    model.descricao =
        "Indicação. \n" + 
        "Conforme COLAB nº " + 
        model.numeroColab + "\n" + 
        nomeClassificacao;
}
else if (model.colab == 2) {
    model.descricao =
        "Indicação. \n" + 
        "Não consta nº de COLAB. \n" + 
        nomeClassificacao;
}


// TESTE - funcionando

if (model.colab == 1) {
    model.descricao =
        "Indicação. \n" + 
        "Conforme COLAB nº " + 
        model.numeroColab + "\n" + 
        model.classificacao;
}

else if (model.colab == 2) {
    model.descricao =
        "Indicação. \n" + 
        "Não consta nº de COLAB. \n" + 
        model.classificacao;
}
