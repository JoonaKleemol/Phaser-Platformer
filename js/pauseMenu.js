var pauseState = {

  create: function() {

    var nameLabel = game.add.text(80, 80, 'Platformer',
      { font: '50px Arial', fill: '#fff'});

    var startLabel = game.add.text(80, 180, 'Press the "R" key to restart current level',
      { font: '25px Arial', fill: '#fff'});

    var backToMenuLabel = game.add.text(80, 280, 'Press the "M" key to go to main menu',
      { font: '25px Arial', fill: '#fff'});

    rkey = game.input.keyboard.addKey(Phaser.Keyboard.R);
    vkey = game.input.keyboard.addKey(Phaser.Keyboard.V);
    mkey = game.input.keyboard.addKey(Phaser.Keyboard.M);
  
    rkey.onDown.addOnce(this.level1, this);
    vkey.onDown.addOnce(this.level2, this);
    mkey.onDown.addOnce(this.menu, this);
  },

  level1: function() {
    vkey.onDown.remove(this.level2, this);
    mkey.onDown.remove(this.menu, this);
    game.state.start('level1');
  },

  level2: function() {
    rkey.onDown.remove(this.level1, this);
    mkey.onDown.remove(this.menu, this);
    game.state.start('level2');
  },   

  menu: function() {
    rkey.onDown.remove(this.level1, this);
    vkey.onDown.remove(this.level2, this);
    game.state.start('menu');
  },   
};