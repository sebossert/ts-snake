var player = {
  name: "Player",
  points: 0,
  reset: function() {
    this.name = uiElements.playerNameElement.value;
    this.points = 0;
  },
};
