/*ado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
 escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem,
  avisando se o número informado pertence ou não a sequência.

IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/ 


// Função para gerar a sequência de Fibonacci até um determinado limite
function fibonacci(limite) {
    let fib = [0, 1]; // Inicia a sequência com 0 e 1
    let proximo = fib[0] + fib[1];

    while (proximo <= limite) {
        fib.push(proximo);
        proximo = fib[fib.length - 1] + fib[fib.length - 2]; // Soma os dois últimos elementos
    }

    return fib;
}

// Função para verificar se o número pertence à sequência de Fibonacci
function pertenceFibonacci(numero) {
    const sequencia = fibonacci(numero); // Gera a sequência até o número fornecido
    if (sequencia.includes(numero)) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
}

// Exemplo de uso:
const numeroInformado = 21; // Altere para o número desejado
const resultado = pertenceFibonacci(numeroInformado);
console.log(resultado);
