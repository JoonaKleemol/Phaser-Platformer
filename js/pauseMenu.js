var pauseState = {

  create: function() {

    var nameLabel = game.add.text(310, 40, 'Pause',
      { font: '50px Arial', fill: '#fff'});

    var startLabel = game.add.text(110, 180, 'Press the "R" key to restart current level',
      { font: '30px Arial', fill: '#fff'});

    var backToMenuLabel = game.add.text(185, 280, 'Press the "M" key to go back to main menu',
      { font: '20px Arial', fill: '#fff'});

    mKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
    
    mKey.onDown.addOnce(this.menu, this);
  },

  restartLevel1: function() {
    mKey.onDown.removeAll();
    game.state.start('level1');
  },

  restartLevel2: function() {
    mKey.onDown.removeAll();
    game.state.start('level2');
  },

  restartLevel3: function() {
    mKey.onDown.removeAll();
    game.state.start('level3');
  },  

  menu: function() {
    rKey.onDown.removeAll();
    pause.onDown.removeAll();
    game.state.start('menu');
  },   
};