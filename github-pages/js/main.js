define(["require", "exports", "./game", "./simple-form"], function (require, exports, game_1, simple_form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var game = new game_1.Game(window, document);
    game.start();
    var form = new simple_form_1.SimpleForm(document);
    document
        .getElementById("simple-form")
        .appendChild(form.createFieldset("config", game.config));
});
//# sourceMappingURL=main.js.map