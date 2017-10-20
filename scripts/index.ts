//import { drawPlayerBullet } from "./visuals/playerBullet";
//import { drawLaser } from "./visuals/laser";
import { PlayerPawn, IEntity, maxSpeed } from "./pawns/playerPawn";
import Mousetrap = require("mousetrap");

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
  entities.forEach(entity => entity.update());
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
  player.facing = { x: event.offsetX, y: event.offsetY };
};
// window.addEventListener("keydown", doKeyPress, false);
// //window.addEventListener("keyup", doKeyRelease, false);
// function doKeyPress(key) {
//   switch (key.keyCode) {
//     case 87:
//       if (player.inertia.y > -5) {
//         player.inertia.y = player.inertia.y - 0.5;
//       }
//       break;
//     case 65:
//       if (player.inertia.x > -5) {
//         player.inertia.x = player.inertia.x - 0.5;
//       }
//       break;
//     case 83:
//       if (player.inertia.y < +5) {
//         player.inertia.y = player.inertia.y + 0.5;
//       }
//       break;
//     case 68:
//       if (player.inertia.x < +5) {
//         player.inertia.x = player.inertia.x + 0.5;
//       }
//       break;
//   }
// }
Mousetrap.bind(
  "w",
  () => {
    player.targetInertia.y = -maxSpeed;
  },
  "keydown"
);
Mousetrap.bind(
  "w",
  () => {
    player.targetInertia.y =
      player.targetInertia.y < 0 ? 0 : player.targetInertia.y;
  },
  "keyup"
);
Mousetrap.bind(
  "s",
  () => {
    player.targetInertia.y = +maxSpeed;
  },
  "keydown"
);
Mousetrap.bind(
  "s",
  () => {
    player.targetInertia.y =
      player.targetInertia.y > 0 ? 0 : player.targetInertia.y;
  },
  "keyup"
);
Mousetrap.bind(
  "a",
  () => {
    player.targetInertia.x = -maxSpeed;
  },
  "keydown"
);
Mousetrap.bind(
  "a",
  () => {
    player.targetInertia.x =
      player.targetInertia.x < 0 ? 0 : player.targetInertia.x;
  },
  "keyup"
);
Mousetrap.bind(
  "d",
  () => {
    player.targetInertia.x = +maxSpeed;
  },
  "keydown"
);
Mousetrap.bind(
  "d",
  () => {
    player.targetInertia.x =
      player.targetInertia.x > 0 ? 0 : player.targetInertia.x;
  },
  "keyup"
);
