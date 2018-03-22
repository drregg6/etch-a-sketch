// TODO: pixel height and width should be equal
// TODO: clean code
// TODO: directions


/*

choosing different colors:
three buttons for choices (black, white, colors)

each button will activate the flag

if (black) {
    this.classList.add(black)
} else if (white) {
    this.classlist.add(white)
} else {
    this.classList.add(color)
}

*/


// .container's width should be 960px
const container = document.querySelector('.container');
const input = document.querySelector('input');
const resetBtn = document.querySelector('button');

var pixels;
var inputVal = parseInt(input.value);

window.onload = createGrid();
input.addEventListener('keyup', function() {
    inputVal = parseInt(input.value);
});
// hover will not work with the new grid's pixels
resetBtn.addEventListener('click', function() {
    deleteGrid();
    createGrid(inputVal);
});

// break this up
// func createRow
// func find rows
// func createDiv
function createGrid(width=25) {
    // resets pixels before each new grid
    pixels = [];
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
//        newDiv.style.height = newDiv.offsetWidth;
        row.appendChild(newDiv);
    }
    
    pixels = document.querySelectorAll('.pixel');
}

function deleteGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// hover
// arrow function does NOT work for callback eventlisteners
// because THIS value becomes WINDOW


// look up EVENT DELEGATIONS
//pixels.forEach(function(pixel) {
//    pixel.addEventListener('mouseenter', function() {
//        this.classList.add('active');
//    });
//    pixel.addEventListener('click', function() {
//        if (this.classList.contains('active')) {
//            this.classList.remove('active');
//        }
//    });
//});

//container.addEventListener('mouseenter', function(ev) {
//    let target = ev.target;
//    let children = target.children;
//    
//    console.log(target.children);
//    // logs each row
//    for (var i = 0; i < children.length; i++) {
//        console.log(target.children.length);
//    }
//    
//    console.log(ev);
//})


// cheating with jq but it works
$(document).ready(function(){
    
    $('.container').on('mouseenter', '.pixel', function(ev){
        $(this).addClass('active');
    })
    
});