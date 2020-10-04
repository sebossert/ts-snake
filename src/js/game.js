var game = {
    canvas: null,
    running: false,
    interval: false,
    initialize: function(canvas) {
        this.canvas = canvas;
        input.register();
        grid.initialize(canvas);
        this.reset();
        this.interval = setInterval(this.turn, 1000 / config.fps);
    },
    reset: function() {
        running = false;
        apple.reset();
        snake.reset();
        player.reset();
        this.canvas.width = config.tileCount * config.gridSize;
        this.canvas.height = config.tileCount * config.gridSize;
        clearInterval(this.interval);
        this.interval = setInterval(this.turn, 1000 / config.fps);
    },
    turn: function() {
        grid.reset();
        snake.move();
        apple.eat();
        snake.draw();
        apple.draw();
    }
};
