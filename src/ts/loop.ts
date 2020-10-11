import { Config } from "./config";

export class Loop {
  previousTime: number = 0.0;
  previousFrameUpdate: number = 0.0;
  previousGameUpdate: number = 0.0;
  framesDelta: number = 1000.0 / 60.0; // 60 fps, todo config
  updatesDelta: number = 1000.0 / 15;
  window: Window;
  update: () => void;
  render: () => void;
  running: boolean = false;
  constructor(update: () => void, render: () => void, window: Window, config?: Config) {
    this.update = update;
    this.render = render;
    this.window = window;
    if(config){
      this.updatesDelta = 1000.0 / config.ups;
      this.framesDelta = 1000.0 / config.fps;
      console.log("Set UPS to " + config.ups);
      console.log("Set FPS to " + config.fps);
    }
  }
  run(time: number) {
    let dtFps: number = time - this.previousFrameUpdate;
    let dtUps: number = time - this.previousGameUpdate;

    if (dtUps >= this.updatesDelta) {
      this.previousGameUpdate = time;
      this.update();
    }

    if (dtFps >= this.framesDelta) {
      this.previousFrameUpdate = time;
      this.render();
    }

    if (this.running) {
      this.window.requestAnimationFrame(this.run.bind(this));
    }
  }

  stop() {
    this.running = false;
  }

  launch() {
    this.running = true;
    this.window.requestAnimationFrame((time) => {
      this.previousGameUpdate = this.previousFrameUpdate = time;
      this.window.requestAnimationFrame(this.run.bind(this));
    });
  }
}
