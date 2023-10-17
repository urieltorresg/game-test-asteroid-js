window.onload = function () {
  var canvas = document.getElementById("myCanvas");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    if (ctx) {
      // Colour definitions
      // ctx.fillStyle = "yellow"; //relleno
      // ctx.strokeStyle = "#ff0000"; // Border
      ctx.lineWidth = 5; // Border width

      //   // Another rectangle
      //   ctx.fillStyle = "rgba(0, 0, 250, 0.3)";
      //   ctx.fillRect(200, 20, 100, 100);
      //   ctx.strokeRect(200, 20, 100, 100);

      //   ctx.beginPath();
      //   ctx.moveTo(50, 400);
      //   ctx.lineTo(50, 600);
      //   ctx.lineTo(800, 600);
      //   ctx.lineTo(800, 400);
      //   ctx.lineTo(47, 400);
      //   ctx.stroke();

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
    } else {
      alert("Error creating the context");
    }
  }
};
