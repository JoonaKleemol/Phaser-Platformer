var menuState = {

  create: function() {

    var nameLabel = game.add.text(80, 80, 'Platformer',
      { font: '50px Arial', fill: '#fff'});

    var startLabel = game.add.text(80, 180, 'Press the "W" key to start',
      { font: '25px Arial', fill: '#fff'});

    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    wkey.onDown.addOnce(this.start, this);
  },

  start: function() {
    game.state.start('level1');
  },
};