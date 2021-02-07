let gridSize = 36;
const ctr = document.querySelector('#container');

function divColorChange (div) {
    div.setAttribute('style', 'background-color: blue');
}

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

