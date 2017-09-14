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
drawCircle(600, 400, context);
drawCircle(200, 150, context);
