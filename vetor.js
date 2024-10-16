/*3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/ 
 

const dadosJson = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

let c = 0;
let menorValor =0;
let maiorValor = 0;
let soma  =0;
let diasValidos =0
let diasAcimadaMedia =0;

while(c <dadosJson.length){
    let valor = dadosJson[c].valor;


    // verificação de maiores e menores valores
    if(c<=1){
        menorValor = valor
        maiorValor = valor
        c++
    }
    else{
        if(valor < menorValor && valor >0){
            menorValor = valor;
            
        }
        if(valor > maiorValor)
            maiorValor = valor
    }    
    c++
}

//lógica para a média

let i = 0

while(i <dadosJson.length){
    let valor = dadosJson[i].valor;

    //ignorando os dias com valor zero
    if(valor >0){
        soma = soma + valor;
        diasValidos++
    }
    i++
}

let mediaMensal = soma / diasValidos;

//resetando o contador

i = 0;

// dias que tem valor
while (i<dadosJson.length){
    let valor = dadosJson[i].valor;

    if (valor > 0 && valor > mediaMensal) {
        diasAcimadaMedia++
    }

    i++;





}


console.log("Menor valor: " + menorValor)

console.log("maior valors: " + maiorValor)


console.log("Média mensal: " + mediaMensal);
console.log("Número de dias com faturamento acima da média mensal: " + diasAcimadaMedia);