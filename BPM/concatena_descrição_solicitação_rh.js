//---------------//-----------------

// (model.tipoSolicitacao == 1) - FÉRIAS 
// Reduzido tudo isso para um único if / else
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
else if (model.tipoSolicitacao == 3) {
    if (model.tipoProgressao == 1) {
        model.descricao =
            "Solicitações ao RH - Progressão Funcional Vertical.\n\n" +
            "EXCELENTÍSSIMO SENHOR PRESIDENTE DA CÂMARA MUNICIPAL DE DIADEMA\n\n" +
            "Em atendimento ao disposto nos Artigos 21, 22 e 23 da Resolução nº 003, de 15 de junho de 2022, eu, " +
            model.nomeSolicitante + ", no cargo atual de " + model.cargoAtual + ", Matrícula nº " + model.matriculaInteressado + ", lotado na " + model.nomeSetorSolicitante + ", venho, respeitosamente, solicitar a concessão de Progressão Funcional Vertical.";
    } 
    else if (model.tipoProgressao == 2) {
        model.descricao =
            "Solicitações ao RH - Progressão Funcional Horizontal.\n\n" +
            "EXCELENTÍSSIMO SENHOR PRESIDENTE DA CÂMARA MUNICIPAL DE DIADEMA\n\n" +
            "Em atendimento nos termos da Resolução nº 003/2022 e alterações posteriores (Resoluções nº 017/2023 e nº 003/2026).\n\n" +
            "Em atendimento ao disposto nos Artigos 24 e 34-A da Resolução nº 003, de 15 de junho de 2022, e alterações posteriores, eu, " + model.nomeSolicitante + ", no cargo atual de " + model.cargoAtual + ", Matrícula nº " + model.matriculaInteressado + ", lotado na " + model.nomeSetorSolicitante + ", venho, respeitosamente, solicitar a concessão de Progressão Funcional Horizontal.";
    }
} 
else if (model.tipoSolicitacao == 4) {
    model.descricao =
        "Solicitações ao RH - Convênio médico.";
} 
else if (model.tipoSolicitacao == 5) {
    model.descricao =
        "Solicitações ao RH - Certidão para fins de aposentadoria.";
} 
else if (model.tipoSolicitacao == 6) {
    model.descricao =
        "Solicitações ao RH - Certidão para abono de permanência.";
} 
else if (model.tipoSolicitacao == 7) {
    model.descricao =
        "Solicitações ao RH - Certidões diversas.";
} 
else if (model.tipoSolicitacao == 8) {
    model.descricao =
        "Solicitações ao RH - Nomeação / Exoneração.";
} 
else if (model.tipoSolicitacao == 9) {
    model.descricao =
        "Solicitações ao RH - Apresentação de documento.";
} 
else if (model.tipoSolicitacao == 10) {
    model.descricao =
        "Solicitações ao RH - Remanejamento.";
} 
else if (model.tipoSolicitacao == 11) {

    var nomeLicenca = "";

    if (model.tiposLicencas == 1) {
        nomeLicenca = "Tratamento de saúde";
    }
    else if (model.tiposLicencas == 2) {
        nomeLicenca = "Para tratar de assuntos particulares";
    }
    else if (model.tiposLicencas == 3) {
        nomeLicenca = "Casamento";
    }
    else if (model.tiposLicencas == 4) {
        nomeLicenca = "Luto";
    }
    else if (model.tiposLicencas == 5) {
        nomeLicenca = "Nascimento de filho(a)";
    }
    else if (model.tiposLicencas == 6) {
        nomeLicenca = "Participação em Júri";
    }
    else if (model.tiposLicencas == 7) {
        nomeLicenca = "Participação em programas de treinamento";
    }
    else if (model.tiposLicencas == 8) {
        nomeLicenca = "Convocação para obrigações decorrentes do serviço militar";
    }
    else if (model.tiposLicencas == 9) {
        nomeLicenca = "Licença para desempenho de mandato eletivo Federal, Estadual e Municipal";
    }
    else if (model.tiposLicencas == 10) {
        nomeLicenca = "Exercício de cargo em comissão ou equivalente em órgão ou entidade Federal, Estadual e Municipal, inclusive de suas autarquias e fundaçõe";
    }
    else if (model.tiposLicencas == 11) {
        nomeLicenca = "Missão ou estudo em outros pontos do território nacional ou do exterior, quando o afastamento houver sido autorizado por ato da autoridade competente";
    }

    model.descricao =
        "Solicitações ao RH - Licenças.\n" +
        "Tipo: " + nomeLicenca + ".";
}
else if (model.tipoSolicitacao == 12) {
    model.descricao =
        "Solicitações ao RH - Suspenção de Férias.";
}
else {
    model.descricao =
        "Solicitações ao RH. \n" +
        "(Descreva aqui de forma resumida a solicitação).";
}


------------------//----------------------

const tipoSolicitacao = {
    1: () => "Férias",

    2: () => "Adiantamento de 13º salário",

    3: () => "Progressão funcional",

    4: () => "Convênio médico",

    5: () => "Certidão para fins de aposentadoria",

    6: () => "Certidão para abono de permanência",

    7: () => "Certidões diversas",

    8: () => "Nomeação / Exoneração",
    
    9: () => "Apresentação de documento",

    10: () => "Licenças",

    11: () => "Outras Solicitações ao RH",
};