let row = 10;
let column = 10;
let width = 500;
let height = 500;

let outerContainer = document.querySelector("#container");
let squares = document.querySelectorAll(".colorDiv");
let square = document.querySelector(".colorDiv")

outerContainer.style.width = `${width}px`;
outerContainer.style.height = `${height}px`;
function createNewGrid(parent){
  let x = prompt("Enter the number of rows you want");
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
  generateNewTemplate(x);
}

function IntialTemplate(){
  for(let i = 0;i<(row*column);i++){
         let createDiv = document.createElement("div");
          createDiv.style.flex="auto";
          createDiv.classList.add("colorDiv");
          createDiv.classList.add("hover");
          createDiv.style.height = `${height/row}px`;
          createDiv.style.width = `${width/column}px`;
          outerContainer.appendChild(createDiv)

  }
  addHover();
}
IntialTemplate();
function addHover(){
  let hoverColor = document.querySelectorAll(".hover");
  hoverColor.forEach((square) => {
    square.addEventListener("mouseenter",()=>{
      let x = Math.floor(Math.random()*258)
      let y = Math.floor(Math.random()*258)
      let z = Math.floor(Math.random()*258)
      let RGBColor = "rgb("+x+","+y+","+z+")"
      square.style.backgroundColor = RGBColor;
    });
  });
}
function generateNewTemplate(x){
  if(x <= 1 || x > 100)
  {
     prompt("Please enter a number between 1 to 100")
  }
  else{
    for(i=0;i< (x * x) ;i++)
    {
      let createDiv = document.createElement("div");
          createDiv.style.flex="auto";
          createDiv.classList.add("colorDiv");
          createDiv.classList.add("hover");
          createDiv.style.height = `${height/x}px`;
          createDiv.style.width = `${width/x}px`;
          outerContainer.appendChild(createDiv)

  
    }
    addHover();
  }
}
let newGrid = document.querySelector(".newGrid");
newGrid.addEventListener("click",()=>{
     createNewGrid(outerContainer);
});