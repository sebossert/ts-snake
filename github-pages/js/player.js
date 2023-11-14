define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Player = void 0;
    var Player = (function () {
        function Player(name, points) {
            this.name = name;
            this.id = name + Math.random();
            this.points = points;
        }
        return Player;
    }());
    exports.Player = Player;
    ;
});
//# sourceMappingURL=player.js.map