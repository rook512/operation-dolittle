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
canvas.onmousemove = function(event) {
  player.position.rotation =
    Math.atan2(
      event.offsetY - player.position.location.y,
      event.offsetX - player.position.location.x
    ) +
    Math.PI / 2;
};
window.addEventListener("keydown", doKeyPress, false);
window.addEventListener("keyup", doKeyRelease, false);
function doKeyPress(key) {
  switch (key.keyCode) {
    case 87:
      if (player.position.location.y - 1 > 0) {
        player.position.location.y = player.position.location.y - 5;
      }
      break;
    case 65:
      if (player.position.location.x - 1 > 0) {
        player.position.location.x = player.position.location.x - 5;
      }
      break;
    case 83:
      if (player.position.location.y + 1 < 600) {
        player.position.location.y = player.position.location.y + 5;
      }
      break;
    case 68:
      if (player.position.location.x + 1 < 800) {
        player.position.location.x = player.position.location.x + 5;
      }
      break;
  }
}
