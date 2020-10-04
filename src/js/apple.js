var apple = {
  xPosition: config.appleStartX,
  yPosition: config.appleStartY,
  reset: function() {
    this.xPosition = config.appleStartX;
    this.yPosition = config.appleStartY;
  },
  eat: function() {
    // log("eatApple");
    if (
      snake.xPosition == this.xPosition &&
      snake.yPosition == this.yPosition
    ) {
      snake.size++;
      player.points += config.pointsPerApple;
      document.getElementById("points").value = player.points; // TODO ui
      this.placeNew();
    }
  },
  placeNew: function() {
    this.xPosition = this.getRandomInt(config.tileCount - 1);
    this.yPosition = this.getRandomInt(config.tileCount - 1);
  },
  getRandomInt: function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },
  draw: function() {
    grid.drawRect("red", this.xPosition, this.yPosition);
  },
};
