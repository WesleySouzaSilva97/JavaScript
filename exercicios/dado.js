/**
 * Exemplo de uso do método para gerar números aleatórios 
 * Jogo do dado
 * @author Wesley de Souza da Silva
 */

const input = require('readline-sync')

let face 

console.clear()
console.log("Jogo do dado")
input.question("Pressione a tecla [Enter] para jogar o dado")

// Sorteio da face de um dado
//Math classe matemática
//floor() conversão para números inteiros
//random() * (gerador de números aleatórios

face = Math.floor(Math.random() * 6 + 1) // 0 1 2 3 4 5 
console.log(`Face do Dado: ${face}`)
