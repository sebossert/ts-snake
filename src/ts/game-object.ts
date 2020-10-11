import { Vector } from "./vector";
import { Renderer } from "./renderer";

export class GameObject {
  position: Vector = { x: -1, y: -1 };
  color: string = "pink";
  update() {}
  render(renderer: Renderer) {
    renderer.drawSquare(this.color, this.position);
  }
  checkCollision(position: Vector): boolean {
    return this.position.x == position.x && this.position.y == position.y;
  }
}
