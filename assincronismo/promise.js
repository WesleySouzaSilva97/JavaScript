/**
 * Assincronismo
 * Promise
 * @author Wesley Souza
 */

const input = require('readline-sync')

let login, senha 

// Estrutura de daos (simular um banco de dados)
const database = {
    admin: {
        usuario: "Administrador",
        senha: "password",
    },
    prof: {
        usuario: "Leandro Ramos",
        senha: "123456"
    }
}

// Autenticação de usuário

console.clear()
console.log("-----------------")
console.log(    "USUÁRIO")
console.log("-----------------")
login = input.question("login:")
login = input.question("senha:")
console.log("-----------------")
