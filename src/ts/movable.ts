import { GameObject } from "./game-object";
import { Vector } from "./vector";

export class Movable extends GameObject {
  velocity: Vector = { x: 1, y: 0 };
  update() {
    super.update();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}
