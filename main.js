
function createGrid(size){
  let gridContainer = document.querySelector(".grid");
  let newDiv;
  for(let i = 0; i< (size * size); i++){
    newDiv = document.createElement("div");
    newDiv.style.width = `${768/size}px`;
    newDiv.style.height = `${768/size}px`;
    newDiv.setAttribute("id", `${i}`);
    newDiv.classList.toggle("grid-block");
    gridContainer.appendChild(newDiv);
  }
}

createGrid(16);