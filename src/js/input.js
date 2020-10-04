var input = {
  firstInput: true,
  register: function() {
    document.addEventListener("keydown", this.handle.bind(this));
    this.reset();
  },
  reset: function() {
    this.firstInput = true;
  },
  handle: function(evt) {
    if (this.firstInput) {
      this.firstInput = false;
      game.running = true;
    }
    switch (evt.keyCode) {
      case 37:
        snake.xVelocity = -1;
        snake.yVelocity = 0;
        break;
      case 38:
        snake.xVelocity = 0;
        snake.yVelocity = -1;
        break;
      case 39:
        snake.xVelocity = 1;
        snake.yVelocity = 0;
        break;
      case 40:
        snake.xVelocity = 0;
        snake.yVelocity = 1;
        break;
      default:
        break;
    }
  },
};
