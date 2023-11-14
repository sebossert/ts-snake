define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VectorFactory = void 0;
    var VectorFactory = (function () {
        function VectorFactory() {
        }
        VectorFactory.bounds = function (config) {
            return VectorFactory.parse(config.gridDimension);
        };
        VectorFactory.snakeStart = function (config) {
            return VectorFactory.parse(config.snakeStart);
        };
        VectorFactory.appleStart = function (config) {
            return VectorFactory.parse(config.appleStart);
        };
        VectorFactory.parse = function (strObj) {
            return {
                x: Number.parseInt(strObj.x),
                y: Number.parseInt(strObj.y),
            };
        };
        return VectorFactory;
    }());
    exports.VectorFactory = VectorFactory;
});
//# sourceMappingURL=vector-factory.js.map