/**
 * Assincronismo - uso de promise em API
 * @author Wesley Souza
 */

const input = require('readline-sync')
let cep, urlAPI
 
console.clear()
console.log("VIA CEP")
cep = input.question("Digite o CEP: ")
console.log(cep)
//console.log(cep)
//Consumo  da API (VIA CEP)
urlAPI = `https://viacep.com.br/ws/${cep}/json`
//console.log(urlAPI)
//uso de promise (assincronismo) para acessar a API
fetch(urlAPI)
    .then((response)=> {
        return response.json()
    })
    .then((dados)=>{
        console.log(dados.logradouro)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.estado)
        console.log(dados.uf)
    })
    .catch((error) =>{
        console.log(error)
    })