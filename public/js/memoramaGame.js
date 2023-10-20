var ctx;
var primerCarta = true;
var cartaPrimera;
var cartaSegunda;
var colorFrente = "yellow";
var colorAtras = "blue";
var colorCanvas = "green";
var cartaLon = 30;
var teclas_array = new Array();
var inicioX = 45;
var inicioY = 50;
var margen = 30;
var cartaAncho = 4 * cartaLon;
var cartaAlto = 4 * cartaLon;
var iguales;
var tiempo;
var cartas = 0;
var fallos = 0;
var xJugador;

var jugadores = [
  {
    nombre: "Abisai Torres",
    alias: "Urielin",
    juegosJugados: "0",
    fallosAcumulados: 0,
    colorCanvas: "Navy",
    colorFrente: "#F5F5DC",
    colorAtras: "White",
  },
  {
    nombre: "Abigail Obrajero",
    alias: "Abichuela",
    juegosJugados: "0",
    fallosAcumulados: 0,
    colorCanvas: "LightPink",
    colorFrente: "White",
    colorAtras: "LightBlue",
  },
  {
    nombre: "Jonatan Morales",
    alias: "Helicopter",
    juegosJugados: "0",
    fallosAcumulados: 0,
    colorCanvas: "Blue",
    colorFrente: "Red",
    colorAtras: "Yellow",
  },
  {
    nombre: "Layka Torres",
    alias: "Laikyrinha",
    juegosJugados: "0",
    fallosAcumulados: 0,
    colorCanvas: "Blue",
    colorFrente: "Black",
    colorAtras: "Grey",
  },
];

function desplegarJugadores() {
  let xhtml = "";
  xhtml +=
    "<select style='padding: 5px; font-size: large; color: navy; font-family: Inter, sans-serif !important; margin-top: 20px; font-weight: bold; border-radius: 10px; border: none; background-color: whitesmoke;' id='selectJugador'>";
  for (x = 0; x < jugadores.length; x++) {
    xhtml += "<option value='" + x + "'>";
    xhtml += jugadores[x].nombre;
    xhtml += "(";
    xhtml += jugadores[x].alias;
    xhtml += ")";
    xhtml += "</option>";
  }
  document.getElementById("lista_jugadores").innerHTML = xhtml;
}

//
function Carta(x, y, ancho, alto, info) {
  this.x = x;
  this.y = y;
  this.ancho = ancho;
  this.alto = alto;
  this.info = info;
  this.dibuja = dibujaCarta;
}

function tablero() {
  var i;
  var carta;
  var x = inicioX;
  var y = inicioY;
  for (i = 3; i < 9; i++) {
    carta = new Carta(x, y, cartaAncho, cartaAlto, i);
    teclas_array.push(carta);
    carta.dibuja();
    //
    carta = new Carta(x, y + cartaAlto + margen, cartaAncho, cartaAlto, i);
    teclas_array.push(carta);
    carta.dibuja();
    //
    x = x + cartaAncho + margen;
  }
}
function barajea() {
  var i;
  var k;
  var temporal;
  var lon = teclas_array.length;
  var j;
  for (j = 0; j < 3 * lon; j++) {
    i = Math.floor(Math.random() * lon);
    k = Math.floor(Math.random() * lon);
    temporal = teclas_array[i].info;
    teclas_array[i].info = teclas_array[k].info;
    teclas_array[k].info = temporal;
  }
}
//
function dibujaCarta() {
  ctx.fillStyle = colorAtras;
  ctx.fillRect(this.x, this.y, this.ancho, this.alto);
}
//
function ajusta(xx, yy) {
  var posCanvas = canvas.getBoundingClientRect();
  var x = xx - posCanvas.left;
  var y = yy - posCanvas.top;
  return { x: x, y: y };
}
function selecciona(e) {
  var pos = ajusta(e.clientX, e.clientY);
  var x = pos.x;
  var y = pos.y;
  var i;
  for (i = 0; i < teclas_array.length; i++) {
    var carta = teclas_array[i];
    //alert(carta.x+", "+carta.y+", "+x+", "+y);
    if (carta.x >= 0) {
      if (
        x > carta.x &&
        x < carta.x + carta.ancho &&
        y > carta.y &&
        y < carta.y + carta.alto
      ) {
        if (primerCarta || i != cartaPrimera) break;
      }
    }
  }
  if (i < teclas_array.length) {
    if (primerCarta) {
      cartaPrimera = i;
      primerCarta = false;
      pinta(carta);
    } else {
      cartaSegunda = i;
      pinta(carta);
      if (teclas_array[i].info == teclas_array[cartaPrimera].info) {
        iguales = true;
        cartas++;
        pintaAciertos();
      } else {
        iguales = false;
        fallos++;
        pintaFallos();
      }
      primerCarta = true;
      setTimeout(volteaCarta, 1000);
    }
  }
}

