define(["require", "exports", "./config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Renderer = void 0;
    var Renderer = (function () {
        function Renderer(canvas, config) {
            if (config === void 0) { config = new config_1.Config(); }
            this.canvas = canvas;
            this.canvasContext = this.canvas.getContext("2d");
            this.config = config;
        }
        Renderer.prototype.reset = function () {
            this.canvas.width =
                Number.parseInt(this.config.gridDimension.x) *
                    Number.parseInt(this.config.tileSize);
            this.canvas.height =
                Number.parseInt(this.config.gridDimension.y) *
                    Number.parseInt(this.config.tileSize);
        };
        Renderer.prototype.clear = function () {
            this.canvasContext.fillStyle = "black";
            this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height);
        };
        Renderer.prototype.drawSquare = function (fillStyle, position) {
            this.canvasContext.fillStyle = fillStyle;
            this.canvasContext.fillRect(position.x * Number.parseInt(this.config.tileSize), position.y * Number.parseInt(this.config.tileSize), Number.parseInt(this.config.tileSize) -
                Number.parseInt(this.config.tileDistance), Number.parseInt(this.config.tileSize) -
                Number.parseInt(this.config.tileDistance));
        };
        return Renderer;
    }());
    exports.Renderer = Renderer;
});
//# sourceMappingURL=renderer.js.map