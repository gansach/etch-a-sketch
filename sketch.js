let sketchPad = document.getElementById('sketchPad');
//sketchPad.style.background = 'yellow';

function createGrid(size) {
    let gridSize = size;
    sketchPad.innerHTML = '';
    for (let i = 0; i < gridSize ** 2; i++) {
        let box = document.createElement('div');
        box.style.width = `${100 / gridSize}%`;
        box.style.boxShadow = 'inset 0px 0px 0px 1px #000';
        box.className = 'box';
        box.dataset.hover = 0;
        sketchPad.appendChild(box);
    }
}

sketchPad.addEventListener('mouseover', function(event) {
    let box = event.target;
    let rainbowCheck = document.getElementById('rainbowCheck');
    let shadeCheck = document.getElementById('shadeCheck');

    if (box.className === 'box') {
        if (rainbowCheck.checked) {
            box.dataset.hover = 0;
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            box.style.background = `#${randomColor}`;
        } else if (shadeCheck.checked) {
            box.dataset.hover++;
            box.style.background = `rgba(0, 0, 0, ${box.dataset.hover / 10})`;           
        } else {
            box.dataset.hover = 0;
            box.style.background = '#000';
        } 
    } 
});

function getGridSize() {
    let size = prompt('Enter size of grid: ', 16);
    if (size === '0' || size === null) {
        size = 16;
    }
    createGrid(parseInt(size));
}

let rainbowCheck = document.getElementById('rainbowCheck');
let shadeCheck = document.getElementById('shadeCheck');

rainbowCheck.addEventListener('click', function() {
    shadeCheck.checked = false;
});

shadeCheck.addEventListener('click', function() {
    rainbowCheck.checked = false;
});

createGrid(2);