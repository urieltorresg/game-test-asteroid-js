window.onload = function () {
  var canvas = document.getElementById("myCanvas");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.lineWidth = 10;

      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fillRect(200, 450, 600, 160);

      ctx.fillStyle = "rgb(255, 255, 255)";
      ctx.fillRect(200, 300, 300, 160);

      ctx.strokeStyle = "#000";
      ctx.beginPath();
      ctx.moveTo(170, 300);
      ctx.lineTo(800, 300);
      ctx.stroke();

      ctx.fillStyle = "rgb(0, 0, 255, 0.3)";
      ctx.fillRect(500, 400, 300, 50);

      ctx.fillStyle = "rgb(128, 64, 0)";
      ctx.fillRect(700, 500, 50, 100);

      ctx.fillStyle = "rgb(0, 0, 255, 0.3)";
      ctx.fillRect(200, 350, 200, 90);

      ctx.fillStyle = "rgb(0, 0, 255, 0.3)";
      ctx.fillRect(200, 470, 300, 90);
    } else {
      alert("Error creating the context");
    }
  }
};
