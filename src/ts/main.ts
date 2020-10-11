import { Game } from "./game";
import { SimpleForm } from "./simple-form";

const game = new Game(
  window,
  document
);
game.start();

document.querySelector("#new-game>button").addEventListener("click", function(){
  if(game.running) {
    game.gameOver();
  }
  game.start();
});

const form = new SimpleForm(document);
document.getElementById("simple-form").appendChild(form.createFieldset("config", game.config));