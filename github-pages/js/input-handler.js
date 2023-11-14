define(["require", "exports", "./config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.InputHandler = void 0;
    var InputHandler = (function () {
        function InputHandler(document, config) {
            if (config === void 0) { config = new config_1.Config(); }
            this.mapping = {
                ArrowLeft: { x: -1, y: 0 },
                ArrowRight: { x: 1, y: 0 },
                ArrowDown: { x: 0, y: 1 },
                ArrowUp: { x: 0, y: -1 },
            };
            document.addEventListener("keydown", this.handle.bind(this));
            this.config = config;
        }
        InputHandler.prototype.registerMovable = function (movable) {
            this.movable = movable;
        };
        InputHandler.prototype.registerRestart = function (restart) {
            document
                .getElementById(this.config.restartButtonId)
                .addEventListener("click", restart);
        };
        InputHandler.prototype.handle = function (evt) {
            if (this.mapping[evt.key]) {
                this.movable.velocity = this.mapping[evt.key];
            }
        };
        return InputHandler;
    }());
    exports.InputHandler = InputHandler;
});
//# sourceMappingURL=input-handler.js.map