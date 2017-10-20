import { drawPlayerShip } from "../visuals/playerShip";
import { EntityPosition } from "../entities/position";
import { IEntity } from "../entities/entity";

const mass = 0.9;
export const maxSpeed = 7;
export class PlayerPawn implements IEntity {
  position = new EntityPosition();
  facing = { x: 0, y: 0 };
  inertia = { x: 0, y: 0 };
  targetInertia = { x: 0, y: 0 };
  update() {
    this.inertia.x = this.inertia.x * mass + this.targetInertia.x * (1 - mass);
    this.inertia.y = this.inertia.y * mass + this.targetInertia.y * (1 - mass);
    this.position.location.x += this.inertia.x;
    this.position.location.y += this.inertia.y;
    const targetRotation =
      Math.atan2(
        this.facing.y - this.position.location.y,
        this.facing.x - this.position.location.x
      ) +
      Math.PI / 2;
    const rotationDifference =
      (targetRotation - this.position.rotation + 3 * Math.PI) % (Math.PI * 2) -
      Math.PI;
    this.position.rotation += rotationDifference * (1 - mass);
  }
  readonly draw = drawPlayerShip;
}
