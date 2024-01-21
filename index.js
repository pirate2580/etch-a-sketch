function newGrid() {
  // Ask the user for the number of squares per side
  var squaresPerSide = prompt("Enter the number of squares per side:");
  //console.log(squaresPerSide)
  // Validate the input and create a new grid
  if (squaresPerSide !== null && !isNaN(squaresPerSide) && squaresPerSide > 0) {
    removeExistingGrid()
    createGrid(squaresPerSide);
  } else {
    alert("Invalid input. Please enter a positive number.");
  }
}

function removeExistingGrid() {
  var container = document.getElementById('container');
  container.innerHTML = '';
}

function createGrid(gridSize){
  const cellSize = 600/gridSize;
  const container = document.querySelector('#container');
  
  for (let i = 0; i < gridSize; i++){
    for (let j = 0; j < gridSize; j++){
      const square = document.createElement('div');

      square.style.width = cellSize;
      square.style.height = cellSize;
      square.style.backgroundColor = 'rgb(' + 255 + ',' + 255 + ',' + 255 + ')'

      square.classList.add('square');
      container.appendChild(square);

      square.addEventListener('mousemove', function(event) {
        var currentColor = square.style.backgroundColor;
    
        // Extract RGB values
        
        var rgb = currentColor.match(/\d+/g);
        //console.log(rgb)
        
        var r = parseInt(rgb[0]);
        var g = parseInt(rgb[1]);
        var b = parseInt(rgb[2]);

        if (r == 255 && g == 255 && b == 255){
          square.style.backgroundColor = 'rgb(' + 255 * Math.random() + ',' + 255 *Math.random() + ',' + 255 * Math.random() + ')'
        }
        else{
          r = Math.max(0, r - 10);
          g = Math.max(0, g - 10);
          b = Math.max(0, b - 10);
          square.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
        }
        //console.log(r, g, b)
        
        // Darken the color (adjust the darkening factor as needed)
      });
    }
  }
  //container.style.
  container.style.gridTemplateRows = `repeat(${gridSize}, ${cellSize}px)`;
  container.style.gridTemplateColumns = `repeat(${gridSize}, ${cellSize}px)`;
}


//createGrid(16)

/*make the entire grid 800x800 and then add functionality to change the size of grid */