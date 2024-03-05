let text = document.getElementById('text');
let treeLeft = document.getElementById('left-tree');
let treeRight = document.getElementById('right-gate');
let gateLeft = document.getElementById('left-gate');
let gateRight = document.getElementById('right-gate');


window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + "px";
    treeLeft.style.left = value * -1.5 + "px";
    treeRight.style.left = value * 1.5 + "px";
    gateLeft.style.left = value * -1.5 + "px";
    gateRight.style.left = value * 1.5 + "px";
})