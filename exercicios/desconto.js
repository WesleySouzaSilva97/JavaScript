/** Cálculo do consumo do combustível
 * @author Wesley Souza 
 */

const input = require('readline-sync')

// variaveis
let preçooriginal, percentualdesconto, totaldesconto

console.clear()
console.log("Preco original")
console.log("Percentual de desconto")
console.log("total de desconto")

//entrada
preçooriginal = Number(input.question("Qual o preco original: "))
percentualdesconto = Number(input.question("Qual o percentual de desconto: "))

// Processamento 
totaldesconto = (preçooriginal - (preçooriginal * percentualdesconto) ) / 100

//saida
console.log((`total com desconto: R$ ${totaldesconto.toFixed(2)}`))

