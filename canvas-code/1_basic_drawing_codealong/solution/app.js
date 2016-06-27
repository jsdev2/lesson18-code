var canvasEl = document.querySelector('.my-canvas');

var ctx = canvasEl.getContext('2d');

// Many of these examples are taken from the quite excellent
// Canvas tutorial at 
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial


// Basic filling of rectangles

ctx.fillStyle = "rgb(200, 0, 0)";
ctx.fillRect (10, 10, 50, 50);

ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
ctx.fillRect (30, 30, 50, 50);


// rectangles with outlines, and clearing rectangles

ctx.fillStyle = 'goldenrod';
ctx.strokeStyle = 'teal';

ctx.fillRect(225,25,100,100);
ctx.clearRect(245,45,60,60);
ctx.strokeRect(250,50,50,50);


// Basic paths

ctx.lineWidth = 7;
ctx.strokeStyle = 'green';

ctx.beginPath();

ctx.moveTo(20,120);

ctx.lineTo(250,350);
ctx.closePath(); // optional -- will make a path segment 
                 // back to the start of the path

ctx.stroke();


// A triangle

ctx.beginPath();
ctx.moveTo(75, 50);
ctx.lineTo(100, 75);
ctx.lineTo(100, 25);
ctx.fill();


// A smiley-face (uses "arc" and "moveTo")
// (For documentation on how the "arc" method works,
// see https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc)

ctx.beginPath();
ctx.arc(475, 75, 50, 0, Math.PI*2, true); // Outer circle
ctx.moveTo(510, 75);
ctx.arc(475, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
ctx.moveTo(465, 65);
ctx.arc(460, 65, 5, 0, Math.PI*2, true);  // Left eye
ctx.moveTo(495, 65);
ctx.arc(490, 65, 5, 0, Math.PI*2, true);  // Right eye
ctx.stroke();


