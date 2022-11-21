// Função que cria os 25 pixels no arquivo index.html
function create25PixelBoard() {
    let pixelBoard = document.getElementById('pixel-board');
    for (let i = 0; i < 25; i +=1 ) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixelBoard.appendChild(pixel);
    }
}

// Função que seleciona a cor preto quando a página é recarregada (window.onload)
function selectBlack() {
    const black = document.getElementById('color1');
    black.classList.add('selected');
}

// Função que remove a classe 'selected' da cor anterior
function removeSelectedClass() {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
}

// Função que adciona uma classe a cor quando ela é clicada
function addSelectedClass() {
    const paletteColors = document.getElementsByClassName('color');
    for (let items of paletteColors) {
        items.addEventListener('click', (event) => {
            removeSelectedClass();
            event.target.classList.add('selected');
        });
    }
}

// Função que permite a pintura dos pixels
function paintPixels() {
    const pixels = document.getElementsByClassName('pixel');
    for (let pixel of pixels) {
        pixel.addEventListener('click', (event) => {
            const selectedColor = document.querySelector('.selected');
            const selectColorStyle = window.getComputedStyle(selectedColor);
            const selectColorBackground = selectColorStyle.getPropertyValue('background-color');
            event.target.style.backgroundColor = selectColorBackground;
        })
    }
}

// Função que adiciona um escutador e evento no botão e faz com que ele, ao ser clicado, limpe os pixels pintados
function cleanPixels() {
    const button = document.querySelector('#clear-board');
    button.addEventListener('click', () => {
        const pixels = document.getElementsByClassName('pixel');
        for (let pixel of pixels) {
            pixel.style.backgroundColor = 'white';
        }
    })
}

create25PixelBoard();
addSelectedClass();
paintPixels();
cleanPixels();

window.onload = selectBlack;