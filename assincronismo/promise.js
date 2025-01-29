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
console.log("USUÁRIO")
console.log("-----------------")
login = input.question("login:")
senha = input.question("senha:")
console.log("-----------------")

function logar(login, senha) {
    //uso de promise (acesso ao "banco de dados")
    return new Promise((resolv, reject) => {
        //simulação de delay no  acesso ao banco
        setTimeout(() => {
            if (database.hasOwnProperty(login)) {
                // se a senha estiver correta
                if (database[login].senha === senha) {
                    resolv("Autenticação bem sucedida. Olá, " + database[login].usuario)
                } else {
                    reject("Senha incorreta, Por favor tente novamente.")
                }
            }else {
                reject("Usuário não encontrado verifique o login")
            }
        }, 2000)

    })
}

// executar a função logar
// no uso de promise é necessario usar o ponto .then
logar(login, senha)
//na tentativa de fazer o login
    .then((message) => {
        console.log(message)

    })
    .catch((error) => {
        console.log("Erro de auetnticação." + error)
    })