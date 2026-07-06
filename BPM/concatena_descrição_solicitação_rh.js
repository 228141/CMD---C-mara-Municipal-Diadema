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


//------------------//----------------------
//Formulário da Tarefa "analisar a Solicitação"

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
    11: () => "Outras Solicitações ao RH"
};

//------------/-------------------

const tipoSolicitacao = {
    1: "Férias",
    2: "Adiantamento de 13º salário",
    3: "Progressão funcional",
    4: "Convênio médico",
    5: "Certidão para fins de aposentadoria",
    6: "Certidão para abono de permanência",
    7: "Certidões diversas",
    8: "Nomeação / Exoneração",
    9: "Apresentação de documento",
    10: "Licenças",
    11: "Outras Solicitações ao RH"
};

//------//-----


// Comunique-se do fluxo:

<div id="comunicado-solar-bpm" style="font-family: Verdana, Geneva, sans-serif; background-color: #f7f8f9; color: #333333; margin: 0; padding: 10px;">
    
    <div class="main-container" style="max-width: 800px; margin: 0 auto; background-color: #ffffff; padding: 0;">
        <div class="section" style="padding: 20px;">
            <img src="https://www.cmdiadema.sp.gov.br/img/brasao.png" 
            style="display: block; height: auto; margin: 0 auto; max-width: 10%; border: none; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); width: 780px;" alt="Solar BPM Banner">
        </div>
        
        <div class="divider" style="border-top: 1px solid #BBBBBB; margin: 10px 20px;"></div>
        
        <div class="section" style="padding: 20px;">
            <h1 style="font-size: 14px; line-height: 1.6; margin: 15px 0; text-align: left; font-weight: bold;">
                Esta mensagem foi gerada automaticamente por Câmara Municipal de Diadema, portanto NÃO responda este e-mail.
            </h1>
    </div>
    <div class="divider" style="border-top:1px solid #BBBBBB; margin:10px 20px;"></div>

    <div class="section" style="padding:20px;">
        <h2 style="color: #0059DB; font-size:14px; font-weight:bold; text-align:left; margin:0 0 20px 0; line-height:1.2;">
            Prezado(a) usuário(a).
        </h2>

        <p style="font-size:14px; line-height:1.6; margin:15px 0; text-align:left;">
            Este e-mail é para comunicar que o processo referente à "Solicitação ao RH" chegou ao fim.
        </p>

        <p style="font-size:14px; line-height:1.6; margin:15px 0; text-align:left;">
            Para acessar o processo e verificar as informações, basta acessar o sistema Solar BPM:
        </p>
        <a href="https://cm-diadema.solarbpm.softplan.com.br/portal/">
            Acessar Solar BPM
        </a>
    </div>

    <div class="section" style="padding: 20px;">

        <p style="font-size: 14px; line-height: 1.6; margin: 15px 0; text-align: direct;">
            Em caso de dúvidas, entre em contato com a unidade responsável do Recursos Humanos.
        </p>
        <p style="font-size: 14px; line-height: 1.6; margin: 15px 0; text-align: left; font-weight: bold;">
            Atenciosamente
        </p>
        <p style="font-size: 14px; line-height: 1.6; margin: 15px 0; text-align: left; font-weight: bold;">
            Câmara Municipal de Diadema.
        </p>
    </div>

    <div class="divider" style="border-top: 1px solid #BBBBBB; margin: 10px 20px;"></div>

        <div class="section" style="padding: 20px; text-align: center;">

            <p style="font-size: 14px; line-height: 1.6; margin: 15px 0;">
                Estamos comprometidos com a melhoria contínua!
            </p>

            <h1 style="color: #0059DB; font-size: 24px; font-weight: bold; margin: 10px 0;">SEGUIMOS JUNTOS!</h1>
            
            <img src="https://sempapel.pmp.sp.gov.br/Imagens/pesquisa/rodape_softplan.png"
            style="display: block; height: auto; margin: 20px auto 0; max-width: 100%; border: none; border-radius: 5px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); width: 780px;" alt="Rodapé Final">
        </div>
    </div>
</div>
