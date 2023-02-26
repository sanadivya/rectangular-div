//let colors = ['orange', 'green', 'blue', 'yellow', 'red', 'pink'];
let btn = document.getElementById('change');
const inputValue = document.getElementById('inputValue');



//change color
btn.addEventListener('click', function () {
    // var random = colors[Math.floor(Math.random()*colors.length)];
    let container = document.getElementById('sb-container');
    // container.style.background = random;
    container.style.background = inputValue.value;
})


//add child
let add = document.getElementById('add');
var squarediv = document.createElement('div');
squarediv.style.cssText = 'width:100px; height:100px; background:black; display:flex; margin-top:50px; margin:auto';

add.addEventListener('click', function () {
    //console.log('add button clicked');
    let container = document.getElementById('sb-container');
    container.appendChild(squarediv);
})


//remove child
let remove = document.getElementById('remove');
remove.addEventListener('click', function () {
    // console.log('remove button clicked');
    let container = document.getElementById('sb-container');
    container.removeChild(squarediv);
})
console.log(Math.random());