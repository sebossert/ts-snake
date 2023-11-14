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
define(["require", "exports", "./game-object"], function (require, exports, game_object_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Movable = void 0;
    var Movable = (function (_super) {
        __extends(Movable, _super);
        function Movable() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.velocity = { x: 1, y: 0 };
            return _this;
        }
        Movable.prototype.update = function () {
            _super.prototype.update.call(this);
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
        };
        return Movable;
    }(game_object_1.GameObject));
    exports.Movable = Movable;
});
//# sourceMappingURL=movable.js.map