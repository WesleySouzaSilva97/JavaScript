/**
 * Estudo das Funções
 * @author Wesley Souza
 */

hello()
// função literal
function hello() {
    console.log("Hello funcion")
}
console.log(typeof(hello))
// função atribuida
// funções atribuidas precisam ser criadas no início do código  (antes da chamada da função )
const hello2 = function() {
    console.log("Hello2 function")
    // quando atribuimos uma constante a uma função a constante vira uma FUNÇÃO (tipo uma variavel)
}
hello2()
console.log(typeof(hello2))

// Arrow function (forma simplificada de criar uma função atribuida)
const hello3 = () => {
    console.log("Hello3 function")
}
hello3()
console.log(typeof(hello3))

//Arrow function mais simplificada (neste caso só é possível executar uma li nha de código)

const hello4 = _=> console.log("hello4 function")
hello4()
console.log(typeof(hello4))
