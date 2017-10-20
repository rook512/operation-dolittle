import { PlayerPawn, maxSpeed } from "./pawns/playerPawn";
import Mousetrap = require("mousetrap");
import { IEntity } from "./entities/entity";
import { PlayerBulletPawn, bulletSpeed } from "./pawns/playerBulletPawn";

const canvas = document.querySelector("canvas");
if (canvas === null) {
  throw new Error("No canvas found on page (dummy)");
}
const context = canvas.getContext("2d");
if (context === null) {
  throw new Error("No context found on page (dummy)");
}
canvas.width = canvas.getBoundingClientRect().width;
canvas.height = canvas.getBoundingClientRect().height;
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

function drawEntity(context: CanvasRenderingContext2D, entity: IEntity) {
  context.save();
  context.translate(entity.position.location.x, entity.position.location.y);
  context.rotate(entity.position.rotation);
  context.scale(1, 1);
  entity.draw(context);
  context.restore();
}
const player = new PlayerPawn();
player.position.location = { x: 200, y: 200 };
entities.push(player);
canvas.onmousemove = function(event) {
  player.facing = { x: event.offsetX, y: event.offsetY };
};
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
canvas.addEventListener("mousedown", playerFire);
function playerFire() {
  const playerBullet = new PlayerBulletPawn();
  playerBullet.position.location.x = player.position.location.x;
  playerBullet.position.location.y = player.position.location.y;
  playerBullet.position.rotation = player.position.rotation;
  playerBullet.inertia.x = bulletSpeed * Math.sin(player.position.rotation);
  playerBullet.inertia.y = -bulletSpeed * Math.cos(player.position.rotation);
  entities.push(playerBullet);
}
