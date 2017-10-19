export function drawPlayerShip(
  cx: number,
  cy: number,
  context: CanvasRenderingContext2D
) {
  context.beginPath();
  context.moveTo(cx + 4, cy + 14);
  context.quadraticCurveTo(cx + 8, cy - 14, cx + 13, cy + 14);
  context.quadraticCurveTo(cx + 8, cy + 14, cx + 4, cy + 14);
  context.quadraticCurveTo(cx + 8, cy + 16, cx + 13, cy + 14);
  context.fillStyle = "#FFFFFF";
  context.fill();
  context.strokeStyle = "#000000";
  context.stroke();
  context.beginPath();
  context.moveTo(cx - 4, cy + 14);
  context.quadraticCurveTo(cx - 8, cy - 14, cx - 13, cy + 14);
  context.quadraticCurveTo(cx - 8, cy + 14, cx - 4, cy + 14);
  context.quadraticCurveTo(cx - 8, cy + 16, cx - 13, cy + 14);
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
