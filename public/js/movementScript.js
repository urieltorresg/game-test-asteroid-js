var ctx;
var canvas;
var colorCirculo = "red";
var radio = 10;
var bolax = 100;
var bolay = 100;
var dx = 4;
var dy = 4;
var ancho, largo;
var limiteDerecha, limiteIzquierda, limiteArriba, limiteAbajo;
window.onload = function () {
  canvas = document.getElementById("myCanvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      ancho = canvas.width;
      alto = canvas.height;
      limiteDerecha = ancho - radio;
      limiteIzquierda = radio;
      //Calculamos los limites de arriba y abajo
      limiteArriba = radio;
      limiteAbajo = alto - radio;
      //
      ctx.lineWidth = radio;
      ctx.fillStyle = "red";
      mueve();
      setInterval(mueve, 1);
    } else {
      alert("Error al crear tu contexto");
    }
  }
};
function mueve() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  verifica();
  ctx.fillStyle = colorCirculo;
  ctx.beginPath();
  ctx.arc(bolax, bolay, radio, 0, 2 * Math.PI, true);
  ctx.fill();
}
function verifica() {
  var nbolax = bolax + dx;
  var nbolay = bolay + dy;

  if (nbolax > limiteDerecha) {
    dx *= -1;
    nbolax = limiteDerecha;
  }

  if (nbolax < limiteIzquierda) {
    dx *= -1;
    nbolax = limiteIzquierda;
  }

  //Calculamos la nueva coordenada en Y
  if (nbolay > limiteAbajo) {
    dy *= -1;
    nbolay = limiteAbajo;
  }

  if (nbolay < limiteArriba) {
    dy *= -1;
    nbolay = limiteArriba;
  }

  bolax = nbolax;
  bolay = nbolay;
}

// Cambiar tamaño pelota
function changeSizeBall() {
  xtamanio = document.getElementById("tamanio").value;
  radio = xtamanio;
}

// Cambiar color pelota
function changeColorBall() {
  xcolor = document.getElementById("color").value;
  colorCirculo = xcolor;
}

// Cambiar inclinacion
function changeInclination() {
  inc_x = document.getElementById("inc_x").value;
  dx = inc_x;
  inc_y = document.getElementById("inc_y").value;
  dy = inc_y;
}
