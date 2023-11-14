var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./movable", "./vector-factory"], function (require, exports, movable_1, vector_factory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Snake = void 0;
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(config, gameOver) {
            var _this = _super.call(this) || this;
            _this.length = 5;
            _this.tail = [];
            _this.gameOver = gameOver;
            _this.reset();
            _this.color = config.snakeColor;
            _this.wrapAroundEnabled = config.wrapAroundEnabled == "true";
            _this.position = vector_factory_1.VectorFactory.snakeStart(config);
            _this.bounds = vector_factory_1.VectorFactory.bounds(config);
            return _this;
        }
        Snake.prototype.reset = function () {
            this.length = 5;
            this.tail = [];
        };
        Snake.prototype.grow = function (length) {
            if (length === void 0) { length = 1; }
            this.length += length;
        };
        Snake.prototype.update = function () {
            _super.prototype.update.call(this);
            if (this.wrapAroundEnabled) {
                this.wrapAround();
            }
            else if (this.checkOutOfBounds()) {
                this.gameOver();
                return;
            }
            if (this.checkCollision(this.position)) {
                this.gameOver();
                return;
            }
            this.moveTail();
        };
        Snake.prototype.wrapAround = function () {
            if (this.position.x < 0) {
                this.position.x = this.bounds.x - 1;
            }
            else if (this.position.x > this.bounds.x - 1) {
                this.position.x = 0;
            }
            else if (this.position.y < 0) {
                this.position.y = this.bounds.y - 1;
            }
            else if (this.position.y > this.bounds.y - 1) {
                this.position.y = 0;
            }
        };
        Snake.prototype.checkOutOfBounds = function () {
            return (this.position.x < 0 ||
                this.position.x > this.bounds.x - 1 ||
                this.position.y < 0 ||
                this.position.y > this.bounds.y - 1);
        };
        Snake.prototype.moveTail = function () {
            this.tail.push({ x: this.position.x, y: this.position.y });
            while (this.tail.length > this.length) {
                this.tail.shift();
            }
        };
        Snake.prototype.checkCollision = function (position) {
            for (var i = 1; i < this.tail.length; i++) {
                if (this.tail[i].x == position.x && this.tail[i].y == position.y) {
                    return true;
                }
            }
            return false;
        };
        Snake.prototype.render = function (renderer) {
            for (var i = 0; i < this.tail.length; i++) {
                renderer.drawSquare(this.color, this.tail[i]);
            }
        };
        return Snake;
    }(movable_1.Movable));
    exports.Snake = Snake;
});
//# sourceMappingURL=snake.js.map