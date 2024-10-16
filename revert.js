//Escreva um programa que inverta os caracteres de um string.

const str = 'calculando' // string escolhida
let stringInvertida = ""
const tamanho  = str.length;
let c = tamanho

for (let i = tamanho - 1; i >= 0; i--) {
    stringInvertida += str[i]; // Adicionar cada caractere ao final da nova string
}

console.log(stringInvertida)