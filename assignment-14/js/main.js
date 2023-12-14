var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.arc(150, 150, 80, 0, 2 * Math.PI);
ctx.stroke();

// Draw the left eye
ctx.beginPath();
ctx.arc(120, 120, 10, 0, 2 * Math.PI);
ctx.fillStyle = '#000'; // black color
ctx.fill();

// Draw the right eye
ctx.beginPath();
ctx.arc(180, 120, 10, 0, 2 * Math.PI);
ctx.fillStyle = '#000'; // black color
ctx.fill();

// Draw the mouth
ctx.beginPath();
ctx.arc(150, 170, 30, 0, Math.PI, false);
ctx.stroke();
