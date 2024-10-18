/**
 * *Ficha de um aluno da cademia
 * @author Wesley de Souza da Silva
 */

const input = require ('readline-sync') //importar a biblioteca
const colors = require('colors')

//variaveis
let votar

console.clear()
console.log("Obrigatoriedade de votar")
idade = Number(input.question("Digite a idade:"))
console.log(`Idade: ${idade}`)
if (idade < 16) {
    console.log("Proibido votar")
} else if (idade > 17 && idade < 71) {
    console.log("Voto obrigatório".green)
} else  {
    console.log("Voto facultativo".red)   
}


