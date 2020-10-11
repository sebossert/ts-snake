import { Config } from "./config";
import { GameObject } from "./game-object";
import { Snake } from "./snake";
import { Renderer } from "./renderer";

export class Apple extends GameObject {
  snake: Snake;
  config: Config;
  addPlayerPoints: (points: number) => void;
  constructor(
    config: Config,
    snake: Snake,
    addPlayerPoints: (points: number) => void
  ) {
    super();
    this.snake = snake;
    this.config = config;
    this.addPlayerPoints = addPlayerPoints;
    this.position = {
      x: config.appleStart.x,
      y: config.appleStart.y,
    };
  }
  render(renderer: Renderer) {
    renderer.drawSquare("red", this.position);
  }
  update() {
    if (this.snake.checkCollision(this.position)) {
      this.snake.grow();
      this.addPlayerPoints(this.config.pointsPerApple); //TODO
      this.placeNew();
    }
  }
  placeNew() {
    //TODO
    this.position.x = this.getRandomInt(this.config.gridDimension.x - 1);
    this.position.y = this.getRandomInt(this.config.gridDimension.y - 1);
  }
  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
