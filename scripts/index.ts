//import { drawPlayerBullet } from "./visuals/playerBullet";
//import { drawLaser } from "./visuals/laser";
import { PlayerPawn, IEntity } from "./pawns/playerPawn";

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
const entities: IEntity[] = [];
function renderLoop() {
  context!.clearRect(0, 0, width, height);
  entities.forEach(entity => drawEntity(context!, entity));
  window.requestAnimationFrame(renderLoop);
}
window.requestAnimationFrame(renderLoop);

//drawPlayerBullet(400, 300, context);
function drawEntity(context: CanvasRenderingContext2D, entity: IEntity) {
  context.save();
  context.translate(entity.position.location.x, entity.position.location.y);
  context.rotate(entity.position.rotation);
  context.scale(1, 1);
  entity.draw(context);
  context.restore();
}
//drawLaser(300, 300, context);
const player = new PlayerPawn();
player.position.location = { x: 200, y: 200 };
entities.push(player);
drawEntity(context, player);
canvas.onmousemove = function(event) {
  player.position.rotation =
    Math.atan2(
      event.offsetY - player.position.location.y,
      event.offsetX - player.position.location.x
    ) +
    Math.PI / 2;
  drawEntity(context, player);
};
