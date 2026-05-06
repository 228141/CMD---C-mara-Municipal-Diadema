if (model.classificacao == 1) {
    model.descricao =
        "Requerimentos. \n" +
        "Votos de louvor e de congratulações.\n" +
        "(Descreva de forma breve detalhe da solicitação)";
}
else if (model.classificacao == 2) {
    model.descricao =
        "Requerimentos. \n" +
        "Moções de apoio, de solidariedade, de aplauso, de pesar, de desagravo, de protesto ou de repúdio.\n" +
        "(Descreva de forma breve detalhe da solicitação)";
} 
else if (model.classificacao == 3) {
    model.descricao =
        "Requerimentos. \n" +
        "Requerimento com abaixo assinado.\n" +
        "(Descreva de forma breve detalhe da solicitação)";
} 
else if (model.classificacao == 4) {
    model.descricao =
        "Requerimentos. \n" +
        "Audiências públicas, atos públicos, atos solenes e sessão solene.\n" +
        "(Descreva de forma breve detalhe da solicitação)";
} 
else if (model.classificacao == 5) {
    model.descricao =
        "Requerimentos. \n" +
        "Pedido de informações ao Prefeito.\n" +
        "(Descreva de forma breve detalhe da solicitação)";
} 
else if (model.classificacao == 6) {
    model.descricao =
        "Requerimentos. \n" +
        "Solicitações a órgãos estaduais e federais.\n" +
        "(Descreva de forma breve detalhe da solicitação)";
} 
else if (model.classificacao == 7) {
    model.descricao =
        "Requerimentos. \n" +
        "Pedido de informações a entidades públicas ou particulares, órgãos estaduais e federais.\n" +
        "(Descreva de forma breve detalhe da solicitação)";
} 
else if (model.classificacao == 8) {
    model.descricao =
        "Requerimentos. \n" +
        "Reiteração de requerimento.\n" +
        "(Descreva de forma breve detalhe da solicitação)";
} 
else {
    model.descricao =
        "Requerimentos. \n" +
        "(Descreva de forma breve detalhe da solicitação)";
}