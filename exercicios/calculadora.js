/**
 * Desenvolvimento de uma calculadora
 * @author Wesley Souza
 */

const input = require('readline-sync')

let a, b, opcao, restart

do {

console.clear()
console.log("Calculadora")

console.log(" _____     _         _       _             ")
console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")

a= Number(input.question("Digite o primeiro numero: "))
b= Number(input.question("Digite o segundo numero: "))

console.log("")
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Calcular %")
console.log("")
opcao = Number(input.question("Digite a opcao desejada: "))


    switch (opcao ) {
        case 1:
            somar(a, b)
            break
        case 2:
            Subtrair(a, b)
            break
        case 3:
             Multiplicar(a, b)
            break
        case 4:
            Dividir(a, b)
            break
        case 5:
            porcentagem(a, b)
             break
        default:
            console.log("opção inválida")
            break
            
     }
     // Funções com parâmetro e retorno (não atribuidas) podem ser criadas em qualquer lugar

     function somar(a, b) {
        return console.log(`A soma de ${a} + ${b} = ${a + b}`)
        
    }
     
        function Subtrair(a, b) {
            return console.log(`A subtração de ${a} - ${b} = ${a - b}`)
            
    }
        function Multiplicar(a, b) {
            return console.log(`A multiplicação de ${a} * ${b} = ${a * b}`)
    }
        function Dividir(a, b) {
            return console.log(`A divisão de ${a} / ${b} = ${a / b}`)
    }
        function porcentagem(a, b) {
            return console.log(`${a} % de  ${b} = ${(a * b) / 100 }`)
     }

        restart = input.question("Deseja fazer um novo calculo? (s/n)")

    }   while (restart === 's')