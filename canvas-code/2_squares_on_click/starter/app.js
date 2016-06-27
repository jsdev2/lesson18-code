var canvasEl = document.querySelector('.my-canvas');

var ctx = canvasEl.getContext('2d');

function getCoords(clickEvent) {
  var bounds = canvasEl.getBoundingClientRect();
  var coordinates = {
      x : (clickEvent.clientX - bounds.left),
      y : (clickEvent.clientY - bounds.top)
  };
  return coordinates;
}

canvasEl.addEventListener('click', function(event) {
  // do something
})


// Instructions: 

// Using the above function 'getCoords', and 'addEventListener'
// (which is exactly like jQuery's 'on'),
// write some code such that whenever the user clicks on the canvas,
// a square 50px wide, with a green 5px-wide border, appears on the 
// canvas where the user clicked.

// Hint: use 'ctx.lineWidth' for the border-width and 'ctx.strokeStyle' 
// for the border color, respectively. Then use 'ctx.strokeRect' to
// draw the rectangle