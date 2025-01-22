/**
 * Ano Automático
 * @author Wesley Souza
 */

// Inserindo o ani na tag <span>
let ano =  document.getElementById(`copyrightYear`)
let anoAtual = new Date().getFullYear()
ano.innerHTML = anoAtual