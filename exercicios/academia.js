/**
 * APP - Calculadora de saude 
 * @author Wesley de Souza da Silva
 */

const input = require('readline-sync')
const colors = require('colors')

//variaveis
let nome, idade, peso, altura, FCM, imc 


console.clear()

console.log(" _                _ _               _            _       _             ")
console.log("| |              | | |             | |          | |     | |            ")
console.log("| |__   ___  __ _| | |_    ___ __ _| | ___ _   _| | __ _| |_ ___  _ __ ")
console.log("| '_ \\ / _ \\/ _` | | __|  / __/ _` | |/ __| | | | |/ _` | __/ _ \\| '__|")
console.log("| | | |  __/ (_| | | |_  | (_| (_| | | (__| |_| | | (_| | || (_) | |   ")
console.log("|_| |_|\\___|\\__,_|_|\\__|  \\___\\__,_|_|\\___|\\__,_|_|\\__,_|\\__\\___/|_|   ")
console.log("")

//entarda
nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite a suas idade: "))
peso = Number(input.question("Digite o seu peso em Kg: "))
altura = Number(input.question("DIgite a sua altura em metros: "))


// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035


//saida
console.log("Ficha do aluno")
console.log("")
console.log("_____________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`FCM: ${FCM}`)
console.log(`IMC: ${imc.toFixed(2)}`)

if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
  } else if (imc < 25) {
    console.log("Peso normal".green)
  } else if (imc < 30) {
    console.log("Levemente acima do peso".yellow)
  } else if (imc < 35) {
    console.log("Obesidade grau I".magenta)
  } else if (imc < 40) {
    console.log("Obesidade grau II".red)
  } else {
    console.log("Obesidade grau III (mórbida)".bgRed)
  }

  //consumo de água
  console.log(`Consumir por dia ${consumo.toFixed(3)} litros de água`)
