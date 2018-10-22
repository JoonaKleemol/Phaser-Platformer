var menuState = {

  create: function() {

    var background = game.add.image(0, 0, 'background');
    background.scale.setTo(0.45, 0.445);

    var nameLabel = game.add.text(300, 30, 'Platformer',
      { font: '50px Arial', fill: '#fff'});
    
    var lvl1img = this.add.image(40, 120, 'level1bg');
    lvl1img.scale.setTo(0.13, 0.13);
    lvl1img.alpha = 0.95;
    lvl1img.inputEnabled = true;
    lvl1img.events.onInputDown.add(this.level1, this);

    var lvl2img = this.add.image(320, 120, 'level2bg');
    lvl2img.scale.setTo(0.13, 0.13);
    lvl2img.alpha = 0.95;
    lvl2img.inputEnabled = true;
    lvl2img.events.onInputDown.add(this.level2, this);

    var lvl3img = this.add.image(600, 120, 'level3bg');
    lvl3img.scale.setTo(0.13, 0.13);  
    lvl3img.alpha = 0.95;
    lvl3img.inputEnabled = true;
    lvl3img.events.onInputDown.add(this.level3, this);      


    var instructionsLabel = game.add.text(10, 280, 'Instructions: use arrows to move, double tap up for double jump, space for dash, and p for pause',
      { font: '15px Arial', fill: '#fff'});
    var instructions2Label = game.add.text(10, 305, 'This is a speedrun game, so pause doesnt stop the timer',
      { font: '10px Arial', fill: '#fff'});    




  },

  level1: function() {
    game.state.start('level1');
  }, 

  level2: function() {
    game.state.start('level2');
  },

  level3: function() {
    game.state.start('level3');
  },     

     
};