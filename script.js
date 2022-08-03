let color = 'black';

// function make grid
function makeGrid(size) {
    let container = document.getElementById('container');
    let div = container.querySelectorAll('div');
    div.forEach((div) => div.remove());
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;   
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover', colorSquare);
        grid.style.backgroundColor = 'white';
        container.appendChild(grid).className = 'grid';
    }
};

// function check total grid
makeGrid(16);
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        makeGrid(input);
    } else {
        console.log('Too many grid');
    }
};

// function to check color input
function colorSquare() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
};

// function change color as per button input
function changeColor(choice) {
    color = choice;
};

// function reset grid color
function resetGrid() {
    let container = document.getElementById('container');
    let div = container.querySelectorAll('div');
    div.forEach((div) => div.style.backgroundColor = 'white');
};