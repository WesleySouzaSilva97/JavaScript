/**
 * Sintaxe básica da linguagem JS
 * @author Wesley Souza
 */

// Limpar a tela do console
console.clear()

// JS - Sentença e ;(ponto e virgula) é opcional
console.log ("Hello World")


let nome = "Wesley Souza"
let idade = 27
let altura = 1.95 // o ponto é usado para casas decimais 

//typeof é usado para identificar o tipo de varíavel
console.log(typeof(nome))
console.log(typeof(idade))
console.log(typeof(altura))

//identificando varíaveis inteira e não inteiras
console.log(Number.isInteger(idade))
console.log(Number.isInteger(altura))

// concatenação (unir textos e variáveis)
console.log(`Nome: ${nome}`)
console.log("Nome: " + nome) // não recomendavel


// arredondamento (casas decimais)
let media = 5.789
console.log(`média: ${media.toFixed(1)}`) // toFixed (serve para arredondamentos)

//particularidades do JS
console.log(10 / 0)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("3" + 2) //exibe 32, pois faz concatenação da string "3" com o numero "2"
console.log("3" - 2)
console.log("3x" - 2) // sempre aparcer NaN é pq não há número


