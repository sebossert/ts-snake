define(["require", "exports", "./config"], function (require, exports, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Loop = void 0;
    var Loop = (function () {
        function Loop(update, render, window, config) {
            if (config === void 0) { config = new config_1.Config(); }
            this.previousTime = 0.0;
            this.previousFrameUpdate = 0.0;
            this.previousGameUpdate = 0.0;
            this.framesDelta = 1000.0 / 60.0;
            this.updatesDelta = 1000.0 / 15;
            this.running = false;
            this.update = update;
            this.render = render;
            this.window = window;
            this.config = config;
            console.log("Set UPS to " + config.ups);
            console.log("Set FPS to " + config.fps);
        }
        Loop.prototype.run = function (time) {
            var dtFps = time - this.previousFrameUpdate;
            var dtUps = time - this.previousGameUpdate;
            if (dtUps >= this.updatesDelta) {
                this.previousGameUpdate = time;
                this.update();
            }
            if (dtFps >= this.framesDelta) {
                this.previousFrameUpdate = time;
                this.render();
            }
            if (this.running) {
                this.window.requestAnimationFrame(this.run.bind(this));
            }
        };
        Loop.prototype.stop = function () {
            this.running = false;
        };
        Loop.prototype.launch = function () {
            var _this = this;
            this.updatesDelta = 1000.0 / Number.parseInt(this.config.ups);
            this.framesDelta = 1000.0 / Number.parseInt(this.config.fps);
            this.running = true;
            this.window.requestAnimationFrame(function (time) {
                _this.previousGameUpdate = _this.previousFrameUpdate = time;
                _this.window.requestAnimationFrame(_this.run.bind(_this));
            });
        };
        return Loop;
    }());
    exports.Loop = Loop;
});
//# sourceMappingURL=loop.js.map