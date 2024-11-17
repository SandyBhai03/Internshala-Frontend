let blueBtn = document.querySelector(".blue");
let greenBtn = document.querySelector(".green");
let redBtn = document.querySelector(".red");
let body = document.querySelector("body")

function blueBg (){
    body.style.backgroundColor="blue";
    blueBtn.style.backgroundColor="blue";
    blueBtn.style.border="2px solid black";
    console.log("Background Color is Blue");
}
function greenBg (){
    body.style.backgroundColor="green";
    greenBtn.style.backgroundColor="green";
    greenBtn.style.border="2px solid black";
    console.log("Background Color is Green");
}
function redBg (){
    body.style.backgroundColor="red";
    redBtn.style.backgroundColor="red";
    redBtn.style.border="2px solid black";
    console.log("Background Color is Red");
}

blueBtn.addEventListener('click', blueBg);
greenBtn.addEventListener('click', greenBg);
redBtn.addEventListener('click', redBg);