/**
 * Exemplo de uso laço for
 * @author Wesley Souza
 */

const input = require('readline-sync')

let valor

console.clear()
console.log("Tabuada")
valor = Number(input.question("Digite o valor da tabuada: "))

for (let i = 1; i < 11; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`)
}

