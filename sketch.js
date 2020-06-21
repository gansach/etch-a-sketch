let sketchPad = document.getElementById('sketchPad');
sketchPad.style.background = 'yellow';

function createGrid(size) {
    let gridSize = size;
    sketchPad.innerHTML = '';
    for (let i = 0; i < gridSize ** 2; i++) {
        let box = document.createElement('div');
        box.style.width = `${100 / gridSize}%`;
        //box.style.boxShadow = 'inset 0px 0px 0px 1px #000';
        box.className = 'box';
        sketchPad.appendChild(box);
    }
}

sketchPad.addEventListener('mouseover', function(event) {
    let box = event.target;
    if (box.className === 'box') {
        box.style.background = 'red';
    }
    
});

createGrid(100);