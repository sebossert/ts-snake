var highscore = {
  entries: [],
  add: function() {
    if (this.entries.length === 0) {
      this.entries.push({ points: player.points, name: player.name });
    } else {
      for (let i = 0; i < this.entries.length; i++) {
        if (player.points > this.entries[i].points) {
          this.entries.splice(i, 0, {
            points: player.points,
            name: player.name,
          });
          break;
        }
      }
    }
  },
  draw: function() {
    let highscore = uiElements.highscoreElement;
    while (highscore.lastChild) {
      highscore.removeChild(highscore.lastChild);
    }
    for (let i = 0; i < this.entries.length; i++) {
      let elem = document.createElement("li");
      let text = document.createTextNode(
        this.entries[i].name + ": " + this.entries[i].points
      );
      elem.appendChild(text);
      highscore.appendChild(elem);
    }
  },
};
