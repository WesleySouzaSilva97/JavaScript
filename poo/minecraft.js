/** 
 * Fundamentos da POO
 * Abstração, herança e polimorfismo
 * @author Wesley Souza
 */

console.clear()

// criando a classe modelo
class Bloco {
    //atributos
    constructor(textura, resistencia) {
        this.textura = textura
        this.resistencia = resistencia
    }
    //métodos
    criarBloco() {
        console.log("---------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistência: ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado`)
    }

    minerar() {
        console.log("□ □ □ □ Recursos obtidos!")
    }
}

/*** Mundo ***/
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")
console.log("")

//instanciando (criando) um obejeto
const bloco1 = new Bloco("terra", 1)
bloco1.criarBloco()

const bloco2 = new Bloco("Madeira", 2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("Pedra", 5)
bloco3.criarBloco()
bloco3.minerar()