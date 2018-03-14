// TODO: reset button
// TODO: input box so user can select container width
// TODO: pixel height and width should be equal
// TODO: title text on top of screen
// TODO: clean code
// TODO: directions

// .container's width should be 960px
const container = document.querySelector('.container');

var pixels;

window.onload = createGrid();

// break this up
// func createRow
// func find rows
// func createDiv
function createGrid(width=54) {
    let total = width * width;
    
    for (let i = 0; i < total; i++) {
        if (i % width === 0 || i === 0) {
            let newRow = document.createElement('div');
            newRow.classList.add('row');
            container.appendChild(newRow);
        }
        
        // after a new row is created
        // append to the latest row
        let rows = document.querySelectorAll('.row');
        rows = Array.from(rows);
        let row = rows.splice(-1,1)[0];
        
        // create, update, add
        let newDiv = document.createElement('div');
        newDiv.classList.add('pixel');
        row.appendChild(newDiv);
    }
    
    pixels = document.querySelectorAll('.pixel');
}

// hover
// arrow function does NOT work for callback eventlisteners
pixels.forEach(function(pixel) {
    pixel.addEventListener('mouseenter', function() {
        this.classList.add('active');
    });
    pixel.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        }
    });
});