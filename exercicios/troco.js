/**
 * Calcular d valor do troco
 * @author Wesley Souza
 */

// Importar a biblioteca read-linesync
const input = require('readline-sync')

// variaveis
let troco, valorPago, total

console.clear()
console.log("Calcular o calor do troco")

//entrada
total = Number(input.question("Qual o total da compra? "))
valorPago = Number(input.question("Qual o valor Pago:"))


//processamento
troco = (valorPago - total)

//saida
console.log(`O seu troco e R$: ${troco.toFixed(2)}`)
