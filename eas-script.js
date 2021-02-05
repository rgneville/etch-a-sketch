let gridSize = 16;

const ctr = document.querySelector('#container');

for (let i = 0; i < gridSize; i++) {
    xDiv = document.createElement('div');
    ctr.appendChild(xDiv);
    for (let i = 0; i < gridSize; i++) {
        yDiv = document.createElement('div');
        yDiv.setAttribute('class', 'gridBox');
        xDiv.appendChild(yDiv);
    }
}

const grdbx = document.querySelectorAll('.gridBox');

for (let i = 0; i < grdbx.length; i++) {
    grdbx[i].addEventListener('hover', (e) => {
        console.log(e);
        grdbx[i].setAttribute('style', 'background-color: black');
    })
}


