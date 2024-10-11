/**
 * Cálculo da média aritimetica de 3 valores
 * @author Wesley Souza
 */

// Importar a biblioteca read-linesync
const input = require('readline-sync')
const colors = require('colors')

// variaveis
let num1, num2, num3, media //criei a variavel

console.clear()
console.log("cálculo da média aritimética de 3 números")

// Entrada
// No console entradas (input) númericas precisam ser convertidas com uso dp método Number()
num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

// processamento
media = (num1 + num2 + num3) / 3

// saída
console.log(`Média: ${media.toFixed(1)}`)
if (media >= 5) {
    console.log("Aprovado".blue)
} else {
    console.log("Reprovado".red)
}