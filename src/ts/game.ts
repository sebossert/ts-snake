import { GameObject } from "./game-object";
import { Config } from "./config";
import { Snake } from "./snake";
import { Renderer } from "./renderer";
import { Loop } from "./loop";
import { InputHandler } from "./input-handler";
import { Apple } from "./apple";
import { Points } from "./points";
import { Player } from "./player";
import { Highscore } from "./highscore";

export class Game {
  running: boolean = false;
  objects: GameObject[] = [];
  renderer: Renderer;
  loop: Loop;
  config: Config;
  window: Window;
  canvas: HTMLCanvasElement;
  inputHandler: InputHandler;
  snake: Snake;
  apple: Apple;
  points: Points;
  player: Player;
  highscore: Highscore;
  constructor(
    window: Window,
    document: Document,
    config: Config = new Config()
  ) {
    this.config = config;
    this.renderer = new Renderer(
      <HTMLCanvasElement>document.getElementById(config.canvasElementId),
      config
    );
    this.loop = new Loop(
      this.update.bind(this),
      this.render.bind(this),
      window,
      config
    );
    this.inputHandler = new InputHandler(document, config);
    this.inputHandler.registerRestart(() => {
      if (this.running) {
        this.gameOver();
      }
      this.start();
    });
    this.highscore = new Highscore(<HTMLOListElement>(
      document.getElementById(config.highscoreElementId)
    ));
    this.reset();
  }
  reset() {
    this.objects = [];
    this.initPlayer();
    this.initSnake();
    this.initApple();
    this.renderer.reset();
  }
  initPlayer() {
    const newPlayerElement = <HTMLInputElement>(
      document.getElementById(this.config.newPlayerNameElementId)
    );
    const pointsElement = document.getElementById(this.config.pointsElementId);
    const playerNameElement = <HTMLInputElement>(
      document.getElementById(this.config.playerNameElementId)
    );
    this.player = new Player(newPlayerElement.value, new Points(pointsElement));
    playerNameElement.innerText = this.player.name;
  }
  initSnake() {
    this.snake = new Snake(this.config, this.gameOver.bind(this));
    this.objects.push(this.snake);
    this.inputHandler.registerMovable(this.snake);
  }
  initApple() {
    this.apple = new Apple(
      this.player.points.add.bind(this.player.points),
      this.snake.checkCollision.bind(this.snake),
      this.snake.grow.bind(this.snake),
      this.config
    );
    this.objects.push(this.apple);
  }
  start() {
    this.reset();
    this.running = true;
    this.loop.launch();
  }
  gameOver() {
    console.dir(this);
    this.highscore.add(this.player);
    this.running = false;
    this.loop.stop();
  }
  update() {
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].update();
    }
  }
  render() {
    this.renderer.clear();
    for (let i = 0; i < this.objects.length; i++) {
      this.objects[i].render(this.renderer);
    }
  }
}
