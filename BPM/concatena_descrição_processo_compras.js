//---------------//-----------------

model.descricao =
    "Processo de Compras.\n" +
    "(Descreva aqui de forma resumida a solicitação, sem este preenchimento o processo não será cadastrado).";

// Usando código mais limpo, seria separar apenas os nomes dos processos::

const mensagemPadrao = `

(Descreva aqui de forma resumida a solicitação, sem este preenchimento o processo não será cadastrado).`;

const tiposCompra = {
    1: 'Apostilamento',
    2: 'Concorrência',
    3: 'Dispensa de Licitação (com Contrato)',
    4: 'Dispensa de Licitação (sem Contrato)',
    5: 'Inexigibilidade',
    6: 'Pregão Eletrônico',
    7: 'Pregão Presencial',
    8: 'Tomada de Preços'
};

const tipo = tiposCompra[model.tipoCompra];

model.descricao = tipo
    ? `Processo de Compras - ${tipo}.${mensagemPadrao}`
    : `Processo de Compras.${mensagemPadrao}`;


// Usando constante:

const descricoes = {
    1: `Processo de Compras - Apostilamento. 
(Descreva aqui de forma resumida a solicitação, sem este preenchimento o processo não será cadastrado).`,
    2: `Processo de Compras - Concorrência"
(Descreva aqui de forma resumida a solicitação, sem este preenchimento o processo não será cadastrado).`,
    3: `Processo de Compras - Dispensa de Licitação (com Contrato).
(Descreva aqui de forma resumida a solicitação, sem este preenchimento o processo não será cadastrado).`,
    4: `Processo de Compras - Dispensa de Licitação (sem Contrato).
(Descreva aqui de forma resumida a solicitação, sem este preenchimento o processo não será cadastrado).`,
    5: `Processo de Compras - Inexigibilidade.
(Descreva aqui de forma resumida a solicitação, sem este preenchimento o processo não será cadastrado).`,
    6: `Processo de Compras - Pregão Eletrônico.
(Descreva aqui de forma resumida a solicitação, sem este preenchimento o processo não será cadastrado).`,
    7: `Processo de Compras - Pregão Presencial.
(Descreva aqui de forma resumida a solicitação, sem este preenchimento o processo não será cadastrado).`,
    8: `Processo de Compras - Tomada de Preços.
(Descreva aqui de forma resumida a solicitação, sem este preenchimento o processo não será cadastrado).`,
};

model.descricao = descricoes[model.tipoCompra] ||
`Processo de Compras.
(Descreva aqui de forma resumida a solicitação, sem este preenchimento o processo não será cadastrado).`;


