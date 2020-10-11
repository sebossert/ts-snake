import { Vector } from "./vector";
import { Config } from "./config";

export class Renderer {
  canvas: HTMLCanvasElement;
  canvasContext: CanvasRenderingContext2D;
  config: Config;
  constructor(canvas: HTMLCanvasElement, config: Config = new Config()) {
    this.canvas = canvas;
    this.canvasContext = this.canvas.getContext("2d");
    this.config = config;
  }
  reset() {
    this.canvas.width =
      Number.parseInt(this.config.gridDimension.x) *
      Number.parseInt(this.config.tileSize);
    this.canvas.height =
      Number.parseInt(this.config.gridDimension.y) *
      Number.parseInt(this.config.tileSize);
  }
  clear() {
    this.canvasContext.fillStyle = "black";
    this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  drawSquare(
    fillStyle: string | CanvasGradient | CanvasPattern,
    position: Vector
  ) {
    this.canvasContext.fillStyle = fillStyle;
    this.canvasContext.fillRect(
      position.x * Number.parseInt(this.config.tileSize),
      position.y * Number.parseInt(this.config.tileSize),
      Number.parseInt(this.config.tileSize) -
        Number.parseInt(this.config.tileDistance),
      Number.parseInt(this.config.tileSize) -
        Number.parseInt(this.config.tileDistance)
    );
  }
}
