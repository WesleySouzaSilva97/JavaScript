/**
 * PDV
 * @author Wesley Souza
 */

const input = require('readline-sync')

// variaveis
let total, desconto, totalDesconto, valorPago, troco, valorDesconto

console.clear()

                                                                                                                     
console.log("PPPPPPPPPPPPPPPPP   DDDDDDDDDDDDD      VVVVVVVV             VVVVVVVV")
console.log("P::::::::::::::::P  D::::::::::::DDD   V::::::V            V::::::V")
console.log("P::::::PPPPPP:::::P D:::::::::::::::DDV::::::V            V::::::V")
console.log("PP:::::P     P:::::PDDD:::::DDDDD:::::DV::::::V          V::::::V")
console.log("P::::P     P:::::P  D:::::D    D:::::DV:::::V           V:::::V ")
console.log("P::::P     P:::::P  D:::::D     D:::::DV:::::V         V:::::V  ")
console.log("P::::PPPPPP:::::P   D:::::D     D:::::D V:::::V       V:::::V   ")
console.log(" P:::::::::::::PP   D:::::D     D:::::D  V:::::V     V:::::V    ")
console.log("P::::PPPPPPPPP      D:::::D     D:::::D   V:::::V   V:::::V     ")
console.log(" P::::P             D:::::D     D:::::D    V:::::V V:::::V      ")
console.log("P::::P              D:::::D     D:::::D     V:::::V:::::V       ")
console.log(" P::::P             D:::::D    D:::::D       V:::::::::V        ")
console.log("PP::::::PP          DDD:::::DDDDD:::::D       V:::::::V         ")
console.log("P::::::::P          D:::::::::::::::DD         V:::::V          ")
console.log("P::::::::P          D::::::::::::DDD            V:::V           ")
console.log("PPPPPPPPPP          DDDDDDDDDDDDD                VVV            ")
                                                                  
                                                                  
// entrada 1 
total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %:"))    

//processamento 1
valorDesconto = (desconto * total) / 100

//processamento 2
totalDesconto = total - valorDesconto

// Saída 1 - Resultado do processamento
console.log("")
console.log("------------------------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)
console.log("")

// entrada 2
valorPago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

// processamento 3 
troco = valorPago - totalDesconto

// saida
console.log("")
console.log("--------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: R$ ${valorDesconto.toFixed(2)}`)
console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorDesconto.toFixed(2)}`)
console.log(`Troco: R$ ${troco.toFixed(2)}`)                                                     
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  
                                                                  

                          
