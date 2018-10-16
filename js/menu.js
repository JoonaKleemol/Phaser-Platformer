var menuState = {

  create: function() {

    var background = game.add.image(0, 0, 'background')

    var nameLabel = game.add.text(80, 80, 'Platformer',
      { font: '50px Arial', fill: '#fff'});

    var startLabel = game.add.text(80, 180, 'Press the "W" key to start level 1 or "V" to start level 2',
      { font: '25px Arial', fill: '#fff'});

    wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);
    vkey = game.input.keyboard.addKey(Phaser.Keyboard.V);

    wkey.onDown.addOnce(this.level1, this);
    vkey.onDown.addOnce(this.level2, this);

  },

  level1: function() {
    vkey.onDown.removeAll();
    game.state.start('level1');

  }, 

  level2: function() {
    wkey.onDown.removeAll();
    game.state.start('level2');
  },   

     
};