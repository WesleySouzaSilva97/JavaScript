/**
 * Jogo Pedra, Papel ou Tesoura (JoKenPo)
 * @author Wesley Souza
 */

// Importar biblioteca necessária
const input = require('readline-sync') // Biblioteca readline-sync para ler entradas do usuário
const colors = require('colors')

// Limpar a tela do console antes de uma nova entrada
console.clear()

// Entrada - Solicitar escolha do jogador
let jogador, computador

console.clear()
console.log("_____Jokenpo_____")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")

// Lógica do jogador 
jogador = Number(input.question("Digite a opcao desejada entre 1.Pedra, 2.Papel ou 3.Tesoura: ")) // Solicita ao usuário a opção

console.log("")
switch (jogador) {
    case 1:
        console.log("Jogador escolheu: PEDRA")
        break
    case 2:
        console.log("Jogador escolheu: PAPEL")
        break
    case 3:
        console.log("Jogador escolheu: TESOURA")
        break
    default:
        console.log("Opção inválida")
        break

}

// Lógica do computador
computador = Math.floor(Math.random() * 3 + 1)

switch (computador) {
    case 1:
        console.log("computador escolheu: PEDRA")
        break
    case 2:
        console.log("computador escolheu: PAPEL")
        break
    case 3:
        console.log("computador escolheu: TESOURA")
        break
}

// Lógica para determinar o vencedor ou declarar empate

if (jogador === computador ){
    console.log ("EMPATE".cyan)
} else if (jogador === 1 && computador === 3 || jogador === 2 && computador === 1 || jogador === 3 && computador === 2) {
    console.log ("Jogador VENCEU".green)
} else {
    console.log ("Computador VENCEU".yellow)
}
