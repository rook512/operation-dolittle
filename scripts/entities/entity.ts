import { EntityPosition } from "./position";

export interface IEntity {
  position: EntityPosition;
  draw(context: CanvasRenderingContext2D): void;
  update(): void;
}
