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
peso =200
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
console.log(`IMC: ${imc.toFixed(2)}`)

if (imc < 18.5) {
    console.log("Abaixo do peso")
  } else if (imc < 25) {
    console.log("Peso normal")
  } else if (imc < 30) {
    console.log("Sobrepeso")
  } else if (imc < 35) {
    console.log("Obesidade grau 1")
  } else if (imc < 40) {
    console.log("Obesidade grau 2")
  } else {
    console.log("Obesidade grau 3 (mórbida)")
  }
