var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var xPos = 100;
var yPos = 200;
var ancho = 150;
var avance = 25;
var xBala = 0;
var yBala = 0;
var velocidadBala = 150;

var colorCanvas = "#fff";

const Balas = [];

class Bala {
  constructor(x, y) {
    this.xBala = x;
    this.yBala = y;
    this.velocidadBala = 5;
    this.radio = 5;
    this.ColorCanvas = "#fff";

    this.dibujar_bala = (ctx) => {
      ctx.beginPath();
      ctx.fillStyle = this.ColorCanvas;
      ctx.strokeStyle = this.ColorCanvas;
      ctx.arc(this.xBala, this.yBala, this.radio + 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      this.xBala += this.velocidadBala;

      ctx.beginPath();
      ctx.fillStyle = "#000";
      ctx.strokeStyle = "#000";
      ctx.arc(this.xBala, this.yBala, this.radio, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
    };
  }
}

function dibujar_balas() {
  // radio = 5;
  // ctx.beginPath();
  // ctx.fillStyle = "#fff";
  // ctx.strokeStyle = "#fff";
  // ctx.arc(xBala, yBala, radio + 5, 0, 2 * Math.PI);
  // ctx.fill();
  // ctx.stroke();

  // xBala += velocidadBala;

  // ctx.beginPath();
  // ctx.fillStyle = "#000";
  // ctx.strokeStyle = "#000";
  // ctx.arc(xBala, yBala, radio, 0, 2 * Math.PI);
  // ctx.fill();
  // ctx.stroke();

  for (i = 0; i < Balas.length; i++) {
    Balas[i].dibujar_bala(ctx);
  }
}

document.addEventListener("keydown", function (e) {
  teclaPulsada = e.keyCode;
  console.log(teclaPulsada);
  borrar_avion(xPos, yPos, ancho);
  switch (teclaPulsada) {
    case 40:
      yPos += avance;
      break;
    case 38:
      yPos -= avance;
      break;
    case 39:
      xPos += avance;
      break;
    case 37:
      xPos -= avance;
      break;
    case 32:
      xBala = xPos + ancho;
      yBala = yPos + ancho / 2;
      // Se crea objeto bala
      xBala = new Bala(xBala, yBala);
      Balas.push(xBala);
      // setInterval(dibujar_bala, 150);
      setInterval(dibujar_balas, 150);
      break;
  }
  dibujar_avion(xPos, yPos, ancho);
});

function borrar_avion(centroX, centroY, ancho) {
  ctx.beginPath();
  ctx.fillStyle = colorCanvas;
  ctx.strokeStyle = colorCanvas;
  ctx.rect(centroX, centroY, ancho, ancho);
  ctx.fill();
  ctx.stroke();
}

function dibujar_avion(posx, posy, ancho) {
  var img = new Image();
  img.src = "./public/img/plane.png";
  ctx.drawImage(img, posx, posy, ancho, ancho);
}

dibujar_avion(xPos, yPos);
