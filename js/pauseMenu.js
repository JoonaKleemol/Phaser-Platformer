var pauseState = {

  create: function() {

    var nameLabel = game.add.text(80, 80, 'Platformer',
      { font: '50px Arial', fill: '#fff'});

    var startLabel = game.add.text(80, 180, 'Press the "R" key to restart current level',
      { font: '25px Arial', fill: '#fff'});

    var backToMenuLabel = game.add.text(80, 280, 'Press the "M" key to go to main menu',
      { font: '25px Arial', fill: '#fff'});

    mkey = game.input.keyboard.addKey(Phaser.Keyboard.M);
    
    mkey.onDown.addOnce(this.menu, this);
  },

  restartLevel1: function() {
    mkey.onDown.removeAll();
    game.state.start('level1');
  },

  restartLevel2: function() {
    mkey.onDown.removeAll();
    game.state.start('level2');
  },

  menu: function() {
    rkey.onDown.removeAll();
    pause.onDown.removeAll();
    game.state.start('menu');
  },   
};