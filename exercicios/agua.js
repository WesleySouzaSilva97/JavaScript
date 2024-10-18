/**
 * *Ficha de um aluno da cademia
 * @author Wesley de Souza da Silva
 */

const input = require ('readline-sync') //importar a biblioteca

//variaveis
let consumo, peso

console.clear()

//entrada
peso = Number(input.question("Digite seu peso em Kg:"))

//processamento
consumo = peso * 0.035 //35 ml 

//saida
console.log(`consumo diario de agua: ${consumo.toFixed(3)} litros`)

