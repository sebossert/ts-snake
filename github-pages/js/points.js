define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Points = void 0;
    var Points = (function () {
        function Points(element) {
            this.current = 0;
            this.element = element;
        }
        Points.prototype.reset = function () {
            this.current = 0;
        };
        Points.prototype.add = function (points) {
            this.current += points;
            this.update();
        };
        Points.prototype.update = function () {
            this.element.innerText = "" + this.current;
        };
        return Points;
    }());
    exports.Points = Points;
    ;
});
//# sourceMappingURL=points.js.map