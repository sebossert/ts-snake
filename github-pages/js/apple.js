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
define(["require", "exports", "./config", "./game-object", "./vector-factory"], function (require, exports, config_1, game_object_1, vector_factory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Apple = void 0;
    var Apple = (function (_super) {
        __extends(Apple, _super);
        function Apple(addPlayerPoints, checkSnakeCollision, growSnake, config) {
            if (config === void 0) { config = new config_1.Config(); }
            var _this = _super.call(this) || this;
            _this.config = config;
            _this.color = config.appleColor;
            _this.addPlayerPoints = addPlayerPoints;
            _this.checkSnakeCollision = checkSnakeCollision;
            _this.growSnake = growSnake;
            _this.points = Number.parseInt(_this.config.pointsPerApple);
            _this.position = vector_factory_1.VectorFactory.appleStart(config);
            _this.bounds = vector_factory_1.VectorFactory.bounds(config);
            return _this;
        }
        Apple.prototype.update = function () {
            if (this.checkSnakeCollision(this.position)) {
                this.growSnake();
                this.addPlayerPoints(this.points);
                this.placeNew();
            }
        };
        Apple.prototype.placeNew = function () {
            this.position.x = this.getRandomInt(this.bounds.x - 1);
            this.position.y = this.getRandomInt(this.bounds.y - 1);
        };
        Apple.prototype.getRandomInt = function (max) {
            return Math.floor(Math.random() * Math.floor(max));
        };
        return Apple;
    }(game_object_1.GameObject));
    exports.Apple = Apple;
});
//# sourceMappingURL=apple.js.map