function pintaAciertos() {
  ctx.save();
  ctx.clearRect(0, 340, canvas.width / 2, 100);
  ctx.font = "40px Inter, sans-serif";
  ctx.fillStyle = "white";
  ctx.fillText("Aciertos: " + String(cartas), 30, 380);
  ctx.restore();

  if (cartas >= 6) {
    alert("Juego terminado");
    jugadores[xJugador].juegosJugados++;
    jugadores[xJugador].fallosAcumulados += fallos;
    for (x = 0; x < teclas_array.length; x++) {
      teclas_array[x].x = -1;
      teclas_array[x].y = -1;
    }
  }
}

function pintaFallos() {
  ctx.save();
  ctx.clearRect(0, 400, canvas.width / 2, 100);
  ctx.font = "40px Inter, sans-serif";
  ctx.fillStyle = "white";
  ctx.fillText("Fallos: " + String(fallos), 30, 450);
  ctx.restore();
}

function pinta(c) {
  ctx.fillStyle = colorFrente;
  ctx.fillRect(c.x, c.y, cartaAncho, cartaAlto);
  ctx.font = "40px Inter, sans-serif";
  ctx.fillStyle = "black";
  ctx.fillText(
    String(c.info),
    c.x + cartaAncho * 0.5 - 10,
    c.y + cartaAlto * 0.5 + 10
  );
}
function volteaCarta() {
  if (!iguales) {
    teclas_array[cartaPrimera].dibuja();
    teclas_array[cartaSegunda].dibuja();
  } else {
    ctx.clearRect(
      teclas_array[cartaSegunda].x,
      teclas_array[cartaSegunda].y,
      teclas_array[cartaSegunda].ancho,
      teclas_array[cartaSegunda].alto
    );
    ctx.clearRect(
      teclas_array[cartaPrimera].x,
      teclas_array[cartaPrimera].y,
      teclas_array[cartaPrimera].ancho,
      teclas_array[cartaPrimera].alto
    );
    teclas_array[cartaSegunda].x = -1;
    teclas_array[cartaPrimera].x = -1;
  }
}

// window.onload = function () {
function nuevojuego() {
  canvas = document.getElementById("miCanvas");
  if (canvas && canvas.getContext) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      canvas.addEventListener("click", selecciona, false);
      // ELiminalos elementos del arreglo - carta del juego anterior
      teclas_array.splice(0, teclas_array.length);
      pintaJugador();
      tablero();
      tiempo = new Date();
      tiempo = Number(tiempo.getTime());
      barajea();
      fallos = 0;
      cartas = 0;
      pintaAciertos();
      pintaFallos();
    } else {
      alert("Error al crear tu contexto");
    }
  }
}

function pintaJugador() {
  xJugador = document.getElementById("selectJugador").value;
  datosJugador = "<h3 style='color:>" + jugadores[xJugador].colorFrente + "'>";
  datosJugador += "Nombre: ";
  datosJugador += jugadores[xJugador].nombre + "<br>";
  datosJugador += "Alias: ";
  datosJugador += jugadores[xJugador].alias + "<br>";
  datosJugador += "Juegos jugados: ";
  datosJugador += jugadores[xJugador].juegosJugados + "<br>";
  datosJugador += "Fallos acumulados: ";
  datosJugador += jugadores[xJugador].fallosAcumulados + "<h3>";
  document.getElementById("jugadorTurno").innerHTML = datosJugador;

  colorFrente = jugadores[xJugador].colorFrente;
  colorAtras = jugadores[xJugador].colorAtras;
  //querySelector - similar a getElementById
  canvas = document.querySelector("#miCanvas");
  // ejemplo de como cambiar valores css en "ejecución"
  canvas.style.background = jugadores[xJugador].colorCanvas;
}

window.addEventListener("load", desplegarJugadores);
