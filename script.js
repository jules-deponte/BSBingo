//query selectors
const container = document.querySelector('#container');

var bs = ['drill down', 'circle back', 'get granular', 'offline', 'ecosystem',
        'target audience', 'customer centric', '10,000 foot view', 'capacity', 'reinvent the wheel',
        'think outside the box', 'reach out', 'gain traction', 'workflow', 'dynamic',
        'boil the ocean', 'touch base', 'in these uncertain times', 'touch points', 'win-win',
        'low hanging fruit', 'table that discussion', 'new normal', 'on board', 'elevator pitch',]


//Function that creates GRID
function addDivs(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        if (c == 12){
            word = 'BULLS#!T BINGO! Free Square'
        } else {
            len = bs.length
            ind = Math.random() * len | 0
            word = bs[ind ]
            bs.splice(ind, 1)
        }

        cell.innerText = (word);
        container.appendChild(cell).className = "grid-item";
    };
    mouseOver();
    clickColor();
}
var col = 0
//function that creates a random color
let randomColor = function() {
    if (col % 2 == 0){
        color = "#ddd"
    } else {
        color = "#fff"
    }
    col += 1
    return color;
}

//function that changes div color uponed being hovered
function mouseOver() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            if (item.style.backgroundColor != 'white' && item.style.backgroundColor != 'grey'){
                item.style.backgroundColor = 'white'

            }

        });
    });
}

// //function that changes div color uponed being hovered
// function mouseOut() {
//     let items = document.querySelectorAll('.grid-item');
//     items.forEach(item => {
//         item.addEventListener('mouseout', () => {
//         item.style.backgroundColor = "#fff";
//         console.log(item.style.backgroundColor)
//         });
//     });
// }



//function that changes div color uponed being hovered
function clickColor() {
    let items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.addEventListener('click', () => {
            console.log(item.style.backgroundColor)
            if (item.style.backgroundColor == 'white'){
                item.style.backgroundColor = 'grey'
                console.log('grey')
            } else {
                item.style.backgroundColor = 'white'
                // console.log('white')
            };
        // console.log(item.style.backgroundColor)
        });
    });
}

//grid creationg
addDivs(5,5);