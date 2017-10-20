import { drawPlayerBullet } from "../visuals/playerBullet";
import { EntityPosition } from "../entities/position";
import { IEntity } from "../entities/entity";

export const bulletSpeed = 20;
export class PlayerBulletPawn implements IEntity {
  position = new EntityPosition();
  facing = { x: 0, y: 0 };
  inertia = { x: 0, y: 0 };
  update() {
    this.position.location.x += this.inertia.x;
    this.position.location.y += this.inertia.y;
  readonly draw = drawPlayerBullet;
}
