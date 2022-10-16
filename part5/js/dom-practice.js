/*eslint-env browser*/

//STEP 1
function displayMessage() {
    window.alert("Clicked.");
}

//STEP 2
var myElement = document.getElementById("myButton")
myElement.onclick = function () {
    window.alert("Clicked.");
}

//STEP 3
function btnOnClick() {
    window.alert("Clicked")
}
var button1 = window.document.getElementById("button1")
button1.addEventListener("click", btnOnClick);

//STEP 4
var button2 = window.document.getElementById("button2")
button2.addEventListener("click", function() {
    window.alert("Clicked.")
});

//STEP 5
function init() {
    "use strict";
    var button3 = window.document.getElementById("button3")
    button3.addEventListener("click", function() {
        window.alert("Clicked.")
    });
}

window.addEventListener("load", init);