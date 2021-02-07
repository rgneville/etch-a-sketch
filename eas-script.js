let gridSize = 16;
const ctr = document.querySelector('#container');

function divColorChange (div) {
    div.setAttribute('style', 'background-color: blue');
}

for (let i = 0; i < gridSize; i++) {
    xDiv = document.createElement('div');
    ctr.appendChild(xDiv);
    for (let i = 0; i < gridSize; i++) {
        yDiv = document.createElement('div');
        yDiv.setAttribute('class', 'gridBox');
        yDiv.addEventListener('mouseover', () => {
            divColorChange(yDiv);
        });
        xDiv.appendChild(yDiv);
    }
}

