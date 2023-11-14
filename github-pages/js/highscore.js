define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Highscore = void 0;
    var Highscore = (function () {
        function Highscore(element) {
            this.entries = [];
            this.numberOfEntries = 10;
            this.element = element;
            this.load();
        }
        Highscore.prototype.add = function (player) {
            var added = false;
            for (var i = 0; i < this.entries.length; i++) {
                var entry = this.entries[i];
                if (entry.points < player.points.current) {
                    this.entries.splice(i, 0, {
                        name: player.name,
                        points: player.points.current,
                    });
                    added = true;
                    break;
                }
            }
            if (this.entries.length < this.numberOfEntries && !added) {
                console.log("player bad");
                this.entries.push({
                    name: player.name,
                    points: player.points.current,
                });
            }
            this.update();
        };
        Highscore.prototype.load = function () {
            for (var i = 0; i < this.numberOfEntries; i++) {
                var stored = localStorage.getItem("entry-" + i);
                if (stored) {
                    var entry = JSON.parse(stored);
                    this.entries[i] = entry;
                }
            }
        };
        Highscore.prototype.update = function (updateEntries) {
            if (updateEntries === void 0) { updateEntries = true; }
            for (var i = 0; i < this.numberOfEntries && this.entries[i]; i++) {
                if (updateEntries) {
                    localStorage.setItem("entry-" + i, JSON.stringify(this.entries[i]));
                }
                var childNodeIndex = i * 2 + 1;
                this.element.childNodes[childNodeIndex].textContent = this.createEntryText(this.entries[i]);
            }
        };
        Highscore.prototype.createEntryText = function (entry) {
            return entry.name + " : " + entry.points;
        };
        return Highscore;
    }());
    exports.Highscore = Highscore;
});
//# sourceMappingURL=highscore.js.map