var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var centroX = 500;
var centroY = 280;
var avance = 100;
dibuja_emoji(centroX, centroY);

document.addEventListener("keydown", function (e) {
  teclaPulsada = e.keyCode;
  console.log(teclaPulsada);
  borrar_carita(centroX, centroY);
  switch (teclaPulsada) {
    case 37:
      centroX -= avance;
      break;
    case 38:
      centroY -= avance;
      break;
    case 39:
      centroX += avance;
      break;
    case 40:
      centroY += avance;
      break;
  }
  ctx.lineWidth = 1;
  dibuja_emoji(centroX, centroY);
});

function borrar_carita(centroX, centroY) {
  var colorCanvas = "#fff";
  ctx.beginPath();
  ctx.fillStyle = colorCanvas;
  ctx.strokeStyle = colorCanvas;
  radio = 250;
  ctx.arc(centroX, centroY, radio, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

function dibuja_emoji(centroX, centroY) {
  dibuja_circulo(centroX, centroY, 250, "yellow", "yellow");
  dibuja_circulo(centroX - 90, centroY - 85, 70, "brown", "brown");
  dibuja_circulo(centroX + 100, centroY - 85, 70, "brown", "brown");
  dibuja_circulo(centroX - 110, centroY - 105, 40, "white", "white");
  dibuja_circulo(centroX + 80, centroY - 105, 40, "white", "white");
  dibuja_circulo(centroX - 50, centroY - 50, 10, "white", "white");
  dibuja_circulo(centroX + 140, centroY - 50, 10, "white", "white");
  ctx.strokeStyle = "black";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(centroX, centroY + 20, 100, 1200, Math.PI);
  ctx.stroke();
}

function dibuja_circulo(centroX, centroY, radio, xColor, xStroke) {
  ctx.beginPath();
  ctx.fillStyle = xColor;
  ctx.strokeStyle = xStroke;
  //centroX=420;centroY=250;radio=220
  ctx.arc(centroX, centroY, radio, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}
