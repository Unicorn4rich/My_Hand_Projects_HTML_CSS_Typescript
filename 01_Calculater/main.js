"use strict";
let display = document.getElementById('screen');
offFunc(); // jab bhi start karen screen off honi chahiye matlab black.
function onFunc() {
    display.style.backgroundColor = "white";
}
function offFunc() {
    display.style.backgroundColor = "black";
    display.value = '';
}
