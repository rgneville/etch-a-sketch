let gridSize = 16;
let maxGridSize = 960;
const ctr = document.querySelector('#container');
const rsbtn = document.querySelector('#reset-button')
rsbtn.addEventListener('click', resetButton);

function divColorChange (div) {
    let rInt = Math.round(Math.random()*255);
    let gInt = Math.round(Math.random()*255);
    let bInt = Math.round(Math.random()*255);
    div.style.backgroundColor = `rgb(${rInt}, ${gInt}, ${bInt})`;
}

function resetButton () {
    gridSize = parseInt(prompt("How big should the grid be?", "16"));
    if (gridSize < 1 || gridSize > 100) {
        gridSize = parseInt(prompt("Please enter a value between 1 and 100"));
    }
    clearGrid();
    makeGrid();
}

function makeGrid () {
for (let i = 0; i < gridSize; i++) {
    const xDiv = document.createElement('div');
    ctr.appendChild(xDiv);
    for (let i = 0; i < gridSize; i++) {
        const yDiv = document.createElement('div');
        yDiv.setAttribute('class', 'gridBox');
        // this code is buggy - trying to fit grid to max 960 pixel window using flexbox
        let divHeight = (maxGridSize/gridSize);
        yDiv.style.width = `"${divHeight} px"`;
        yDiv.style.height = `"${divHeight} px"`;
        //
        yDiv.addEventListener('mouseover', () => {
            divColorChange(yDiv);
        });
        xDiv.appendChild(yDiv);
    }
}
}

function clearGrid() {
    const gridArray = Array.from(ctr.childNodes);
    gridArray.forEach((element) => {
      ctr.removeChild(element);
    });
  }

makeGrid ();
