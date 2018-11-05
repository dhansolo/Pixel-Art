let penColor = 'black';

function createGrid(rows, columns) {
    let myDiv = document.getElementById("art");
    while(myDiv.firstChild) {
        myDiv.removeChild(myDiv.firstChild);
    }
    for(let i = 0; i < rows; i++) {
        let row = document.createElement('div')
        row.setAttribute("class", "row");
        for(let j = 0; j < columns; j++) {
            let column = document.createElement("div")
            column.setAttribute("class", "pixel");
            column.setAttribute("onclick", "setPixelColor(this)");
            column.setAttribute("oncontextmenu", "this.style.backgroundColor = 'white';")
            row.appendChild(column);
        }
        document.getElementById("art").appendChild(row);
    }
    reset();
}

document.addEventListener('contextmenu', event => event.preventDefault());

function reset() {
    let rows = document.getElementsByClassName("pixel");
    for(row in rows) {
        rows[row].setAttribute("style", "background-color: white;");
    }
}

function setPixelColor(pixel) {
    pixel.style.backgroundColor = penColor;
}

function setPenColor(pen) {
    penColor = pen;
}