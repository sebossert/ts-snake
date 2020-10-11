import { Game } from "./game";
import { SimpleForm } from "./simple-form";

const game = new Game(window, document);
game.start();

const form = new SimpleForm(document);
document
  .getElementById("simple-form")
  .appendChild(form.createFieldset("config", game.config));
