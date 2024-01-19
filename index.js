
function createGrid(gridSize){
  const cellSize = 600/gridSize;
  const container = document.querySelector('#container');
  for (let i = 0; i < gridSize; i++){
    for (let j = 0; j < gridSize; j++){
      const square = document.createElement('div');
      square.style.width = cellSize;
      square.style.height = cellSize;
      square.classList.add('square');
      container.appendChild(square);
    }
  }
  //container.style.
  container.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
}

createGrid(16)

/*make the entire grid 800x800 and then add functionality to change the size of grid */