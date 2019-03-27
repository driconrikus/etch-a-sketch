const gridSquare = document.querySelector('.grid');
let out = document.querySelector('#xrange');
let gridSlider = document.querySelector('#range');
out.value = gridSlider.value;
let btn = document.querySelector('#newgrid');
let rainbowBtn = document.querySelector('#rainbow');
btn.addEventListener('click', ask);
rainbowBtn.addEventListener('click', askC);
let colorCnt = 0;

// Slider input for changing the grid size.
gridSlider.oninput = function(){
    out.value = this.value;
}

// This resets the grid for resizing.
function reset(){
    while(gridSquare.firstChild){
        gridSquare.removeChild(gridSquare.firstChild);
    }
}

// Grid creation dialog.
function ask(){
    let ask = confirm(`Create new grid with ${out.value}x${out.value} squares?`);
    if (ask == true){
        reset();
        createGrid(out.value);
    } else {
        alert('Canceled.');
    }
}

function askC(){
    let ask = confirm(`Create new grid with ${out.value}x${out.value} squares with color mode?`);
    if (ask == true){
        reset();
        createGridColor(out.value);
    } else {
        alert('Canceled.');
    }
}

// This function creates the grid as well as filling it with black on mouseover.
function createGrid(size){
    gridSquare.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridSquare.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(i=0; i<size*size; i++){
        const div = document.createElement('div');
        div.addEventListener('mouseover', fillBlack);
        div.classList.add('square');
        gridSquare.appendChild(div);
        colorCnt = 0;
    }
}


// Fills the grid with black. 
function fillBlack(){
    this.style.backgroundColor = "#000000";
    colorCnt += 0.10;
  }

// Fills the grid with rainbow colors!
function createGridColor(size){
    gridSquare.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridSquare.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(i=0; i<size*size; i++){
        const div = document.createElement('div');
        div.addEventListener('mouseover', fillColor);
        div.classList.add('square');
        gridSquare.appendChild(div);
        colorCnt = 0;
    }
}

function fillColor(){
    let rainbow = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = `#${rainbow}`;
    colorCnt += 0.10;
  }