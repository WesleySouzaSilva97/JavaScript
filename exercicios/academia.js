/**
 * *Ficha de um aluno da cademia
 * @author Wesley de Souza da Silva
 */

//variaveis
let nome  
let idade
let peso
let altura
let vip 
let FCM
let IMC

console.clear()

nome = "Wesley Souza"
idade = 27
peso = 110
altura = 1.95
vip = true

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

//saida
console.log("Ficha do aluno")
console.log("_____________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`FCM: ${FCM}`)
console.log(`IMC: ${IMC.toFixed(2)}`)
