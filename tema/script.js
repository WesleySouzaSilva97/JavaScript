/**
 * Uso do color-scheme para modificar o tema (claro-escuro)
 * Uso do "local storage" para armazenar no banco de dados do navegador
 * @author Wesley Souza
 */

const html = document.querySelector('html');
// Uso do banco de dados do navegador 
const tema =  localStorage.getItem('mode')

// Capturar e implementar a preferência do usuário  (light ou dark)   
//se o tema for igual light ele vai chamr a função dark 
if (tema === "light") {
    light()
}
 
if (tema === "dark") {
    dark()
}
 
 
function light () {
    html.style.setProperty("color-scheme", "light")
    localStorage.setItem("mode", "light")
}
 
function dark () {
    html.style.setProperty("color-scheme", "dark")
    localStorage.setItem("mode", "dark")
}
 
function auto () {
    html.style.setProperty("color-scheme", "light dark")
    localStorage.removeItem("mode")
   
}
