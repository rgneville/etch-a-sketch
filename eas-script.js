let gridSize = 16;
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
