/**
 * Verificar maioridade
 * @author Wesley Souza
 */

const input = require ('readline-sync') //importar a biblioteca

let idade

console.clear()
console.log("Verificar maioridade")
idade = Number(input.question("Digite a idade:"))
console.log(`Idade: ${idade}`)
if (idade < 18) {
    console.log("menor de idade")
}


if (idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Maior de idade")
}
