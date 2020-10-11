import { Movable } from "./movable";
import { Vector } from "./vector";
import { Config } from "./config";
import { Renderer } from "./renderer";

export class Snake extends Movable {
  length: number = 5;
  tail: Array<Vector> = [];
  position: Vector;
  color: string = "lime";
  config: Config;
  gameOver: VoidFunction;
  constructor(config: Config, gameOver: VoidFunction) {
    super();
    this.config = config;
    this.gameOver = gameOver;
    this.reset();
  }
  reset() {
    this.length = 5;
    this.tail = [];
    this.position = { x: this.config.snakeStart.x, y: this.config.snakeStart.y };
  }
  grow(length: number = 1) {
    this.length += length;
  }
  update() {
    super.update();
    if(this.config.wrapAroundEnabled){
      this.wrapAround();
    }
    // else if(this.checkOutOfBounds()){
    //   this.gameOver();
    //   return;
    // }
    if(this.checkCollision(this.position)) {
      this.gameOver();
      return;
    }
    this.moveTail();
  }
  wrapAround() {
    if (this.position.x < 0) {
      this.position.x = this.config.gridDimension.x - 1;
    } else if (this.position.x > this.config.gridDimension.y - 1) {
      this.position.x = 0;
    } else if (this.position.y < 0) {
      this.position.y = this.config.gridDimension.y - 1;
    } else if (this.position.y > this.config.gridDimension.y - 1) {
      this.position.y = 0;
    }
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
