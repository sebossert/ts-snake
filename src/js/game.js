var game = {
  canvas: null,
  running: false,
  interval: false,
  initialize: function(canvas) {
    this.canvas = canvas;
    input.register();
    grid.initialize(canvas);
    this.reset();
  },
  reset: function() {
    apple.reset();
    snake.reset();
    player.reset();
    input.reset();
    this.canvas.width = config.tileCount * config.gridSize;
    this.canvas.height = config.tileCount * config.gridSize;
    clearInterval(this.interval);
    this.interval = setInterval(this.turn.bind(this), 1000 / config.fps);
  },
  turn: function() {
    if (this.running) {
      snake.move();
      apple.eat();
    }
    this.draw();
  },
  draw: function() {
    grid.reset();
    snake.draw();
    apple.draw();
  },
  gameOver: function() {
    console.log("gameover");
    highscore.add();
    highscore.draw();
    this.running = false;
    clearInterval(this.interval);
  },
};
