var tiposProgressao = {
    1: `Solicitação de Progressão Funcional\n 
EXCELENTÍSSIMO SENHOR PRESIDENTE DA CÂMARA MUNICIPAL DE DIADEMA

Em atendimento ao disposto nos Artigos 21, 22 e 23 da Resolução nº 003, de 15 de junho de 2022, eu, ${model.nomeInteressado}, no cargo atual de ${model.cargoAtual}, Matrícula nº ${model.matriculaInteressado}, lotado na ${model.nomeSetorInteressado}, venho, respeitosamente, solicitar a concessão de Progressão Funcional Vertical.`,

    2: `Solicitação de Progressão Funcional\n 
EXCELENTÍSSIMO SENHOR PRESIDENTE DA CÂMARA MUNICIPAL DE DIADEMA

Em atendimento nos termos da Resolução nº 003/2022 e alterações posteriores (Resoluções nº 017/2023 e nº 003/2026).

Em atendimento ao disposto nos Artigos 24 e 34-A da Resolução nº 003, de 15 de junho de 2022, e alterações posteriores, eu, ${model.nomeInteressado}, no cargo atual de ${model.cargoAtual}, Matrícula nº ${model.matriculaInteressado}, lotado na ${model.nomeSetorInteressado}, venho, respeitosamente, solicitar a concessão de Progressão Funcional Horizontal.`
};

model.descricao = tiposProgressao[Number(model.tipoProgressao)] || "";
