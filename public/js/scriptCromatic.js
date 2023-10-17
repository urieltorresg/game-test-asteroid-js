var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

printCircle(480, 100, 85, "navy", "navy");
printCircle(280, 220, 85, "tomato", "tomato");
printCircle(280, 440, 85, "yellow", "yellow");
printCircle(485, 580, 85, "green", "green");
printCircle(700, 440, 85, "orange", "orange");
printCircle(700, 220, 85, "#B695C0", "#B695C0");

function printCircle(centroX, centroY, radio, xColor, xStroke) {
  ctx.beginPath();
  ctx.fillStyle = xColor;
  ctx.strokeStyle = xStroke;
  ctx.arc(centroX, centroY, radio, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}
