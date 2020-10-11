import { Config } from "./config";
import { Movable } from "./movable";
import { Renderer } from "./renderer";
import { Vector } from "./vector";
import { VectorFactory } from "./vector-factory";

export class Snake extends Movable {
  length: number = 5;
  tail: Array<Vector> = [];
  gameOver: VoidFunction;
  bounds: Vector;
  wrapAroundEnabled: boolean;
  constructor(config: Config, gameOver: VoidFunction) {
    super();
    this.gameOver = gameOver;
    this.reset();
    this.color = config.snakeColor;
    this.wrapAroundEnabled = config.wrapAroundEnabled == "true";
    this.position = VectorFactory.snakeStart(config);
    this.bounds = VectorFactory.bounds(config);
  }
  reset() {
    this.length = 5;
    this.tail = [];
  }
  grow(length: number = 1) {
    this.length += length;
  }
  update() {
    super.update();
    if (this.wrapAroundEnabled) {
      this.wrapAround();
    } else if (this.checkOutOfBounds()) {
      this.gameOver();
      return;
    }
    if (this.checkCollision(this.position)) {
      this.gameOver();
      return;
    }
    this.moveTail();
  }
  wrapAround() {
    if (this.position.x < 0) {
      this.position.x = this.bounds.x - 1;
    } else if (this.position.x > this.bounds.x - 1) {
      this.position.x = 0;
    } else if (this.position.y < 0) {
      this.position.y = this.bounds.y - 1;
    } else if (this.position.y > this.bounds.y - 1) {
      this.position.y = 0;
    }
  }
  checkOutOfBounds(): boolean {
    return (
      this.position.x < 0 ||
      this.position.x > this.bounds.x - 1 ||
      this.position.y < 0 ||
      this.position.y > this.bounds.y - 1
    );
  }
  moveTail() {
    this.tail.push({ x: this.position.x, y: this.position.y });
    while (this.tail.length > this.length) {
      this.tail.shift();
    }
  }
  checkCollision(position: Vector) {
    for (let i = 1; i < this.tail.length; i++) {
      if (this.tail[i].x == position.x && this.tail[i].y == position.y) {
        return true;
      }
    }
    return false;
  }
  render(renderer: Renderer) {
    for (let i = 0; i < this.tail.length; i++) {
      renderer.drawSquare(this.color, this.tail[i]);
    }
  }
}
