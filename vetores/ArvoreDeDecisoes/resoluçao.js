//Árvore de decisões 

const entrada = [
    {
        valor: 4, opcoes: [
            {
                condicao: ">3", valor: 11, opcoes: [
                    { condicao: "<=10", valor: "Caso A" },
                    { condicao: ">10", valor: "Caso B" }
                ]
            },
            {
                condicao: "<=3", valor: 2, opcoes: [
                    { condicao: "<=10", valor: "Caso C" },
                    { condicao: ">10", valor: "Caso D" }
                ]
            }
        ]
    },
    {
        valor: true, opcoes: [
            {
                condicao: true, valor: 10, opcoes: [
                    { condicao: "<=10", valor: "Caso E" },
                    { condicao: ">10", valor: "Caso F" }
                ]
            },
            {
                condicao: false, valor: 6, opcoes: [
                    { condicao: "<=10", valor: "Caso G" },
                    { condicao: ">10", valor: "Caso H" }
                ]
            }
        ]
    },
];

function aplicarOperacao(primeiroOperando, segundoOperando, operador) {
    operadoresValidos = [">", ">=", "<", "<="];
    if (operadoresValidos.includes(operador)) {
        switch (operador) {
            case ">":
                return primeiroOperando > segundoOperando;
            case "<":
                return primeiroOperando < segundoOperando;
            case ">=":
                return primeiroOperando >= segundoOperando;
            case "<=":
                return primeiroOperando <= segundoOperando;
            default:
                return false;
        }
    } else {
        return false;
    }
}
function extrairOperandoOperador(condicao) {
    if (typeof condicao === "string") {
        let operador = condicao.match(/[<>=]+/g);
        let operando = condicao.match(/[0-9]+/g);
        return { operador: operador[0], operando: parseInt(operando, 0) };
    } else {
        return { operador: null, operando: null };
    }
}
function verificarCondicao(operandoPai, condicao) {
    if (typeof condicao === "string") {
        let resultadoExtracao = extrairOperandoOperador(condicao);
        return aplicarOperacao(operandoPai, resultadoExtracao.operando, resultadoExtracao.operador);
    } else if (typeof condicao === "boolean") {
        return operandoPai === condicao;
    } else {
        return false;
    }
}
function percorreArvore(arvore) {
    if (arvore.opcoes !== undefined && arvore.opcoes.length > 0) {
        for (let i = 0; i < arvore.opcoes.length; i++) {
            const elemento = arvore.opcoes[i];
            if(verificarCondicao(arvore.valor, elemento.condicao)){
                percorreArvore(elemento);
            }
        }
    } else {
        console.log(arvore.valor);
    }
}
// Varrendo todas as arvores da entrada
for (let i = 0; i < entrada.length; i++) {
    const arvore = entrada[i];
    percorreArvore(arvore);
}



