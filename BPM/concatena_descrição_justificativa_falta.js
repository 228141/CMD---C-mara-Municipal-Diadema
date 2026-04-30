// Reduzido tudo isso para um único if / else, muito mais limpo e fácil de manter e com o ANO Referencia:

if (model.tipoSolicitacao == 1) {
    model.descricao =
        "Justificativa - Abono de Falta.\n";
}
else if (model.tipoSolicitacao == 2) {
    model.descricao =
        "Justificativa - Atestado médico (até 5 dias). \n"
}
else if (model.tipoSolicitacao == 3) {
    model.descricao =
        "Justificativa - Doação de sangue (2 dois dias por ano civil, com interstício de 6 meses). \n"
}
else if (model.tipoSolicitacao == 4) {
    model.descricao =
        "Justificativa - Falta justificada. \n"
}else if (model.tipoSolicitacao == 5) {
    model.descricao =
        "Justificativa - Falta injustificada. \n"
}
else if (model.tipoSolicitacao == 6) {
    model.descricao =
        "Justificativa - Prestação de Serviço Eleitoral. \n"
}
else {
    model.descricao =
        "Justificativa de Falta, Atraso ou Saída Antecipada.\n" + "(Descreva aqui de forma resumida a solicitação).";
}