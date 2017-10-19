import { drawPlayerShip } from "../visuals/playerShip";

export class EntityPosition {
  location = { x: 0, y: 0 };
  rotation = 0;
}
export interface IEntity {
  position: EntityPosition;
  draw(context: CanvasRenderingContext2D): void;
  update(): void;
}
export class PlayerPawn implements IEntity {
  position = new EntityPosition();
  facing = { x: 0, y: 0 };
  inertia = { x: 0, y: 0 };
  update() {
    this.position.location.x += this.inertia.x;
    this.position.location.y += this.inertia.y;
    this.position.rotation =
      Math.atan2(
        this.facing.y - this.position.location.y,
        this.facing.x - this.position.location.x
      ) +
      Math.PI / 2;
  }
  readonly draw = drawPlayerShip;
}
