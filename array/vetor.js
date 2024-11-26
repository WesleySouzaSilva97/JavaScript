/**
 * Estrutura de dados 
 * Array
 */
  /*                  {0}   [1]     [2]    [3]      [4]      */
let alunosEM1 = ["Tania","Pedro","Maria","João","Viviane"]

console.clear()
console.log(typeof(alunosEM1))
console.log(alunosEM1)
/* o comando abaixo identifica o numero de elementos de um vetor */
console.log(alunosEM1.length)
// o comando abaixo exibe o índice do array associado ao elemennto
console.table(alunosEM1)
console.log(alunosEM1[2])
// o comandoi abaixo adciona um elemento ao ventor
alunosEM1.push("Jorge")
console.table(alunosEM1)
// para alterar um elemento do valor, é necessario usar o indice
alunosEM1[3] = "Joãozinho"
console.table(alunosEM1)
// o comando abaixo remove o ultimo elemento do vetor
alunosEM1.pop()
console.table(alunosEM1)
// removendo um elemnto especifico sem alterar o indice, neste caso é necessário fornecer o indice do elemento a ser excluido 
delete alunosEM1[1]
console.table(alunosEM1)