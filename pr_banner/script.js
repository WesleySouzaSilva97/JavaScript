const main = document.querySelector('main')
const backgrounds = [
    'url(img/bg1.jpg',
    'url(img/bg2.jpg',
    'url(img/bg3.jpg'
]

let indice = 0 

function slider() {
    indice++
    if (indice >= backgrounds.length) {
        indice = 0 
    }

    // troca da imagem de background no css
    main.style.backgroundImage = backgrounds[indice]
    main.style.transition = 'background-image 1s ease-in-out'
}


setInterval(slider, 3000)