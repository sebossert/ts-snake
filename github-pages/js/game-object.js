define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.GameObject = void 0;
    var GameObject = (function () {
        function GameObject() {
            this.position = { x: -1, y: -1 };
            this.color = "pink";
        }
        GameObject.prototype.update = function () { };
        GameObject.prototype.render = function (renderer) {
            renderer.drawSquare(this.color, this.position);
        };
        GameObject.prototype.checkCollision = function (position) {
            return this.position.x == position.x && this.position.y == position.y;
        };
        return GameObject;
    }());
    exports.GameObject = GameObject;
});
//# sourceMappingURL=game-object.js.map