var menuState = {

  create: function() {

    var background = game.add.image(0, 0, 'background')
    background.scale.setTo(0.45, 0.445);

    var nameLabel = game.add.text(300, 30, 'Platformer',
      { font: '50px Arial', fill: '#fff'});
    
    var startLabel = game.add.text(120, 180, 'Press "A" for level 1, "S" for level 2 or "D" for level 3',
      { font: '25px Arial', fill: '#fff'});
    var instructionsLabel = game.add.text(10, 280, 'Instructions: use arrows to move, double tap up for double jump, space for dash, and p for pause',
      { font: '15px Arial', fill: '#fff'});
    var instructions2Label = game.add.text(10, 305, 'This is a speedrun game, so pause doesnt stop the timer',
      { font: '10px Arial', fill: '#fff'});    
    aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    sKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);

    aKey.onDown.addOnce(this.level1, this);
    sKey.onDown.addOnce(this.level2, this);
    dKey.onDown.addOnce(this.level3, this);

  },

  level1: function() {
    sKey.onDown.removeAll();
    dKey.onDown.removeAll();
    game.state.start('level1');
  }, 

  level2: function() {
    aKey.onDown.removeAll();
    dKey.onDown.removeAll();
    game.state.start('level2');
  },

  level3: function() {
    aKey.onDown.removeAll();
    sKey.onDown.removeAll();
    game.state.start('level3');
  },     

     
};