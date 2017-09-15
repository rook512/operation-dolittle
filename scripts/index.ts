const canvas = document.querySelector("canvas");
if (canvas === null) {
  throw new Error("No canvas found on page (dummy)");
}
const context = canvas.getContext("2d");
if (context === null) {
  throw new Error("No context found on page (dummy)");
}
const width = canvas.width;
const height = canvas.height;
context.clearRect(0, 0, width, height);
function drawCircle(cx: number, cy: number, context: CanvasRenderingContext2D) {
  context.beginPath();
  context.arc(cx, cy, 10, 0, Math.PI * 2);
  context.strokeStyle = "#0000FF";
  context.stroke();
  context.fillStyle = "#0000FF";
  context.fill();
  context.beginPath();
  context.arc(cx, cy, 5, 0, Math.PI * 2);
  context.strokeStyle = "#00FFFF";
  context.stroke();
  context.fillStyle = "#00FFFF";
  context.fill();
}
function drawBulletP(
  cx: number,
  cy: number,
  context: CanvasRenderingContext2D
) {
  context.beginPath();
  context.arc(cx, cy, 10, Math.PI, Math.PI * 2);
  context.moveTo(cx + 10, cy);
  context.bezierCurveTo(cx + 11, cy + 1, cx + 6, cy + 17, cx + 6, cy + 22);
  context.quadraticCurveTo(cx, cy + 36, cx - 6, cy + 22);
  context.bezierCurveTo(cx - 6, cy + 17, cx - 11, cy + 1, cx - 10, cy);
  context.closePath();
  context.fillStyle = "#000099";
  context.fill();
  context.beginPath();
  context.arc(cx, cy - 2, 8, Math.PI, Math.PI * 2);
  context.moveTo(cx + 8, cy - 2);
  context.bezierCurveTo(cx + 10, cy + 1, cx + 6, cy + 11, cx + 2, cy + 15);
  context.quadraticCurveTo(cx, cy + 27, cx - 2, cy + 15);
  context.bezierCurveTo(cx - 6, cy + 11, cx - 10, cy + 1, cx - 8, cy - 2);
  context.closePath();
  context.fillStyle = "#0000FF";
  context.fill();
  context.beginPath();
  context.arc(cx, cy - 3, 6, Math.PI, Math.PI * 2);
  context.moveTo(cx + 6, cy - 3);
  context.bezierCurveTo(cx + 8, cy, cx + 4, cy + 4, cx + 1, cy + 10);
  context.quadraticCurveTo(cx, cy + 18, cx - 1, cy + 10);
  context.bezierCurveTo(cx - 4, cy + 4, cx - 8, cy, cx - 6, cy - 3);
  context.closePath();
  context.fillStyle = "#0099FF";
  context.fill();
  context.beginPath();
  context.arc(cx, cy - 4, 4, Math.PI, Math.PI * 2);
  context.moveTo(cx + 4, cy - 4);
  context.quadraticCurveTo(cx, cy + 14, cx - 4, cy - 4);
  context.closePath();
  context.fillStyle = "#00FFFF";
  context.fill();
}
function drawPlayer(cx: number, cy: number, context: CanvasRenderingContext2D) {
  context.beginPath();
  context.moveTo(cx - 5, cy);
  context.quadraticCurveTo(cx, cy - 25, cx + 5, cy);
  context.lineTo(cx + 8, cy);
  context.lineTo(cx + 12, cy - 4);
  context.lineTo(cx + 10, cy - 14);
  context.lineTo(cx + 7, cy - 20);
  context.lineTo(cx + 15, cy - 20);
  context.lineTo(cx + 20, cy - 10);
  context.lineTo(cx + 20, cy + 6);
  context.lineTo(cx + 16, cy + 20);
  context.lineTo(cx + 12, cy + 20);
  context.lineTo(cx + 5, cy + 14);
  context.lineTo(cx + 5, cy + 10);
  context.lineTo(cx - 5, cy + 10);
  context.lineTo(cx - 5, cy + 14);
  context.lineTo(cx - 12, cy + 20);
  context.lineTo(cx - 16, cy + 20);
  context.lineTo(cx - 20, cy + 6);
  context.lineTo(cx - 20, cy - 10);
  context.lineTo(cx - 15, cy - 20);
  context.lineTo(cx - 7, cy - 20);
  context.lineTo(cx - 10, cy - 14);
  context.lineTo(cx - 12, cy - 4);
  context.lineTo(cx - 8, cy);
  context.lineTo(cx - 5, cy);
  context.closePath();
  context.fillStyle = "#999999";
  context.fill();
  context.strokeStyle = "#000000";
  context.stroke();
  context.beginPath();
  context.moveTo(cx - 3, cy + 4);
  context.quadraticCurveTo(cx, cy - 24, cx + 3, cy + 4);
  context.closePath();
  context.fillStyle = "#000000";
  context.fill();
  context.beginPath();
  context.moveTo(cx, cy - 8);
  context.quadraticCurveTo(cx + 1.5, cy - 4, cx + 1, cy);
  context.strokeStyle = "#BBBBBB";
  context.stroke();
  context.beginPath();
  context.moveTo(cx + 2, cy + 18);
  context.quadraticCurveTo(cx + 5, cy - 7, cx + 9, cy + 18);
  context.closePath();
  context.fillStyle = "#656565";
  context.fill();
  context.strokeStyle = "#000000";
  context.stroke();
  context.beginPath();
  context.moveTo(cx + 2, cy + 17);
  context.lineTo(cx + 9, cy + 17);
  context.strokeStyle = "#FF0000";
  context.stroke();
  context.beginPath();
  context.moveTo(cx + 3, cy + 18);
  context.lineTo(cx + 8, cy + 18);
  context.strokeStyle = "#AA0000";
  context.stroke();
  context.beginPath();
  context.moveTo(cx + 3, cy + 19);
  context.lineTo(cx + 8, cy + 19);
  context.strokeStyle = "#FF9900";
  context.stroke();
  context.moveTo(cx + 4, cy + 17);
  context.lineTo(cx + 7, cy + 17);
  context.strokeStyle = "#FF9900";
  context.stroke();
  context.beginPath();
  context.moveTo(cx + 3, cy + 16);
  context.lineTo(cx + 8, cy + 16);
  context.strokeStyle = "#000000";
  context.stroke();

  context.beginPath();
  context.moveTo(cx - 2, cy + 18);
  context.quadraticCurveTo(cx - 5, cy - 7, cx - 9, cy + 18);
  context.closePath();
  context.fillStyle = "#656565";
  context.fill();
  context.strokeStyle = "#000000";
  context.stroke();
  context.beginPath();
  context.moveTo(cx - 2, cy + 17);
  context.lineTo(cx - 9, cy + 17);
  context.strokeStyle = "#FF0000";
  context.stroke();
  context.beginPath();
  context.moveTo(cx - 3, cy + 18);
  context.lineTo(cx - 8, cy + 18);
  context.strokeStyle = "#AA0000";
  context.beginPath();
  context.moveTo(cx - 3, cy + 19);
  context.lineTo(cx - 8, cy + 19);
  context.strokeStyle = "#FF9900";
  context.stroke();
  context.moveTo(cx - 4, cy + 17);
  context.lineTo(cx - 7, cy + 17);
  context.strokeStyle = "#FF9900";
  context.stroke();
  context.beginPath();
  context.moveTo(cx - 3, cy + 16);
  context.lineTo(cx - 8, cy + 16);
  context.strokeStyle = "#000000";
  context.stroke();
}
function drawPlayerSimple(
  cx: number,
  cy: number,
  context: CanvasRenderingContext2D
) {
  context.beginPath();
  context.moveTo(cx, cy + 2);
  context.lineTo(cx + 10, cy - 6);
  context.lineTo(cx + 8, cy - 14);
  context.lineTo(cx + 10, cy - 16);
  context.lineTo(cx + 16, cy + 2);
  context.lineTo(cx, cy + 16);
  context.lineTo(cx - 16, cy + 2);
  context.lineTo(cx - 10, cy - 16);
  context.lineTo(cx - 8, cy - 14);
  context.lineTo(cx - 10, cy - 6);
  context.closePath();
  context.strokeStyle = "#000000";
  context.stroke();
}
function drawPlayerSimple2(
  cx: number,
  cy: number,
  context: CanvasRenderingContext2D
) {
  context.beginPath();
  context.moveTo(cx + 5, cy + 16);
  context.quadraticCurveTo(cx + 9, cy - 14, cx + 14, cy + 16);
  context.quadraticCurveTo(cx + 9, cy + 14, cx + 5, cy + 16);
  context.quadraticCurveTo(cx + 9, cy + 18, cx + 14, cy + 16);
  context.fillStyle = "#FFFFFF";
  context.fill();
  context.strokeStyle = "#000000";
  context.stroke();
  context.beginPath();
  context.moveTo(cx - 5, cy + 16);
  context.quadraticCurveTo(cx - 9, cy - 14, cx - 14, cy + 16);
  context.quadraticCurveTo(cx - 9, cy + 14, cx - 5, cy + 16);
  context.quadraticCurveTo(cx - 9, cy + 18, cx - 14, cy + 16);
  context.closePath();
  context.fillStyle = "#FFFFFF";
  context.fill();
  context.strokeStyle = "#000000";
  context.stroke();
  context.beginPath();
  context.moveTo(cx + 4, cy - 1.2);
  context.lineTo(cx + 10, cy - 6);
  context.lineTo(cx + 8, cy - 14);
  context.lineTo(cx + 10, cy - 16);
  context.lineTo(cx + 16, cy + 2);
  context.lineTo(cx, cy + 16);
  context.lineTo(cx - 16, cy + 2);
  context.lineTo(cx - 10, cy - 16);
  context.lineTo(cx - 8, cy - 14);
  context.lineTo(cx - 10, cy - 6);
  context.lineTo(cx - 4, cy - 1.2);
  context.quadraticCurveTo(cx, cy - 24, cx + 4, cy - 1.2);
  context.closePath();
  context.fillStyle = "#FFFFFF";
  context.fill();
  context.strokeStyle = "#000000";
  context.stroke();
}
function drawPlayerSimple3(
  cx: number,
  cy: number,
  context: CanvasRenderingContext2D
) {
  // context.beginPath();
  // context.moveTo(cx + 5, cy + 16);
  // context.quadraticCurveTo(cx + 9, cy - 14, cx + 14, cy + 16);
  // context.closePath();
  //context.fillStyle = "#FFFFFF";
  //context.fill();
  //context.strokeStyle = "#000000";
  //context.stroke();
  //context.beginPath();
  //context.moveTo(cx - 5, cy + 16);
  //context.quadraticCurveTo(cx - 9, cy - 14, cx - 14, cy + 16);
  //context.closePath();
  //context.fillStyle = "#FFFFFF";
  //context.fill();
  //context.strokeStyle = "#000000";
  context.stroke();
  context.beginPath();
  context.moveTo(cx + 4, cy - 1.2);
  context.lineTo(cx + 10, cy - 6);
  context.lineTo(cx + 8, cy - 14);
  context.lineTo(cx + 10, cy - 16);
  context.lineTo(cx + 16, cy + 2);
  context.lineTo(cx, cy + 16);
  context.lineTo(cx - 16, cy + 2);
  context.lineTo(cx - 10, cy - 16);
  context.lineTo(cx - 8, cy - 14);
  context.lineTo(cx - 10, cy - 6);
  context.lineTo(cx - 4, cy - 1.2);
  context.quadraticCurveTo(cx, cy - 24, cx + 4, cy - 1.2);
  context.closePath();
  context.fillStyle = "#FFFFFF";
  context.fill();
  context.strokeStyle = "#000000";
  context.stroke();
}

drawBulletP(400, 300, context);
drawPlayer(400, 400, context);
drawPlayerSimple2(200, 400, context);
drawPlayerSimple(300, 400, context);
drawPlayerSimple3(500, 400, context);
