//import { drawPlayerBullet } from "./visuals/playerBullet";
import { drawPlayerShip } from "./visuals/playerShip";
//import { drawLaser } from "./visuals/laser";

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

//drawPlayerBullet(400, 300, context);
context.save();
context.translate(200, 200);
context.rotate(0);
context.scale(1, 1);
drawPlayerShip(context);
context.restore();
//drawLaser(300, 300, context);
