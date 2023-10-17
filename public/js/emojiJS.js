var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var centroX = 500;
var centroY = 280;
var avance = 100;
dibuja_emoji(centroX, centroY);

function dibuja_emoji(centroX, centroY) {
  //circulo 1
  dibuja_circulo(centroX, centroY, 200, "yellow", "yellow");

  // Iris
  dibuja_circulo(centroX - 90, centroY - 85, 70, "brown", "brown");
  dibuja_circulo(centroX + 100, centroY - 75, 70, "brown", "brown");

  // Pupilas
  dibuja_circulo(centroX - 110, centroY - 105, 40, "white", "white");
  dibuja_circulo(centroX + 114, centroY - 100, 40, "white", "white");

  dibuja_circulo(centroX - 100, centroY, 10, "white", "white");
  dibuja_circulo(centroX + 140, centroY, 10, "white", "white");

  // Cejas
  ctx.strokeStyle = "black";
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(centroX, centroY, 100, 90, Math.PI);
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

document.addEventListener("keydown", function (e) {
  teclaPulsada = e.keyCode;
  console.log(teclaPulsada);
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
  dibuja_emoji(centroX, centroY);
});
