import { Movable } from "./movable";
import { Vector } from "./vector";
import { Config } from "./config";

export class InputHandler {
  movable: Movable;
  mapping: Record<string, Vector>;
  config: Config;
  constructor(document: Document, config: Config = new Config()) {
    this.mapping = {
      ArrowLeft: { x: -1, y: 0 },
      ArrowRight: { x: 1, y: 0 },
      ArrowDown: { x: 0, y: 1 },
      ArrowUp: { x: 0, y: -1 },
    };
    document.addEventListener("keydown", this.handle.bind(this));
    this.config = config;
  }
  registerMovable(movable: Movable) {
    this.movable = movable;
  }
  registerRestart(restart: () => void) {
    document
      .getElementById(this.config.restartButtonId)
      .addEventListener("click", restart);
  }
  handle(evt: KeyboardEvent) {
    if (this.mapping[evt.key]) {
      this.movable.velocity = this.mapping[evt.key];
    }
  }
}
