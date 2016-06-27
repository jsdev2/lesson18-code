var canvasEl = document.querySelector('.my-canvas');

var ctx = canvasEl.getContext('2d');

ctx.strokeStyle = 'green';
ctx.lineWidth = 5;

function getCoords(mouseEvent) {
  var bounds = canvasEl.getBoundingClientRect();
  var coordinates = {
      x : (mouseEvent.clientX - bounds.left),
      y : (mouseEvent.clientY - bounds.top)
  };
  return coordinates;
}

function drawSquare(coords) {
  // Draw square with the coords in the middle
  // of the square.
  ctx.strokeRect(coords.x - 25, coords.y - 25, 50, 50);
}

canvasEl.addEventListener('click', function(event) {
  var coords = getCoords(event, canvasEl);
  drawSquare(coords);
});

// Instructions: 

// Write two more functions, 'drawTriangle' and 'drawCircle', 
// and put three buttons at the bottom of the screen that say
// "Square", "Triangle", and "Circle". When the user clicks on
// one of these buttons, the appropriate shape will be drawn on 
// the canvas whenever the user clicks on the canvas, until the 
// user changes modes again by clicking on one of the buttons.

// Also put a "Now drawing: " notice below the buttons, where you
// display what's drawing. For instance, "Now drawing: triangle."

// Note: The triangle- and circle-drawing functions are a little
// hairy to figure out. Feel free to copy them from the solution folder
// if you can't figure them out from looking at the codealong code from
// the beginning of the lesson.


// BONUS:
// (probably can't get to this in class but you can start thinking
// about it): 

// Look up the 'child_added' Firebase event at
// https://firebase.google.com/docs/database/web/retrieve-data

// Use this event, and a connection to a Firebase
// Database, to make this shapes app a multi-user collaborative one, 
// where any time a person clicks on the canvas, the appropriate shape
// appears in the canvas in their browser, and in the canvas on everyone
// else's browser as well.

// DOUBLE BONUS: 

// Add the ability to pick a color. When the user adds shapes
// with a particuluar color, they will show up with that color 
// on everyone else's screen, too.
