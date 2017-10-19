export function drawLaser(
  cx: number,
  cy: number,
  context: CanvasRenderingContext2D
) {
  context.beginPath();
  context.moveTo(cx + 15, cy + 30);
  context.lineTo(cx + 15, cy - 30);
  context.lineTo(cx - 15, cy - 30);
  context.lineTo(cx - 15, cy + 30);
  context.closePath();
  context.strokeStyle = "#660000";
  context.stroke();
  context.fillStyle = "#990000";
  context.fill();
  context.beginPath();
  context.moveTo(cx + 12, cy + 30);
  context.lineTo(cx + 12, cy - 30);
  context.lineTo(cx - 12, cy - 30);
  context.lineTo(cx - 12, cy + 30);
  context.closePath();
  context.fillStyle = "#DD0000";
  context.fill();
  context.beginPath();
  context.moveTo(cx + 10, cy + 30);
  context.lineTo(cx + 10, cy - 30);
  context.lineTo(cx - 10, cy - 30);
  context.lineTo(cx - 10, cy + 30);
  context.closePath();
  context.fillStyle = "#FF0000";
  context.fill();
  context.beginPath();
  context.lineTo(cx + 6, cy + 30);
  context.lineTo(cx + 6, cy - 30);
  context.lineTo(cx - 6, cy - 30);
  context.lineTo(cx - 6, cy + 30);
  context.closePath();
  context.fillStyle = "#FF6666";
  context.fill();
  context.beginPath();
  context.moveTo(cx + 3, cy + 30);
  context.lineTo(cx + 3, cy - 30);
  context.lineTo(cx - 3, cy - 30);
  context.lineTo(cx - 3, cy + 30);
  context.closePath();
  context.fillStyle = "#FF9999";
  context.fill();
}
