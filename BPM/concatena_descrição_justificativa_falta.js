//Este código está sendo usado no formulário.

const descricoes = {
    1: () => `Justificativa - Abono de Falta.
Referente o dia ${model.solicita_dia || 'não informado'}, para a(s) quantidade de ${model.numeroFaltas || 0} falta(s), conforme segue.`,

    2: () => "Justificativa - Atestado médico (até 5 dias).",

    3: () => "Justificativa - Doação de sangue (2 dias por ano civil, com interstício de 6 meses).",

    4: () => "Justificativa - Falta justificada.",

    5: () => "Justificativa - Falta injustificada.",

    6: () => getDescricaoServicoEleitoral(model)
};
const getDescricaoServicoEleitoral = (model) => {
    const base = "Justificativa - Prestação de Serviço Eleitoral.";

    const tipos = {
        1: `${base}
Referente ao alistamento eleitoral.`,

        2: `${base}
Referente a folga eleitoral, para ${model.qtdDiasFolga || 0} dias de folga a partir de ${model.inicioPeriodoFolga || 'não informado'}.`
    };

    return tipos[model.tipoServicoEleitoral] || base;
};

model.descricao =
    (descricoes[model.tipoSolicitacao]?.()) ||
    `Justificativa de Falta, Atraso ou Saída Antecipada.
(Descreva aqui de forma resumida a solicitação).`;


//-----------------------------

// Estes códigos funcionaram no formulário, porém foram escritos de outra forma no JS.

const descricoes = {
    1: `Justificativa - Abono de Falta.
Referente o dia ${model.solicita_dia}, para a(s) quantidade de ${model.numeroFaltas} falta(s), conforme segue.`,
    2: "Justificativa - Atestado médico (até 5 dias).",
    3: "Justificativa - Doação de sangue (2 dias por ano civil, com interstício de 6 meses).",
    4: "Justificativa - Falta justificada.",
    5: "Justificativa - Falta injustificada.",
    6: "Justificativa - Prestação de Serviço Eleitoral."
};

model.descricao = descricoes[model.tipoSolicitacao] ||
`Justificativa de Falta, Atraso ou Saída Antecipada.
(Descreva aqui de forma resumida a solicitação).`;

//-------------------------------------------------------------------------

if (model.tipoSolicitacao == 1) {
    model.descricao = `Justificativa - Abono de Falta.
Referente o dia ${model.solicita_dia}, para a(s) quantidade de ${model.numeroFaltas} falta(s), conforme segue.`;
}
else if (model.tipoSolicitacao == 2) {
    model.descricao = `Justificativa - Atestado médico (até 5 dias).`;
}
else if (model.tipoSolicitacao == 3) {
    model.descricao = `Justificativa - Doação de sangue (2 dias por ano civil, com interstício de 6 meses).`;
}
else if (model.tipoSolicitacao == 4) {
    model.descricao = `Justificativa - Falta justificada.`;
}
else if (model.tipoSolicitacao == 5) {
    model.descricao = `Justificativa - Falta injustificada.`;
}
else if (model.tipoSolicitacao == 6) {
    if (model.tipoServicoEleitoral == 1) {
    model.descricao = `Justificativa - Prestação de Serviço Eleitoral.
Referente ao alistamento eleitoral.`;
    }
    else if (model.tipoServicoEleitoral == 2) {
    model.descricao = `Justificativa - Prestação de Serviço Eleitoral.
Referente a folga eleitoral, para ${model.qtdDiasFolga} dias de folga a partir de ${model.inicioPeriodoFolga}.`;
    }
}
else {
    model.descricao = `Justificativa de Falta, Atraso ou Saída Antecipada.
(Descreva aqui de forma resumida a solicitação).`;
}

//---------------//-----------------


if (model.tipoSolicitacao == 1) {
    model.descricao = `Justificativa - Abono de Falta.
Referente o dia ${model.solicita_dia || 'não informado'}, para a(s) quantidade de ${model.numeroFaltas || 0} falta(s), conforme segue.`;
}
else if (model.tipoSolicitacao == 2) {
    model.descricao = `Justificativa - Atestado médico (até 5 dias).`;
}
else if (model.tipoSolicitacao == 3) {
    model.descricao = `Justificativa - Doação de sangue (2 dias por ano civil, com interstício de 6 meses).`;
}
else if (model.tipoSolicitacao == 4) {
    model.descricao = `Justificativa - Falta justificada.`;
}
else if (model.tipoSolicitacao == 5) {
    model.descricao = `Justificativa - Falta injustificada.`;
}
else if (model.tipoSolicitacao == 6) {
    if (model.tipoServicoEleitoral == 1) {
        model.descricao = `Justificativa - Prestação de Serviço Eleitoral.
Referente ao alistamento eleitoral.`;
    }
    else if (model.tipoServicoEleitoral == 2) {
        model.descricao = `Justificativa - Prestação de Serviço Eleitoral.
Referente a folga eleitoral, para ${model.qtdDiasFolga || 0} dias de folga a partir de ${model.inicioPeriodoFolga || 'não informado'}.`;
    }
    else {
        model.descricao = `Justificativa - Prestação de Serviço Eleitoral.`;
    }
}
else {
    model.descricao = `Justificativa de Falta, Atraso ou Saída Antecipada.
(Descreva aqui de forma resumida a solicitação).`;
}

