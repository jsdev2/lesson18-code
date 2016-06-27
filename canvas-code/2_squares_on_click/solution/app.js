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
