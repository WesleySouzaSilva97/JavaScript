/**
 * Uso do color-scheme para modificar o tema (claro-escuro)
 * Uso do "mode" para armazenar no storage do browser
 * @author Wesley Souza
 */

const html = document.querySelector('html');

function light() {
    html.style.setProperty("color-scheme", "light");
}

function dark() {
    html.style.setProperty("color-scheme", "dark");
}

function auto() {
    html.style.setProperty("color-scheme", "light dark");
}
