const gridContainer=document.querySelector(".grid-container");
const GRID_PIXELS=window.getComputedStyle(gridContainer).getPropertyValue("width");
GRID_WIDTH=parseInt(GRID_PIXELS,10);//removes "px" from end of GRID_PIXELS string
//grid width is 576 px

let inRow=16;//can be changed by user
let squareWidth=Math.floor(GRID_WIDTH/inRow);

let color="#000000"//can be changed by user;

for (let i=0;i<inRow**2;i++){
    const square=document.createElement("div");
    square.classList.add("square");
     
    square.style.width=`${squareWidth}.px`;
    square.style.height=`${squareWidth}.px`;

    gridContainer.appendChild(square);

    square.addEventListener("mouseover",()=>{
        square.style.backgroundColor=color;
    });
}

//variables for color picker
const colorPicker=document.querySelector("input");
const colorOutput=document.querySelector("label");

addEventListener("input",event=>{
    colorOutput.innerText=colorPicker.value;
    color=colorPicker.value;
})



