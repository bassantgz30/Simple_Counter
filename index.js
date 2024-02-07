// this is a comment
/* 
    document refers to the html doc.
    get the element whose id is count-el, then access its inner text.
    change the inner text value to 135.
*/

//document.getElementById("count-el").innerText = 135

// create a variable.
//let count = 0

// print value to the console
//console.log(count)


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.innerText = count;
}

function decrement() {
    count -= 1;
    countEl.innerText = count;
}

function reset() {
    count = 0;
    countEl.innerText = count;
}

function save() {
    saveEl.textContent += count + ", ";
    countEl.innerText = 0;
    count = 0;
}