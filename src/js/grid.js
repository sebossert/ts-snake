var grid = {
    initialize: function(canvas) {
        this.canvas = canvas;
        this.canvasContext = canvas.getContext("2d");
    },
    reset: function() {
        this.canvasContext.fillStyle = "black";
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
    },
    drawRect: function(color, x, y) {
        this.canvasContext.fillStyle = color;
        this.canvasContext.fillRect(x * config.gridSize, y * config.gridSize, config.gridSize - 2, config.gridSize - 2);
    }
};
