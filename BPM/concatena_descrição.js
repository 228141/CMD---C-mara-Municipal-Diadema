// Inserir o nome na descrição do formulário de abertura    

model.descricao =
    "Afastamento do Servidor(a)\n" +
    "DETERMINA O AFASTAMENTO PREVENTIVO DE SERVIDOR COMO GARANTIA DA REGULARIDADE " +
    "DE PROCEDIMENTO ADMINISTRATIVO DISCIPLINAR INSTAURADO, E DÁ OUTRAS PROVIDÊNCIAS.";

model.descricao =
    "Processo Administrativo.\n" +
    "(Descreva aqui de forma resumida a solicitação).";

//------------------

model.concatena = "INDICAÇÃO \n\n" + model.descricao + "\n" + model.numeroColab

//------------------

if (model.tipoColab == 1) {
    model.descricao =
        "Indicação. \n" + "Protocolo Colab nº: " + model.numeroColab + ". \n" +
        "(Descreva aqui um resumo da sua solicitação)";
}
else if (model.tipoColab == 2) {
    model.descricao =
        "Indicação. \n" + "Não consta o nº protocolo Colab. \n" + 
        "(Descreva aqui um resumo da sua solicitação)";
} 
else {
    model.descricao =
        "Indicação. \n" +
        "(Descreva aqui um resumo da sua solicitação)";
}

//---------------
if (model.tipoSolicitacao == 1) {
    model.descricao =
        "Solicitações ao RH - Férias \n" +
        "Solicito efetuar o agendamento do período de férias do servidor acima referenciado, conforme segue.";
}
else if (model.tipoSolicitacao == 2) {
    model.descricao =
        "Solicitações ao RH - Adiantamento do 13º Salário. \n" +
            "Venho respeitosamente requerer a concessão do adiantamento do 13º Salário referente ao exercício de " + model.ano_Referencia + " para o mês de fevereiro ou o mais breve possível para a administração, conforme estabelece o Artigo 93 da Lei Complementar nº 008/1991 (Estatuto dos Funcionários Públicos de Diadema)";
} 
