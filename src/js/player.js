var player = {
    name: 'Player',
    points: 0,
    reset: function() {
        this.name = document.getElementsByName('player-name')[0].value;
        this.points = 0;
    }
}
