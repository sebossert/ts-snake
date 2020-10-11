import { Config } from "./config";
import { GameObject } from "./game-object";
import { Snake } from "./snake";
import { Vector } from "./vector";
import { VectorFactory } from "./vector-factory";

export class Apple extends GameObject {
  config: Config;
  bounds: Vector;
  points: number;
  addPlayerPoints: (points: number) => void;
  checkSnakeCollision: (position: Vector) => boolean;
  growSnake: () => void;
  constructor(
    addPlayerPoints: (points: number) => void,
    checkSnakeCollision: (position: Vector) => boolean,
    growSnake: () => void,
    config: Config = new Config()
  ) {
    super();
    this.config = config;
    this.color = config.appleColor;
    this.addPlayerPoints = addPlayerPoints;
    this.checkSnakeCollision = checkSnakeCollision;
    this.growSnake = growSnake;
    this.points = Number.parseInt(this.config.pointsPerApple);
    this.position = VectorFactory.appleStart(config);
    this.bounds = VectorFactory.bounds(config);
  }
  update() {
    if (this.checkSnakeCollision(this.position)) {
      this.growSnake();
      this.addPlayerPoints(this.points);
      this.placeNew();
    }
  }
  placeNew() {
    this.position.x = this.getRandomInt(this.bounds.x - 1);
    this.position.y = this.getRandomInt(this.bounds.y - 1);
  }
  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
