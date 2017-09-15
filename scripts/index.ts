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
drawBulletP(400, 300, context);
