var canvasEl = document.querySelector('.my-canvas');
var squareButtonEl = document.querySelector('.square-button');
var triangleButtonEl = document.querySelector('.triangle-button');
var circleButtonEl = document.querySelector('.circle-button');
var nowDrawingEl = document.querySelector('.now-drawing');

var ctx = canvasEl.getContext('2d');

ctx.strokeStyle = 'green';
ctx.lineWidth = 5;

var activeShape = 'square';


function getCoords(mouseEvent) {
  var bounds = canvasEl.getBoundingClientRect();
  var coordinates = {
      x : (mouseEvent.clientX - bounds.left),
      y : (mouseEvent.clientY - bounds.top)
  };
  return coordinates;
}

function drawSquare(coords) {
  ctx.strokeRect(coords.x - 25, coords.y - 25, 50, 50);
}

function drawTriangle(coords) {
  ctx.beginPath();
  ctx.moveTo(coords.x - 25, coords.y - 25);
  ctx.lineTo(coords.x + 25, coords.y);
  ctx.lineTo(coords.x - 25, coords.y + 25);
  ctx.closePath();
  ctx.stroke();
}

function drawCircle(coords) {
  ctx.beginPath();
  ctx.arc(coords.x, coords.y, 25, 0, Math.PI*2, true); // Outer circle
  ctx.stroke();
}

canvasEl.addEventListener('click', function(event) {
  var coords = getCoords(event, canvasEl);
  if (activeShape === 'square') {
    drawSquare(coords);
  } 
  else if (activeShape === 'triangle') {
    drawTriangle(coords);
  }
  else if (activeShape === 'circle') {
    drawCircle(coords);
  }
});

squareButtonEl.addEventListener('click', function(event) {
  activeShape = 'square';
  nowDrawingEl.innerHTML = 'square';
});

triangleButtonEl.addEventListener('click', function(event) {
  activeShape = 'triangle';
  nowDrawingEl.innerHTML = 'triangle';
});

circleButtonEl.addEventListener('click', function(event) {
  activeShape = 'circle';
  nowDrawingEl.innerHTML = 'circle';
});

