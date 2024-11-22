/** 
 * Fundamentos POO
 * @author Wesleu Souza
 */

// criar classe
class Carro {
    //criando atributos
    constructor (ano, cor){
        this.ano = ano
        this.cor = cor
    }

    // ações (métodos)
    criarCarro() {
        console.log("  ____")
        console.log(" /|_||_\\`.__")
        console.log("(   _    _ _\\")
        console.log("=`-(_)--(_)-'")
        console.log(`ano: ${this.ano}`)
        console.log(`cor: ${this.cor}`)
    }
    ligar(){
        console.log(`Ligando o carro`)
    }
    desligar(){
        console.log("Desligando o carro")
    }
    acelerar(){
        console.log("Acelerando o carro")

    }
}

class Aviao extends Carro {
    //atributos
    constructor(ano, cor, envergadura) {
        super(ano, cor)
        this.envergadura = envergadura 
        
    }
    //ações metodos
    criarAviao() {
        console.log("    __|__")
        console.log(" --@--@--(_)--@--@--")
        console.log("     | |")
        console.log("     | |")
        console.log(`ano: ${this.ano}`)
        console.log(`cor: ${this.cor}`)
        console.log(`envergadura: ${this.envergadura}`)
    }
    aterrizar(){
        console.log(`o avião está aterrizando`)
    }
    
    acelerar(){
        console.log("O avião esta decolando")

    }

}

// criar dois objetos(carros)

const carro1 = new Carro(2024, "verde")
carro1.criarCarro()
carro1.ligar()
carro1.acelerar()
carro1.desligar()

const carro2 = new Carro(2025, "azul")
carro2.criarCarro()
carro2.ligar()
carro2.acelerar()
carro2.desligar()

const aviao1 = new Aviao(2022, "Vermelho", 50)
aviao1.criarAviao()
aviao1.acelerar()  // Avião no solo
aviao1.aterrizar()
