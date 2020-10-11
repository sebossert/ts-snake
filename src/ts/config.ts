import { Vector } from "./vector";

export class Config {
  snakeStart = { x: "10", y: "10" };
  appleStart = { x: "9", y: "9" };
  gridDimension = { x: "30", y: "20" };

  snakeColor: string = "lime";
  appleColor: string = "red";

  fps: string = "60";
  ups: string = "30";

  tileSize: string = "20";
  tileDistance: string = "2";
  startingTailSize: string = "3";
  pointsPerApple: string = "5";
  wrapAroundEnabled: string = "false";
  canvasElementId: string = "game-canvas";
  pointsElementId: string = "points";
  newPlayerNameElementId: string = "new-player-name";
  playerNameElementId: string = "player-name";
  highscoreElementId: string = "highscore-list";
  restartButtonId: string = "restart-button";
}
