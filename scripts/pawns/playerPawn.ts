import { drawPlayerShip } from "../visuals/playerShip";

export class EntityPosition {
  location = { x: 0, y: 0 };
  rotation = 0;
}
export interface IEntity {
  position: EntityPosition;
  draw(context: CanvasRenderingContext2D): void;
}
export class PlayerPawn implements IEntity {
  position = new EntityPosition();
  readonly draw = drawPlayerShip;
}
