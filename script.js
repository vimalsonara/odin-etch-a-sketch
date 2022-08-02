const container = document.getElementById('container');
let rows = document.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');


function makeGrid(){
    makeRows(16);
    makeCols(16);
};

// run function to make grid
makeGrid();

// function to make rows
function makeRows(rowNum) {
    for (let i = 0; i < rowNum; i++) {
        let row = document.createElement('div');
        container.appendChild(row).className = 'gridRow cmn';
    }
};

// function to make cell
function makeCols(cellNum) {
    for (let i = 0; i < rows.length; i++){
        for (let j = 0; j < cellNum; j ++) {
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className = 'cell cmn';
            newCell.addEventListener('mouseover', randomColor);
        }
    }
};

// function to change random color
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    this.style.background = bgColor;
}
