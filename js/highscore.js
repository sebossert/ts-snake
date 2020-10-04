var highscore = {
    entries: [],
    add: function() {
        for (let i = 0; i < this.entries.length; i++) {
            if (player.points > this.entries[i].points) {
                this.entries.splice(i, 0, { points: player.points, name: player.name });
                break;
            }
        }
    },
    draw: function() {
        var highscore = document.getElementById('highscore');
        while (highscore.lastChild) {
            highscore.removeChild(highscore.lastChild);
        }
        for (let i = 0; i < this.entries.length; i++) {
            let elem = document.createElement('li');
            let text = document.createTextNode(this.entries[i].name + ": " + this.entries[i].points);
            elem.appendChild(text);
            highscore.appendChild(elem);
        }
    }
}
