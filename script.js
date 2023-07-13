const gridContainer=document.querySelector(".grid-container");
const GRID_PIXELS=window.getComputedStyle(gridContainer).getPropertyValue("width");
GRID_WIDTH=parseInt(GRID_PIXELS,10);//removes "px" from end of GRID_PIXELS string
//grid width is 400 px

let inRow=16;//can be changed by user
let squareWidth;
let color="#000000"//can be changed by user

const colorPicker=document.querySelector("input");
const colorOutput=document.querySelector("label");

const colorBtn=document.querySelector("button.color");
const erase=document.querySelector("button.erase");
const clear=document.querySelector("button.clear");
const rainbow=document.querySelector("button.rainbow");
const resize=document.querySelector("button.resize");

let isColorMode=true;
let isEraseMode=false;
let isRainbowMode=false;
let squares;
const hexChars="0123456789ABCDEF";

//gen grid
function generateGrid(){
    squareWidth=parseInt((GRID_WIDTH/inRow));
    for (let i=0;i<inRow**2;i++){
        const square=document.createElement("div");
        square.classList.add("square");
        
        square.style.width=`${squareWidth}.px`;
        square.style.height=`${squareWidth}.px`;

        gridContainer.appendChild(square);

        square.addEventListener("mouseover",()=>{
            if (isColorMode) {
                square.style.backgroundColor=color;
            }
            else if (isEraseMode){
                square.style.backgroundColor="white";
            }
            else {
                //chooses a random color
                color = '#';
                    for (let i = 0; i < 6; i++) {
                  color += hexChars[Math.floor(Math.random() * 16)];
                }
                square.style.backgroundColor=color;
            }
        });
    }
}

//degen grid
function degenerateGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

//color picker
addEventListener("input",event=>{
    if (isColorMode){
        color=colorPicker.value;
    }
})

//color mode
colorBtn.addEventListener("click",()=>{
    color=colorPicker.value;
    isColorMode=true;
    isEraseMode=false;
    isRainbowMode=false;
    colorBtn.classList.add("selected");
    erase.classList.remove("selected");
    rainbow.classList.remove("selected");
})

//erase
erase.addEventListener("click",()=>{
    isColorMode=false;
    isEraseMode=true;
    isRainbowMode=false;
    colorBtn.classList.remove("selected");
    erase.classList.add("selected");
    rainbow.classList.remove("selected");
});

//clear
clear.addEventListener("click",()=>{
    squares=document.querySelectorAll(".square");
    console.log(squares.length);
    squares.forEach((sqr)=>{
        sqr.style.backgroundColor="white";
    });
});

//rainbow
rainbow.addEventListener("click",()=>{
    isColorMode=false;
    isEraseMode=false;
    isRainbowMode=true;
    colorBtn.classList.remove("selected");
    erase.classList.remove("selected");
    rainbow.classList.add("selected");
});

//resize
resize.addEventListener("click",()=>{
    do{
        inRow=prompt("Enter new grid width/height (1-100)");  
        inRow=Number(inRow);
    }while (Number.isInteger(inRow)===false||inRow<1||inRow>100);
    degenerateGrid();
    generateGrid();
});

generateGrid();







