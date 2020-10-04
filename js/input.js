var input = {
    register: function() {
        document.addEventListener("keydown", this.handle);
    },
    handle: function(evt) {
        game.running = true;
        switch (evt.keyCode) {
            case 37:
                snake.xVelocity = -1; snake.yVelocity = 0; break;
            case 38:
                snake.xVelocity = 0; snake.yVelocity = -1; break;
            case 39:
                snake.xVelocity = 1; snake.yVelocity = 0; break;
            case 40:
                snake.xVelocity = 0; snake.yVelocity = 1; break;
            default: break;
        }
    }
};
