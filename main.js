
// this will increase by 0.1 every grid mouseover event
let alpha = 0.0;

// Creates a size x size grid
function createGrid(size){
  let gridContainer = document.querySelector(".grid");
  /* 
    Empty the grid first because we can call this multiple times from the click
    event on the resize button, since the grid will have to be replaced.
  */
  gridContainer.replaceChildren();

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

function addGridEventListener(){
  let gridContainer = document.querySelector(".grid-container");
  // a single block in the grid that generated the event
  let gridBlock;
  gridContainer.addEventListener("mouseover", (event) => {
    gridBlock = event.target;
    
    //reset alpha when it reaches max alpha
    if(alpha >= 0.99){
      alpha = 0.0;
    }
    alpha += 0.1;
    console.log(alpha);
    gridBlock.style.backgroundColor = 
    `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${alpha})`;
    
  });
}

function addResizeEventListener(){
  let resizeButton = document.querySelector("#button-resize");
  let size = 0;
  resizeButton.addEventListener("click", () => {

    do {
      size = parseInt(prompt("Enter grid size 1-100 (non numbers will be ignored)"));
    } while(size < 0 || size > 100);
    
    /*
      check to see if the user pressed cancel, which will result 
      in size being NaN
    */
    if(!(Number.isNaN(size))){
      createGrid(size);
    }

  });
}

createGrid(16);
addGridEventListener();
addResizeEventListener();