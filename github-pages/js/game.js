define(["require", "exports", "./config", "./snake", "./renderer", "./loop", "./input-handler", "./apple", "./points", "./player", "./highscore"], function (require, exports, config_1, snake_1, renderer_1, loop_1, input_handler_1, apple_1, points_1, player_1, highscore_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Game = void 0;
    var Game = (function () {
        function Game(window, document, config) {
            if (config === void 0) { config = new config_1.Config(); }
            var _this = this;
            this.running = false;
            this.objects = [];
            this.config = config;
            this.renderer = new renderer_1.Renderer(document.getElementById(config.canvasElementId), config);
            this.loop = new loop_1.Loop(this.update.bind(this), this.render.bind(this), window, config);
            this.inputHandler = new input_handler_1.InputHandler(document, config);
            this.inputHandler.registerRestart(function () {
                if (_this.running) {
                    _this.gameOver();
                }
                _this.start();
            });
            this.highscore = new highscore_1.Highscore((document.getElementById(config.highscoreElementId)));
            this.reset();
        }
        Game.prototype.reset = function () {
            this.objects = [];
            this.initPlayer();
            this.initSnake();
            this.initApple();
            this.renderer.reset();
        };
        Game.prototype.initPlayer = function () {
            var newPlayerElement = (document.getElementById(this.config.newPlayerNameElementId));
            var pointsElement = document.getElementById(this.config.pointsElementId);
            var playerNameElement = (document.getElementById(this.config.playerNameElementId));
            this.player = new player_1.Player(newPlayerElement.value, new points_1.Points(pointsElement));
            playerNameElement.innerText = this.player.name;
        };
        Game.prototype.initSnake = function () {
            this.snake = new snake_1.Snake(this.config, this.gameOver.bind(this));
            this.objects.push(this.snake);
            this.inputHandler.registerMovable(this.snake);
        };
        Game.prototype.initApple = function () {
            this.apple = new apple_1.Apple(this.player.points.add.bind(this.player.points), this.snake.checkCollision.bind(this.snake), this.snake.grow.bind(this.snake), this.config);
            this.objects.push(this.apple);
        };
        Game.prototype.start = function () {
            this.reset();
            this.running = true;
            this.loop.launch();
        };
        Game.prototype.gameOver = function () {
            console.dir(this);
            this.highscore.add(this.player);
            this.running = false;
            this.loop.stop();
        };
        Game.prototype.update = function () {
            for (var i = 0; i < this.objects.length; i++) {
                this.objects[i].update();
            }
        };
        Game.prototype.render = function () {
            this.renderer.clear();
            for (var i = 0; i < this.objects.length; i++) {
                this.objects[i].render(this.renderer);
            }
        };
        return Game;
    }());
    exports.Game = Game;
});
//# sourceMappingURL=game.js.map