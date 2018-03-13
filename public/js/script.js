// .container's width should be 960px
const container = document.querySelector('.container');

// window.onload = createGrid();
/* 
function createGrid(width=16) {
    for (let i = 0; i <= width; i++) {
        if (width % 16 === 0) {
            const row = document.createElement('div');
            div.classList.add('row');
            div.appendChild('.container');
        }
        const div = document.createElement('div');
        div.classList.add('default-content');
        div.appendChild('.row');
    }
}
*/
// create a grid - 16x16 (256 total spaces)
// for each number up to 256
//      create a new column element for every 16 divs
//      create a new div element
//      add a class to that div
//      append it to the current column
//      if the number % 16 === 0
//          create a new

// suggest using a flexbox for container (set width)
// these will be SMALL divs

// div.addeventlisten(hover / mouseenter, mouseleave)
// add black

window.onload = createGrid();

function createGrid(width=25) {
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
}

const pixels = document.querySelectorAll('.pixel');

pixels.forEach(pixel => {
    pixel.addEventListener('click', () => {
        console.log(this);
    });
});