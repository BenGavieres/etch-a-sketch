const gridContainer=document.querySelector(".grid-container");
const GRID_PIXELS=window.getComputedStyle(gridContainer).getPropertyValue("width");
GRID_WIDTH=parseInt(GRID_PIXELS,10);//removes "px" from end of GRID_PIXELS string
console.log("grid width: "+GRID_WIDTH);//remove

let dimension=16;//can be changed by user
let squareWidth=Math.floor(GRID_WIDTH/dimension);
console.log("square width: "+squareWidth);//remove

let color="blue"//can be changed by user;

//creates grid
for (let i=0;i<GRID_WIDTH*dimension;i+=squareWidth){
    const square=document.createElement("div");
    square.classList.add("square");
     
    square.style.width=`${squareWidth}.px`;
    square.style.height=`${squareWidth}.px`;

    gridContainer.appendChild(square);

    square.addEventListener("mouseover",square=>{
        square.style.backgroundColor="blue";
    });
}