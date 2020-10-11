import { Vector } from "./vector";

export class Config {
  tileSize: number = 20;
  tileDistance: number = 2;
  gridDimension: Vector = { x: 30, y: 20 };
  startingTailSize: number = 5;
  snakeStart: Vector = { x: 10, y: 10 };
  appleStart: Vector = { x: 9, y: 9 };
  pointsPerApple: number = 5;
  wrapAroundEnabled: boolean = true;
  // debug: 0,
  fps: number = 60;
  ups: number = 30;
  canvasElementId: string = "game-canvas";
  pointsElementId: string = "points";
  newPlayerNameElementId: string = "new-player-name";
  playerNameElementId: string = "player-name";
  highscoreElementId: string = "highscore-list";
  restartButtonId: string = "restart-button";
}
