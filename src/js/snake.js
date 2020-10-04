var snake = {
  xPosition: 0,
  yPosition: 0,
  xVelocity: 0,
  yVelocity: 0,
  size: 5,
  tail: [],
  reset: function() {
    this.xPosition = config.snakeStartX;
    this.yPosition = config.snakeStartY;
    this.xVelocity = 0;
    this.yVelocity = 0;
    this.size = 5;
    this.tail = [];
  },
  move: function() {
    this.moveHead();
    this.wrapAround();
    this.checkCollision();
    this.moveTail();
  },
  moveHead: function() {
    this.xPosition += this.xVelocity;
    this.yPosition += this.yVelocity;
  },
  wrapAround: function() {
    if (this.xPosition < 0) {
      this.xPosition = config.tileCount - 1;
    } else if (this.xPosition > config.tileCount - 1) {
      this.xPosition = 0;
    } else if (this.yPosition < 0) {
      this.yPosition = config.tileCount - 1;
    } else if (this.yPosition > config.tileCount - 1) {
      this.yPosition = 0;
    }
  },
  moveTail: function() {
    let newPos = { x: this.xPosition, y: this.yPosition };
    this.tail.push(newPos);
    while (this.tail.length > this.size) {
      this.tail.shift();
    }
  },
  checkCollision: function() {
    for (let i = 1; i < this.tail.length; i++) {
      if (
        this.tail[i].x == this.xPosition &&
        this.tail[i].y == this.yPosition
      ) {
        game.gameOver();
      }
    }
  },
  draw: function() {
    for (let i = 0; i < this.tail.length; i++) {
      grid.drawRect("lime", this.tail[i].x, this.tail[i].y);
    }
  },
};
