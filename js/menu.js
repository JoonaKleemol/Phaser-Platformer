var menuState = {

  create: function() {

    var background = game.add.image(0, 0, 'background')
    background.scale.setTo(0.45, 0.445);

    var nameLabel = game.add.text(300, 30, 'Platformer',
      { font: '50px Arial', fill: '#fff'});
    
    var startLabel = game.add.text(120, 180, 'Press the "A" key to start level 1 or "S" to start level 2',
      { font: '25px Arial', fill: '#fff'});

    aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);

    aKey.onDown.addOnce(this.level1, this);
    sKey.onDown.addOnce(this.level2, this);

  },

  level1: function() {
    sKey.onDown.removeAll();
    game.state.start('level1');

  }, 

  level2: function() {
    aKey.onDown.removeAll();
    game.state.start('level2');
  },   

     
};