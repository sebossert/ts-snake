define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Config = void 0;
    var Config = (function () {
        function Config() {
            this.snakeStart = { x: "10", y: "10" };
            this.appleStart = { x: "9", y: "9" };
            this.gridDimension = { x: "30", y: "20" };
            this.snakeColor = "lime";
            this.appleColor = "red";
            this.fps = "60";
            this.ups = "30";
            this.tileSize = "20";
            this.tileDistance = "2";
            this.startingTailSize = "3";
            this.pointsPerApple = "5";
            this.wrapAroundEnabled = "false";
            this.canvasElementId = "game-canvas";
            this.pointsElementId = "points";
            this.newPlayerNameElementId = "new-player-name";
            this.playerNameElementId = "player-name";
            this.highscoreElementId = "highscore-list";
            this.restartButtonId = "restart-button";
        }
        return Config;
    }());
    exports.Config = Config;
});
//# sourceMappingURL=config.js.map