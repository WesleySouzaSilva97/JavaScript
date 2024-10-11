/**
 * Cálculo do consumo de alcool x gasolina 
 * @author Wesley Souza
 */

// Importar a biblioteca read-linesync
const input = require('readline-sync')


let alcool, gasolina


console.clear()
console.log("Cálculo do consumo de alcool x gasolina ")

alcool = Number(input.question("Digite o valor do alcool: "))
gasolina = Number(input.question("Digite o valor da gasolina: "))

if (alcool < 0.7 * gasolina) {
    console.log("melhor alcool ")

} else {
    console.log("melhor gasolina")
}
